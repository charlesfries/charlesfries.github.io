import Ember from 'ember';

declare global {
  interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {} // eslint-disable-line
  // interface Function extends Ember.FunctionPrototypeExtensions {}
}

export {};
