import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-component-scanning',
  templateUrl: './component-scanning.component.html',
  styleUrls: ['./component-scanning.component.sass']
})
export class ComponentScanningComponent {
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
  propertyFormGroup: FormGroup = this._formBuilder.group({typeCtrl: ['']});
  submitFormGroup: FormGroup = this._formBuilder.group({typeCtrl: ['']});

  mode = 'stepper';
  private trigger: Subject<void> = new Subject<void>();
  component = {
    uuid: '788393d0-9bef-453b-952a-e83c4ef757fc',
    lastImage: 'assets/default-photo.png',
    type: 'Column',
    address: 'Walther-von-Cronberg-Platz 11, 60594 Frankfurt am Main',
    manufacturingYear: '1976',
    fixture: 'Cast',
    fissures: true,
    pollutants: true,
    corrosion: false,
    spallants: false,
  }

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  public snapshot(): void {
    this.trigger.next();
    this.mode = 'stepper';
  }

  scanSuccessHandler(event: any) {
    console.log('Success >>>', event);

    this.component.uuid = event;
    this.mode = 'stepper';
  }
  scanErrorHandler(event: any) {
    console.log('Error >>>', event);
  }

  scanFailureHandler(event: any) {
    console.log('Failure >>>', event);
  }

  scanCompleteHandler(event: any) {
    console.log('Complete >>>', event);
  }

  imageCapture(event: any) {
    this.component.lastImage = event._imageAsDataUrl;
  }
}
