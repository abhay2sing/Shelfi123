import { StyleSheet, Text, TextInput, Pressable, Alert } from 'react-native';
import  { useState } from 'react'
import ThemedView from '../components/ThemedView';


const Login  = () => {
      const [password, setPassword] = useState('');
      const [email, setEmail] = useState('');

      const handleSubmit = (email,password) => {
        if(email && password){
          

Alert.alert(
  'Confirmation',
//  'Are you sure you want to proceed?',
email + ' ' + password ,
  [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel', // 'cancel' style on iOS places the button at the bottom
    },
    {
      text: 'OK',
      onPress: () => console.log('OK Pressed'),
    },
  ],
  { cancelable: false } // Prevents dismissing the alert by tapping outside
);
        }

        console.log('succs')
      }
  return (
    <>

    <ThemedView style={styles.container} >
      <Text style={styles.title}>Login to your account</Text>
      <TextInput style={styles.input} placeholder='Email'  // This hides the entered text
      onChangeText={text => setEmail(text)}
      value={email}
/>
          <TextInput placeholder="Enter your password"
      secureTextEntry={true} // This hides the entered text
      onChangeText={text => setPassword(text)}
      value={password}
      style={styles.input}
    />
    <Pressable
    onPress={() => handleSubmit(email,password) }
      style={({pressed}) => [styles.btn, pressed && styles.pressed]}>
<Text style={{ color: '#f2f2f2'}}>
Login
</Text>
    </Pressable>
    </ThemedView>
            </>

  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',


    },
    input:{
     height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    fontSize: 16,
    color: '#333',

        
    

    },
   title:{
    marginTop: 10,
    marginBottom: 30

   }, 
   btn: {
   backgroundColor:'#0000FF',
   padding: 15,
   borderRadius:5,
   },
   pressed: {
   opacity: 0.8
   },
});