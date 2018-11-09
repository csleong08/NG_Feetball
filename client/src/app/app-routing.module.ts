import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LfcHomeComponent } from './lfc-home/lfc-home.component';
import { LfcNewPlayerComponent } from './lfc-new-player/lfc-new-player.component';
import { LfcEditPlayerComponent } from './lfc-edit-player/lfc-edit-player.component';
import { LfcPlayersComponent } from './lfc-players/lfc-players.component';

const routes: Routes = [
  { path: '', pathMatch:"full", component: LfcHomeComponent },
  // { path: 'home', component: LfcHomeComponent },
  { path: 'players/new', component: LfcNewPlayerComponent },
  { path: 'players', component: LfcPlayersComponent },
  { path: 'edit/:player_id', component: LfcEditPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
