import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [ RouterLink,
             MatIconModule
  ],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects implements AfterViewInit {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('cursor') cursorRef!: ElementRef<HTMLDivElement>;

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