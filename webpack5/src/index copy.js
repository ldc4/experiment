import Print from './haha';

async function getComponent() {
  const element = document.createElement('div');
  // return import('lodash').then(({ default: _ }) => {
  //   const element = document.createElement('div');
  //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //   return element;
  // }).catch((error) => 'An error occurred while loading the component');

  const { default: _ } = await import('lodash');
  const { default: dayjs } = await import('dayjs');
  element.innerHTML = _.join(['Hello', 'webpack5', new dayjs()], ' ');
  // element.onclick = Print.bind(null, 'Hello webpack!');
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
})
