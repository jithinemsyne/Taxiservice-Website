import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SliderComponent } from '../slider/slider.component';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,SliderComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  private testim!: HTMLElement;
  private testimDots!: HTMLElement[];
  private testimContent!: HTMLElement[];
  private testimLeftArrow!: HTMLElement;
  private testimRightArrow!: HTMLElement;
  private testimSpeed: number = 4500;
  private currentSlide: number = 0;
  private currentActive: number = 0;
  private testimTimer?: number;
  private touchStartPos?: number;
  private touchEndPos?: number;
  private touchPosDiff?: number;
  private readonly ignoreTouch: number = 30;

  ngAfterViewInit() {
    this.initializeSlider();
  }

  private initializeSlider() {
    this.testim = document.getElementById("testim") as HTMLElement;
    this.testimDots = Array.from(document.getElementById("testim-dots")!.children) as HTMLElement[];
    this.testimContent = Array.from(document.getElementById("testim-content")!.children) as HTMLElement[];
    this.testimLeftArrow = document.getElementById("left-arrow") as HTMLElement;
    this.testimRightArrow = document.getElementById("right-arrow") as HTMLElement;

    this.playSlide(this.currentSlide);

    this.testimLeftArrow.addEventListener("click", () => this.playSlide(this.currentSlide -= 1));
    this.testimRightArrow.addEventListener("click", () => this.playSlide(this.currentSlide += 1));

    this.testimDots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.playSlide(this.currentSlide = index));
    });

    document.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        this.testimLeftArrow.click();
      } else if (e.key === "ArrowRight") {
        this.testimRightArrow.click();
      }
    });

    this.testim.addEventListener("touchstart", (e: TouchEvent) => {
      this.touchStartPos = e.changedTouches[0].clientX;
    });

    this.testim.addEventListener("touchend", (e: TouchEvent) => {
      this.touchEndPos = e.changedTouches[0].clientX;
      this.touchPosDiff = this.touchStartPos! - this.touchEndPos!;

      if (this.touchPosDiff > this.ignoreTouch) {
        this.testimRightArrow.click();
      } else if (this.touchPosDiff < -this.ignoreTouch) {
        this.testimLeftArrow.click();
      }
    });
  }

  private playSlide(slide: number) {
    this.testimContent.forEach((content, index) => {
      content.classList.remove("active", "inactive");
      this.testimDots[index].classList.remove("active");
    });

    if (slide < 0) {
      slide = this.currentSlide = this.testimContent.length - 1;
    }

    if (slide > this.testimContent.length - 1) {
      slide = this.currentSlide = 0;
    }

    if (this.currentActive !== this.currentSlide) {
      this.testimContent[this.currentActive].classList.add("inactive");
    }
    this.testimContent[slide].classList.add("active");
    this.testimDots[slide].classList.add("active");

    this.currentActive = this.currentSlide;

    if (this.testimTimer) {
      clearTimeout(this.testimTimer);
    }
    this.testimTimer = window.setTimeout(() => {
      this.playSlide(this.currentSlide += 1);
    }, this.testimSpeed);
  }
}
