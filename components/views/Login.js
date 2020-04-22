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
import {fetchUser} from '../../actions/Login';

class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      username: '',
      password: '',
    }

    this._handleSubmit = this._handleSubmit.bind(this);
  }
  
  componentDidMount() {
  }

  _handleSubmit() {
    const {username, password} = this.state;
    console.log('1',username, ' : ', password)
    this.props.fetchUser(username, password);
  }

  render() {
    const { navigation, user } = this.props;
  
    function pressHandler() {
      navigation.navigate('SignUp')
    }
    console.log('4: ', user)

    return (
      <View style={globalStyles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.text}>LOGIN</Text>
          <TextInput style={styles.input} placeholder={'Username/Email'} onChangeText={(value) => this.setState({username: value})} />
          <TextInput style={styles.input} placeholder={'Password'} onChangeText={(value) => this.setState({password: value})}/>
          <TouchableOpacity style={globalStyles.button} onPress={this._handleSubmit}>
            <Text style={globalStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pressHandler}>
            <Text style={styles.registerText}>Not Registered? Sign Up Here</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loginContainer: {
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
  registerText: {
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
    user: state.loginReducer.user,
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
)(Login);
