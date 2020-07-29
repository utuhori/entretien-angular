import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContratService, Contrat } from '../contrat.service';

@Component({
  selector: 'maf-detail-contrat',
  templateUrl: './detail-contrat.component.html',
  styleUrls: ['./detail-contrat.component.css']
})
export class DetailContratComponent implements OnInit {

  contratId: number;
  contrat: Contrat;
  constructor(private route: ActivatedRoute, private contratService: ContratService) {
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.contratId = +params['id'];
      this.contrat = this.contratService.getContrat(this.contratId);
    });
  }

}


