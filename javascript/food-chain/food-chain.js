var Song = function() {
  this.animal = {1: 'fly', 2: 'spider', 3: 'bird', 4: 'cat', 5: 'dog', 6: 'goat', 7: 'cow', 8: 'horse' };
  this.elaborate = {1: '', 2: 'It wriggled and jiggled and tickled inside her.\n', 3: 'How absurd to swallow a bird!\n', 4: 'Imagine that, to swallow a cat!\n', 5: 'What a hog, to swallow a dog!\n', 6: 'Just opened her throat and swallowed a goat!\n', 7: 'I don\'t know how she swallowed a cow!\n', 8: 'She\'s dead, of course!\n' };
  this.base = 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
};


Song.prototype.verse = function(num) {
  var opening = 'I know an old lady who swallowed a ' + this.animal[num] + '.\n';
  var filler = this.elaborate[num];
  var eating = '';
  var verse = '';

  if (num > 1) {
    for (var i = num; i > 1; i--) {
      eating += 'She swallowed the ' + this.animal[i] + ' to catch the ' + this.animal[i-1];
      if (this.animal[i-1] === 'spider') {
        eating += ' that wriggled and jiggled and tickled inside her.\n';
      } else {
        eating += '.\n';
      }
    }
  } else {
    eating = '';
  }

  if (num === 8) {
    verse = opening + filler;
  } else {
    verse = opening + filler + eating + this.base;
  }
  return verse;
};


Song.prototype.verses = function(a, b) {
  var collect = '';
  for (var i = a; i < b+1; i++) {
    collect += this.verse(i) + '\n';
  }
  return collect;
};


module.exports = Song;
