import { Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
  styles: ``
})
export class DragonballPageComponent {
  name = signal('Gohan');
  power = signal(700);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku...', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Krilin....', power: 8000 },
    { id: 4, name: 'Piccolo', power: 7000 },
    { id: 6, name: 'Trunks...', power: 600 },    
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger' : true
    }
  })

  addCharacter() {
    if(!this.name() || !this.power() || this.power() < 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update(current => [...current, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
