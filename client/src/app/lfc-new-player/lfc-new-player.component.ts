import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-lfc-new-player',
  templateUrl: './lfc-new-player.component.html',
  styleUrls: ['./lfc-new-player.component.css']
})
export class LfcNewPlayerComponent implements OnInit {
  player;
  errName;
  errSquadNum;
  errUrl;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.player = { name: "", squadnum: "", url: "", mktval: "", position: "" }

    this._route.params.subscribe((params: Params) => {
      console.log(params);
    })
  }

  onSubmit(){
    console.log("onSubmit() in new-player.component.ts");
    let obs = this._httpService.createPlayer(this.player)
    obs.subscribe(data => {
      console.log("got new Product data from post", data);
      this.errName = null;
      this.errSquadNum = null;
      this.errUrl = null;
    
      if (data['errors']){
        if(data['errors']['name']){
          this.errName = data['errors']['name'];
        }
        if(data['errors']['squadnum']){
          this.errSquadNum = data['errors']['squadnum'];
        }
        if(data['errors']['url']){
          this.errUrl = data['errors']['url'];
        }
      }else{
        console.log("new player created!", data);
        this.player = { name: "", squadnum: "", url: "", mktval: "", position: "" }
        return this._router.navigate(['/players']);
      }
    })
  }
}
