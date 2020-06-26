import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'rich-text',
  styleUrls: ['./rich-text.component.css'],
  templateUrl: './rich-text.component.html',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})

export class RichTextComponent {

}
