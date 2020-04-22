import React, {Component} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import {globalStyles} from '../../styles/global';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaseCount, decreaseCount} from '../../actions/Counter';

class Counter extends Component {
  render() {
    const {increaseCount, decreaseCount} = this.props;
    return (
      <View style={globalStyles.container}>
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
function mapStateToProps(state) {
  return {
    count: state.counterReducer.count,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({increaseCount, decreaseCount}, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
