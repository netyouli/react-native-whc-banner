/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Alert,
    TouchableHighlight,
    Dimensions,
    Image,
} from 'react-native';

import Banner, {IndicaterAlign, IndicaterType} from 'react-native-whc-banner';

const {
    width = 0,
    height = 0
} = Dimensions.get('window');

export default class App extends Component<{}> {
  render() {
      const images = [require('./images/banner1.png'),require('./images/banner2.png'),require('./images/banner3.png')];
      return (
          <View style={styles.view}>
              <Banner style = {styles.banner}
                      indicaterType={IndicaterType.dot}>
                  <View><Image style = {styles.img} source = {images[0]} /></View>
                  <View><Image style = {styles.img} source = {images[1]} /></View>
                  <View><Image style = {styles.img} source = {images[2]} /></View>
              </Banner>

              <Banner style = {styles.banner}
                      indicaterType={IndicaterType.circle}
                      indicaterAlign={IndicaterAlign.right}>
                  <View><Image style = {styles.img} source = {images[1]} /></View>
                  <View><Image style = {styles.img} source = {images[0]} /></View>
                  <View><Image style = {styles.img} source = {images[2]} /></View>
              </Banner>

              <Banner style = {styles.banner}
                      indicaterType={IndicaterType.number}
                      indicaterAlign={IndicaterAlign.center}
                      autoLoop={true}
                      autoPlay={true}
                      duration={1500}>
                  <View><Image style = {styles.img} source = {images[2]} /></View>
                  <View><Image style = {styles.img} source = {images[1]} /></View>
                  <View><Image style = {styles.img} source = {images[0]} /></View>
              </Banner>

              <Banner style = {styles.banner}
                      indicaterType={IndicaterType.title}
                      indicaterAlign={IndicaterAlign.center}
                      titles={['react-native banner', 'ios native banner', 'android native banner']}
                      autoLoop={true}
                      autoPlay={true}
                      duration={1500}>
                  <View><Image style = {styles.img} source = {images[2]} /></View>
                  <View><Image style = {styles.img} source = {images[0]} /></View>
                  <View><Image style = {styles.img} source = {images[1]} /></View>
              </Banner>

              <Banner style = {styles.banner}
                      indicaterType={IndicaterType.number_title}
                      indicaterAlign={IndicaterAlign.right}
                      titles={['react-native banner', 'ios native banner', 'android native banner']}
                      autoLoop={true}
                      autoPlay={true}
                      duration={1500}>
                  <TouchableHighlight onPress = {() => {Alert.alert('banner1')}}>
                      <Image style = {styles.img} source = {images[2]} resizeMode = {'stretch'}/>
                  </TouchableHighlight>
                  <TouchableHighlight onPress = {() => {Alert.alert('banner2')}}>
                      <Image style = {styles.img} source = {images[1]} resizeMode = {'stretch'}/>
                  </TouchableHighlight>
                  <TouchableHighlight onPress = {() => {Alert.alert('banner3')}}>
                      <Image style = {styles.img} source = {images[0]} resizeMode = {'stretch'}/>
                  </TouchableHighlight>
              </Banner>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    banner: {
        marginTop:1,
        flexGrow: 1,
    },
    img: {
        flex: 1,
        width: width,
    },
});
