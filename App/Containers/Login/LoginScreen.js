import React from 'react'
import { ScrollView, Text, TextInput, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../../../ignite/DevScreens/DevTheme'
import { StackNavigator } from 'react-navigation'
import FullButton from '../../Components/FullButton';

// Styles
import styles from '../../../ignite/DevScreens/Styles/PresentationScreenStyles'

export default class LoginScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={this.props.screenProps.toggle} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.civilityLogo} style={styles.logo} />
          </View>

          <Text style={styles.sectionText}>
            Please Log in
          </Text>
      
          <View style={{paddingLeft: 40, paddingRight: 40, paddingBottom: 20}}>
            <Text style={{color:"white"}}>
              Username
            </Text>
            <TextInput
              underlineColorAndroid="white"
              placeholder="JohnSmith"
            />
            <Text style={{color:"white"}}>
              Password
            </Text>
            <TextInput
              style={{paddingBottom: 20}}
              underlineColorAndroid="white"
              placeholder="password"
            />
            <Text>{'\n'}</Text>
            <FullButton text="Log in!" />

          </View>
        </ScrollView>
      </View>
    )
  }
}

