import React from 'react';
import PropTypes from 'prop-types';
import NavigatorWrapper from './NavigatorWrapper';
import DefaultProps from 'main/DefaultProps';

const NavigatorCreator = props => {
  return (
    <props.Navigator
      initialRouteName={props.initialRouteName}
      headerMode='screen'
      screenOptions={props.screenOptions}
    >
      {
        Object.keys(props.routeList).map(key => {
          const route = props.routeList[key];
          const { title, options, ...restScreenOptions } = route;
          route.name = key; // add name as key
          return <props.Screen
            key={key}
            name={key}
            options={{
              title: title,
              ...options,
            }}
            {...restScreenOptions}
          >
            {
              navigationProps => NavigatorWrapper({
                navigationProps,
                route
              })
            }
          </props.Screen>
        })
      }
    </props.Navigator>
  );
};

const defaultProps = {
  screenOptions: {
    animationEnabled: true
  }
}

NavigatorCreator.propTypes = {
  Navigator: PropTypes.func.isRequired,
  Screen: PropTypes.func.isRequired,
  routeList: PropTypes.object.isRequired,
  initialRouteName: PropTypes.string.isRequired,
  screenOptions: PropTypes.object
}

export default DefaultProps(NavigatorCreator, defaultProps);