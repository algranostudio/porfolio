import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Footer } from '../../footer/footer';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-project-hospitality',
  imports: [ Navbar,
             Footer,
             MatDivider
  ],
  templateUrl: './project-hospitality.html',
  styleUrl: './project-hospitality.scss'
})
export class ProjectHospitality {

}
