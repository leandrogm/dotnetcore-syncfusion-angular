import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DiagramModule} from '@syncfusion/ej2-angular-diagrams';
import { TreeViewModule} from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextComponent } from './rich-text/rich-text.component';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { DialogModule } from '@syncfusion/ej2-angular-popups';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    RichTextComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, RichTextEditorModule, AutoCompleteModule, RichTextEditorAllModule, DialogModule,
    RouterModule.forRoot([
      { path: '', component: RichTextComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
