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

const events = [
    {'people': 24,'name': 'Holiday Bash', 'time': timestamp, 'color': '#ff5252', 'icon': 'ios-calendar'},
    {'people': 3,'name': 'Halloween', 'time': timestamp, 'color': '#227093', 'icon': 'ios-person'},
    {'people': 12,'name': 'Taco Tuseday', 'time': timestamp, 'color': '#ff5252', 'icon': 'ios-stats'},
    {'people': 54,'name': 'Christmas', 'time': timestamp, 'color': '#ffb142', 'icon': 'md-information-circle'},
    {'people': 15,'name': 'Another Holiday', 'time': timestamp, 'color': '#33d9b2', 'icon': 'ios-calendar'},
    {'people': 19,'name': 'Taco Tuseday', 'time': timestamp, 'color': '#227093', 'icon': 'ios-person'},
    {'people': 23,'name': 'Puppies', 'time': timestamp, 'color': '#ff5252', 'icon': 'ios-person'},
    {'people': 122,'name': 'Another Holiday', 'time': timestamp, 'color': '#227093', 'icon': 'ios-calendar'},
    {'people': 21,'name': 'Stay Hydrated', 'time': timestamp, 'color': '#33d9b2', 'icon': 'md-information-circle'},
    {'people': 11,'name': 'Saturday is for the Boys', 'time': timestamp, 'color': '#ffb142', 'icon': 'ios-calendar'},
    {'people': 6,'name': 'Monday Holiday', 'time': timestamp, 'color': '#ff5252', 'icon': 'ios-calendar'},
]

export default class InboxContainer extends Component {
  constructor(props) {
    super(props);
    
    this.handleOpenEvent = this.handleOpenEvent.bind(this);
  }

  handleOpenEvent(event) {
    const { navigate } = this.props.navigation;
    navigate('CreateEvent')
  }

  get Events() {
    return events.map((event, idx) => {
      return (
        <ListItem style={{borderBottomWidth:0, marginBottom: -10}}>
        <TouchableHighlight
          style={styles.card}
          key={`event-item-${idx}`}
          onPress={this.handleOpenEvent}
        >
          <View>
            <Text style={styles.title}>{event.name}</Text>
            <Text style={styles.time}>{event.time}</Text>
            <Text style={styles.description}>This is a brief description
                              of what the event is</Text>
            <View style={{flexDirection: 'row', marginTop: 3}}>
              <Icon color={colors.green01} name="users" size={14}/>
              <Text style={{fontWeight: '800', marginLeft: 5, color: colors.green01}}>{event.people}</Text>
            </View>
          </View>
        </TouchableHighlight>
        </ListItem>
      )
    })
  }

  render() {
    return (
        <SafeAreaView contentContainerStyle={styles.wrapper}>
        <ScrollView scrollEventThrottle={16}>
          <View style={{flexDirection: 'row', marginTop: 35}}>
            <Text style={styles.header}>Event List</Text>
            <TouchableHighlight
              onPress={this.handleOpenEvent}
              style={{position: 'absolute', right: 21, bottom: 5}}
            >
              <Icon 
                name="plus" 
                size={28} 
                color={colors.gray04} 

                />
            </TouchableHighlight>
          </View>
        <List>
          {this.Events}
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
  	marginTop: 4,
  	marginBottom: 2,
  	fontSize: 12,
  	fontWeight: '300',
  },
  description: {
  	fontWeight: '700',
  	fontSize: 10,
  },
});