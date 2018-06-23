var SpaceAge = function(input) {
  this.seconds = input;
};

var planets = {
  onEarth: 1,
  onMercury: 0.2408467,
  onVenus: 0.61519726,
  onMars: 1.8808158,
  onJupiter: 11.862615,
  onSaturn: 29.447498,
  onUranus: 84.016846,
  onNeptune: 164.79132
};

Object.keys(planets).forEach(planet => {
  SpaceAge.prototype[planet] = function(){
    var secondsInYear = planets[planet] * 31557600;
    var age = this.seconds / secondsInYear;
    return Number(age.toFixed(2));
  };
});


module.exports = SpaceAge;
