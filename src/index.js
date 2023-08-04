import Phaser from "phaser";
import "./styles.css";

import BootScene from "./BootScene.js";
import PlayScene from "./PlayScene.js";
import Highscore from "./Highscore.js";
import InputPanel from "./InputPanel.js";
import Starfield from "./Starfield.js";

const config = {
  type: Phaser.AUTO,
  width: 625,
  height: 600,
  parent: "game-container",
  pixelArt: true,
  scene: [BootScene, PlayScene, Highscore, InputPanel, Starfield]
};

new Phaser.Game(config);
