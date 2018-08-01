import { Component, OnInit } from '@angular/core';

import { GitSearchService } from './git-search.service';
import { GitSearch } from './git-search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private gitSearchService: GitSearchService;
  constructor(private gitSearchService: GitSearchService) {
    this.gitSearchService = gitSearchService;
  }
  ngOnInit() {
    this.gitSearchService.gitSearch('angular')
      .then((result: GitSearch) => {
        alert(`Total Libraries Found: ${result.total_count}`);
      }, (err: Error) => {
        alert(`Error: ${err.message}`);
      });
      this.gitSearchService.searchUser('tom')
        .then((result: GitSearch) => {
          alert(`Total Users Found: ${result.total_count}`);
        }, (err: Error) => {
          alert(`Error: ${err.message}`);
        });
  }
}
