import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  //selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent {
  name = signal('Superman');
  age = signal(45);

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set('Spiderman');
  }

  changeAge() {
    this.age.set(25);
  }

  resetHero() {
    this.name.set('Superman');
    this.age.set(45);
  }
  
}
