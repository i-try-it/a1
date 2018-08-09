import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults: GitSearch;

  searchQuery: string;

  title: string;

  constructor(private gitSearchService: GitSearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.gitSearchService.gitSearch('angular')
      .then((result: GitSearch) => {
        this.searchResults = result;
      }, (err: Error) => {
        alert(`Error: ${err.message}`);
      });
    this.route.data.subscribe((result) => {
      this.title = result.title;
    });
  }

  gitSearch = () => {
    this.gitSearchService.gitSearch(this.searchQuery)
      .then((result: GitSearch) => {
        this.searchResults = result;
      }, (err: Error) => {
        alert(`Error: ${err.message}`);
      });
  }

}
