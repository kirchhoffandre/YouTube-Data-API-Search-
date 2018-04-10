import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Video } from '../video.model';
import 'rxjs/add/operator/map';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {


  videoList: Video[] = [];

  constructor(private serverService: ServerService, private appState: AppStateService) { }

 ngOnInit() {
  this.serverService.getYoutube('loveyourcamper')
    .subscribe(data => {
      console.log(data);
      this.appState.videoList = data.items.map(item => {
        return new Video(
          item.id.videoId,
          item.snippet.title,
          item.snippet.thumbnails.high.url,
          item.snippet.channelTitle,
          item.snippet.channelId,
          item.snippet.description)
      });
      this.appState.activeVideo = this.appState.videoList[0];
    });
}

}
