import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-legal',
  imports: [ MatDivider ],
  templateUrl: './legal.html',
  styleUrl: './legal.scss'
})
export class Legal {

}
