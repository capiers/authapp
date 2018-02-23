import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, FieldInput, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        message: '',
        error: '',
        loading: false
     };

     onButtonPress() {
        const { email, password } = this.state;

        this.setState({ message: '', error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.accountCreated.bind(this))
                    .catch(this.onLoginFailed.bind(this));
            });
     }

     accountCreated() {
        this.setState({ 
            message: 'Account created', 
            email: '', 
            password: '', 
            loading: false });
     }

     onLoginFailed() {
        this.setState({ 
            error: 'Authentication Failed!', 
            loading: false });
     }

     onLoginSuccess () {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '',
            message: 'Login successfull'
        });
     }

     renderButton () {
        if(this.state.loading) {
            return (
                <Spinner size="small"/>
            );
        }
        else
        {
            return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
            );
        }
     }

    render() {
        return (
            <Card>
                <CardSection>
                    <FieldInput 
                        label="Email:"
                        placeholder="user@domain.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <FieldInput 
                            secureTextEntry
                            label="Password:"
                            placeholder="password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                    />
                </CardSection >
                <View style={{ height: 30 }}>
                    <Text style={styles.messageTextStyle}>
                        {this.state.message}
                    </Text>
                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                </View>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    messageTextStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'green'
    },
    errorTextStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: 'red'
    }
}
export default LoginForm;