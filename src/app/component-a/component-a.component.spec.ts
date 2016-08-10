/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ComponentAComponent } from './component-a.component';

describe('Component: ComponentA', () => {
  it('should create an instance', () => {
    let component = new ComponentAComponent();
    expect(component).toBeTruthy();
  });
});
