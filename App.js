import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import BusinessesShowScreen from './src/screens/BusinessesShowScreen';
const navigator = createStackNavigator({
  Search: SearchScreen,
  BusinessesShow: BusinessesShowScreen,
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Estabelecimentos'
  }
});

export default createAppContainer(navigator);