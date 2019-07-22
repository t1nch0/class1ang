import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable(
  // providedIn: 'root' no es necesario por q es una doble llamada innecesario por ahora
)
export class Servicio1Service {

  constructor(private http: HttpClient, private a: string = 'http://quotes.stormconsultancy.co.uk/random.json') { }
  getQuotes(): Observable<any> {
    return this.http.get(this.a);
  }
}
