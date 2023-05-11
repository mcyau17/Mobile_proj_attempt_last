import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceAPIService {

  constructor(private http:HttpClient) { }
//access the relevant api's for the pages
  GetMovieData():Observable<any>{
  return this.http.get('https://www.omdbapi.com/?apikey=ac551d97&s=war');
  }

  GetRomanceData():Observable<any>{
  return this.http.get('https://www.omdbapi.com/?apikey=ac551d97&s=Romance');
  }

  GetHorrorData():Observable<any>{
 return this.http.get('https://www.omdbapi.com/?apikey=ac551d97&s=Horror');
  }

 GetComedyData():Observable<any>{
  return this.http.get('https://www.omdbapi.com/?apikey=ac551d97&s=Comedy');
  }
    
  }
  
