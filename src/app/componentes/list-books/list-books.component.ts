import { Component, OnInit } from '@angular/core';
import { ObjectBook } from 'src/app/Model/bookDomain/objectBook';
import { ObjectResponse } from 'src/app/Model/objectResponse';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  listaLibros: Array<ObjectBook> = [] as Array<ObjectBook>;
  res: ObjectResponse = {} as ObjectResponse;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.listarLibros();
  }

  listarLibros(){
    this.bookService.listarLibros().subscribe((response) => {
      this.listaLibros = JSON.parse(JSON.stringify(response.value));
    });
  }

}
