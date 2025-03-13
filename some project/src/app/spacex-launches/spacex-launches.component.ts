import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spacex-launches',
  templateUrl: './spacex-launches.component.html',
  standalone: false,
  styleUrls: ['./spacex-launches.component.css']
})
export class SpacexLaunchesComponent implements OnInit {
  launches: any[] = [];
  filteredLaunches: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchLaunches();
  }

  fetchLaunches() {
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches')
      .subscribe(data => {
        this.launches = data;
        this.filteredLaunches = data;
      });
  }

  filterSuccessful() {
    this.filteredLaunches = this.launches.filter(launch => launch.launch_success);
  }

}
