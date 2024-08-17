import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Book } from '../../../../types/Book';
import { BookAuthor } from '../../../../types/BookAuthor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../../services/admin.service';
import { AuthService } from '../../../../services/auth.service';
import { BookCategory } from '../../../../types/BookCategory';
import { AppConstants } from '../../../../types/AppConstants';
import { LmsDate } from '../../../../types/LmsDate';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [HeaderComponent,SidebarComponent,CommonModule,FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
 
  addBook: Book = new Book();
  authors: BookAuthor[] = [];
  years: number[] = [];
  months: string[] = [];
  days: number[] = [];
  categories: BookCategory[] = [];
  publishedDate: LmsDate = this.addBook.publishedDate;

  newCategoryName: string = '';
  btnDisabled = false;
  btnContent = 'Add book';
  errorMsg = '';
  successMsg = '';

  constructor(private adminService: AdminService,private authService: AuthService) {
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

  addBookToLibrary() {
    this.btnDisabled = true;
    this.btnContent = AppConstants.BTN_CONTENT;
    this.addBook.bookAuthors = this.authors;
    this.adminService.callAddBookApi(this.addBook).subscribe({
      next: successResponse => {
        console.log(successResponse);
        this.successMsg = successResponse.message;
        this.btnDisabled = false;
        this.btnContent = 'Add book';
        this.addBook = new Book();
        this.authors = [];
        this.publishedDate = new LmsDate();
      },
      error: errorResponse => {
        this.btnDisabled = false;
        this.btnContent = 'Add book';
        this.errorMsg = errorResponse.error.errors;
        Swal.fire({
          title: 'Errors found',
          text: errorResponse.error.errors,
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    });
  }
}
