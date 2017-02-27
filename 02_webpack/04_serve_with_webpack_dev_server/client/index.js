import join from 'lodash/join';

const HelloWebpack = () => {
  const element =  document.createElement('div');
  element.innerHTML = join(['hello','webpack'],' ');
  document.body.appendChild(element);
}

HelloWebpack();