import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import imageBgTest from '@/assets/images/Background.png'
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBgTest}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>First app</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    text: {
      color: 'white',
      fontSize: 40,
      textAlign: 'center',
      marginTop: 50,
      fontWeight: 'bold',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      width: 'auto',
      height: 'auto',
      justifyContent: 'center'
    }
  }
)