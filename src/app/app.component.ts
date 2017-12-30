import { Component } from '@angular/core';
import { MatIcon, MatExpansionPanel, MatAccordion, MatExpansionPanelTitle, MatExpansionPanelHeader, MatToolbar, MatListModule} from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { RecipeDataService } from './services/recipe-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [Title]
})
export class AppComponent {

  constructor(private dataService: RecipeDataService, private title: Title) {
    this.title.setTitle('Recipe Box');
  }

  ngOnInit()
  {
    this.dataService.getRecipes();
  }
}
