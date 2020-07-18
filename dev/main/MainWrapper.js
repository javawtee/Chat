import Provider from './Provider';
import Navigator from './navigators';

export default function MainWrapper() {
  return Provider(Navigator);
}
