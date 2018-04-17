import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import 'rxjs/add/operator/map';
import { VideoChannel } from '../videochannel.model';

@Component({
  selector: 'app-channeloverview',
  templateUrl: './channeloverview.component.html',
  styleUrls: ['./channeloverview.component.css']
})
export class ChanneloverviewComponent implements OnInit {

  myChannel: VideoChannel[] = [];
  myChannelTitle: String = '';

  myC = [];

  constructor(private serverService: ServerService) { }

  ngOnInit() {

    this.serverService.getChannel().subscribe(
      data => {
        console.log(data);
        
        this.myChannel = data.items.map(
          item => {
          return new VideoChannel(
            item.id,
            item.snippet.thumbnails.high.url,
            item.snippet.title,
            item.snippet.description,
            item.snippet.country,
            item.snippet.publishedAt
            );
          }
        );
        console.log(this.myChannel);
      }
    );

  }

}


/*
       data => this.myChannel = {
        data.items.map(item => {

        return new VideoChannel(
        item.id,
        item.snippet.thumbnails.high.url,
        item.snippet.title,
        item.snippet.description,
        item.snippet.country,
        item.snippet.publishedAt
        );
        console.log('test');
      }
      })
    );
*/ 
