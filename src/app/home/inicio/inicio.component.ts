import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { QuienesSomosComponent } from '../quienes-somos/quienes-somos.component';
import { NuestrosProductosComponent } from '../nuestros-productos/nuestros-productos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CarouselComponent,QuienesSomosComponent,NuestrosProductosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent {

}
