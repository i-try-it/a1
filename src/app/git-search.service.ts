import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

import { GitSearch } from './git-search';
import { GitUsers } from './git-users';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  private cashedValues: {
    [query: string]: GitSearch;
  } = {};
  private cashedUsers: {
    [query: string]: GitUsers;
  } = {};

  private http: HttpClient;
  private gitSearchUrl = 'https://api.github.com/search/repositories?q=';
  private searchUserUrl = 'https://api.github.com/search/users?q=';
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
  gitSearch = (query: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (this.cashedValues[query] !== undefined) {
        resolve(this.cashedValues[query]);
      } else {
        this.http.get(`${this.gitSearchUrl}${query}`)
          .toPromise()
          .then((response: GitSearch) => {
            resolve(response);
          }, (error: any) => {
            reject(error);
          });
      }
    });
  }
  searchUser = (query: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (this.cashedUsers[query] !== undefined) {
        resolve(this.cashedUsers[query]);
      } else {
        this.http.get(`${this.searchUserUrl}${query}`)
          .toPromise()
          .then((response: GitUsers) => {
            resolve(response);
          }, (error: any) => {
            reject(error);
          });
      }
    });
  }
}
