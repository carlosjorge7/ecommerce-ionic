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
    this.productos = this.carritoSerice.estadoDelCarrito();
    console.log(this.productos)
  }



}
