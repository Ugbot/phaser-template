import Phaser from "phaser";

class PlayScene extends Phaser.Scene {
  constructor() {
    super({
      key: "PlayScene"
    });
  }

  create() {
    this.scene.start("Highscore");
  }

  update(time, delta) {}
}

export default PlayScene;
