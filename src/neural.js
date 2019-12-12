import * as PIXI from 'pixi.js'

const $ = require('jquery');

const chapter1 = function(state) {

  const chapterIndex = 1;

  const title = "<h1>Neural Networks: Chapter" + chapterIndex + "</h1>";

  $("body").append(title);

  document.body.appendChild(state.app.view);

  const rnd = Math.random;

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

  const slider = (name) => {
    const s1 = $('<p>' + name + '</p>');
    const s2 = $(
      '<input type="range" min="0" max="1" value="0.5" step="0.01" class="slider" id="' + name + '">');
    const s3 = $('<p>0.5</p>');
    s2.on('input', () => {
      s3.html(s2.val());
    });
    $("body").append(s1);
    $("body").append(s2);
    $("body").append(s3);
    return {
      s1: s1,
      s2: s2,
      s3: s3
    };
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

  const x1s = slider('x1');
  const x2s = slider('x2');
  const w1s = slider('w1');
  const w2s = slider('w2');
  const bs = slider('b');
  const ys = slider('y');

  const evalNet = () => {
    const x1 = parseFloat(x1s.s2.val());
    const x2 = parseFloat(x2s.s2.val());
    const w1 = parseFloat(w1s.s2.val());
    const w2 = parseFloat(w2s.s2.val());
    const b = parseFloat(bs.s2.val());
    const y = x1 * w1 + x2 * w2 + b;
    console.log(y);
    ys.s3.html(y);
    //ys.s2.val(y);
    //ys.trigger('change');
  };
  x1s.s2.on('input', evalNet);
  x2s.s2.on('input', evalNet);
  w1s.s2.on('input', evalNet);
  w2s.s2.on('input', evalNet);
  bs.s2.on('input', evalNet);
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
