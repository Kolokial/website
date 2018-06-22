import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  @Input() imagePaths: string[];

  public imageObjects: { [key: string]: string | number }[];

  constructor() { }

  ngOnInit() {
    this.imageObjects = this.imagePaths.map((imagePath: string, index: number) => {
      let image: HTMLImageElement = new Image();
      let height: number;
      image.src = imagePath;
      image.onload = () => {
        height = (index % 2 === 1) ? 200 : 400;
      };

      return {
        'path': imagePath,
        'height': height
      };
    });
  }

}
