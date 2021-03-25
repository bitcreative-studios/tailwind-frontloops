import React from 'react'

import Step1Solution from './Step-1.Solution'
import mobileIconURI from './img/device.svg'
import desktopIconURI from './img/laptop.svg'
import tvIconURI from './img/monitor.svg'

export default {
  title: 'Markup/Loop 1/Step 1',
  component: Step1Solution,
}

const Template = args => <Step1Solution {...args} />

const cardData = [
  {
    icon: () => (
      <img className="h-full" src={mobileIconURI} alt="Mobile Icon" />
    ),
    title: 'mobile',
    description: 'Get notifications about new releases in our mobile app.',
    price: '10',
  },
  {
    icon: () => (
      <img className="h-full" src={desktopIconURI} alt="Mobile Icon" />
    ),
    title: 'desktop',
    description:
      'Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms.',
    price: '15',
  },
  {
    icon: () => <img className="h-full" src={tvIconURI} alt="Mobile Icon" />,
    title: 'tv',
    description:
      'Watch your favorite series at home on large screen with our TV application.',
    price: '20',
  },
]

export const Solution = Template.bind({})

Solution.args = {
  cards: cardData,
}
