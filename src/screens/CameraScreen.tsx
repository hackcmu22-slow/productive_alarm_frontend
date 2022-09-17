import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";


const CameraScreen: React.FC = () => {
    let camera = Camera;
    const [hasCameraPermission, setHasCameraPermission] = useState(false)
    const [type, setType] = useState(CameraType.back)
    const [capturedImage, setCapturedImage] = useState(null)
    // const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === "granted")
            // const mediaLibraryStatus = await MediaLibrary.requestPermissionsAsync();
            // setHasMediaLibraryPermission(mediaLibraryStatus === "granted")
        })();
    }, []);

    if (hasCameraPermission === null) {
        return <View />;
    }

    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // Taking the picture and storing in capturedImage
    const takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
        setCapturedImage(photo)
      }
    
    // let saveVideo = () => {
    //     MediaLibrary.saveToLibraryAsync(video.uri).then(() => {
    //         setVideo(undefined);
    //     });
    // };

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ratio="16:9">
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.flipButton}
                        onPress={() => {
                            setType(type === CameraType.back ? CameraType.front : CameraType.back);
                        }}>
                        
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => takePicture}
                        style={styles.snapButton}
                    />
                </View>
            </Camera>
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