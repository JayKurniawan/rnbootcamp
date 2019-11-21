import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/home/Home';
import NewsContentScreen from './src/screens/newsContent/NewsContent';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        title: 'Headlines'
      }
    },
    Content: {
      screen: NewsContentScreen,
      navigationOptions:{
        header:null
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);