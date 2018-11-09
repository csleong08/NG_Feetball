import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-lfc-players',
  templateUrl: './lfc-players.component.html',
  styleUrls: ['./lfc-players.component.css']
})
export class LfcPlayersComponent implements OnInit {
  player_list : any = [];

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    let obs = this._httpService.allPlayers();
    obs.subscribe(data => {
      console.log("got allPlayers data!", data);
      this.player_list = data;
      console.log(this.player_list);
    })
  }
  
  delete(player_id){
      console.log("delete in lfc-players.component.ts");
      let obs = this._httpService.deletePlayer(player_id);
      obs.subscribe(data => {
        console.log("WORKS! delete() in lfc-players.component.ts", data);
        return this.ngOnInit();
      })
    }
  
  sortSquadnum(sort){
    console.log("sortSquadnum() in lfc-players.component.ts")
    let obs = this._httpService.sortSquadnum(sort);
    obs.subscribe(data=> {
      console.log("sorting of squadnum works!", data);
      this.player_list = data;
    })
  }

  sortNationality(sort){
    console.log("sortNationality() in lfc-players.component.ts")
    let obs = this._httpService.sortNationality(sort);
    obs.subscribe(data=> {
      console.log("sorting of Nationality works!", data);
      this.player_list = data;
    })
  }

  sortName(sort){
    console.log("sortName() in lfc-players.component.ts")
    let obs = this._httpService.sortName(sort);
    obs.subscribe(data=> {
      console.log("sorting of Name works!", data);
      this.player_list = data;
    })
  }

  sortMktval(sort){
    console.log("sortMktval() in lfc-players.component.ts")
    let obs = this._httpService.sortMktval(sort);
    obs.subscribe(data=> {
      console.log("sorting of Mktval works!", data);
      this.player_list = data;
    })
  }

  sortPosition(sort){
    console.log("sortPosition() in lfc-players.component.ts")
    let obs = this._httpService.sortPosition(sort);
    obs.subscribe(data=> {
      console.log("sorting of Position works!", data);
      this.player_list = data;
    })
  }
}
