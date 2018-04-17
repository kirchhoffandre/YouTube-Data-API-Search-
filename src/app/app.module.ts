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
import { ChanneloverviewComponent } from './channeloverview/channeloverview.component';
import { Routes, RouterModule} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { VideosearchComponent } from './videosearch/videosearch.component';

const appRoutes: Routes = [
  {
    path: 'search',
    component: VideosearchComponent
  },
  {
    path: 'channel',
    component: ChanneloverviewComponent
  }
]; 

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoListItemComponent,
    SearchBoxComponent,
    ChanneloverviewComponent,
    NavigationComponent,
    VideosearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ServerService, AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
