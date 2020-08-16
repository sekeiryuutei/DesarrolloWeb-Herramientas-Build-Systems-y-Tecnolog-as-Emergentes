import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CarritoComprasService } from '../../services/carrito-compras.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  editing: boolean = false;
  editingProduct: Product;

  CantidadCarrito: number = 0;
  buscar = [];
  filterPost = '';
  @Output() eventEmitNavBar = new EventEmitter<number>();


  constructor(public productService: ProductService, public CarritoComprasService: CarritoComprasService) {

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
    });

  }

  ngOnInit() {
    this.buscar = this.products;

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

  searchProduct(search: string) {
    /*var objetoDelArreglo;
    objetoDelArreglo = this.products.filter((item: any) => new RegExp(search, 'i').test(item.Nombre));
    console.log("Lo que encontre: " + JSON.stringify(objetoDelArreglo[0].Nombre));*/
    //console.log("prdocutos: "+ JSON.stringify(this.products));
    //this.products = this.buscar;


  }

  NotificacionCarrito(Cantidad: number, id: string) {
    // this.CantidadCarrito = Cantidad  + this.CantidadCarrito ;
    this.CantidadCarrito = Number(Cantidad) + Number(this.CantidadCarrito);
    this.eventEmitNavBar.emit(this.CantidadCarrito);
    //busca el id en los arreglos y devuelve la url local    
    var objetoDelArreglo = this.products.filter((item: any) => item.id == id);

    var product = objetoDelArreglo[0];
    var products = JSON.parse(localStorage.getItem("carrito"));
    var nuevoProduct = product;

    if (products) {
      var agregado = false;
      products.forEach((item: any) => {
        if (item.Nombre === product.Nombre) {
          item.CantidadAcumulada += Number(Cantidad);
          agregado = true;
        }
      })
      if (!agregado) {
        nuevoProduct.CantidadAcumulada = Number(Cantidad);
        products.push(nuevoProduct);
      }
    } else {
      nuevoProduct.CantidadAcumulada = Number(Cantidad);
      products = [nuevoProduct];
    }

    localStorage.setItem("carrito", JSON.stringify(products));
  }

}