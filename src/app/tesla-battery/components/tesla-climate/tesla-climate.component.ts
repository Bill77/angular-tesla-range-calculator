import { Component, Input, ChangeDetectionStrategy, forwardRef, Provider } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CHECKBOX_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TeslaClimateComponent),
  multi: true
}

@Component({
  selector: 'tesla-climate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tesla-climate.component.html',
  providers: [CHECKBOX_VALUE_ACCESSOR],
  styleUrls: ['./tesla-climate.component.scss']
})
export class TeslaClimateComponent implements ControlValueAccessor {

  @Input() limit: boolean;

  value: boolean;
  focused: boolean;

  private onTouch: Function;
  private onModeChange: Function;

  private onChange(value: boolean) {
    this.value = !value;
    this.onModeChange(this.value);
  }

  registerOnChange(fn: Function) {
    this.onModeChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: boolean) {
    this.value = value;
  }

  private onBlur(value: boolean) {
    this.focused = false;
  }

  private onFocus(value: boolean) {
    this.focused = value;
    this.onTouch();
  }
}
