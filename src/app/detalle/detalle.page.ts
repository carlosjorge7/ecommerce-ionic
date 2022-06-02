import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../modelos/Producto';
import { CarritoService } from '../servicios/carrito.service';
import { ProductosService } from '../servicios/productos.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  idProducto: number = 0;

  cantidad: number = 1;
  total: number = 0;

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
              public toastController: ToastController,
              private router: Router,
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
      // Seteo de variables
      this.total = this.producto.precio;
    });
  }

  async presentToast(res: string) {
    const toast = await this.toastController.create({
      message: res,
      duration: 2000
    });
    toast.present();
  }

  addItem(): void {
    if(this.cantidad > 0) {
      this.cantidad++;
      this.total = this.producto.precio * this.cantidad;
    }
  }

  restItem(): void {
    if(this.cantidad > 1){
      this.cantidad--;
      this.total = this.producto.precio * this.cantidad;
    }
  }

  public addCart(id: number, cantidad: number): void {
    // this.carritoService.añadirProductoAlCarrito(producto);
    // this.router.navigate(['/tabs/tienda']);
    // this.presentToast('Producto añadido al carrito');
    let producto = {
      'idProducto': id,
      'imagen': this.producto.imagen,
      'nombre': this.producto.nombre,
      'precio': this.producto.precio,
      'cantidad': cantidad,
    }
    console.log(producto);
    this.carritoService.añadirProductoAlCarrito(producto);
    this.router.navigate(['/tabs/tienda']);
    this.presentToast('Producto añadido al carrito');
  }

}
