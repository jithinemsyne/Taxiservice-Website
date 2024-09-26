import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { SliderComponent } from './slider/slider.component';
import { ContactSliderComponent } from './contact-slider/contact-slider.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'header',
        component:NavbarComponent
    },
    {
        path:'footer',
        component:FooterComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'service',
        component:ServicesComponent
    },
    {
        path:'slider',
        component:SliderComponent
    },
    {
        path:'contact-slider',
        component:ContactSliderComponent
    },
    
    
];
