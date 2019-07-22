var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
}
  // this.color = Bee().color;

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
}
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
};


// HoneyMakerBee.color = HoneyMakerBee.prototype.color;
