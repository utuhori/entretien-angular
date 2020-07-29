import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contrat } from '../contrat.service';

@Component({
  selector: 'maf-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent {
  @Input() contrats: Contrat[];
  @Output() supprimerContrat = new EventEmitter<number>();

  supprimer(contratId: number): void {
    this.supprimerContrat.emit(contratId);
  }
}
