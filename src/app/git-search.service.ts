import { Injectable } from '@angular/core';
import { HttpClient } from '@angulr/common/http';
import 'rxjs/add/operator/toPromise';

import { GitSearch } from './git-search';


@Injectable({
  // providedIn: 'root'
})
export class GitSearchService {
  cashedValues: Array<{
    [query: string]: GitSearch
  }> = [];

  private http: HttpClient;
  private gitSearchUrl = 'https://api.github.com/search/repositories?q=';

  constructor(http: HttpClient) {
    this.http = http;
  }

  sampleObservable = () => {
    return this.http.get(this.gitSearchUrl);
  }

  samplePromise = () => {
    return this.http.get(this.gitSearchUrl)
      .toPromise();
  }
  usingObservable = () => {
    this.sampleObservable().subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
  usingPromise = () => {
    this.samplePromise().then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  gitSearch = (query: string) => {
    let promise = new Promise((resolve, reject) => {
      if (this.cashedValues[query]) {
        resolve(this.cashedValues[query]);
      } else {
        resolve('Plaseholder');
      }
    })
    return promise;
  }
}
