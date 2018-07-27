import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import ExamplesRegistry from '../../Services/ExamplesRegistry'

// Import all the pieces
// import ConvoBanner from './ConvoBanner';
import FadedSectionTitle from './FadedSectionTitle';
import RoundedButton from '../RoundedButton';

export default class ConvoCard extends Component {
  static propTypes = {
    anchorImage: PropTypes.object,
    anchorName: PropTypes.string,
    headShot: PropTypes.number.isRequired,
    bannerImage: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    knowledgeDomains: PropTypes.array.isRequired,
  }

  render() {
    console.log("------------------- START this.props.bannerImage -------------------");
    console.log(this.props.bannerImage);
    console.log("-------------------- END this.props.bannerImage --------------------");
    return (
      <View style={style.overall}>
        <Image source={this.props.bannerImage} style={style.banner} />
        <View style={style.content}>
          <Text style={style.title}> 
            {this.props.title} 
          </Text>
          <View style={{
            flexDirection:'row',
            justifyContent:'flex-start',
            }} >
            <Image source={this.props.headShot} style={style.headShot} />
            <Text> with Sam Harris </Text>
          </View>
          <Text style={style.convoSummary}>{this.props.summary}</Text> 
          <View style={{
            height: 120,
            flexDirection:'row', 
            flexWrap:'wrap',
            alignContent: 'stretch',
            paddingTop: 10,
            paddingBottom: 10,
          }}>
            <View style={style.smallSection}>
              <FadedSectionTitle>WHEN</FadedSectionTitle>
              <Text>{this.props.date}</Text>
            </View>
            <View style={style.smallSection}>
              <FadedSectionTitle>WHERE</FadedSectionTitle>
              <Text>{this.props.location}</Text>
              </View>
            <View style={style.smallSection}>
              <FadedSectionTitle>KNOWLEDGE DOMAINS</FadedSectionTitle>
              <Text>{this.props.knowledgeDomains.join(', ')}</Text>
            </View>
          </View>
          <RoundedButton buttonStyle={style.roundedButton}> Request to join </RoundedButton>
        </View>
      </View>
    )
  }
}

let style = {
  overall: {
    height: 541,
    width: 334,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 16.5,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowRadius: 2,
    shadowOpacity: 1,
    overflow:'hidden'
  },
  content: {
    height: 300,
    width: 280,
    margin: 32,
    flexDirection: 'column', 
    justifyContent: 'space-around',
  },
  banner: {
    borderColor:'black',
    justifyContent: 'center',
    alignSelf:'flex-start',
    width: 334,
    height: 161
  },
  headShot: {
    borderRadius: 12.5,
    marginRight: 5,
    width: 25,
    height: 25,
  },
  title: {
    opacity: 0.75,
    fontFamily: "SourceSansPro",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: -0.1,
    color: "#000000"
  },
  convoSummary: {
    fontFamily: "SourceSansPro",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: -0.23,
    color: "rgba(0, 0, 0, 0.5)"
  },
  smallSection: {
    paddingRight: 20
  },
  roundedButton: {
    borderRadius: 8.8,
    width:270,
    height:40,
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
//ExamplesRegistry.addComponentExample('Conversation Card', () =>
  //<ConvoCard
    //bannerImage={Images.civilityLogo}
    //title='The Origins of Consciousness'
    //summary='Lets talk about the scientic study of consciousness, where consciousness emerges in nature, and more.'
    //date='Wed, 1/25,4-7pm'
    //location='San Francisco'
    //knowledgeDomains={['consciousness','psychology','psychedelics']}
  ///>
//)
