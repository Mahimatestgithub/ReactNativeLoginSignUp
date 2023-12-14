import { Text, View, StyleSheet, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-web';

export default function AppScreen(props) {
  const { logout} = useContext(AuthContext);
  const[data,setData]=useState([]);

  const postdata = () => {
    axios
    .get(`${BASE_URL}/post`)
      .then((response) => {
        const feedData = response.data;
        setData(feedData);
        console.log('Signup successful. Token:',feedData);
      })
      .catch((error) => {
        console.error('There was a problem with the request:', error);
      });

  };
  useEffect(()=>{
    postdata();
  },[])

  return (
  
    <View style={styles.container}>
      <Text style={styles.Appname}>My Social App</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (

          <View style={styles.postContainer} key={item._id}>
          <View style={styles.card}>
              <View style={styles.header}>
                <Image source={require('../assets/img.png')} style={styles.profileImage} />
                <View style={styles.userInfo}>
               <Text style={styles.name}>{item.createdBy.userName}</Text>
               <Text style={styles.title}>{item.title}</Text>
             </View>
             </View>
                <Image source={require('../assets/img.png')} style={styles.postImage} />
              <View>
               <Text style={styles.userContent}>
               <Text style={styles.name}>{item.createdBy.userName}</Text>
               <Text style={styles.title}> {item.content}</Text>
               </Text>
             </View>
       </View>
   </View>
        )}
        keyExtractor={item => item._id}
      />
       <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={() => props.navigation.navigate('createpost')}
        >
          <Text style={styles.buttonText}>create Post</Text>
        </TouchableOpacity>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
  },
  postContainer:{
    padding:10
  },

  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  Appname:{
        fontSize:20,
        fontWeight:700,
        color:'white',
        backgroundColor:'#007bff',
        paddingHorizontal:10,
        paddingVertical:15
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  userContent:{
    padding:10,
  },
  userInfo: {
    padding:10,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1/1,
  },
 
});


