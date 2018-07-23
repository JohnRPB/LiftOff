import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'

import ConvoCard from './ConvoCard'

// Import all the pieces
// import ConvoBanner from './ConvoBanner';
// import FadedSectionTitles from './FadedSectionTitle';
import RoundedButton from '../RoundedButton';

// Import example image
import { Images } from '../../Themes';

storiesOf('ConvoCard')
  .add('Default', () => (
    <View style={{backgroundColor: "#f2f2f2", padding:10}}>
      <ConvoCard
        bannerImage={Images.samHarrisConvo}
        title='The Origins of Consciousness'
        summary='Lets talk about the scientic study of consciousness, where consciousness emerges in nature, and more.'
        date='Wed, 1/25,4-7pm'
        location='San Francisco'
        knowledgeDomains={['consciousness','psychology','psychedelics']}
      />
    </View>
  ))
