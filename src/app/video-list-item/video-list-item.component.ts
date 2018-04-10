import { Component, OnInit,Input } from '@angular/core';
import { Video } from '../video.model';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.css']
})
export class VideoListItemComponent implements OnInit {

  @Input() video: Video;
  
  constructor(private appState: AppStateService) { }

  ngOnInit() {
  }

  onClick(){
    this.appState.activeVideo = this.video;

  }

}
