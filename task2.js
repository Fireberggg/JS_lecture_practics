// TASK 2 : OOP, inheritance
console.log("-----HERE BEGINS THE TASK 2-----");

class Charmander {
  constructor({ height, weight }) {
    this._height = height;
    this._weight = weight;
    this._type = "fire";
    this._specie = "Lizard Pokemon";
    this._wings = false;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
  }

  get weight() {
    return this._weight;
  }

  set weight(weight) {
    this._weight = weight;
  }

  get type() {
    return this._type;
  }

  get specie() {
    return this._specie;
  }

  get wings() {
    return this._wings;
  }

  static canWalk() {
    return true;
  }

  canFly() {
    return this._wings ? true : false;
  }
}
class Charmeleon extends Charmander {
  constructor({ height, weight }) {
    super({ height, weight });
    this._specie = "Flame Pokemon";
  }
}

class Charizard extends Charmeleon {
  constructor({ height, weight }) {
    super({ height, weight });
    this._wings = true;
  }
}

let embury = new Charmander({ height: 1, weight: 15 });
let mercury = new Charmeleon({ height: 2, weight: 45 });
let morderbrand = new Charizard({ height: 10, weight: 200 });

console.log(embury.type);
console.log(embury.type === mercury.type);
console.log(mercury.type === morderbrand.type);
console.log(embury.specie);
console.log(mercury.specie);
console.log(morderbrand.specie === mercury.specie);
console.log(embury.height);
console.log(Charizard.canWalk());
console.log(embury.canFly());
console.log(embury.canFly() === mercury.canFly());
console.log(morderbrand.canFly());
