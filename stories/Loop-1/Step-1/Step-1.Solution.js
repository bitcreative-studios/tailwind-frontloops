import React from 'react'
import PropTypes from 'prop-types'
import mobileIconURI from './img/device.svg'
import desktopIconURI from './img/laptop.svg'
import tvIconURI from './img/monitor.svg'

const Card = ({ icon: Icon, description, price, title }) => (
  <div className="py-3 px-6 bg-white hover:bg-gray-50 flex-1 flex flex-col items-center transition duration-200 cursor-pointer">
    <div id="icon" className="h-12 w-12 md:h-16 md:w-16">
      <Icon />
    </div>
    <p
      id="title"
      className="text-md md:text-lg uppercase tracking-widest font-bold"
    >
      {title}
    </p>
    <p id="description" className="text-sm text-gray-400 text-center">
      {description}
    </p>
    <div id="price" className="text-xl md:text-2xl font-bold">
      <sup className="text-xs md:text-sm">$</sup>
      <span>{price}</span> <span className="text-xs md:text-sm">/ month</span>
    </div>
  </div>
)

Card.propTypes = {
  /** The Icon related to the feature */
  icon: PropTypes.node.isRequired,
  /** The name of the feature */
  title: PropTypes.string.isRequired,
  /** Description of the feature */
  description: PropTypes.string.isRequired,
  /** The price of the feature */
  price: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
}

const Step1Solution = ({ cards }) => {
  const withFlex = 'flex'
  return (
    <div className="flex flex-col md:flex-row p-5 shadow md:shadow-lg max-w-4xl">
      {cards.map(card => (
        <Card
          description={card.description}
          title={card.title}
          price={card.price}
          icon={card.icon}
        />
      ))}
    </div>
  )
}

Step1Solution.propTypes = {
  cards: PropTypes.arrayOf(Card.propTypes),
}

export default Step1Solution
