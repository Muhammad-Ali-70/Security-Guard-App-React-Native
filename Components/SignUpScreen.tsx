import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import Icon from 'react-native-vector-icons/FontAwesome';

function SignUpScreen() {
    const [focusedField, setFocusedField] = useState<null | string>(null);

    return (
        <SafeAreaView style={styles.loginPageContainer}>
            <View style={styles.textInputContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="user" size={30} color={focusedField === 'name' ? 'blue' : 'black'} style={styles.icon} />
                </View>
                <TextInput 
                    style={styles.textInputfeild} 
                    placeholder="Name" 
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                />
            </View>

            <View style={styles.textInputContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="envelope" size={26} color={focusedField === 'email' ? 'blue' : 'black'} style={styles.icon} />
                </View>
                <TextInput 
                    style={styles.textInputfeild} 
                    placeholder="Email" 
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                />
            </View>

            <View style={styles.textInputContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="lock" size={30} color={focusedField === 'pass' ? 'blue' : 'black'} style={styles.icon} />
                </View>
                <TextInput 
                    style={styles.textInputfeild} 
                    placeholder="Password" 
                    secureTextEntry={true}
                    onFocus={() => setFocusedField('pass')}
                    onBlur={() => setFocusedField(null)}
                />
            </View>

            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={()=>{}} text="Sign Up" color="black" textcolor="white" />
            </View>
        </SafeAreaView>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    loginPageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    textInputContainer: {
        backgroundColor: "lightgrey",
        width: "100%",
        height: 50,
        flexDirection: "row",
        borderRadius: 6,
        marginBottom: 15,
        borderBottomWidth: 1.5,
        borderBottomColor: "black",
    },
    textInputfeild: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 7,
        fontSize: 16,
        color: "black",
    },
    iconContainer: {
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        // borderRightColor: "black",
        // borderRightWidth: 2,
    },
    icon: {
        //paddingRight: 15,
    },
    buttonContainer: {
        marginTop: 30,
        width: "100%",
    },
});
