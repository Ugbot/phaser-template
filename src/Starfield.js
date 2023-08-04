import Phaser from "phaser";

class Starfield extends Phaser.Scene {
  constructor() {
    super({
      key: "Starfield"
    });

    this.stars;

    this.distance = 300;
    this.speed = 250;

    this.max = 500;
    this.xx = [];
    this.yy = [];
    this.zz = [];
  }

  create() {
    this.input.keyboard.enabled = false;

    this.width = this.sys.game.config.width;
    this.height = this.sys.game.config.height;

    this.stars = this.add.blitter(0, 0, "star");

    for (let i = 0; i < this.max; i++) {
      this.xx[i] = Math.floor(Math.random() * this.width) - this.width / 2;
      this.yy[i] = Math.floor(Math.random() * this.height) - this.height / 2;
      this.zz[i] = Math.floor(Math.random() * 1700) - 100;

      let perspective = this.distance / (this.distance - this.zz[i]);
      let x = this.width / 2 + this.xx[i] * perspective;
      let y = this.height / 2 + this.yy[i] * perspective;

      this.stars.create(x, y);
    }
  }

  update(time, delta) {
    for (let i = 0; i < this.max; i++) {
      let perspective = this.distance / (this.distance - this.zz[i]);
      let x = this.width / 2 + this.xx[i] * perspective;
      let y = this.height / 2 + this.yy[i] * perspective;

      this.zz[i] += this.speed * (delta / 1000);

      if (this.zz[i] > 300) {
        this.zz[i] -= 600;
      }

      let bob = this.stars.children.list[i];

      bob.x = x;
      bob.y = y;
    }
  }
}

export default Starfield;
