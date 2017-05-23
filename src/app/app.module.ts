import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PlantGrowth } from './plant-growth/plant-growth.component';
import { PlantInformationComponent } from './plant-information/plant-information.component';

const routes:Routes = [
  {path:"plant-growth", component:PlantGrowth.PlantGrowthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PlantGrowth.PlantGrowthComponent,
    PlantInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }