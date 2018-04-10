import { Injectable } from "@angular/core";
import { Video } from "./video.model";



@Injectable()
export class AppStateService {

  videoList: Video[] = [];
  activeVideo: Video;

  constructor() { }

}


