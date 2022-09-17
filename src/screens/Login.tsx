import { signInWithEmailAndPassword } from "firebase/auth";
import React from 'react';
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

// import CustomButton from "../components/CustomButton";
// import CustomTextInput from "../components/CustomInputText";
// import CustomSnackBar from "../components/CustomSnackBar";
import { ScrollView } from "../../components/Themed";
// import Colors from "../constants/Colors";
// import { firebaseAuth } from "../firebase/firebase";
// import useColorScheme from "../hooks/useColorScheme";

const Login: React.FC = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
          marginTop: "10%",
        }}
      >
        <Image
          style={{ height: 260, width: 260 }}
          source={require("../../assets/images/damian.png")}
        />
      </View>
    </ScrollView>
  );
};

export default Login;
