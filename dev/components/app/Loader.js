import React from 'react';
import { Overlay, Text } from 'react-native-elements';

const Loader = errorMsg => {
  return (
    <Overlay
      isVisible={true}
    >
      <Text>loading</Text>
    </Overlay>
  )
}

export default Loader;
