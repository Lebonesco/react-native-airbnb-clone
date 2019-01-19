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
  SafeAreaView,
} from 'react-native';
import { LineChart, Path, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';
import colors from '../styles/colors';

export default class InboxContainer extends Component {
  render() {
    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ].map((val) => {
      return val + 80;
    })

    const axesSvg = { fontSize: 12, fill: 'grey', fontWeight: '600' };
    const verticalContentInset = { top: 20, bottom: 10 }
    const xAxisHeight = 25

    const Gradient = () => (
      <Defs key={'gradient'}>
          <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
              <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
              <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
          </LinearGradient>
      </Defs>
  )

    const Shadow = ({ line }) => (
        <Path
            key={'shadow'}
            y={2}
            d={line}
            fill={'none'}
            strokeWidth={4}
            stroke={'rgba(134, 65, 244, 0.2)'}
        />
    )

    return (
      <SafeAreaView style={styles.wrapper}>
        <Text style={styles.heading}>Engagement Stats</Text>
        <View style={styles.stats}>
          <YAxis
            data={data}
            style={{ marginBottom: xAxisHeight}}
            contentInset={verticalContentInset}
            svg={axesSvg}
          />
        <View style={{ flex: 1 }}>
        <LineChart
            style={ {flex: 1 } }
            data={ data }
            svg={{
              strokeWidth: 2,
              stroke: 'url(#gradient)',
          }}
            contentInset={ { top: 20, bottom: 10 } }
        >
          <Grid />
          <Gradient/>
          <Shadow/>
        </LineChart>
        <XAxis
          style={{ marginHorizontal: -10, height: xAxisHeight }}
          data={data.filter((data, i) => {
                  if (i % 4 === 0) {
                    return true;
                  }
          })}
          formatLabel={(value, index) => index}
          contentInset={{ left: 10, right: 10 }}
          svg={axesSvg}
        />
                </View>
      </View>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    marginTop: 65,
  },
  stats: {
    height: 250, 
    paddingLeft: 10,
    paddingRight: 10, 
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04,
  }
});