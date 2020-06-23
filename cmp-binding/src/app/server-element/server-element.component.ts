import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('after ngOnInit called!');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('after ngAfterContentInit called!');
    console.log(this.paragraph.nativeElement.textContent);
  }

}
