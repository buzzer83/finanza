import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  count : number = 0;
  incrementa = () => this.count++;

  countSignal = signal(0);
  //incrementaSignal = () => this.countSignal.set(this.countSignal() + 1);
  incrementaSignal = () => this.countSignal.update(countSignal => countSignal + 1);
  stampaSignalConsole = () => console.log(`Valore del contatore signal: ${this.countSignal()}`);

  numeroA: number = 0;
  numeroB: number = 0;
  getSomma = () => this.numeroA + this.numeroB;
  incrementaA = () => this.numeroA++;
  incrementaB = () => this.numeroB++;

  articoli = [
    {codart : '014600301', descrizione : 'BARILLA FARINA 1 KG', um : 'PZ', qta : 3, peso : 1, prezzo : 1.09, totale : 3.27},
    {codart : "013500121", descrizione : "BARILLA PASTA GR.500 N.70 1/2 PENNE", um : "PZ", qta : 5, peso : 0.5, prezzo : 1.3, totale : 6.50},
    {codart : "007686402", descrizione : "FINDUS FIOR DI NASELLO 300 GR", um : "PZ", qta : 1, peso : 0.3, prezzo : 6.46, totale : 6.46},
    {codart : "057549001", descrizione : "FINDUS CROCCOLE 400 GR", um : "PZ", qta : 2, peso : 0.4, prezzo : 5.97, totale : 11.94}
  ]

  itemList = signal(this.articoli);

  totale = computed(() => {
    return this.itemList().reduce((somma, articolo) => somma + (articolo.prezzo * articolo.qta), 0 );
  })

  removeItem(item:any){
    console.log("Premuto tasto di eliminazione");

    this.itemList.set(this.itemList().filter((i) => i !== item));
    this.articoli = this.itemList();
  }
}
