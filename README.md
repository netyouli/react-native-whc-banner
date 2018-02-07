# react-native-whc-banner
A react native module to banner auto play loop component, it works on iOS and Android.

[ ![release](https://img.shields.io/github/release/netyouli/react-native-whc-banner.svg?maxAge=2592000?style=flat-square)](https://github.com/netyouli/react-native-whc-banner/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/netyouli/react-native-whc-banner/pulls)
[ ![NPM version](http://img.shields.io/npm/v/react-native-whc-banner.svg?style=flat)](https://www.npmjs.com/package/react-native-whc-banner)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/crazycodeboy/react-native-whc-loading/master/LICENSE)
[ ![语言 中文](https://img.shields.io/badge/语言-中文-yellow.svg)](https://github.com/netyouli/react-native-whc-banner/blob/master/README.zh.md)



## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

* 1.Run `npm i react-native-whc-banner --save`
* 2.`import Banner, {IndicaterAlign, IndicaterType} from 'react-native-whc-banner'`

## Demo  
* [Example](https://github.com/netyouli/react-native-whc-banner/tree/master/example)

![Screenshots](https://raw.githubusercontent.com/netyouli/react-native-whc-banner/master/example/screenshots/react-native-whc-banner.gif)

## Getting started  

Add `react-native-whc-banner` to your js file.

`import Banner, {IndicaterAlign, IndicaterType} from 'react-native-whc-banner'`

Your component's render method, use Banner:

```jsx
 render() {
         return (
             <Banner style = {styles.banner}>
                 <View><Image style = {styles.img} source = {images[0]}/></View>
                 <View><Image style = {styles.img} source = {images[1]}/></View>
                 <View><Image style = {styles.img} source = {images[2]}/></View>
             </Banner>
         );
 }

```

### Basic usage

```javascript
render() {
        return (
            <Banner style = {styles.banner}
                    indicaterType = {IndicaterType.circle}>
                <View><Image style = {styles.img} source = {images[0]}/></View>
                <View><Image style = {styles.img} source = {images[1]}/></View>
                <View><Image style = {styles.img} source = {images[2]}/></View>
            </Banner>
        );
    }
```

### Custom Banner

```javascript
render() {
        return (
            <Banner style = {styles.banner}
                    indicaterStyle = {styles.indicater}
                    dotStyle = {styles.dot}
                    currentDotStyle = {styles.currentDot}
                    circleStyle = {styles.circle}
                    numberStyle = {styles.number}
                    titleStyle = {styles.title}
                    titles = {['react-native banner', 'ios native banner', 'android native banner']}
                    autoPlay = {true}
                    autoLoop = {true}
                    indicaterType = {IndicaterType.dot}
                    indicaterAlign = {IndicaterAlign.center}
                    duration = {5000}
                    >
                <View><Image style = {styles.img} source = {images[0]}/></View>
                <View><Image style = {styles.img} source = {images[1]}/></View>
                <View><Image style = {styles.img} source = {images[2]}/></View>
            </Banner>
        );
    }
```


## API

IndicaterType   | Description
-----------------  | -----------
IndicaterType.none   | There is no indicator
IndicaterType.circle   | Circle number indicator
IndicaterType.number   | Number indicator
IndicaterType.title   | Title text indicator
IndicaterType.number_title   | Number and title text indicator
IndicaterType.dot   | Dot indicator

IndicaterAlign   | Description
-----------------  | -----------
IndicaterAlign.left   | Indicator element left alignment
IndicaterAlign.center   | Indicator element center alignment
IndicaterAlign.right   | Indicator element right alignment


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style |  ViewPropTypes.style |true | {}  | Custom banner style
indicaterStyle  | ViewPropTypes.style  | true | {} |   Custom banner indicater style
dotStyle  | ViewPropTypes.style  | true | {} |   Custom indicater for dot style
currentDotStyle  | ViewPropTypes.style  | true | {}  |   Custom indicater current dot style
circleStyle  | ViewPropTypes.style  | true | {}  |   Custom indicater for circle style
numberStyle  | Text.propTypes.style  | true | {} |   Custom indicater for number style
titleStyle  | Text.propTypes.style  | true | {}  |   Custom indicater for title style
titles  | PropTypes.array  | true | []  |   When indicater for title type show title
autoPlay  | PropTypes.bool  | true | true  |  Is auto play for banner
autoLoop  | PropTypes.bool  | true | true  |  Is auto loop for banner
indicaterType  | IndicaterType  | true | IndicaterType.dot  |  Custom indicater type
indicaterAlign  | IndicaterAlign  | true | IndicaterAlign.center  |  Custom indicater align type
duration  | PropTypes.number  | true | 5000  |  Custom banner auto play duration


## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

---

**MIT Licensed**
