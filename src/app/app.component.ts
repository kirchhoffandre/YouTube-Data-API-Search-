import { Component, OnInit } from "@angular/core";
import { ServerService } from "./server.service";
import { Response } from "@angular/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  servers = [
    {
      name: "Testserver",
      capacity: 10,
      id: this.generateId()
    },
    {
      name: "Liveserver",
      capacity: 100,
      id: this.generateId()
    }
  ];

  query: String = "loveyourcamper";

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService
      .getServers()
      .subscribe(
        (servers: any[]) => (this.servers = servers),
        error => console.log(error)
      );

    this.serverService
      .getYoutube(this.query)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onGet() {
    this.serverService
      .getServers()
      .subscribe((servers: any[]) => console.log(servers));
  }

  onSaveServers() {
    console.log("send to backend");
    this.serverService
      .storeServers(this.servers)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
