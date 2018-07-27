import 'react-native'
import React from 'react'
import ConvoCard from '../../App/Components/Sandbox/ConvoCard'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import RoundedButton from '../../App/Components/RoundedButton';
import { Images } from '../../App/Themes';
import { View } from 'react-native'



test('ConvoCard component renders correctly', () => {
  const tree = renderer.create(
    <View style={{backgroundColor: "#f2f2f2", padding:10}}>
      <ConvoCard
        bannerImage={Images.samHarrisConvo}
        headShot={Images.samHarris}
        title='The Origins of Consciousness'
        summary='Lets talk about the scientic study of consciousness, where consciousness emerges in nature, and more...'
        date='Wed, 1/25, 4-7pm'
        location='San Francisco'
        knowledgeDomains={['consciousness','psychology','psychedelics']}
      />
    </View>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
