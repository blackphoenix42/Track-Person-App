import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>

            <Input label="Email" />
            <Spacer />
            <Input label="Password" />

            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={() => navigation.navigate('Signin')}
                />
            </Spacer>
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
})
