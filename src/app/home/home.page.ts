import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { ServiceAPIService } from '../service-api.service';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

//stores movie data
movieData: any = [];
//Save file for the website
MyStatus:String = "";
//constructors for movie data, storage and nav controll
constructor(private service: ServiceAPIService, private str: Storage, private navCtrl: NavController) { }

//allows the button to bring the user to a different browser
  async openBrowser() {
    await Browser.open({ url: 'https://www.omdbapi.com/?apikey=ac551d97&s=war' });
  }
//Collects all the data from the api on launch
  ngOnInit() {
    this.service.GetMovieData().subscribe(
    (data) => {
    this.movieData = data.Search;
    console.log(this.movieData);
    });


  }
//saves data
  async onSave(){
    await this.str.create();
    await this.str.set("Status", this.MyStatus);
}
//loads previously saved data
async OnLoad(){
  this.MyStatus = await this.str.get("Status");
}
//methods to navigate through the different pages
openRomance(){
  this.navCtrl.navigateForward('/romance');
}
openHorror(){
  this.navCtrl.navigateForward('/horror');
}
openComedy(){
  this.navCtrl.navigateForward('/comedy');
}
}
