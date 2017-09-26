import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //passing event outside of our component so it is listenable
  //creating a new event that passes serverName and serverContent
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string  }>();
  @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string  }>();
  // newServerName = '';
  // newServerContent = '';
  //can use viewchild to get a value from the template to the ts file. you pass in the name to a locla reference.
  //you can also pass a component through this by just passing in the component with no string
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  //emits the event we created
  onAddServer(nameInput: HTMLInputElement) {

    //the serverName is being set by a local reference in the template
    //the serverContent element cna be accessed by using .nativeElement, basically making it a regular html element so we
    //can use .value on it
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {

    //the serverName is being set by a local reference in the template
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }
}
