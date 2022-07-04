import {
  Component,
  EventEmitter,
  Input,
  OnChanges, OnInit, Output, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  cropWidth: number = 75;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;
  }

  onClick() {
   this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}
