import { Component, OnInit } from '@angular/core';
import { PhotosModel } from './PhotosModel';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public model: PhotosModel = new PhotosModel();

  constructor() {

  }

  ngOnInit() {
  }

}
