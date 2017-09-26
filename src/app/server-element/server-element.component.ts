import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  //if you want to asign an alias, use it as a string inside input
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
    console.log(this.header.nativeElement.textContent);
  }

  ngOnInit() {
    console.log('ngInit called!');
    console.log(this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log(this.header.nativeElement.textContent);
    console.log('Test Content of Paragraph', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked () {
    console.log('ngAfterContentChecked called!');
    console.log(this.header.nativeElement.textContent);
    console.log('Test Content of Paragraph', this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log(this.header.nativeElement.textContent);
    console.log('Test Content of Paragraph', this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked () {
    console.log('ngAfterViewChecked called!');
    console.log(this.header.nativeElement.textContent);
    console.log('Test Content of Paragraph', this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy () {
    console.log('ngOnDestroy called!');
    console.log(this.header.nativeElement.textContent);
    console.log('Test Content of Paragraph', this.paragraph.nativeElement.textContent);
  }
}
