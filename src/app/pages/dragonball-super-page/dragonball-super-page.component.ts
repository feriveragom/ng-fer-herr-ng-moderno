import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballCharacterAddComponent } from '../../components/dragonball/dragonball-character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, DragonballCharacterAddComponent]
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
