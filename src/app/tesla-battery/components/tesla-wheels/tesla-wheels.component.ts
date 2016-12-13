import { Component, Input, ChangeDetectionStrategy, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const RADIO_CONTROL_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TeslaWheelsComponent),
  multi: true
};

@Component({
  selector: 'tesla-wheels',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tesla-wheels.component.html',
  providers: [RADIO_CONTROL_ACCESSOR],  
  styleUrls: ['./tesla-wheels.component.scss']
})
export class TeslaWheelsComponent implements ControlValueAccessor {  
  constructor() {}

  private onModeChange: Function;
  private onTouch: Function;
  private value: string;
  private focused: string;
  private sizes: number[] = [19, 21];

  registerOnChange(fn: Function) {
    this.onModeChange = fn;    
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;    
  }

  writeValue(value: string) {
    this.value = value;
  }

  private onChange(value: string) {
    this.value = value;
    this.onModeChange(value);    
  }

  private onBlur(value: string) {
    this.focused = '';    
  }

  private onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}
