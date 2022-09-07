// import Print from './haha';
import _ from 'lodash';
import dayjs from 'dayjs';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack5', new dayjs()], ' ');
  // element.onclick = Print.bind(null, 'Hello webpack!');
  return element;
}

document.body.appendChild(component())