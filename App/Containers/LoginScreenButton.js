import React from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../Config/DebugConfig'
import RoundedButton from '../Components/RoundedButton'

import LoginScreen from './LoginScreen';

export default class LoginScreenButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    if (DebugConfig.showDevScreens) {
      return (
        <View>
          <RoundedButton onPress={this.toggleModal}>
            Open Login Screen
          </RoundedButton>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <LoginScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
      )
    } else {
      return <View />
    }
  }
}
