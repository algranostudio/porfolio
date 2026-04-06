import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ MatAccordion,
             MatExpansionModule,
             MatFormFieldModule,
             MatIconModule,
             MatDatepickerModule,
             MatButtonModule,
             MatInputModule,
             MatNativeDateModule,
             RouterModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  //accordion = viewChild.required(MatAccordion);
   @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('cursor') cursorRef!: ElementRef<HTMLDivElement>;

  currentSlide = 0;

  testimonials = [
    {
      text: 'El nuevo panel se ve mucho mejor y es mucho más fácil encontrar lo que necesito. Ahora puedo dedicar menos tiempo a tareas administrativas y más tiempo con las actividades de mis alumnos.',
      avatar: '/images/avatar/avatar_rex_academy.png',
      avatarAlt: 'Logo REX Academy',
      role: 'CS Teacher',
      company: 'REX Academy'
    },
    {
      text: 'La nueva experiencia digital hizo que nuestra marca se sintiera más cercana y humana. Ahora podemos comunicar información compleja de una forma sencilla y visualmente atractiva, mejorando la percepción y la relación con nuestros clientes.',
      avatar: '/images/avatar/avatar_nikko_1.png',
      avatarAlt: 'Logo Nikko AM',
      role: 'Equipo de Marketing',
      company: 'Nikko AM'
    },
    {
      text: 'El nuevo diseño del menú cambió por completo la experiencia. Los clientes entienden todo de un vistazo, eligen con más confianza y los camareros trabajan con más calma y rapidez.',
      avatar: '/images/avatar/avatar_pan_de_queso.png',
      avatarAlt: 'La Casa Pan de Queso',
      role: 'Ademir, Propietario',
      company: 'La Casa del Pan de Queso'
    },
    {
      text: 'Pensaba que nuestro sitio funcionaba bien… hasta que Al Grano nos mostró todo lo que estábamos pasando por alto. Ahora sentimos que todo fluye mejor, y eso se nota en el negocio.',
      avatar: '/images/avatar/avatar_Yulia_1.png',
      avatarAlt: 'Yulia',
      role: 'Yulia, Propietaria',
      company: 'Baby Boom NSK'
    }
  ];

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  }

  ngAfterViewInit(): void {
    const container = this.scrollContainer.nativeElement;

    // Permite usar scroll horizontal con la rueda del mouse o touchpad
    container.addEventListener('wheel', (event: WheelEvent) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    });
  }

  /** Cursor y desplazamiento por posición del mouse */
  onMouseMove(event: MouseEvent): void {
    const container = this.scrollContainer.nativeElement;
    const cursor = this.cursorRef.nativeElement;

    // Posición del cursor personalizado
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;

    // Desplazamiento horizontal al mover el mouse
    const bounds = container.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const scrollPos = (relativeX / container.clientWidth) * scrollWidth;
    container.scrollTo({ left: scrollPos, behavior: 'smooth' });
  }

  /** Mostrar/ocultar el cursor */
  showCursor(): void {
    this.cursorRef.nativeElement.style.opacity = '1';
  }

  hideCursor(): void {
    this.cursorRef.nativeElement.style.opacity = '0';
  }

  /** Scroll con flechas */
  scroll(direction: 'left' | 'right'): void {
    const container = this.scrollContainer.nativeElement;
    const amount = 400; // desplazamiento en píxeles
    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    });
  }


}
