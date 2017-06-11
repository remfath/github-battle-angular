import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BattleComponent} from './battle/battle.component';
import {LoadingComponent} from './loading/loading.component';
import {PopularComponent} from './popular/popular.component';
import {ResultComponent} from './result/result.component';
import {RouterModule} from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BattleComponent,
    LoadingComponent,
    PopularComponent,
    ResultComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'battle',
        component: BattleComponent
      },
      {
        path: 'popular',
        component: PopularComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
