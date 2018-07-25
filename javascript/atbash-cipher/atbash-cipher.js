var Atbash = function(){
  this.enigma = {a: 'z', b: 'y', c: 'x', d: 'w', e: 'v', f: 'u', g: 't', h: 's', i: 'r', j: 'q', k: 'p', l: 'o', m: 'n', n: 'm', o: 'l', p: 'k', q: 'j', r: 'i', s: 'h', t: 'g', u: 'f', v: 'e', w: 'd', x: 'c', y: 'b', z: 'a'};
};

Atbash.prototype.encode = function(input) {
  var stringarray = input.toLowerCase().replace(/[,.\s]/g, '').split('');
  var newarray = stringarray.map(x => this.enigma[x] || x);

  for (var i = 0; i < newarray.length; i++) {
    if (i % 5 === 0) {
      newarray[i-1] += ' ';
    }
  }

  return newarray.join('');

};

var atbash = new Atbash();

module.exports = atbash;
