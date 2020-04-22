import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../../styles/global';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../../actions/SignUp';

class SignUp extends Component {
  constructor(props) {
    super(props);
    state = {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
    }

    this._handleSubmit = this._handleSubmit.bind(this);
  }
  componentDidMount() {}

  _handleSubmit() {
    const {firstname, lastname, username, password} = this.state;
    console.log('1: ', firstname, ' : ', lastname, ' : ',username, ' : ', password)
    this.props.fetchUser(firstname, lastname, username, password);
  }

  render() {
    const { navigation, user} = this.props;

    function pressHandler() {
      navigation.navigate('Login')
    }

    return (
      <View style={globalStyles.container}>
        <View style={styles.signupContainer}>
          <Text style={styles.text}>SIGN UP</Text>
          <TextInput
            style={styles.input}
            placeholder={'First Name'}
            onChangeText={(value) => this.setState({firstname: value})}
          />
          <TextInput
            style={styles.input}
            placeholder={'Last Name'}
            onChangeText={(value) => this.setState({lastname: value})}
          />
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            onChangeText={(value) => this.setState({username: value})}
          />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={(value) => this.setState({password: value})}
          />
          <TouchableOpacity style={globalStyles.button} onPress={this._handleSubmit}>
            <Text style={globalStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pressHandler}>
            <Text style={styles.loginText}>Already have an Account? Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  signupContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    paddingLeft: 20,
    paddingRight: 20,
    color: '#fff',
    fontSize: 40,
  },
  loginText: {
    marginTop: 30,
    color: '#fff',
    fontSize: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    color: '#000',
    padding: 10,
    margin: 10,
    width: '80%',
    fontSize: 30,
  },
});

function mapStateToProps(state) {
  return {
    user: state.signUpReducer.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({fetchUser}, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
