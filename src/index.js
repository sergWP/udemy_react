import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const elem = <h2 class='greeting'>Buy Boom!</h2>;
// const elem = React.createElement('h2', {className: 'greeting'}, 'Buy Boom!');

// многострочная структура в круглых скобках
// всегда один корневой блок-родитель

const text = 'Buy Boom!';
const num = 5;
const elem = (
    <div>
      <h2 className={'greeting'}>Buy Boom: {num * 2}</h2>
      <label htmlFor=""></label>
      <input type="text" placeholder={'Boom'} />
      <button tabIndex={0}>Start</button>
    </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);