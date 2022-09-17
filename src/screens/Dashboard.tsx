import { SafeAreaView, ScrollView, StyleSheet,View,ImageBackground } from "react-native";
import { Card, Text } from "react-native-paper";
import React, {useState} from "react"
import CustomButton from "../components/CustomButton";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";

const FlexDirectionBasics: React.FC = ({ navigation }: any) => {
  const [Point, setPoint] = useState(120);
  const [Streak, setStreak] = useState(4);
  const [TotalStreak, setTotalStreak] = useState(10);
  const [Succeed, setSucceed] =useState("gold");
  const friend = require('../assets/images/refer_a_friend.png' );
  const image =require("../assets/images/gift.png");

  return (
        <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.bigTitle}> Your Statistics:</Text>
        </View>
        <Card style={[styles.card, {backgroundColor: "#ace4f5"}]}>
          <CustomButton
            mode="outlined"
            color="#dfc4fb"
            style={styles.alarmButton}
            onPress={() => navigation.navigate("Alarms")}
          >
          <Text style={styles.text}>SET ALARM NOW</Text>
        </CustomButton>
      </Card>
        <Card style={[styles.card, {backgroundColor:"#acf5e0"}]}>
        <Text style={styles.label}>Total Streak: {TotalStreak} 🔥 </Text>
        <View style={styles.container2}>
      <Text style={[styles.circle, { backgroundColor: (Streak >=1) ? Succeed:"silver" }]}
      >Mon</Text>
      <Text
          style={[styles.circle, { backgroundColor: (Streak >=2) ? Succeed:"silver" }]}>
            Tue</Text>
      <Text
          style={[styles.circle, { backgroundColor: (Streak >=3) ? Succeed:"silver" }]}
      >
        Wed
        </Text>
      <Text
          style={[styles.circle, { backgroundColor: (Streak >=4) ? Succeed:"silver" }]}
      > Thur </Text>
      <Text
          style={[styles.circle, { backgroundColor: (Streak >=5) ? Succeed:"silver" }]}
      >
        Fri</Text>
      <Text
          style={[styles.circle, { backgroundColor: (Streak >=6) ? Succeed:"silver" }]}
      >Sat</Text>
      <Text
          style={[styles.circle, { backgroundColor: (Streak >=7) ? Succeed:"silver" }]}
      >Sun </Text>
      </View>
        </Card>
      {/* Card for the streaks */}
      <Card style={[styles.card, {backgroundColor: "#ace4f5"}]}>
        <Text style={styles.label}>Coins Collected: {Point}🪙 </Text>
      </Card>
      <Card style={[styles.card, {backgroundColor: "#d9f2af"}]}>
      <Text style={styles.text}>Claim Rewards! </Text>
        <ImageBackground source={image} resizeMode="cover" style={styles.giftImage}>
    </ImageBackground>

          </Card>

    <Card style={styles.card}>
      <Text style={styles.text}>Share With Friends 😄 </Text>
        <ImageBackground source={friend} resizeMode="cover" style={styles.friendsImage}>
    </ImageBackground>
          </Card>

      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    lineHeight: 34,
    fontWeight: "bold",
    textAlign: "left",
  },
  container: {
    flex: 3,
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fef3bd",
  },
  container2: {
    paddingVertical: 26,
    flex: 3,
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box: {
    width: 50,
    height: 50,
  },
  card: {
    width: "100%",
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    textAlign: "center",
    backgroundColor: "#dfc4fb",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 40,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "100%",
    textAlign: "center",
  },
  alarmButton: {
    height: 100,
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginBottom: 6,
    minWidth: "100%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "left",
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 10000,
    textAlign: "center",
    alignSelf: "flex-start",
    paddingVertical: 8,
  },
  bigTitle: {
    color: '#6a86ed',
    fontWeight: 'bold',
    fontFamily: "Arial",
    fontSize: 40,
    alignText: "left",
  },
  friendsImage: {
    height: 120,
    width: 260,
    marginTop: 10,
    marginLeft: 0,  
  },
  giftImage: {
    height: 420,
    width: 430,
    marginTop: 30,
    marginLeft: -40,  
  },
});

export default FlexDirectionBasics;
