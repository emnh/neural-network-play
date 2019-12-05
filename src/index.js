import * as PIXI from 'pixi.js'

const $ = require('jquery');

const chapter1 = function(state) {

  const chapterIndex = 1;

  const title = "<h1>Neural Networks: Chapter" + chapterIndex + "</h1>";

  $("body").append(title);

  document.body.appendChild(state.app.view);

  const rnd = Math.random;

  const x1 = rnd();
  const x2 = rnd();

  const w1 = rnd();
  const w2 = rnd();
  const b = rnd();

  const y = x1 * w1 + x2 * w2 + b;

  const ft = x => {
    const style = new PIXI.TextStyle({
      fill: '#ffffff'
    });
    const t = new PIXI.Text(x, style);
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0x8080FF, 1);
    graphics.drawCircle(0, 0, 25);
    graphics.endFill();
    const ct = new PIXI.Container();
    ct.addChild(graphics);
    ct.addChild(t)
    t.x -= t.width / 2;
    t.y -= t.height / 2;
    state.container.addChild(ct);
    return ct;
  };

  const line = (ct1, ct2) => {
    const g = new PIXI.Graphics();
    g.moveTo(ct1.x + ct1.width / 2, ct1.y);
    g.lineStyle(1);
    g.lineTo(ct2.x - ct2.width / 2, ct2.y);
    state.container.addChild(g);
    return g;
  };

  const deltaX = 100;
  const deltaY = 200;

  const inputX = 100;
  let inputY = 100;
  const x1t = ft("x1");
  x1t.x = inputX;
  x1t.y = inputY;
  const x2t = ft("x2");
  x2t.x = inputX;
  inputY += deltaY;
  x2t.y = inputY;

  const outputX = 300;
  let outputY = 100;

  const h1t = ft("h1");
  h1t.x = outputX;
  h1t.y = outputY;

  const h2t = ft("h2");
  h2t.x = outputX;
  outputY += deltaY;
  h2t.y = outputY;

  const biasX = 300;
  const biasY = 200;
  const bt = ft("b");
  bt.x = biasX;
  bt.y = biasY;

  const resultX = 500;
  const resultY = 200;

  const yt = ft("y");
  yt.x = resultX;
  yt.y = resultY;

  line(x1t, h1t);
  line(x1t, h2t);
  line(x2t, h1t);
  line(x2t, h2t);
  line(h1t, yt);
  line(h2t, yt);
  line(bt, yt);
};

const pixi = function() {
  const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0xFFFFFF, resolution: window.devicePixelRatio || 1,
  });

  const container = new PIXI.Container();

  app.stage.addChild(container);

  return {
    app: app,
    container: container
  };
};

const state = pixi();
chapter1(state);
