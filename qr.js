/**
 * convert binary or hex to qr codes
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 * Date: August 11, 2016
 * License: MIT
 */

function hex2bin(h) {
  var s = '';
  for (var i = 0; i < h.length; i++) {
    var c = h[i];
    var b = parseInt(c, 16).toString(2);
    s += lpad(b, 4, '0');
  }
  return s;
}

function bin2hex(b) {
  return parseInt(b, 2).toString(16);
}

function lpad(s, i, c) {
  while (s.length < i)
    s = c + s;
  return s;
}
