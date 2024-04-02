import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333355',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
