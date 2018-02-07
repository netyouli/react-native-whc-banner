/**
 *
 * Copyright 2017-present react-native-whc-banner
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * https://github.com/netyouli/react-native-whc-banner
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import React , {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ScrollView,
    StyleSheet,
    Dimensions,
    ViewPropTypes,
    Text,
} from 'react-native';

export const IndicaterType = {
    /** 无指示器 **/
    none: 0,
    /** 圆形指示器 **/
    circle: 1,
    /** 数字指示器 **/
    number: 2,
    /** 标题指示器 **/
    title: 3,
    /** 数字加标题指示器 **/
    number_title: 4,
    /** 点指示器 **/
    dot: 5,
};

export const IndicaterAlign = {
    /** 点指示器靠左 **/
    left: 0,
    /** 点指示器居中 **/
    center: 1,
    /** 点指示器靠右 **/
    right: 2,
};

const {
    width = 0,
    height = 0
} = Dimensions.get('window');

class BannerIndicater extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0,
        };
    }

    updatePageIndex = (index) => {
        this.setState({
            pageIndex: index,
        });
    };

    render() {
        const {
            indicaterStyle,
            dotStyle,
            currentDotStyle,
            numberStyle,
            circleStyle,
            titleStyle,
            indicaterType,
            indicaterAlign,
            count,
            titles,
        } = this.props;
        
        const {pageIndex} = this.state;
        let alignStyle = {};
        let typeDefaultStyle = {};
        switch (indicaterAlign) {
            case IndicaterAlign.left: {
                alignStyle.justifyContent = 'flex-start';
                break;
            }
            case IndicaterAlign.center: {
                alignStyle.justifyContent = 'center';
                break;
            }
            case IndicaterAlign.right: {
                alignStyle.justifyContent = 'flex-end';
                break;
            }
            default: {
                console.error('Wrong alignment, please reset. support [IndicaterAlign.left, IndicaterAlign.center, IndicaterAlign.right]');
                return null;
            }
        }
        
        let elements = [];
        switch (indicaterType) {
            case IndicaterType.none: {
                return null;   
            }
            case IndicaterType.number: {
                elements.push((<Text key = {0} style = {[styles.number, numberStyle]}>{pageIndex + 1 + ' / ' + count}</Text>));
                break;
            }
            case IndicaterType.circle: {
                typeDefaultStyle = {
                    ...typeDefaultStyle,
                    backgroundColor: 'transparent',
                    height: 40,
                    bottom: 10,
                };
                const defaultCircleStyle = {
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                };
                elements.push((
                    <View key = {0} style = {[styles.circle, defaultCircleStyle, circleStyle]}>
                        <Text style = {[styles.number, numberStyle]}>{pageIndex + 1 + ' / ' + count}</Text>
                    </View>
                ));
                break;
            }
            case IndicaterType.dot: {
                for (let i = 0; i < count; i++) {
                    if (i === pageIndex) {
                        elements.push((<View key = {i} style = {[styles.dot, {backgroundColor: '#fff'}, currentDotStyle]}/>));
                    }else {
                        elements.push((<View key = {i} style = {[styles.dot, dotStyle]}/>));
                    }
                }
                break;
            }
            case IndicaterType.title: {
                if (pageIndex < titles.length) {
                    elements.push((<Text key = {0}
                                         style = {[styles.title, titleStyle]}
                                         numberOfLines = {1}
                    >{titles[pageIndex]}</Text>));
                }
                break;
            }
            case IndicaterType.number_title: {
                if (pageIndex < titles.length) {
                    let defaultTitleStyle = {marginLeft: 10};
                    switch (indicaterAlign) {
                        case IndicaterAlign.left: {
                            defaultTitleStyle = {
                                ...defaultTitleStyle,
                                flexGrow:1,
                                textAlign:'right',
                            };
                            elements.push((
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                }} key = {0}>
                                    <Text style = {[styles.number, numberStyle]}>
                                        {pageIndex + 1 + ' / ' + count}
                                    </Text>
                                    <Text style = {[styles.title, defaultTitleStyle, titleStyle]}
                                          numberOfLines = {1}
                                    >{titles[pageIndex]}</Text>
                                </View>
                            ));
                            break;
                        }
                        case IndicaterAlign.center: {
                            justifyContent = 'center';
                            elements.push((
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }} key = {0}>
                                    <Text style = {[styles.title, titleStyle]}
                                          numberOfLines = {1}
                                    >{titles[pageIndex]}</Text>
                                    <Text style = {[styles.number,defaultTitleStyle, numberStyle]}>
                                        {pageIndex + 1 + ' / ' + count}
                                    </Text>
                                </View>
                            ));
                            break;
                        }
                        case IndicaterAlign.right: {
                            defaultTitleStyle = {
                                ...defaultTitleStyle,
                                marginRight:10,
                                flexGrow:1,
                            };
                            elements.push((
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                }} key = {0}>
                                    <Text style = {[styles.title, defaultTitleStyle, titleStyle]}
                                          numberOfLines = {1}
                                    >{titles[pageIndex]}</Text>
                                    <Text style = {[styles.number, numberStyle]}>
                                        {pageIndex + 1 + ' / ' + count}
                                    </Text>
                                </View>
                            ));
                            break;
                        }
                        default: {
                            console.error('Wrong alignment, please reset. support [IndicaterAlign.left, IndicaterAlign.center, IndicaterAlign.right]');
                            return null;
                        }
                    }
                }
                break;
            }
            default: {
                console.error('This type indicator is not currently supported, support [IndicaterType.none, IndicaterType.circle, IndicaterType.number, IndicaterType.title, IndicaterType.number_title, IndicaterType.dot]');
                return null;
            }
        }
        
        return (
            <View style = {[
                styles.indicater,
                typeDefaultStyle,
                indicaterStyle,
                alignStyle
            ]}>
                {elements}
            </View>
        );
    }
}

export default class Banner extends Component {

    static propTypes = {
        style: ViewPropTypes.style,
        indicaterStyle: ViewPropTypes.style,
        dotStyle: ViewPropTypes.style,
        currentDotStyle: ViewPropTypes.style,
        circleStyle: ViewPropTypes.style,
        numberStyle: Text.propTypes.style,
        titleStyle: Text.propTypes.style,
        titles: PropTypes.array,
        autoPlay: PropTypes.bool,
        autoLoop: PropTypes.bool,
        indicaterType: PropTypes.number,
        indicaterAlign: PropTypes.number,
        duration: PropTypes.number,
    };

    static defaultProps = {
        style: {},
        indicaterStyle: {},
        dotStyle: {},
        currentDotStyle: {},
        circleStyle: {},
        numberStyle: {},
        titleStyle: {},
        titles: [],
        autoPlay: true,
        autoLoop: true,
        indicaterType: IndicaterType.dot,
        indicaterAlign: IndicaterAlign.center,
        duration: 5000,
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.pageindex = 0;
        this.offsetx = 0;
        this.elementCount = 0;
    }

    componentDidMount() {
        const {
            autoPlay,
            autoLoop,
        } = this.props;
        this.timer = setTimeout(() => {
            this._goIndex(autoLoop ? 1 : 0);
        }, 100);
        if (autoPlay) {
            this._makeTimer();
        }
    }

    componentWillUnmount() {
        this._clearTimer();
    }

    _onMomentumScrollEnd = (e) => {
        const offsetx = e.nativeEvent.contentOffset.x;
        const count = this.elementCount;
        const index = Math.floor((offsetx - width / 2.0) / width) + 1;
        const {
            autoLoop,
        } = this.props;
        if (autoLoop) {
            if (index === 0) {
                this.pageindex = count - 1;
            } else if (index === count + 1) {
                this.pageindex = 0;
            } else {
                this.pageindex = index - 1;
            }
        }else {
            this.pageindex = index;
        }
        this.indicater.updatePageIndex(this.pageindex);
    };

    _onScrollBeginDrag = (e) => {
        this._clearTimer();
    };

    _onScrollEndDrag = (e) => {
        const {
            autoPlay,
            autoLoop,
        } = this.props;

        if (autoLoop) {
            const offsetx = e.nativeEvent.contentOffset.x;
            const count = this.elementCount;
            if (offsetx === (count + 1) * width) {
                this._goIndex(1);
            }else if (offsetx === 0) {
                this._goIndex(count);
            }
        }
        autoPlay && this._makeTimer();
    };

    _onScroll = (e) => {
        const offsetx = e.nativeEvent.contentOffset.x;
        const {
            autoLoop,
        } = this.props;
        if (autoLoop) {
            const count = this.elementCount;
            const isLeftScroll = this.offsetx <= offsetx;
            if (offsetx <= 0) {
                if (isLeftScroll) {
                    return;
                }
                this._goIndex(count);
            }else if (offsetx >= (count + 1) * width) {
                if (!isLeftScroll) {
                    return;
                }
                this._goIndex(1);
            }
        }
        this.offsetx = offsetx;
    };

    _goIndex = (index, animated = false) => {
        this.offsetx = index * width;
        this.scrollview.scrollTo({x: index * width, y: 0, animated: animated});
    };

    _makeTimer = () => {
        const {
            duration,
            autoLoop,
        } = this.props;
        this.interval = setInterval(() => {
            this.offsetx = -1;
            this.pageindex += 1;
            if (!autoLoop && this.pageindex >= this.elementCount) {
                this.pageindex = 0;
            }
            this._goIndex(this.pageindex, true);
        }, duration);
    };

    _clearTimer = () => {
        this.interval && clearInterval(this.interval);
        this.timer && clearTimeout(this.timer);
    };

    render() {
        const {
            style,
            indicaterStyle,
            dotStyle,
            currentDotStyle,
            numberStyle,
            circleStyle,
            titleStyle,
            autoPlay,
            autoLoop,
            indicaterType,
            indicaterAlign,
            duration,
            titles,
            children = []
        } = this.props;
        
        const length = children.length;
        this.elementCount = length;
        let newChildren = [];
        if (autoLoop && length > 0) {
            newChildren.push(children[length - 1], ...children, children[0]);
        }else {
            newChildren.push(...children);
        }
        return (
            <View style = {[styles.banner,style]}>
                <ScrollView
                    ref = {(ref) => {this.scrollview = ref;}}
                    style = {styles.scrollView}
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled = {true}
                    bounces = {false}
                    onMomentumScrollEnd = {this._onMomentumScrollEnd}
                    onScrollBeginDrag = {this._onScrollBeginDrag}
                    onScrollEndDrag = {this._onScrollEndDrag}
                    onScroll = {this._onScroll}>
                    {newChildren}
                </ScrollView>
                <BannerIndicater
                    ref = {(ref) => {this.indicater = ref}}
                    style = {indicaterStyle}
                    indicaterType = {indicaterType}
                    indicaterAlign = {indicaterAlign}
                    dotStyle = {dotStyle}
                    currentDotStyle = {currentDotStyle}
                    circleStyle = {circleStyle}
                    numberStyle = {numberStyle}
                    titleStyle = {titleStyle}
                    count = {length}
                    titles = {titles}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    banner: {
        width: width,
    },
    scrollView: {
        flex: 1,
    },
    indicater: {
        position: 'absolute',
        height: 35,
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    dot: {
        backgroundColor: '#605f5d',
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    number: {
        color: '#fff',
        fontSize: 14,
    },
    title: {
        color: '#fff',
        fontSize: 14,
    },
    circle: {
        height: 30,
        width: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 15,
    },
});

