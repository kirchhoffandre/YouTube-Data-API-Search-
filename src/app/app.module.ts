import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AppStateService } from './app-state.service';


@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoListItemComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerService, AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
