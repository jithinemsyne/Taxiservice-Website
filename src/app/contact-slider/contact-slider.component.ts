import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact-slider',
  standalone: true,
  imports: [],
  templateUrl: './contact-slider.component.html',
  styleUrl: './contact-slider.component.css'
})
export class ContactSliderComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // Ensure jQuery is available
    this.initializeCarousel();
  }

  initializeCarousel(): void {
    // TypeScript code using jQuery with proper typing
    const $: any = (window as any).jQuery; // Assumes jQuery is loaded globally

    // 'Next' button functionality
    $('.next').click(function () {
      $('.carousel').carousel('next');
      return false;
    });

    // 'Previous' button functionality
    $('.prev').click(function () {
      $('.carousel').carousel('prev');
      return false;
    });

    // Initialize carousel with interval
    $('.carousel').carousel({
      interval: 5100
    });
  }
}
