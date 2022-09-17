import * as React from "react";
import Sound from "react-native-sound";
import alarm from "../assets/alarm1.mp3";

Sound.setCategory("Alarm");

const alarmSound = new Sound(alarm, (error) => {
  if (error) {
    console.log("Failed to load the sound", error);
  }
});
