import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import Colors from "../../constants/Colors";
import { Icon } from "@rneui/themed";
import { SCREEN_HEIGHT } from "../../constants/UiData";

const SignUp = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.secondary,
      }}
    >
      <StatusBar backgroundColor={Colors.secondary} />
      <Image
        source={require("../../assets/Vector3.png")}
        style={{
          position: "absolute",
          top: -37,
          left: -50,
          height: 169,
          width: 400,
          resizeMode: "contain",
          marginTop: 50,
        }}
      />
      <Image
        source={require("../../assets/Vector2.png")}
        style={{
          position: "absolute",
          top: 27,
          left: -130,
          height: 209,
          width: 690,
          resizeMode: "contain",
          marginTop: 50,
        }}
      />
      <Image
        source={require("../../assets/Vector1.png")}
        style={{
          position: "absolute",
          top: 27,
          left: -50,
          height: 209,
          width: 456,
          resizeMode: "contain",
          marginTop: 50,
        }}
      />
      <View style={styles.bordheader}>
        <Text
          style={{
            fontSize: 50,
            fontFamily: "montserrat-bold",
            color: "white",
          }}
        >
          PERKS
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontFamily: "montserrat-bold",
            color: "white",
            marginTop: 2,
          }}
        >
          Make most from reward points
        </Text>
      </View>

      <View style={styles.loginform}>
        
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: -190,
            marginBottom: 20,
          }}
        >
          <Icon
            name="chevron-left"
            size={30}
            onPress={() => navigation.navigate("OnboardingScreen")}
          />
          <Text
            style={{
              fontFamily: "montserrat-bold",
              fontSize: 28,
              marginLeft: 80,
              // color: "white",
            }}
          >
            Sign Up
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Full name"
            placeholderTextColor="grey"
            
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Phone Number"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="grey"
          />
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => navigation.navigate("HomeScreen")}
            style={styles.loginbtn}
          >
            <Text
              style={{
                fontFamily: "montserrat-bold",
                fontSize: 23,
                color: "white",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  bordheader: {
    position: "relative",
    top: 53,
    justifyContent: "center",
    alignItems: "center",
  },
  loginform: {
    position: "relative",
    top: SCREEN_HEIGHT * 0.2,
    width: "100%",
    height: 716,
    backgroundColor: "white",
    borderTopRightRadius: 67,
    borderTopLeftRadius: 67,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputView: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 25,
    borderColor: "grey",
    borderWidth: 2,
    height: 57,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
    fontFamily: "montserrat-regular",
    fontSize: 25,
  },
  loginbtn: {
    flex: 1,
    height: 62,
    borderRadius: 50,
    position: "absolute",
    left: -160,
    width: "80%",
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});
