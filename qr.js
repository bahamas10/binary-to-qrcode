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
  // pad binary to a multiple of 4
  while (!isInteger(b.length / 4)) {
    b = '0' + b;
  }
  var chunk;
  var i = 0;
  var hex = '';
  while ((chunk = b.substr(i, 4)) !== '') {
    hex += parseInt(chunk, 2).toString(16);
    i += 4;
  }
  return hex;
}

function lpad(s, i, c) {
  while (s.length < i)
    s = c + s;
  return s;
}

function isInteger(n) {
  return n % 1 === 0;
}
