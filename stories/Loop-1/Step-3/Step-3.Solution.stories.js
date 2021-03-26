import React from 'react'
import Step3Solution from './Step-3.Solution'

export default {
  title: 'Markup/Loop 1/Step 3',
  component: Step3Solution,
}

const Template = args => <Step3Solution {...args} />

export const Solution = Template.bind({})
const items = [
  {
    name: 'Chapelli Vintage Single Speed',
    price: '317',
  },
  {
    name: 'Castelli Arenberg Gel Gloves',
    price: '39',
  },
]

Solution.args = {
  orderNumber: 2357654,
  items,
}
