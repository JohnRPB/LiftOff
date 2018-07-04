import React from 'react'
import { ScrollView, Text, TextInput, Image, View, TouchableOpacity } from 'react-native'
import { Images } from '../../../ignite/DevScreens/DevTheme'
import { StackNavigator } from 'react-navigation'
import FullButton from '../../Components/FullButton';
import { connect } from 'react-redux';

/* LOGIN ACTION */
import loginActions from '../../Redux/LoginRedux';

// Styles
import styles from '../../../ignite/DevScreens/Styles/PresentationScreenStyles'

class LoginScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  onChangeText(text, inputName) {
    this.setState({
      [inputName]: text
    })
  }

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
            Civlity Project
          </Text>
      
          <View style={{paddingLeft: 40, paddingRight: 40, paddingBottom: 20}}>
            <Text style={{color:"white"}}>
              Username
            </Text>
            <TextInput
              underlineColorAndroid="white"
              placeholder="JohnSmith"
              onChangeText={(text) => { this.onChangeText(text, "username")} }
            />
            <Text style={{color:"white"}}>
              Password
            </Text>
            <TextInput
              style={{paddingBottom: 20}}
              underlineColorAndroid="white"
              placeholder="password"
              onChangeText={(text) => this.onChangeText(text, "password")}
            />
            <Text>{'\n'}</Text>
            <FullButton 
              text="Log in!" 
              onPress={() => {
                  this.props.loginUser(this.state.username, this.state.password)
                }
              }
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  loginUser: (username, password) => {
    dispatch(loginActions.loginRequest(username, password)) 
  }
})

export default connect(null, mapDispatchToProps)(LoginScreen)
