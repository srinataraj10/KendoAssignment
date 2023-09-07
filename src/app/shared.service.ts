import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

   newList = new Subject();

   public setList(newData: any){
     this.newList.next(newData)
   }

   public dataList(): Observable<any>{
     return this.newList.asObservable()
   }
   
}
