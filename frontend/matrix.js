const symbols = [..."アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
                     "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ"];

const container = document.getElementById('jp-matrix');
const TOTAL = 1000;

for (let i = 0; i < TOTAL; i++) {
  const span = document.createElement('span');
  span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  container.appendChild(span);
}