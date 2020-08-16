import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CarritoComprasService } from '../../services/carrito-compras.service';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  products = [];
  editing: boolean = false;
  editingProduct: Product;
  //ProductosCarrito = CarritoComprasService;
  total=0;
  constructor(public productService: ProductService, public ProductosCarrito: CarritoComprasService) {

    this.products = JSON.parse(localStorage.getItem("carrito"));
    console.log("Lo que contienes del servicio que trae lo que el usuario eligio ");
    console.log(this.products);
    for (let index = 0; index < this.products.length; index++) {

      const element = Number(this.products[index].CantidadAcumulada) * Number(this.products[index].Precio);
      this.total +=Number(element) ;
      console.log(JSON.stringify(element));
      console.log(JSON.stringify(this.total));
    }
  }

  ngOnInit(): void {
  }
  updateProduct() {
    this.productService.updateProduct(this.editingProduct);
    this.editingProduct = {} as Product;
    this.editing = false;
  }
  Pagar() {
    this.products=[];
  }

}
