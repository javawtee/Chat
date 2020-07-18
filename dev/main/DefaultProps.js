import React from 'react';

export default DefaultProps = (Component, defaultProps) => {
  return props => {
    const newProps = shallowClone(props, defaultProps);
    return <Component {...newProps} />
  }
};

// using ES6 spread alone didn't work. ie: newProps = { ...defaultProps, ...props }
// ie: empty object from props will override object in defaultProps
const shallowClone = (props, defaultProps, newProps = {}) => {
  Object.keys(props).forEach(propKey => {
    let keyClone = props[propKey];
    if (defaultProps.hasOwnProperty(propKey)) {
      keyClone = { ...defaultProps[propKey], ...props[propKey] };
    }
    newProps = {
      ...newProps,
      [propKey]: keyClone
    }
  });
  return newProps;
}