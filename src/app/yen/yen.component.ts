import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-yen",
  templateUrl: "./yen.component.html",
})
export class YenComponent implements OnChanges {
  @Output() emitYen = new EventEmitter<number>();
  @Input() yenValue: string = "";
  usdDisplayText: number;
  yenCurrency: number;
  constructor() {}

  ngOnChanges(changes: any): void {
    this.yenCurrency = changes.yenValue.currentValue;
  }

  convertToUsd(newYen) {
    const value = newYen * 0.0088;
    this.usdDisplayText = value;
    this.emitYen.emit(value);
  }

  getUsdDisplayText() {
    return this.usdDisplayText;
  }
}
