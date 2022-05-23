import { Injectable } from '@angular/core';
import { Producto } from '../modelos/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: Producto[] = [];

  constructor() { 
  }

  public añadirProductoAlCarrito(producto: Producto): void {
    this.carrito.push(producto);
  }

  public retirarProductoDelCarrito(producto: Producto): void {
    // Buscamos producto en el array
    for(let i = 0; i < this.carrito.length; i++) {
      if(producto.idProducto === this.carrito[i]['idProducto']){
        // eliminamos ese producto en la posicion i, 1 elemento
        this.carrito.splice(i, 1);
      }
    }
  }

  public borrarCarrito(): void {
    this.carrito = [];
  }

  public getCarrito(): Producto[] {
    return this.carrito;
  }

  // IMPLEMENTAR CARRITO CON Rxjs

}
