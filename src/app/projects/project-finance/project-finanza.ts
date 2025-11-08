import { Component } from '@angular/core';
import { Footer } from '../../footer/footer';
import { Navbar } from '../../navbar/navbar';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-project-finance',
  imports: [Navbar, 
            Footer,
            MatDivider
  ],
  templateUrl: './project-finance.html',
  styleUrl: './project-finance.scss'
})
export class ProjectFinance {

}
