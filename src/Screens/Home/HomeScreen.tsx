import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Button,
  Alert,
  Platform,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {useAppDispatch, useAppSelector} from '../../Hooks/hooks';
import {createSelector, OutputSelector} from '@reduxjs/toolkit';
import {fetchUsers} from '../../Redux/UserSlice';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Keychain from 'react-native-keychain';
import {runOnJS} from 'react-native-reanimated';
import {
  useCameraDevices,
  useFrameProcessor,
  Camera,
} from 'react-native-vision-camera';
import {labelImage} from 'vision-camera-image-labeler';
import {Label} from './components/Label';

type CardInfo = {
  number: number;
  expiryDay: string;
  expiryMonth: string;
  expiryYear: string;
  issuer: string;
  cvc: number;
  cardholderName: string;
  error: string;
};

const HomeScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [ocr, setOcr] = React.useState<any>();
  const devices = useCameraDevices();
  const device = devices.back;
  const currentLabel = useSharedValue('');

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  return device !== undefined && hasPermission ? (
    <View style={styles.container}>
      {/* <Camera
        style={[
          StyleSheet.absoluteFill,
          {borderWidth: 2, borderColor: 'red', borderStyle: 'solid'},
        ]}
        // frameProcessor={frameProcessor}
        device={device}
        isActive={true}
        photo={true}
        frameProcessorFps="auto"
      /> */}
      {/* <Label sharedValue={currentLabel} /> */}
    </View>
  ) : (
    <View style={styles.container}>
      <Text>no camera devices</Text>
    </View>
  );
  // const {users, loading} = useAppSelector(state => state.users);
  // const username = 'anhquan291';
  // const password = 'testing123';
  // const dispatch = useAppDispatch();
  // const _checkBiometricSupport = async () => {
  //   Keychain.getSupportedBiometryType().then(biometryType => {
  //     console.log('biometryType', biometryType);
  //     Alert.alert('Thông báo', `Support ${biometryType}`, [
  //       {text: 'OK', onPress: () => {}},
  //     ]);
  //   });
  // };

  // useEffect(() => {
  //   Keychain.getSupportedBiometryType().then(biometryType => {
  //     console.log('biometryType', biometryType);
  //   });
  //   // _checkBiometricSupport();
  //   // dispatch(fetchUsers());
  // }, []);

  // const _saveUserHandler = async () => {
  //   await Keychain.setGenericPassword(username, password, {
  //     accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
  //     accessible: Keychain.ACCESSIBLE.ALWAYS,
  //     authenticationType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
  //     storage: Keychain.STORAGE_TYPE.RSA,
  //   });
  //   Alert.alert('Thông báo', 'Lưu thành công', [
  //     {text: 'OK', onPress: () => {}},
  //   ]);
  // };
  // const _getGetHandler = async () => {
  //   try {
  //     // Retrieve the credentials
  //     const credentials = await Keychain.getGenericPassword();
  //     if (credentials) {
  //       Alert.alert(
  //         'Thông báo',
  //         'Credentials successfully loaded for user ' + credentials.username,
  //         [{text: 'OK', onPress: () => {}}],
  //       );
  //       // console.log(
  //       //   'Credentials successfully loaded for user' + credentials.username,
  //       // );
  //     } else {
  //       Alert.alert('Thông báo', 'No credentials stored', [
  //         {text: 'OK', onPress: () => {}},
  //       ]);
  //     }
  //   } catch (error) {
  //     console.log("Keychain couldn't be accessed!", error);
  //   }
  //   // await Keychain.resetGenericPassword();
  // };
  // return (
  //   <View style={styles.container}>
  //     <Button title="Save User" onPress={_saveUserHandler} />
  //     <Button title="Get User" onPress={_getGetHandler} />

  //     {/* {loading ? (
  //       <ActivityIndicator />
  //     ) : (
  //       users.map(user => <Text key={user.id}>{user?.first_name}</Text>)
  //     )}
  //     <FontAwesome name="trash-o" size={20} /> */}
  //   </View>
  // );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
});

export default HomeScreen;
