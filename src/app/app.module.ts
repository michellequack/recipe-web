import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatExpansionModule, MatToolbarModule, MatListModule, MatIconModule, MatIconRegistry, MatGridListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDataService } from './services/recipe-data.service';


@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailsComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule
  ],
  entryComponents: [
    RecipeDetailsComponent
  ],
  providers: [ RecipeDataService ],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 
 
}
