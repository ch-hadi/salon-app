import { StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import img from './../../assets/images/girl-cutting.jpg'
const CImageBackground = ({children}) => {
  return (
      <ImageBackground style={styles.imgs} src={img}>{children}</ImageBackground>
  )
}

export default CImageBackground

const styles = StyleSheet.create({
    imgs: {
        width: '100%',
        height: 'auto',
        resizeMode:'cover'
    }
})