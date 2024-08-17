import { Component } from '@angular/core';
import { BookCategory } from '../../../../types/BookCategory';
import { AdminService } from '../../../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { AppConstants } from '../../../../types/AppConstants';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule,SidebarComponent,HeaderComponent,CommonModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private adminService : AdminService) {
    this.fetchCategoryList();
  }

  newCategoryName : string = '';
  isBtnDisabled : boolean = false;
  btnContent : string = 'Save category';
  categoryList : BookCategory[] = [];
  errorMsg: string = '';

  saveBookCategory() : void {
    if(this.newCategoryName.trim() === '') {
        return;
    }
    this.isBtnDisabled = true;
    this.btnContent = AppConstants.BTN_CONTENT;
    let category = new BookCategory();
    category.categoryName = this.newCategoryName;
    this.adminService.callAddCategoryApi(category).subscribe({
      next: response => {
        this.isBtnDisabled = false;
        this.btnContent = 'Save category';
        this.errorMsg = '';
        this.fetchCategoryList();
      },
      error: errorResp => {
        this.isBtnDisabled = false;
        this.btnContent = 'Save category';
        this.errorMsg = errorResp.error.errorMessage;
        console.log(errorResp);
      }
    });
  }

  fetchCategoryList() : void  {
    this.adminService.callFetchBookCategoriesApi().subscribe({
      next: response => {
        this.categoryList = response;
      },
      error: errResp => {
        console.log(errResp);
      }
    });
  }

}
