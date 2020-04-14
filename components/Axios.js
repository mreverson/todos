import React, {Component} from 'react';
import {View, StyleSheet, Button, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBreeds} from '../actions/AxiosTest';

class Axios extends Component {
  componentDidMount() {
    this.props.fetchBreeds();
  }

  render() {
    const {breeds, isFetching} = this.props;
    console.log(isFetching)
    if (!breeds) {
      return (
        <View style={styles.breeds}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    } else {
      return (
        <View style={styles.breeds}>
          <Text style={styles.text}>{this.props.breeds}</Text>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  breeds: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    breeds: state.axiosReducer.breeds,
    isFetching: state.axiosReducer.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({fetchBreeds}, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Axios);
