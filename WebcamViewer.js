import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { getIpAddressAsync } from 'expo-network';
import ViewPropTypes from 'deprecated-react-native-prop-types';

const WebcamViewer = () => {
  const [localIP, setLocalIP] = useState('');

  const fetchLocalIP = async () => {
    const { ipAddress } = await getIpAddressAsync();
    setLocalIP(ipAddress || 'N/A');
  };

  useEffect(() => {
    fetchLocalIP();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Local IP Address: {localIP}</Text>
      <WebView source={{ uri: `http://10.0.2.2:3000/stream` }} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});

export default WebcamViewer;
