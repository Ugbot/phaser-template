import Phaser from "phaser";

class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: "BootScene"
    });
  }

  preload() {
    this.load.image("block", "../assets/block.png");
    this.load.image("rub", "../assets/rub.png");
    this.load.image("end", "../assets/end.png");

    this.load.bitmapFont(
      "arcade",
      "../assets/arcade.png",
      "../assets/arcade.xml"
    );

    this.load.image("star", "../assets/star4.png");
  }

  create() {
    this.scene.start("PlayScene");
  }
}

export default BootScene;
