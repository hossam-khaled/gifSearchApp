import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageGifService {

  api_url:string = "http://api.giphy.com/v1/gifs/search"; 
  api_key: string = "?api_key=XPiCUyEC7qH2yMhsn4RALasjZmTm5NzM";
  query: string = "&q=";
  main_url = `${this.api_url}${this.api_key}${this.query}`;

  constructor( private _http :HttpClient) { }

  ngOnInit(): void {
  }
  getImages (query_name ): Observable<any> {
    return this._http.get(this.main_url + query_name);
  }
}
