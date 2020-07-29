import { Component, OnInit } from '@angular/core';
import { Contrat, ContratService } from '../contrat.service';

@Component({
  selector: 'maf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  contrats: Contrat[];

  constructor(private readonly contratService: ContratService) {
    this.contrats = this.contratService.getContrats();
  }

  supprimerContrat(contratId: number): void {
    this.contrats = this.contrats.filter(contrat => contrat.contratId !== contratId);
  }
}
