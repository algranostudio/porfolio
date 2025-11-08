import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { MatDividerModule } from '@angular/material/divider';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-project-education',
  imports: [ Navbar,
             MatDividerModule,
             Footer
  ],
  templateUrl: './project-education.html',
  styleUrl: './project-education.scss'
})
export class ProjectEducation {

}
