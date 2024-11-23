import { Component } from '@angular/core';
import { CityNameService } from '../services/city-name.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cityNameBool: boolean = false;
  public cityName : string="";


  constructor(private city :CityNameService){}


cityNameMethod(){
  console.log("in method");
  console.log("c", this.cityName)
  if(this.cityName != "" && this.cityName != null && this.cityName != '' && this.cityName != undefined){
    this.cityNameBool = true;
    this.city.cityNameValue = this.cityName;
  console.log("f", this.city.cityNameValue)

  }
  else{
    this.cityNameBool = false;
  }
}

getCityName(): string{

  return this.cityName;
}
}
