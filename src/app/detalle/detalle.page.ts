import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../modelos/Producto';
import { CarritoService } from '../servicios/carrito.service';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  idProducto: number = 0;

  producto: Producto = {
    idProducto: 0,
    sku: '',
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    imagen: '',
    idCategoria: 0
  }

  constructor(private activatedRoute: ActivatedRoute, 
              private productosService: ProductosService,
              private carritoService: CarritoService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.idProducto = Number(params.idProducto);
    
    console.log(this.idProducto);
    this.detalleProducto(this.idProducto);
  }

  public detalleProducto(idProducto: number){
     this.productosService.getProducto(idProducto).subscribe((res: Producto) => {
      this.producto = res;
    });
  }

  public anadirProducto(producto: Producto): void {
    this.carritoService.añadirProductoAlCarrito(producto);
  }

}
