import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GitSearchService } from './git-search.service';

@NgModule({
  declarations: [
    /**
     * list of components, directives, and pipes that are a part of the specific
     * module
     * Everything in a declaration is visible to application using this module,
     * without requiring any explicit exports
     */
    AppComponent
  ],
  imports: [
    /**
     *  HERE WE IMPORT MODULERS
     * you can make other modules visible within this module
     * if another developer imports your module, they may not be able to see the
     * modules you have imported
     */
    BrowserModule,
    HttpClientModule
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
