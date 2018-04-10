import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Video } from '../video.model';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  
  constructor(private serverService: ServerService, private appState: AppStateService) { }

  ngOnInit() {
  
  }

  search(query: String){
    console.log('query');
    this.serverService.getYoutube(query)
    .subscribe(data => {
      this.appState.videoList = data.items.map(item => {
        return new Video(
          item.id.videoId,
          item.snippet.title,
          item.snippet.thumbnails.high.url,
          item.snippet.channelTitle,
          item.snippet.channelId,
          item.snippet.description)
      });
    });
  }

}
