/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator, 
} from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import ExploreContainer from '../containers/ExploreContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainer';
import TripsContainer from '../containers/TripsContainer';
import CreateList from '../screens/CreateList';
import CreateEvent from '../screens/CreateEvent';
import CreateUser from '../screens/CreateUser';
import EventContainer from '../screens/EventContainer';
import colors from '../styles/colors';

const getTabBarLabel = (routeName) => {
  if (routeName === 'Explore') {
    return 'EXPLORE';
  } else if (routeName === 'Saved') {
    return 'SAVED';
  } else if (routeName === 'Profile') {
    return 'PROFILE';
  } else if (routeName === 'Inbox') {
    return 'INBOX';
  } else if (routeName === 'Trips') {
    return 'TRIPS';
  }
  return '';
}

export const ExploreTab = createStackNavigator({
  'ExploreContainer': {
    screen: ExploreContainer,
    navigationOptions: {
      header: null,
    }
  },
  CreateList: { screen: CreateList },
},
{
  mode: 'modal',
});

export const TripsTab = createStackNavigator({
  'TripsContainer': {
      screen: TripsContainer,
      navigationOptions: {
        header: null,
      }
  },
  CreateEvent: { screen: CreateEvent },
  Event: { screen: EventContainer},
},
{
  mode: 'modal',
});

export const UserTab = createStackNavigator({
  'InboxContainer': {
    screen: InboxContainer,
    navigationOptions: {
      header: null,
    }
  },
  User: { screen: EventContainer },
  CreateUser: { screen: CreateUser },
},
{
  mode: 'modal', 
});

const LoggedInTabNavigator = createBottomTabNavigator({
  'Inbox': {
    screen:  UserTab,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-archive-outline"
          size={25}
          color={tintColor}
        />
      ),
    }
  },
  'Trips': {
    screen: TripsTab,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-ionic"
          size={21}
          color={tintColor}
        />
      ),
    }
  }, 
  'Profile': {
    screen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-contact-outline"
          size={22}
          color={tintColor}
        />
      ),
    }
  },
  'Explore': { screen: ExploreTab,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name='ios-search'
          size={22}
          color={tintColor}
        />
      ),
    }
  },
  'Saved': {
    screen: SavedContainer,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="ios-heart-outline"
          size={22}
          color={tintColor}
        />
      ),
    }
  },
}, {
  tabBarOptions: {
  	labelStyle: {
  	  fontWeight: '600',
  	  marginBottom: 5,
  	},
    activeTintColor: colors.pink
  },
  tabBarPosition: 'bottom',
});

export default LoggedInTabNavigator;