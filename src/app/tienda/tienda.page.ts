import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Producto } from '../modelos/Producto';
import { CarritoService } from '../servicios/carrito.service';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-tienda',
  templateUrl: 'tienda.page.html',
  styleUrls: ['tienda.page.scss']
})
export class TiendaPage implements OnInit {

  productos: Producto[] = [];

  textoBuscar = '';

  constructor(private productosService: ProductosService,
              private carritoService: CarritoService,
              private router: Router,
              private toastController: ToastController) {}

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
    });
  }

  public anadirProducto(producto: Producto): void {
    // this.carritoService.añadirProductoAlCarrito(producto);
    // this.router.navigate(['/tabs/tienda']);
    // this.presentToast('Producto añadido al carrito');
  }

  async presentToast(res: string) {
    const toast = await this.toastController.create({
      message: res,
      duration: 2000
    });
    toast.present();
  }

}
