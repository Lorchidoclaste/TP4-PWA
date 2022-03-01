import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }

  kgToLbs(kg: number): number {
    let lbs = Math.round((kg*2.2046));
    return lbs;
  }
    
  lbsToKg(lbs: number): number { 
    let kg = Math.round((lbs/2.2046));
    return kg;
  }


  celToFahr(celcius: number): number {
    let fahr = Math.round(((celcius*1.8)+32));
    return fahr;
  }

  fahrToCel(fahr: number): number {
    let cel = Math.round(((fahr-32)*0.5556));
    return cel;
  }

}
