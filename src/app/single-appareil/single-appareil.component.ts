import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Statut';
  constructor(private appareilService: AppareilService, private route: ActivatedRoute)  { }//pour recuperer l'id de la route

  ngOnInit() {
    this.id=this.route.snapshot.params['id']; //pour recuperer l'id de la reoure
    this.name = this.appareilService.getAppareilById(+id).name; // + pour transformer l'id en nombre entier
    this.status = this.appareilService.getAppareilById(+id).status;
  }

}
