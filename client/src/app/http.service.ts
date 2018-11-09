import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  allPlayers(){
    return this._http.get('/api/players');
  }
  createPlayer(player){
    return this._http.post('/api/players', player);
  }
  onePlayer(player_id){
    return this._http.get('/api/players/' + player_id)
  }
  updatePlayer(player_id, newplayer){
    return this._http.put('/api/players/' + player_id, newplayer)
  }
  deletePlayer(player_id){
    return this._http.delete('/api/players/' + player_id)
  }
  sortSquadnum(sort){
    return this._http.get('/api/players/squadnum/' + sort);
  }
  sortNationality(sort){
    return this._http.get('/api/players/nationality/' + sort);
  }
  sortName(sort){
    return this._http.get('/api/players/name/' + sort);
  }
  sortMktval(sort){
    return this._http.get('/api/players/mktval/' + sort);
  }
  sortPosition(sort){
    return this._http.get('/api/players/position/' + sort);
  }
  getStandings(){
    return this._http.get('https://apifootball.com/api/?action=get_standings&league_id=63&APIkey=b28e7da871d062b01532c12d38655cad4c6d962ca79a413f0dabb032545a6328');
  }
}
