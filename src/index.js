import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick'

ReactDOM.render(
  <div>
    <ClickityClick />
  </div>,
  document.getElementById('root')
);


// The spread operator syntax can be used in JavaScript to 'de-compose'
// objects and arrays. When used on an object as we see above,
// ...this.state.addressInfo returns all the keys and values from within
//  that object. We're saying addressInfo should be equal to all the keys and
//  values that make up addressInfo, and, in addition, there should be city
//  key with the value New York City. If there is already a city key
//  inside addressInfo, it will be overwritten. If it doesn't exist,
//  it will be added.


// It's important to note the difference between changes in state and changes in props. Changes in state and/or props will both trigger a re-render of our React component. However, changes in state can only happen internally due to components changing their own state. Thus, a component can trigger changes in its own state.
//
// A component cannot change its props. Changes in props can only happen externally, meaning the parent or grandparent component changes the values it passing down to its children.

//so change in state or props will rerender
//but changes in state only happen internally due to components changing their own state
//but components cannnot change props
