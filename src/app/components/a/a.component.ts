import { Component, OnInit } from '@angular/core';
import { ConvertService } from 'src/app/services/convert.service';



@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  kg: number = 0;
  lbs: number = 0;


  constructor(private convertService: ConvertService) { }

  ngOnInit(): void {
  }


  kgToLbs(){
    this.lbs = this.convertService.kgToLbs(this.kg);
  }

  lbsToKg(){ 
    this.kg = this.convertService.lbsToKg(this.lbs);
  }


}



