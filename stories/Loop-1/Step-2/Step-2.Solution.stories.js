import React from 'react'
import Step2Solution from './Step-2.Solution'
import visaIconUri from './img/visa.svg'
import mastercardIconUri from './img/mastercard.svg'
import maestroIconUri from './img/maestro.svg'

export default {
  title: 'Markup/Loop 1/Step 2',
  component: Step2Solution,
}

const Template = args => <Step2Solution {...args} />
const options = [
  {
    vendor: 'visa',
    selected: false,
    icon: () => <img className="h-full" src={visaIconUri} alt="" />,
  },
  {
    vendor: 'mastercard',
    selected: true,
    icon: () => <img className="h-full" src={mastercardIconUri} alt="" />,
  },
  {
    vendor: 'maestro',
    selected: false,
    icon: () => <img className="h-full" src={maestroIconUri} alt="" />,
  },
]
export const Solution = Template.bind({})
Solution.args = {
  options,
  onSelected: (cb, params) => cb(params),
}
