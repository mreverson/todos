import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaseCount, decreaseCount} from '../actions/Counter';

class Counter extends Component {
  static mapStateToProps = state => {
    return {
      count: state.count,
    };
  };
  static mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        increaseCount,
        decreaseCount,
      },
      dispatch,
    );
  };
  render() {
    const {increaseCount, decreaseCount} = this.props;
    return (
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Simple Counter</Text>
        </View>
        <View style={styles.contentWrapper}>
          <Button title="SUBTRACT" onPress={decreaseCount} />
          <Text style={styles.text}>{this.props.count}</Text>
          <Button title="ADD" onPress={increaseCount} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    color: '#fff',
    fontSize: 30,
  },
  text: {
    paddingLeft: 20,
    paddingRight: 20,
    color: '#fff',
    fontSize: 30,
  },
});

export default connect(
  Counter.mapStateToProps,
  Counter.mapDispatchToProps,
)(Counter);
