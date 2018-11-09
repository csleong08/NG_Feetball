import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-lfc-home',
  templateUrl: './lfc-home.component.html',
  styleUrls: ['./lfc-home.component.css']
})
export class LfcHomeComponent implements OnInit {
  standings;
  
  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getStandings();
  }

  getStandings(){
    let obs = this._httpService.getStandings();
    obs.subscribe(data => {
      console.log("getStandings() in the lfc-home-component.ts", data);
      this.standings = data;
    })
  }
}
