import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello, world!</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
  }
})