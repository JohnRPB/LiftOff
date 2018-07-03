import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../../ignite/DevScreens/DevTheme'
import { StackNavigator } from 'react-navigation'

// Styles
import styles from '../../ignite/DevScreens/Styles/PresentationScreenStyles'

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
            <Image source={Images.igniteClear} style={styles.logo} />
          </View>

          <Text style={styles.sectionText}>
            You are awesome!
          </Text>
        </ScrollView>
      </View>
    )
  }
}

