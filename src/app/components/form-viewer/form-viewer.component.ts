import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.css']
})
export class FormViewerComponent implements OnInit {
  @Input('data') data: any;
  public formData = [];
  constructor() { }

  ngOnInit() {
  }

}
