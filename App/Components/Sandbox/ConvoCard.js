import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import ExamplesRegistry from '../../Services/ExamplesRegistry'

// Import all the pieces
// import ConvoBanner from './ConvoBanner';
// import FadedSectionTitles from './FadedSectionTitle';
import RoundedButton from '../RoundedButton';

// Import example image
import { Images } from '../../Themes';

export default class ConvoCard extends Component {
  static propTypes = {
    anchorImage: PropTypes.object,
    anchorName: PropTypes.string,
    bannerImage: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    knowledgeDomains: PropTypes.array.isRequired,
  }

  render() {
    return (
      <View style={style.overall}>
        <Image source={this.props.bannerImage} />
        {/*<ConvoBanner style={style.bannerImage}> 
          {this.props.bannerImage}
        <ConvoBanner />*/}
        <View >
          <Text style={style.title}> 
            {this.props.title} 
          </Text>
          <Text style={style.convoSummary}> {this.props.summary} </Text> 
          <RoundedButton style={style.roundedButton}> Join </RoundedButton>
        </View>
      </View>
    )
  }
}

let style = {
  overall: {
    width: 334,
    height: 541,
    borderRadius: 16.5,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowRadius: 2,
    shadowOpacity: 1
  },
  banner: {
    width: 334,
    height: 161
  },
  title: {
    width: 295,
    height: 26,
    opacity: 0.75,
    fontFamily: "SourceSansPro",
    fontSize: 20.5,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: -0.1,
    color: "#000000"
  },
  convoSummary: {
    width: 273,
    height: 60,
    fontFamily: "SourceSansPro",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.23,
    color: "rgba(0, 0, 0, 0.5)"
  },
  roundedButton: {
    width: 270,
    height: 44,
    borderRadius: 8.8,
    backgroundColor: "#373737",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 2,
    shadowOpacity: 1
  }
}

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Conversation Card', () =>
  <ConvoCard
    bannerImage={Images.launch}
    title='The Origins of Consciousness'
    summary='Lets talk about the scientic study of consciousness, where consciousness emerges in nature, and more.'
    date='Wed, 1/25,4-7pm'
    location='San Francisco'
    knowledgeDomains='consciousness,psychology,psychedelics'
    
  />
)
