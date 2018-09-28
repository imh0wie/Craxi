import Taxi from './taxi';
import Sedan from './sedan';
import Suv from './suv';
import Car from './car';
import LaneLines from './lane_lines';
import Sidewalk from './sidewalk';

class Game {
  constructor() {
    this.taxi = new Taxi();
    this.collided = false;
    this.velocity = 200;
  }


}
