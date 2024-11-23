import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherData } from '../models/weatherData.model';
import { environment } from '../environment';
import { HomeComponent } from '../home/home.component';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeather(cityName:any): Observable<weatherData>{

return this.http.get<weatherData>( environment.baseUrl1+cityName+"/EN",{
  headers : new HttpHeaders().set('Access-Control-Allow-Origin', '*') //to prevent CORS err or
                        .set(environment.XRapidAPIHostLabel, environment.XRapidAPIHostValue)
                        .set(environment.XRapidAPIKeyLabel, environment.XRapidAPIKeyValue),
  // params: new HttpParams().set('lang', 'EN')
  //                         .set('city', cityName)
})

  }
}
