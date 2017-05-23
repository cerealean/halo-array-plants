import { Component, OnInit, Input } from '@angular/core';
import {Plant} from '../plant';

@Component({
  selector: 'plant-information',
  templateUrl: './plant-information.component.html',
  styleUrls: ['./plant-information.component.css']
})
export class PlantInformationComponent implements OnInit {

  @Input() plants:Plant[];

  constructor() { }

  ngOnInit() {
  }

}
