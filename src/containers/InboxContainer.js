/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import colors from '../styles/colors';
import Icon from '@expo/vector-icons/FontAwesome';

import {
  List,
  ListItem,
} from 'native-base';
import FontAwesome from '@expo/vector-icons/FontAwesome';

var timestamp = "Mon. 6pm, Jan. 7"

const users = [
    {'name': 'Cory Tao', 'experience': 60, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
    {'name': 'James Franco', 'experience': 30, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
    {'name': 'Micheal Hackson', 'experience': 45, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
    {'name': 'Kate Winston', 'experience': 61, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
    {'name': 'Margaret Thatcher', 'experience': 68, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
    {'name': 'Mao Zedong', 'experience': 69, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
    {'name': 'Winston Churchal', 'experience': 91, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
    {'name': 'Lil Mosey', 'experience': 40, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
    {'name': 'Koby Bryant', 'experience': 66, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
    {'name': 'Kim Kardashian', 'experience': 29, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
    {'name': 'Justin Timberlake', 'experience': 44, 'email': 'test@gmail.com', 'phone': '555-555-5555'},
]

export default class InboxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
    }

    this.handleOpenUser = this.handleOpenUser.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.onCreateUserClose = this.onCreateUserClose.bind(this);
  }

  onCreateUserClose(user, userCreated) {
    let { users } = this.state;
    if (true) {
      users.push(user);
    }
    this.setState({users});
  }

  handleOpenUser(userId) {
    alert('open user ', userId)
    const { navigate } = this.props.navigation;
    navigate('User',{ user: this.state.users[userId]});
  }

  handleCreateUser(user) {
    const { navigate } = this.props.navigation;
    navigate('CreateUser', {onCreateUserClose: this.onCreateUserClose});
  }

  get users() {
    return this.state.users.map((user, idx) => {
      return (
        <ListItem style={{borderBottomWidth:0, marginBottom: -10}}>
        <TouchableOpacity
          style={styles.card}
          key={`user-item-${idx}`}
          onPress={() => this.handleOpenUser(idx)}
        >
          <View>
            <Text style={styles.title}>{user.name ? user.name : "Untitled"}</Text>
            <View style={{flexDirection: 'row', marginTop: 3}}>
              {/* <Icon color={colors.green01} name="chartBar" size={14}/> */}
              <Text style={{fontWeight: '800', marginLeft: 5, color: colors.green01}}>experience</Text>
              <Text style={{fontWeight: '800', marginLeft: 5, color: colors.green01}}>{user.experience ? user.experience : 0}%</Text>
            </View>
          </View>
        </TouchableOpacity>
        </ListItem>
      )
    })
  }

  render() {
    return (
        <SafeAreaView contentContainerStyle={styles.wrapper}>
        <ScrollView scrolluserThrottle={16}>
          <View style={{flexDirection: 'row', marginTop: 35}}>
            <Text style={styles.header}>User List</Text>
            <TouchableOpacity
              onPress={this.handleCreateUser}
              style={{position: 'absolute', right: 21, bottom: 5}}
            >
              <Icon 
                name="plus" 
                size={28} 
                color={colors.gray04} 
                />
            </TouchableOpacity>
          </View>
        <List>
          {this.users}
        </List>
        </ScrollView>
        </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontWeight: '800',
    fontSize: 36,
    paddingLeft: 21,
    color: colors.gray04
  },  
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.green01,
    padding: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 26,
    color: colors.green01,
    textAlign: 'left',
  },
  time: {
  	color: colors.gray04,
  	marginTop: 2,
  	marginBottom: 2,
  	fontSize: 12,
  	fontWeight: '300',
  },
  description: {
  	fontWeight: '700',
  	fontSize: 10,
  },
});