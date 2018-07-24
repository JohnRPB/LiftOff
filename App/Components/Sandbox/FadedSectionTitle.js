import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExamplesRegistry from '../../Services/ExamplesRegistry'
import { Text } from 'react-native'

export default class FadedSectionTitle extends Component {
  static = {
    children: PropTypes.string.isRequired
  }

  render() {
    return (
      <Text style={style}>
        {this.props.children.toUpperCase()}
      </Text>
    )
  }

}

let style = {
  opacity: 0.15,
  fontFamily: "SourceSansPro",
  fontSize: 12.5,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0.34,
  color: "#000000"
}



