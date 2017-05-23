import {Plant} from '../plant';
import { Http, Response } from "@angular/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class PlantDao {

    constructor(private http:Http){}

    getEarthTeamPlants() : Plant[]{
        return [
            {name:"SuperGreen", heightInCentimeters:24, caregiver:"Alyssa", lastWatered:new Date()},
            {name:"Fungus", heightInCentimeters:12, caregiver:"Skye", lastWatered:new Date()},
            {name:"Hithlas", heightInCentimeters:40, caregiver:"Max", lastWatered:new Date()}
        ];
    }

    checkHealth():Observable<Response>{
        const url = 'http://localhost:4200';
        const request = this.http
            .get(url);

        return request;
    }

    private extractData(response:Response){
        return response.json || {};
    }

}
