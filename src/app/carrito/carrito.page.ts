import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/Producto';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: 'carrito.page.html',
  styleUrls: ['carrito.page.scss']
})
export class CarritoPage implements OnInit {

  productos: Producto[];

  constructor(private carritoSerice: CarritoService) {}

  ngOnInit(): void {
    this.productos = this.carritoSerice.getCarrito();
 
  }

  public removeProducto(producto: Producto) {
    this.carritoSerice.retirarProductoDelCarrito(producto);
    this.productos = this.carritoSerice.getCarrito();
  }

  public removeCarrito(): void {
    this.carritoSerice.borrarCarrito();
    this.productos = this.carritoSerice.getCarrito();
  }

  public calcularTotal(): number {
    let total = 0;
    let productos: Producto[] = this.carritoSerice.getCarrito();
    for(let i = 0; i < productos.length; i++) {
      total += productos[i].precio * productos[i].stock;
    }
    return total;
  }

  



}
