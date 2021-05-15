import { Component, OnInit } from '@angular/core';
import { ImageGifService } from '../services/image-gif.service';

@Component({
  selector: 'app-imagesgif',
  templateUrl: './imagesgif.component.html',
  styleUrls: ['./imagesgif.component.css']
})
export class ImagesgifComponent implements OnInit {
  imagesData = [];
  search:string = 'salah';
  constructor( private gifServ :ImageGifService) { }

  ngOnInit(): void {
    this.getData(this.search);

  }
  getData ( data ) {
    return this.gifServ.getImages(data).subscribe(res => {
      this.imagesData = res.data;
      // console.log(data)
    });
  }
  save() {
    this.getData(this.search);
  }

}
