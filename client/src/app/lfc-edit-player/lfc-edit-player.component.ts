import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-lfc-edit-player',
  templateUrl: './lfc-edit-player.component.html',
  styleUrls: ['./lfc-edit-player.component.css']
})
export class LfcEditPlayerComponent implements OnInit {
  player_id;
  player: any = {};
  errName;
  errSquadnum;
  errUrl;

  
  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      console.log("ngOnInit in edit-player.component.ts", params);
      this.player_id = params.player_id;
      console.log(this.player_id);
      this.showPlayer();
    });
  }

  showPlayer(){
    console.log("getPlayer() in edit.component.ts");
    let obs = this._httpService.onePlayer(this.player_id);
    obs.subscribe(data => {
      console.log("Got one player!", data);
      this.player = data;
    })
  }

  updatePlayer(){
    console.log("updatePlayer() in edit-player.component.ts");
    let obs = this._httpService.updatePlayer(this.player_id, this.player);
    obs.subscribe(data => {
      this.errName = null;
      this.errSquadnum = null;
      this.errUrl = null;
      
      if (data['errors']){
        if(data['errors']['name']){
          this.errName = data['errors']['name'];
        }
        if(data['errors']['squadnum']){
          this.errSquadnum = data['errors']['squadnum'];
        }
        if(data['errors']['url']){
          this.errUrl = data['errors']['url'];
        }
      }else{
        console.log("player info updated!");
        return this._router.navigate(['/players']);
      }
    })
  }
  reset(){
    console.log("reset() in edit-player.component.ts")
    this.showPlayer();
  }
}
