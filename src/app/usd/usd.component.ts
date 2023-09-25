import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-usd",
  templateUrl: "./usd.component.html",
})
export class USDComponent implements OnChanges {
  @Output() emitUsd = new EventEmitter<number>();
  @Input() usdValue: Observable<number>;
  yenDisplayText: number;
  usdNumber: number;
  constructor() {}

  convertToYen(yenValue) {
    const value = parseFloat(yenValue) * 113;
    this.yenDisplayText = value;
    this.emitUsd.emit(value);
  }
  ngOnChanges(changes: any): void {
    this.usdNumber = changes.usdValue.currentValue;
  }
  getYenDisplayText() {
    return this.yenDisplayText;
  }
}
