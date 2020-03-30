// import React, { Component } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// // import { TouchableOpacity } from 'react-native-gesture-handler';

// export default class Authentication extends Component {
//   render() {
//     return (
//       <View >
//         <Text>This is Authentication</Text>
//         <TouchableOpacity
//           onPress={() => {
//             this.props.navigation.navigate('Main');
//           }}>
//           <Text>Navigate to Item screen</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { Component } from 'react';
import {
  View, Text, TextInput,
  TouchableOpacity, Image, StyleSheet
} from 'react-native';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
  }

  signIn() {
    this.setState({ isSignIn: true });
  }

  signUp() {
    this.setState({ isSignIn: false });
  }

  goBackToMain() {
    // const { navigator } = this.props;
    // navigator.pop();
    this.props.navigation.navigate('Main');
  }
  render() {
    const signInJSX = (
      <View>
        <TextInput style={styles.inputStyle} placeholder="Enter your email" />
        <TextInput style={styles.inputStyle} placeholder="Enter your password" />
        <TouchableOpacity style={styles.bigButton}>
          <Text style={styles.buttonText}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    );

    const signUpJSX = (
      <View>
        <TextInput style={styles.inputStyle} placeholder="Enter your name" />
        <TextInput style={styles.inputStyle} placeholder="Enter your email" />
        <TextInput style={styles.inputStyle} placeholder="Enter your password" />
        <TextInput style={styles.inputStyle} placeholder="Re-enter your password" />
        <TouchableOpacity style={styles.bigButton}>
          <Text style={styles.buttonText}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    );
    const { isSignIn } = this.state;
    const mainJSX = isSignIn ? signInJSX : signUpJSX;
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableOpacity onPress={() => { this.goBackToMain() }}>
            <Image source={icBack} style={styles.iconStyle} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Wearing a Dress</Text>
          <Image source={icLogo} style={styles.iconStyle} />
        </View>
        {mainJSX}
        <View style={styles.controlStyle}>
          <TouchableOpacity style={styles.signInStyle}
            onPress={this.signIn.bind(this)}
          >
            <Text style={isSignIn ? styles.activeStyle : styles.inactiveStyle}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpStyle}
            onPress={this.signUp.bind(this)}
          >
            <Text style={!isSignIn ? styles.activeStyle : styles.inactiveStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EBA77',
    padding: 20,
    justifyContent: 'space-between'
  },
  row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titleStyle: {
    color: '#FFF',
    // fontFamily: 'Avenir', 
    fontSize: 30
  },
  iconStyle: { width: 30, height: 30 },
  controlStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  inactiveStyle: {
    color: '#D7D7D7'
  },
  activeStyle: {
    color: '#3EBA77'
  },
  signInStyle: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 1
  },
  signUpStyle: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    alignItems: 'center',
    flex: 1,
    marginLeft: 1,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 30
  },
  bigButton: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    // fontFamily: 'Avenir',
    color: '#fff',
    fontWeight: '400'
  }
});