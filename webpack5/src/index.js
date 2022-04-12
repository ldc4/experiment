import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack4'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = () => { printMe(1, 2) };

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());