import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

import { colors } from '../assets/colors/colors';

import AppIntroSlider from 'react-native-app-intro-slider';

import Group1 from '../assets/images/Group_1.png';
import Group2 from '../assets/images/Group_2.png';
import Group3 from '../assets/images/Group_3.png';

const data = [
    {
      id: 1,
      title: 'Save time by tracking your studies',
      text: 'Schedule your classes, assignments, quizzes and more',
      image: Group1
    },
    {
      id: 2,
      title: 'Stay on top of your education',
      text: 'Reduce your stress, increase your productivity',
      image: Group2
    },
    {
      id: 3,
      title: 'Spend more time doing the things you love',
      text: 'Get started within five minutes',
      image: Group3
    },
]

const OnBoard = (props) => {

    const renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>
        );
    };

    const keyExtractor = (item) => item.id;

    const renderDoneButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Done</Text>
            </View>
        );
    }

    const renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        );
    }

    const renderPrevButton = () => {
        return (
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        );
    }

    const handleDone = () => {
        props.handleDone();
    }

    return (
        <View style={{flex: 1}}>
            <AppIntroSlider 
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                renderPrevButton={renderPrevButton}
                showPrevButton
                dotStyle= {
                    styles.dotStyle
                }
                activeDotStyle= {
                    styles.activeDotStyle
                }
                onDone={handleDone}
            />
        </View>
    )
}

export default OnBoard

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
    },
    image: {
      marginVertical: 60,
    },
    title: {
      fontSize: 24,
      color: colors.black,
      textAlign: 'center',
      fontFamily: 'bold',
      marginHorizontal: 60,
    },
    text: {
      fontSize: 14,
      color: colors.gray,
      textAlign: 'center',
      fontFamily: 'semi-bold',
      marginHorizontal: 60,
      marginTop: 20,
    },
    dotStyle: {
      backgroundColor: colors.blueFaded,
    },
    activeDotStyle: {
      backgroundColor: colors.blue,
    },
    rightTextWrapper: {
      width: 40,
      height: 40,
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    rightText: {
      color: colors.blue,
      fontFamily: 'semi-bold',
      fontSize: 14,
    },
    leftTextWrapper: {
      width: 40,
      height: 40,
      marginLeft: 20,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    leftText: {
      color: colors.blue,
      fontFamily: 'semi-bold',
      fontSize: 14,
    },
    doneButtonWrapper: {
      flex: 1,
      paddingLeft: 35,
      paddingRight: 50,
      paddingVertical: 10,
      borderRadius: 25,
      marginRight: -40,
    },
    doneButtonText: {
      fontSize: 14,
      fontFamily: 'semi-bold',
      textAlign: 'center',
      color: colors.white,
    },
});