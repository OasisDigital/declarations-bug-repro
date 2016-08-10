/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ComponentBComponent } from './component-b.component';

describe('Component: ComponentB', () => {
  it('should create an instance', () => {
    let component = new ComponentBComponent();
    expect(component).toBeTruthy();
  });
});
