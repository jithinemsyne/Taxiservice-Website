import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactSliderComponent } from '../contact-slider/contact-slider.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,ContactSliderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
