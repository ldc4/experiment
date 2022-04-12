async function getComponent() {
  const element = document.createElement('div');
  // return import('lodash').then(({ default: _ }) => {
  //   const element = document.createElement('div');
  //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //   return element;
  // }).catch((error) => 'An error occurred while loading the component');

  const { default: _ } = await import('lodash');
  element.innerHTML = _.join(['Hello', 'webpack5'], ' ');
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
})
