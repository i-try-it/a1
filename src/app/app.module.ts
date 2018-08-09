import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GitSearchService } from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRotes: Routes = [{
  path: '',
  component: HomePageComponent
}, {
  path: 'search',
  redirectTo: '/search/angular',
  pathMatch: 'full'
},
{
  path: 'search/:query',
  component: GitSearchComponent,
  data: {
    title: 'Git Search'
  }
}, 
{
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  declarations: [
    /**
     * list of components, directives, and pipes that are a part of the specific
     * module
     * Everything in a declaration is visible to application using this module,
     * without requiring any explicit exports
     * 
     * Every component must be imported into one (and only one) @NgModule and
     * the declarations array contains the list of all components available within
     * that module.
     */
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NotFoundComponent
  ],
  imports: [
    /**
     *  HERE WE IMPORT MODULERS
     * you can make other modules visible within this module
     * if another developer imports your module, they may not be able to see the
     * modules you have imported
     */
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRotes)
  ],
  exports: [
    /**
     * the list or any declarations that you want to be made available (visible)
     * to other modules that may import this module.
     */
  ],
  providers: [
    /**
     * IMPORS SERVICE, STATIC OBJECT, SIMPLE VALUES, CLASSES
     * used to list providers for configuring the injector, when this module is
     * imported by other modules
     */
     GitSearchService
  ],
  /**
   * entryComponents - constitutes a list of components about which
   * ComponentFactory should be generated. Primarily used for dynamically
   * loading components.
   */
   // TELS TO MOUNT THIS COMPONENT IMMEDIATLY ON APP START
  bootstrap: [AppComponent]
})
export class AppModule { }
