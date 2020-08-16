import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';


import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  products = [];
  editing: boolean = false;
  editingProduct: Product;
  route: string;
  currentURL = '';
  image='';
  nombre='';
  objetoDelArreglo =[];

  constructor(public productService: ProductService) {
    this.currentURL = window.location.href;
  }

  ngOnInit() {
    console.log("esta deberia ser la url: " + this.currentURL.substring(31));
    this.productService.getProducts().subscribe(products => {
      //organiza los datos antes de enviarlos a html
      products.sort(function (o1, o2) {
        if (o1["Nombre"] > o2["Nombre"]) { //comparación lexicogŕafica
          return 1;
        } else if (o1["Nombre"] < o2["Nombre"]) {
          return -1;
        }
        return 0;
      });
      this.products = products;
      console.log(products);
      //busca el id en los arreglos y devuelve la url local
       this.objetoDelArreglo = products.filter((item:any)=> item.id ==  this.currentURL.substring(31) );
      this.nombre=this.objetoDelArreglo[0].name;
      this.image=this.objetoDelArreglo[0].foto;
      
      console.log ("Arreglo Seleccionado: "+JSON.stringify(this.objetoDelArreglo[0]) +" url:  " + this.image + "   nombre:   " + this.nombre);
//Wilfan Salas
      
    });
console.log("Productos: ", this.products);


  }

  deleteProduct(event, product) {
    this.productService.deleteProduct(product);
  }

  editProduct(event, product) {
    this.editing = !this.editing;
    this.editingProduct = product;
  }

  updateProduct() {
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }

  buscar() {

  }





}
