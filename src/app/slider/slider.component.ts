import { Component , AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit{
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
