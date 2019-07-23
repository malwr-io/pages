import {AfterContentInit, Component, ContentChild, OnInit} from '@angular/core';
import {MatPageOutlookComponent} from '../mat-page-outlook/mat-page-outlook.component';
import {MatPageContentComponent} from '../mat-page-content/mat-page-content.component';

@Component({
  selector: 'mat-page-loader',
  templateUrl: './mat-page-loader.component.html',
  styleUrls: ['./mat-page-loader.component.scss']
})
export class MatPageLoaderComponent {

  @ContentChild(MatPageOutlookComponent, {static: false}) pageOutlook: MatPageOutlookComponent;
  @ContentChild(MatPageContentComponent, {static: false}) pageContent: MatPageContentComponent;

}