import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrl: './auctions.component.css',
  animations: [
    trigger('hoverState', [
      state('hovered', style({
        transform: 'scale(1.1)',
      })),
    ]),
  ],
})
export class AuctionsComponent {
  hoverState = 'initial';

  constructor(private router: Router) {
  }

  onTileHover() {
    this.hoverState = (this.hoverState === 'initial') ? 'hovered' : 'initial';
  }
  buyNFT() {
    this.router.navigate(['/buy-nft-auction']);
  }

  nome: string = "monkeygold";
  tag : string [] = ["monkey","uuuhaha"];
  img: string = "data:image/jpeg;base64,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" ;
  descrizione: string = "Descrizione: Scimmia dorata mangia banane";
  possessore: string = "Possessore: Angelo";
  tipovendita!:string;
  durata: string = "Durata: 24 h"
  offertaattuale : string = "Prezzo: 100$"
}


