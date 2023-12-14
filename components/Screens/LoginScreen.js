import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import BackGround from '../BackGround';
import Btn from '../Btn';
import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';

export default function LoginScreen(props) {
  const { login } = useContext(AuthContext);

  const [email,setEmail]= useState(undefined);
  const [password, setPassword]=useState(undefined);
  return (
    <BackGround>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerTxt}>Welcome back</Text>
        </View>

        <View style={styles.loginConatiner}>
          <View>
            <Text style={styles.innerBoxHeader}>Login to your account</Text>
          </View>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={text=>{setEmail(text)}}
            style={styles.fieldinput}></TextInput>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={text=>{setPassword(text)}}
            style={styles.fieldinput}></TextInput>

          <View style={{ width: '100%', alignItems: 'end', marginRight: 55 }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate()}
              style={{ fontWeight: 'bold' }}>
              <Text>forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonArea}>
            <Btn
              btnTxt="Login"
              btnColor={'#FF1493'}
              txtColor="white"
              breadth={200}
              Press={() => {  
                login(email,password)
              }}
            />
            <View
              style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
              <Text>Don't have an acccount?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Signup')}
                style={{ fontWeight: 'bold' }}>
              <Text>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </BackGround>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 590,
    width: 320,
    color: 'red',
    alignItems: 'center',
  },

  fieldinput: {
    marginTop: 10,
    height: 38,
    width: '80%',
    borderRadius: 20,
    backgroundColor: 'rgb(220,220,220)',
    paddingHorizontal: 15,
    placeholderTextColor: '	#808080',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  buttonArea: {
    marginTop: 100,
  },

  loginConatiner: {
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  headerTxt: {
    marginTop: 80,
    fontWeight: 500,
    color: 'white',
    fontSize: 35,
  },
  innerBoxHeader: {
    marginTop: 10,
    marginBottom: 30,
    fontSize: 15,
    fontWeight: 500,
    color: '#808080',
  },
});