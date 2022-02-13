const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_HEIGHT = (canvas.height = 800);
const CANVAS_WIDTH = (canvas.width = 700);
let gameSpeed = 6;
//et gameFrame = 0;

const backroundLayer1 = new Image();
backroundLayer1.src = "layer-1.png";

const backroundLayer2 = new Image();
backroundLayer2.src = "layer-2.png";

const backroundLayer3 = new Image();
backroundLayer3.src = "layer-3.png";

const backroundLayer4 = new Image();
backroundLayer4.src = "layer-4.png";

const backroundLayer5 = new Image();
backroundLayer5.src = "layer-5.png";

window.addEventListener("load", function () {
  const slider = document.getElementById("slider");
  slider.value = gameSpeed;
  const showGameSpeed = document.getElementById("showGameSpeed");
  showGameSpeed.innerHTML = gameSpeed;
  slider.addEventListener("change", function (event) {
    gameSpeed = event.target.value;
    showGameSpeed.innerHTML = event.target.value;
  });

  class Layer {
    constructor(image, speedModifier) {
      this.x = 0;
      this.y = 0;
      this.width = 2400;
      this.height = 700;
      // this.x2 = this.width;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = gameSpeed * this.speedModifier;
    }
    update() {
      this.speed = gameSpeed * this.speedModifier;
      if (this.x <= -this.width) {
        this.x = 0;
      }
      this.x = this.x - this.speed;

      // this.x = (gameFrame * this.speed) % this.width;

      // if (this.x2 <= -this.width) {
      //   this.x2 = this.width + this.x - this.speed;
      // }
      //   this.x2 = Math.floor(this.x2 - this.speed);
      // }
    }
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.drawImage(
        this.image,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
    }
  }

  const layer1 = new Layer(backroundLayer1, 0.008);
  const layer2 = new Layer(backroundLayer2, 0.4);
  const layer3 = new Layer(backroundLayer3, 0.6);
  const layer4 = new Layer(backroundLayer4, 0.8);
  const layer5 = new Layer(backroundLayer5, 1);

  const gameObjects = [layer1, layer2, layer3, layer4, layer5];

  //let x = 0;
  //let x2 = 2400;

  function animate() {
    ctx.clearRect(0, 0, CANVAS_HEIGHT, CANVAS_HEIGHT);
    gameObjects.forEach((object) => {
      object.update();
      object.draw();
    });
    //gameFrame--;
    // ctx.drawImage(backroundLayer4, x, 0);
    // ctx.drawImage(backroundLayer4, x2, 0);
    // if (x < -2400) x = 2400 + x2 - gameSpeed;
    // else x -= gameSpeed;
    //if (x2 < -2400) x2 = 2400 + x - gameSpeed;
    // else x2 -= gameSpeed;
    requestAnimationFrame(animate);
  }
  animate();
});
