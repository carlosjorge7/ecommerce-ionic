import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/Producto';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-tienda',
  templateUrl: 'tienda.page.html',
  styleUrls: ['tienda.page.scss']
})
export class TiendaPage implements OnInit {

  productos: Producto[] = [];

  textoBuscar = '';

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
      this.list();
  }

  buscarProducto(event) {
    const valor = event.target.value;
    this.textoBuscar = valor;
  }

  public list() {
    this.productosService.getProductos().subscribe(res => {
      this.productos = res;
    })
  }

  public view(producto: Producto) {

  }

}
