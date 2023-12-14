import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function BackGround({ children }) {
  return (
    <View>
      <ImageBackground
        source={require('./assets/img.png')}
        style={styles.box}
      />
      <View style={styles.children}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex:1,
    height:740,
    width:360,
    color: 'red',
    alignItems:'center',
    justifyContent:"center"
  },

  children: {
    flex:1,
    height:740,
    width:360,
    color: 'red',
    alignItems:'center',
    justifyContent:"center"
  },
});
