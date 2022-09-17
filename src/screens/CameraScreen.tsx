import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as FS from "expo-file-system";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { ImageType } from 'expo-camera/build/Camera.types';
import axios from 'axios';
import CustomSnackBar from '../components/CustomSnackBar';
import SoundContext, { PlayState } from '../components/SoundContext';


const CameraScreen: React.FC = ({ navigation }: any) => {
    const [camera, setCamera] = useState<Camera|null>(null)
    const [hasPermission, setHasPermission] = useState(false);
    const [type, setType] = useState(CameraType.back);

    const [snackIsVisible, setSnackIsVisible] = useState<boolean>(false);
    const [snackMessage, setSnackMessage] = useState<string>("");

    const [_, setPlayState] = React.useContext(SoundContext);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // Taking the picture
    const takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync({
            imageType: ImageType.png
        });
        const imgData = await FS.readAsStringAsync(photo.uri, {
            encoding: FS.EncodingType.Base64
        });
        console.log("imgData");
        console.log(photo.width);
        console.log(photo.height);
        console.log(imgData.length);
        try {
            const response = await axios.post("http://172.26.69.11:5000/submit", {
                imgData
            });

            if (response.data.result) {
                setPlayState(PlayState.PAUSED);
                navigation.replace("Success")
                return;
            }
        } catch (err) {
            console.log("error");
            console.log(err);
        }

        console.log("No person found.");
        setSnackMessage("No person found.");
        setSnackIsVisible(true);
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={ref => setCamera(ref)} type={type} ratio="16:9">
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.flipButton}
                        onPress={() => {
                            setType(type === CameraType.back ? CameraType.front : CameraType.back);
                        }}>
                        
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={takePicture}
                        style={styles.snapButton}
                    />
                </View>
            </Camera>
      <CustomSnackBar
        visible={snackIsVisible}
        onDismiss={() => {
          setSnackIsVisible(false);
        }}
        type="error"
        message={snackMessage}
      ></CustomSnackBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    flipButton: {
        flex: 0.25,
        height: 30,
        width: 40,
        textAlign: "center",
        justifyContent: "center",
        marginLeft: "5%",
        marginBottom: "5%",
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 50,
    },
    snapButton: {
        display: 'flex',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: "20%",
        marginBottom: "5%",
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default CameraScreen;
