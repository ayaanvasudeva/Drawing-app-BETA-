let pg;
let colour = prompt("CHOOSE A COLOUR:")

function setup() {
  createCanvas(710, 400);
  background(102);
  let clearB = createButton('Clear');
  clearB.position(8, 20);
  clearB.mousePressed(() => {
    background(102);
  });
  let DownloadB = createButton('Download');
  DownloadB.position(50, 20);
  DownloadB.mousePressed(() => {
    saveCanvas('artwork.jpg');
  });
  let ColorB = createButton('ChangeColor');
  ColorB.position(120, 20);
  ColorB.mousePressed(() => {
   colour = prompt("CHOOSE A COLOUR:")
    draw()
  });
}

function draw() {
  stroke(colour);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(4);
  }

}

