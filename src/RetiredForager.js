var RetiredForagerBee = function() {
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(new ForagerBee());
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(treasure) {
  return 'I am too old, let me play cards instead';
}
RetiredForagerBee.prototype.treasureChest = [];
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}