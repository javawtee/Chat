import { createStackNavigator } from '@react-navigation/stack';
import NavigatorCreator from './NavigatorCreator';

const Stack = createStackNavigator();

const StackNavigator = props => NavigatorCreator({ ...props, ...Stack });

export default StackNavigator;