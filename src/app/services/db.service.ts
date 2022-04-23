import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  
  private pathRoot = '../../assets/data/';
  
  constructor(private http: HttpClient ) { 

  }

  private getRequest(name: string): Observable<Object> {
    return this.http.get(this.pathRoot + name + '.json');
  }

  getData(name: string): Promise<any> {
    return new Promise((resolve) => {
           
                const suscriber = this.getRequest(name).subscribe( res => {
                  resolve(res);
                  suscriber.unsubscribe();
                  return;
                });
          
    });
  }
}
