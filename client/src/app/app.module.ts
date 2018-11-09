import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LfcHomeComponent } from './lfc-home/lfc-home.component';
import { LfcNewPlayerComponent } from './lfc-new-player/lfc-new-player.component';
import { LfcPlayersComponent } from './lfc-players/lfc-players.component';
import { LfcEditPlayerComponent } from './lfc-edit-player/lfc-edit-player.component';

@NgModule({
  declarations: [
    AppComponent,
    LfcHomeComponent,
    LfcNewPlayerComponent,
    LfcPlayersComponent,
    LfcEditPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
