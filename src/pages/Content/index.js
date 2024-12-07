const LENGHT_THRES = 10;
function annotate(div) {
  const text = div.text;
  lines = text.split('\n');
  if (lines.length < 3) {
    // don't bother annotating only two lines.
    return text;
  }
  for (let i in lines) {
    const words = lines[i].split(' ');
    lines[i] = lines[i] + ' ' + words.length;
  }
  //todo: figure out actual annotation mechanism.
}
function main() {
  const divs = document.querySelectorAll('div');
  console.log(divs.length);
  for (let div of divs) {
    if (div.querySelector('div')) {
      // ignore any divs with div kids.
      continue;
    }
    if (div.textContent.length < LENGHT_THRES) {
      continue;
    }

    annotate(div);
  }
}

setTimeout(main, 4000);
