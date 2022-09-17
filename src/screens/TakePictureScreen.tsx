import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword} from "firebase/auth";

import React from 'react';
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomInputText";
import CustomSnackBar from "../components/CustomSnackBar";
import { ScrollView } from "../components/Themed";
import Colors from "../constants/Colors";
import { firebaseAuth } from "../firebase/firebase";
import useColorScheme from "../hooks/useColorScheme";
import Register from "./RegisterScreen";

const Stack = createNativeStackNavigator();

const TakePictureScreen: React.FC = ({ navigation }: any) => {
  const colorScheme = useColorScheme();
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
          marginTop: "70%",
        }}
      >
        <CustomButton
          mode="outlined"
          color={Colors[colorScheme].tint}
          style={styles.button}
          onPress={() => navigation.navigate("CameraScreen")}
        >
          Take Picture
        </CustomButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 30,
    width: 160,
  },
});

export default TakePictureScreen;
