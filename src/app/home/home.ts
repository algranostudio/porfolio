import { Component, viewChild } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { Projects } from '../projects/projects';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';
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
             Projects,
             Footer,
             Navbar,
             RouterModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  //accordion = viewChild.required(MatAccordion);
}
