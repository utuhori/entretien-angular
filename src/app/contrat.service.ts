import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  private contrats: Contrat[] = [
    { contratId: 1, libelle: 'Contrat 1', type: 'Base', dateEffet: '2020-07-25'},
    { contratId: 2, libelle: 'Contrat 2', type: 'Avenant', dateEffet: '2020-07-27'},
    { contratId: 3, libelle: 'Contrat 3', type: 'Convention spéciale', dateEffet: '2020-07-29'},
  ];

  getContrats(): Contrat[] {
    return this.contrats;
  }

  getContrat(contratId: number): Contrat {
    return this.contrats.find(contrat => contratId === contrat.contratId);
  }

}

export interface Contrat {
  contratId: number;
  libelle: string;
  type: string;
  dateEffet: string;
}
