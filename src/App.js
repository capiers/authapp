import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA9vkCBc7-Gz1tunY6L2SZtrbJ1M0Q1K2E',
            authDomain: 'n-auth-322b0.firebaseapp.com',
            databaseURL: 'https://rn-auth-322b0.firebaseio.com',
            projectId: 'rn-auth-322b0',
            storageBucket: 'rn-auth-322b0.appspot.com',
            messagingSenderId: '943318530840'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            }
            else
            {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
          case true:
            return (
                <View style={{ flex: 1, marginTop: 20 }}>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                </View>
            );
          case false:
            return (
                    <LoginForm />
            );
          default:
            return (
                <View style={{ flex:1 }}>
                    <Spinner size="large" />
                </View>
            );
        }
      }

      render() {
        return (
          <View style={{ flex:1 }}>
            <Header headerText="Authentication" />
            {this.renderContent()}
          </View>
        );
      }
}

export default App;