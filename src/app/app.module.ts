import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IconListComponent } from './components/skillList/skillList.component';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, } from '@angular/router';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    IconListComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
