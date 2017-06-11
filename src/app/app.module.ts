import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BattleComponent } from './battle/battle.component';
import { LoadingComponent } from './loading/loading.component';
import { PopularComponent } from './popular/popular.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BattleComponent,
    LoadingComponent,
    PopularComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
