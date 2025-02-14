import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import imageBgTest from '@/assets/images/background-main.png'
import { Link } from 'expo-router'
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBgTest}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.title}>First app</Text>

        <Link href='/explore' style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style = {styles.buttonText}>Contact</Text>
          </Pressable>
        </Link>
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
    title: {
      color: 'white',
      fontSize: 40,
      textAlign: 'center',
      fontWeight: 'bold',
      backgroundColor: 'rgba(0,0,0,0.5)',
      marginBottom: 20
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      width: 'auto',
      height: 'auto',
      justifyContent: 'center'
    },
    link: {
      color: 'white',
      fontSize: 40,
      textAlign: 'center',
      marginTop: 70,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    button: {
      marginTop:40,
      borderRadius: 20,
      backgroundColor: 'rgba(0,0,0,0.75)',
      padding:20
    },
    buttonText: {
      color:'white',
      fontSize:16,
      textAlign:'center',
    }
  }
)