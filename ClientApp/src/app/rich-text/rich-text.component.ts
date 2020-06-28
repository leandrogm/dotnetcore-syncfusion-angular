import { Component, ViewEncapsulation, ViewChild, HostListener, ElementRef, Inject } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent, NodeSelection } from '@syncfusion/ej2-angular-richtexteditor';
import { AutoComplete } from '@syncfusion/ej2-angular-dropdowns';
import { Observable } from 'rxjs/Observable';
import { EmitType } from '@syncfusion/ej2-base';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'rich-text',
  styleUrls: ['./rich-text.component.css'],
  templateUrl: './rich-text.component.html',
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class RichTextComponent {
  @ViewChild('sample') public rteObj: RichTextEditorComponent;
  @ViewChild('autocomplete') public autoCompleteObj: AutoComplete;
  @ViewChild('container', { read: ElementRef }) container: ElementRef;
  @ViewChild('ejDialog') ejDialog: DialogComponent;

  public targetElement: HTMLElement;
  public value: string;
  public isDialogOpen: boolean = false;
  public autoCompleteData: Tag[];

  public fields: Object = { value: 'name' };

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tag[]>(baseUrl + 'api/tags').subscribe(result => {
      this.autoCompleteData = result;
    }, error => console.error(error));
  }

  ngOnInit() {
    this.initilaizeTarget();
  }

  ngAfterViewInit(): void {
    const self = this;
    document.onclick = (args: any): void => {
      if (args.target.tagName != 'INPUT' && self.isDialogOpen) {
        self.closeDialog();
      }
    }
  }

  // Initialize the Dialog component target element.
  public initilaizeTarget: EmitType<object> = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  }

  public openDialog(): void {
    this.isDialogOpen = true;
    this.ejDialog.show();
  };

  public closeDialog(): void {
    this.isDialogOpen = false;
    this.ejDialog.hide();
  };

  onCreate(): void {
    const instance: any = this.rteObj;
    const dialog = this.ejDialog;
    const self = this;

    instance.contentModule.getDocument().addEventListener("keydown", function (e: any): void {
      if (e.key === '@') {
        e.preventDefault(); 

        var htmlObject = document.activeElement;

        // verifica se o ultimo char digitado é um espaço em branco pra poder então acionar o autocomplete
        // caso contrário pode atrapalhar no preenchimento de emails.
        if (htmlObject == null || htmlObject.textContent.length == 0 || htmlObject.textContent[htmlObject.textContent.length - 1] == String.fromCharCode(160)) {

          instance.executeCommand('insertText', "@");
          instance.updateValue();
          instance.executeCommand('insertHTML', '<span class="cursor"> </span>');

          self.openDialog();
        } else {
          instance.executeCommand('insertText', "@");
        }
        //let value: any = instance.value; // you can get the RTE content to save in the desired database
      }

    });
  }

  unsetCursorControlElements(): void {
    let elements = this.rteObj.contentModule.getDocument().getElementsByClassName("cursor");
    for (var i = 0; i < elements.length; i++) {
      elements.item(i).remove();
    }
  }

  onSelect(e): void {
    this.ejDialog.hide();
    this.setCursorPosition();
    this.rteObj.executeCommand('insertText', e.itemData.description);
    this.autoCompleteObj.clear();
  }

  setCursorPosition(): void {
    this.rteObj.focusIn();
    let elements = this.rteObj.contentModule.getDocument().getElementsByClassName("cursor");

    const element: Element = elements[elements.length - 1];

    const selectioncursor: NodeSelection = new NodeSelection();
    const range: Range = document.createRange();
    range.setStart(element, 1); 
    selectioncursor.setRange(document, range); 

    this.unsetCursorControlElements();
  }

}

interface Tag {
  name: string;
  description: string;
}
