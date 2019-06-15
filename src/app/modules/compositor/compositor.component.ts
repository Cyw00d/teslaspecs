import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { options } from "./../shared/options";
import { model3 } from "./../shared/model3";
import { filter, map, each, pull, find, flatten } from 'lodash-es';
import { CompareService } from '../shared/compare.service';

@Component({
  selector: 'compositor',
  templateUrl: './compositor.component.html',
  styleUrls: ['./compositor.component.scss']
})
export class CompositorComponent implements OnInit {
  @Input() view = 'STUD_3QTR';
  @Output() selected: EventEmitter<object> = new EventEmitter<object>();
  @Output() range: EventEmitter<any> = new EventEmitter<string>();

  public selectedRange = "standard_range"; // default
  public selectedOptions = {
    wheels: '',
    color: '',
    interior: '',
    rangeDefaults: [],
  }

  public _options = options;
  public _model = model3;
  public data = {
    wheels: [],
    colors: [],
    interior: [],
    range: this._model.ranges,
  };

  public selectedData = [];
  constructor(private compareService: CompareService) {
    this.data.wheels = filter(this._options, i => i.type === 'wheels');
    this.data.colors = filter(this._options, i => i.type === 'color');
    this.data.interior = filter(this._options, i => i.type === 'interior');
  }

  ngOnInit() {
    const selectedRange = find(this.data.range, r => r.enabled); // This returns first enabled range
    
    this.selectedOptions = {
      ...selectedRange.defaultCodes,
    }
    this.selectedOptions['rangeDefaults'] = selectedRange.carcodes;
    this.emitNewIllustration();
    this.range.emit(selectedRange);
  }

  AddToCompare() {
    this.compareService.addToList(this.selectedRange, { ...this.selectedOptions });
  }

  hasPermission(ranges) {
    return ranges.indexOf(this.selectedRange) != -1;
  }

  selectRange(r) {
    this.selectedRange = r.id;
    this.selectedOptions['rangeDefaults'] = r.carcodes;
    this.emitNewIllustration();
    this.range.emit(r);
  }

  emitNewIllustration() {
    this.selected.emit({ range: this.selectedRange, options: this.selectedOptions });
  }
  
  selectOption(type: string, option: string) {
    this.selectedOptions[type] = option;
    this.emitNewIllustration();
  }
}
