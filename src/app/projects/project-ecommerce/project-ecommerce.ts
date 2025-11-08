import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Footer } from '../../footer/footer';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-project-ecommerce',
  imports: [ Navbar,
             Footer,
             MatDivider
  ],
  templateUrl: './project-ecommerce.html',
  styleUrl: './project-ecommerce.scss'
})
export class ProjectEcommerce {

}
