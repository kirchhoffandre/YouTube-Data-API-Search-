import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    // return an Observable... not posted here yet.
    return this.http.put(
      'https://http-test-project-dd40b.firebaseio.com/data.json',
      servers,
      { headers: headers }
    );
  }

  getServers(){
    return this.http.get('https://http-test-project-dd40b.firebaseio.com/data.json')
    .map(
      (response: Response) => {
        const data = response.json();
        for (const server of data){
          server.name = 'FETCHED_' + server.name;
        }
        return data;
      }
    )
  }

  getYoutube(query: String){
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`+
    '&maxResults=50' +
    '&type=video' +
    '&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM' ).map(
      (response: Response) => response.json()
    );
  }
  
}
