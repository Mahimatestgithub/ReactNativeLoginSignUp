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
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
export default function RegisterScreen(props) {
  const {signup} = useContext(AuthContext);
  const [email,setEmail]= useState(undefined);
  const [userName, setUserName]=useState(undefined);
  const [password, setPassword]=useState(undefined);
  return (
    <BackGround>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerTxt}>Sign up</Text>
        </View>

        <View style={styles.loginConatiner}>
          <View>
            <Text style={styles.innerBoxHeader}>create your account</Text>
          </View>
          <TextInput
            placeholder="Enter Email"
            value={email}
            onChangeText={text=>setEmail(text)}
            style={styles.fieldinput}></TextInput>
          <TextInput
            placeholder="Enter username"
            value={userName}
            onChangeText={text=>setUserName(text)}
            style={styles.fieldinput}></TextInput>

          <TextInput
            placeholder="Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text=>setPassword(text)}
            style={styles.fieldinput}></TextInput>

          <View style={styles.buttonArea}>
            <Btn
              btnTxt="Signup"
              btnColor={'#FF1493'}
              txtColor="white"
              breadth={200}
              Press={() => signup(userName,email,password)}
            />
            <View
              style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
              <Text>Already have an acccount?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}
                style={{ fontWeight: 'bold' }}>
                login
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
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  buttonArea: {
    marginTop: 80,
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
    marginTop: 20,
    marginBottom: 20,
    fontSize: 15,
    fontWeight: 500,
    color: '#808080',
  },
});