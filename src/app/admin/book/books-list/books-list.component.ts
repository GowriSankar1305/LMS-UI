import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { AdminService } from '../../../../services/admin.service';
import { Book } from '../../../../types/Book';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,CommonModule],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {

  constructor(private adminService: AdminService,private router : Router) {
    this.fetchBooksInLibrary();
  }
  
  booksList : Book[] = [];

  fetchBooksInLibrary() {
    this.adminService.callFetchBooksApi().subscribe({
      next: response => {
        this.booksList = response;
      },
      error: errResp => {
        console.log(errResp);
      }
    });
  }

  sendBookId(bookId : number) : void {
    this.router.navigate(['/admin/viewBook',{bookData : bookId}]);
    console.log('xxxxxxxxxxxxxxxxxxxxxxx ',bookId);
  }

}
