import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigatorCreator from './NavigatorCreator';

const Tab = createBottomTabNavigator();

const BottomNavigator = props => NavigatorCreator({ ...props, ...Tab });

export default BottomNavigator;