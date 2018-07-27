import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import StorybookUIRoot from '../../storybook/storybook.js';
import DebugConfig from '../Config/DebugConfig'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    this.props.startup()
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

const mapStateToProps = state => {
  return {
    ...state.repo,
    ...state.logo,
  }
}


class StorybookUIHMRRoot extends Component {
   render() {
     return <StorybookUIRoot />
   }

}

export default DebugConfig.useReactotron
  ? console.tron.storybookSwitcher(StorybookUIHMRRoot)(
      console.tron.overlay(connect(mapStateToProps, mapDispatchToProps)(RootContainer)),
    )
  : RootContainer;
//export default connect(null, mapDispatchToProps)(RootContainer)
