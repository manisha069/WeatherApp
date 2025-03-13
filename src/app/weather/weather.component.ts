import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
// import { HomeComponent } from '../home/home.component';
import { WeatherService } from '../services/weather.service';
import { CityNameService } from '../services/city-name.service';
import { weatherData } from '../models/weatherData.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})

export class WeatherComponent {
  
  constructor(private datePipe: DatePipe, private weatherService : WeatherService, private city :CityNameService){}

  today:any;
  data?: weatherData;
  isLoading : boolean = true;

  ngOnInit(){
    
    this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    console.log("hello?",this.city.cityNameValue);

    this.weatherService.getWeather(this.city.cityNameValue).subscribe(response =>{
      console.log("city data", response);
      this.data = response;
    
      if(this.data){
        this.isLoading = false;
      }
    })

  }


}
