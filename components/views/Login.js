import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Login extends Component {
  componentDidMount() {}

  render() {
    const {} = this.props;

    return (
      <View>
        <View>
          
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    paddingLeft: 20,
    paddingRight: 20,
    color: '#fff',
    fontSize: 30,
  },
});

function mapStateToProps(state) {
  return {
    //Key : Value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({}, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
