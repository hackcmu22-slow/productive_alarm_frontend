import * as React from "react";
import Sound from "react-native-sound";

Sound.setCategory("Alarm");

const alarmSound = new Sound('https://github.com/hackcmu22-slow/productive_alarm_frontend/raw/alarm/src/assets/alarm1.mp3', (error) => {
  if (error) {
    console.log("Failed to load the sound", error);
  }
});
