import { Component } from "@angular/core";

@Component({
  selector: "app",
  template: ` <app-yen
      [yenValue]="yenConvertedValue"
      (emitYen)="getUsdValue($event)"
    ></app-yen>
    <app-usd
      [usdValue]="usdConvertedValue"
      (emitUsd)="getYenValue($event)"
    ></app-usd>`,
})
export class AppComponent {
  public usdConvertedValue: string = "";
  public yenConvertedValue: string = "";
  constructor() {}

  getYenValue(emitUsd: string) {
    this.yenConvertedValue = emitUsd;
  }

  getUsdValue(emitYen: string) {
    this.usdConvertedValue = emitYen;
  }
}
