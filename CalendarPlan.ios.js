/**
 * @providesModule CalendarPlan
 * @flow
 */
'use strict';

var NativeCalendarPlan = require('NativeModules').CalendarPlan;

/**
 * High-level docs for the CalendarPlan iOS API can be written here.
 */

var CalendarPlan = {
  test: function() {
    NativeCalendarPlan.test();
  }
};

module.exports = CalendarPlan;
