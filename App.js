import { StyleSheet, Text, View, Button } from 'react-native'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';


export default function App() {
  
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello, world!</Text>




        <Button title={'Sign in with Google'} onPress={() =>  {
    GoogleSignin.configure({
        androidClientId: 'ADD_YOUR_ANDROID_CLIENT_ID_HERE',
        iosClientId: '244641441294-q2001jb0si3njp8ctkk0198v52d6bbtl.apps.googleusercontent.com',
    });
GoogleSignin.hasPlayServices().then((hasPlayService) => {
        if (hasPlayService) {
             GoogleSignin.signIn().then((userInfo) => {
                       console.log(JSON.stringify(userInfo))
             }).catch((e) => {
             console.log("ERROR IS: " + JSON.stringify(e));
             })
        }
}).catch((e) => {
    console.log("ERROR IS: " + JSON.stringify(e));
})
}} />

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