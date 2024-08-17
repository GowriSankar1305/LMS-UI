import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../types/ApiResponse';
import { Book } from '../types/Book';
import { BookCategory } from '../types/BookCategory';
import { MembershipType } from '../types/MembershipType';
import { Member } from '../types/Member';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }
  private hostUrl = 'http://localhost:9898/admin/';

  callAddBookApi(requestPayload: Book) : Observable<ApiResponse>  {
    return this.httpClient.post<ApiResponse>(this.hostUrl + 'books/addBook',requestPayload);
  }

  callFetchBookCategoriesApi() : Observable<BookCategory[]> {
    return this.httpClient.post<BookCategory[]>(this.hostUrl + 'book/categories/find',null);
  }

  callAddCategoryApi(bookCategory: BookCategory) : Observable<ApiResponse>  {
    return this.httpClient.post<ApiResponse>(this.hostUrl + 'book/category/add',bookCategory);
  }
  
  callCreatemembershipTypeApi(mbspType : MembershipType) : Observable<ApiResponse>  {
    return this.httpClient.post<ApiResponse>(this.hostUrl + 'library/membershipType',mbspType);
  }

  callfetchMembershipTypesApi() : Observable<MembershipType[]> {
    return this.httpClient.post<MembershipType[]>(this.hostUrl + 'library/membershipTypes',null);
  }

  callFetchBooksApi() : Observable<Book[]>  {
    return this.httpClient.post<Book[]>(this.hostUrl + 'books/findAll', null);
  }
  
  findBookById(id: number) : Observable<Book> {
    return this.httpClient.post<Book>(this.hostUrl + 'books/find?bookId='+id,null);
  }

  callAddMemberApi(member : Member)  : Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>(this.hostUrl + 'library/member/add',member);
  }
}
