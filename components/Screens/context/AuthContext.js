import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { BASE_URL } from '../../config';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  

  const login = (email,password) => {
    setIsLoading(true);
    
    axios.post(`${BASE_URL}/user/login`,{email,password})
    .then(res=>{
      console.log('login successful',res.data.access_token)
      const token = res.data.access_token;
      setUserToken(token);
    })
    .catch(err=>{console.log('login error',err)})
    //  AsyncStorage.setItem('token', 'Mahima');
    setIsLoading(false);
  };

  const signup = (userName,email,password) => {
    setIsLoading(true);
    const body={
      "userName":userName,
      "email":email,
      "password":password
    }
    axios.post(`${BASE_URL}/user/signup`,body)
    .then(res=>{
      console.log('login successful',res.data.access_token)
      const token = res.data.access_token;
      setUserToken(token);
    })
    .catch(err=>{console.log('signup error',err)})
    //  AsyncStorage.setItem('token', 'Mahima');
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    // AsyncStorage.removeItem('token');
    setIsLoading(false);
  };

  // const isLoggedIn = async () => {
  //   try {
  //     setIsLoading(true);
  //     let user = await AsyncStorage.getItem("user");
  //     setUserToken(user);
  //     setIsLoading(false);
  //   } catch (e) {
  //     console.log(`is logged in error(e)`);
  //   }
  // };

 
  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken,signup }}>
      {children}
    </AuthContext.Provider>
  );
};
