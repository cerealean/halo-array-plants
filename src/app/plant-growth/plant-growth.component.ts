import { Component, OnInit } from '@angular/core';
import {Plant} from '../plant';
import { PlantDao } from "app/plant-growth/plant-dao";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

export namespace PlantGrowth{
  @Component({
    templateUrl: './plant-growth.component.html',
    styleUrls: ['./plant-growth.component.css'],
    providers: [PlantDao]
  })
  export class PlantGrowthComponent implements OnInit {
    private plants:Plant[] = [];

    constructor(private plantDao:PlantDao) { 
    }

    ngOnInit() {
      this.getPlants();
    }

    getPlants(){
      this.plants = this.plantDao.getEarthTeamPlants();
      this.plantDao.checkHealth().map(rawr => console.log(rawr.json()));
    }
  }
}