import { Component, OnInit } from '@angular/core';

import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults: GitSearch;

  constructor(private gitSearchService: GitSearchService) { }

  ngOnInit() {
    this.gitSearchService.gitSearch('angular')
      .then((result: GitSearch) => {
        this.searchResults = result;
      }, (err: Error) => {
        alert(`Error: ${err.message}`);
      });
  }

  gitSearch = (query: string) => {
    this.gitSearchService.gitSearch(query)
      .then((result: GitSearch) => {
        this.searchResults = result;
      }, (err: Error) => {
        alert(`Error: ${err.message}`);
      });
  }

}
