import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../Header';
import {fetchBreeds} from '../../actions/AxiosTest';

class Axios extends Component {
  componentDidMount() {
    this.props.fetchBreeds();
  }

  render() {
    const {breeds, isFetching} = this.props;
    if (isFetching) {
      return (
        <View>
          <View style={styles.breeds}>
            <ActivityIndicator size={'large'} />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <Header title={'AXIOS TEST'} />
          <View style={styles.breeds}>
            <FlatList
              data={breeds}
              keyExtractor={item => item.index}
              renderItem={item => (
                <Text style={styles.text}>{item.item[0]}</Text>
              )}
            />
          </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  breeds: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
