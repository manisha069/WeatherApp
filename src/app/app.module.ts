import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CityNameService } from './services/city-name.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterLink,
    RouterLinkActive, RouterOutlet,
    AppRoutingModule, HttpClientModule,
    FormsModule, RouterModule,
  ],
  providers: [DatePipe, CityNameService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
