import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { QuienesSomosComponent } from './home/quienes-somos/quienes-somos.component';
import { NuestrosProductosComponent } from './home/nuestros-productos/nuestros-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    QuienesSomosComponent,
    NuestrosProductosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lider-trofeos';
}
