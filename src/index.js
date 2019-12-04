import * as PIXI from 'pixi.js'

const $ = require('jquery');

const chapter1 = function(container) {

  const chaperIndex = 1;

  const title = "<h1>Neural Networks: Chapter" + chapterIndex + "</h1>";

  $("body").append(title);

  const rnd = Math.random();

  const x1 = rnd();
  const x2 = rnd();

  const w1 = rnd();
  const w2 = rnd();
  const b = rnd();

  const out = x1 * w1 + x2 * w2 + b;
};

const pixi = function() {
  const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
  });
  document.body.appendChild(app.view);

  const container = new PIXI.Container();

  app.stage.addChild(container);

  // Create a new texture
  const texture = PIXI.Texture.from('examples/assets/bunny.png');

  // Create a 5x5 grid of bunnies
  for (let i = 0; i < 25; i++) {
      const bunny = new PIXI.Sprite(texture);
      bunny.anchor.set(0.5);
      bunny.x = (i % 5) * 40;
      bunny.y = Math.floor(i / 5) * 40;
      container.addChild(bunny);
  }

  // Move container to the center
  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;

  // Center bunny sprite in local container coordinates
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

  // Listen for animate update
  app.ticker.add((delta) => {
      // rotate the container!
      // use delta to create frame-independent transform
      container.rotation -= 0.01 * delta;
  });

  return container;
};

const container = pixi();
chapter(container);
