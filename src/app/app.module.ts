import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IconListComponent } from './components/skillList/skillList.component';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhotosComponent } from './views/photos/photos.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photos', component: PhotosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IconListComponent,
    HomeComponent,
    PhotosComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
