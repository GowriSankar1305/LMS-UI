import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../../../types/Book';
import { BookAuthor } from '../../../../types/BookAuthor';
import { BookCategory } from '../../../../types/BookCategory';
import { LmsDate } from '../../../../types/LmsDate';
import { AdminService } from '../../../../services/admin.service';
import { AuthService } from '../../../../services/auth.service';
import Swal from 'sweetalert2';
import { AppConstants } from '../../../../types/AppConstants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,CommonModule,FormsModule],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css'
})
export class ViewBookComponent implements OnInit {

  addBook: Book = new Book();
  authors: BookAuthor[] = [];
  years: number[] = [];
  months: string[] = [];
  days: number[] = [];
  categories: BookCategory[] = [];
  publishedDate: LmsDate = this.addBook.publishedDate;

  newCategoryName: string = '';
  bookId : number = 0;
  searchBtnDisabled :  boolean = false;
  searchBtnContent : string = 'Find book';
  updateBtnDisabled : boolean = false;
  updateBtnContent : string = 'Update book details';
  errorMsg = '';
  successMsg = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookId = params['bookData'];
      this.findBookDetails();
    });
  }

  constructor(private adminService: AdminService,
    private authService: AuthService,
    private route : ActivatedRoute) {
    this.fetchYearsAndMonths();
    this.fetchBookCategories();
  }

  fetchBookCategories() : void {
    this.adminService.callFetchBookCategoriesApi().subscribe({
      next: response => {
        this.categories = response;
      },
      error: errResp => {
        console.error(errResp);
      }
    });
  }

  fetchYearsAndMonths() : void {
    this.authService.callTimelineApi().subscribe({
      next: response => {
        this.years = response.years;
        this.months = response.months;
      },
      error: errResp => {
        console.log(errResp);
      }
    });
  }

  fetchDays() {
    let mnth = this.publishedDate.month;
    if (mnth > 0) {
      this.authService.callfetchDaysApi(mnth).subscribe({
        next: sucessResp => {
          this.days = this.days.concat(sucessResp.days);
        },
        error: errResp => {
          console.error(errResp);
        }
      });
    }
  }

  appendAuthorForm() : void {
    this.authors.push(new BookAuthor());
  }

  removeAuthor(index: number) : void {
    this.authors.splice(index,1);
  }

  findBookDetails() : void  {
    console.log(this.bookId);
    if(this.bookId > 0) {
      this.searchBtnContent = AppConstants.BTN_CONTENT;
      this.searchBtnDisabled = true;
      this.adminService.findBookById(this.bookId).subscribe({
        next : response => {
          this.addBook = response;
          this.publishedDate = response.publishedDate;
          this.authors = response.bookAuthors;
          this.searchBtnContent = 'Find book';
          this.searchBtnDisabled = false;
        },
        error : errResp => {
          console.log(errResp);
          this.searchBtnContent = 'Find book';
          this.searchBtnDisabled = false;
        }
      });
    }
    else  {
      Swal.fire({
        icon : 'warning',
        confirmButtonText: 'OK',
        title: 'Invalid book id'
      })
    }
    
  }

  updateBookDetails() : void  {

  }
}
