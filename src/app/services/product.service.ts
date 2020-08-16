import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import{Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import{Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product>;


  constructor(public db: AngularFirestore) {
    // this.products = this.db.collection('products').valueChanges();
    this.productsCollection = this.db.collection('products');
    this.products = this.productsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
         return data;
      });
    }));
  }

  getCantidadAcumulada(){
    //return this.CantidadAcumulada;
  }
//obtiene los productos
  getProducts() {
    return this.products;
  }
//agrega productos
  addProduct(product: Product) {
    this.productsCollection.add(product);
  }
//borra los productos
  deleteProduct(product: Product) {
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.delete();
  }
//no lo uso pero sirve para actializar los datos
  updateProduct(product: Product) {
    this.productDoc = this.db.doc(`products/${product.id}`);
    this.productDoc.update(product);
  }
}
