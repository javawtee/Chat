import React from 'react';
import PropTypes from 'prop-types';

const NavigatorWrapper = props => {
  const {
    navigationProps: {
      navigation,
      route: navigatorRoute
    },
    route
  } = props;

  const goTo = (routeName, params) => {
    navigation.navigate(routeName, params);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const goToTop = () => {
    navigation.popToTop();
  };

  const reload = params => {
    navigation.push(navigatorRoute.name, params);
  };

  const setNewOptions = options => {
    navigation.setOptions(options);
  };

  const addNavListener = (listenerName, nextActions) => {
    navigation.addListener(listenerName, e => nextActions(e));
  };

  const actions = { goTo, goBack, goToTop, reload, setNewOptions, addNavListener };

  return <route.Component
    {...actions}
    params={navigatorRoute.params}
  />
};

NavigatorWrapper.propTypes = {
  navigationProps: PropTypes.exact({
    navigation: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired
  }),
  route: PropTypes.object.isRequired
};

export default NavigatorWrapper;