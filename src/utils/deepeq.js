/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

export const deepeq = (foo, bar) => {
  var ctor, len
  if (foo === bar) return true
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime()
    if (ctor === RegExp) return foo.toString() === bar.toString()
    if (ctor === Array && (len = foo.length) === bar.length) {
      while (len-- && deepeq(foo[len], bar[len]));
      // eslint-disable-next-line no-magic-numbers
      return len === -1
    }
    if (ctor === Object) {
      if (Object.keys(foo).length !== Object.keys(bar).length) return false
      for (len in foo) if (!(len in bar) || !deepeq(foo[len], bar[len])) return false
      return true
    }
  }
  return foo !== foo && bar !== bar
}
