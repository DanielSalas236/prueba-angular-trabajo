import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ObjectBook } from 'src/app/Model/bookDomain/objectBook';
import { BookService } from 'src/app/Service/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  libro: ObjectBook = {} as ObjectBook;
  createBookForm = this.fb.group({
    nombre: [null, [
      Validators.required,
    ]],
    autor: [null, [
      Validators.required,
    ]],
    fecha: [null, [
      Validators.required,
    ]],
    valor: [null, [
      Validators.required,
    ]],
    estado: [false, [
      Validators.required,
    ]],
  });

  constructor(private bookService: BookService, private fb: FormBuilder) { }

  get nombre(): AbstractControl {
    return this.createBookForm.get('nombre');
  }

  get autor(): AbstractControl {
    return this.createBookForm.get('autor');
  }

  get fecha(): AbstractControl {
    return this.createBookForm.get('fecha');
  }

  get valor(): AbstractControl {
    return this.createBookForm.get('valor');
  }

  get estado(): AbstractControl {
    return this.createBookForm.get('estado');
  }

  ngOnInit(): void {
  }

  crear() {
    if(this.createBookForm.valid){
      const book: ObjectBook = {
        author: this.autor.value,
        available: this.estado.value,
        name: this.nombre.value,
        price: this.valor.value,
        publicationDate: this.fecha.value,
      };
      console.log(book);

      this.bookService.crearLibro(book).subscribe((response) => {
        console.log(response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.message,
          showConfirmButton: false,
          timer: 1500
        })
      });

    }
  }

}
