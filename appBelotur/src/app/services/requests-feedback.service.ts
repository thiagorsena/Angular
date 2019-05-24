import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';



@Injectable({
  providedIn: 'root'
})
export class RequestsFeedbackService {
  private feedback = new BehaviorSubject<{ msg: string, action: string, panelClass: string }>(null);

  get newFeedback() {
    return this.feedback.asObservable();
  }

  constructor() { }

  addFeedback(msg: string, action?: string, success?: boolean): void {
    let panelClass = '';

    if (success !== undefined) {
      panelClass = success === true ? 'snackbar-success' : 'snackbar-error';
    }

    this.feedback.next({
      msg: msg,
      action: action,
      panelClass: panelClass
    });
  }

}
