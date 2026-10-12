import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class Calculatore{
  add(x:number,y:number){
    return(x+y);
  }
}
