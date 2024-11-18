import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PhoneScreen from './PhoneScreen';
import ProductScreen from './ProductScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PhoneScreen></PhoneScreen> */}
      <ProductScreen></ProductScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
