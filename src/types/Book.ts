import { BookAuthor } from "./BookAuthor";
import { LmsDate } from "./LmsDate";

export class Book {
    bookId: number = 0;
    bookAuthors: BookAuthor[] = [];
    isbn: string = '';
    bookTitle: string = '';
    noOfPages: number = 0;
    bookDescription: string = '';
    isAvailable: boolean = false;
    noOfAvailableCopies: number = 0;
    categoryId: number = 0;
    bookPrice: string = '';
    publishedDate: LmsDate = new LmsDate();
    bookCategory: string = '';
}