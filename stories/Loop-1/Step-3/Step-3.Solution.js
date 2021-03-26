import React from 'react'
import PropTypes from 'prop-types'
import backgroundImageUri from './img/bicycle.png'

const OrderItem = ({ name, price }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-700 text-sm font-medium">{name}</span>
    <span className="text-gray-900 text-lg font-bold">${price}</span>
  </div>
)

const cardStyles = {
  backgroundImage: `url(${backgroundImageUri})`,
  backgroundSize: '95%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center calc(500px * 0.45)',
}
const Step3Solution = ({ orderNumber, items }) => {
  return (
    <div
      className="invoice bg-white w-max mx-auto py-8 px-12 shadow-lg"
      style={cardStyles}
    >
      <div className="w-max mx-auto space-y-6">
        <header>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              SimpleWheels
            </span>
            <span className="h-10 w-10 flex justify-center items-center text-gray-900 border rounded-full cursor-pointer avatar">
              <svg
                fill="currentColor"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium">
            Thanks for your order {`#${orderNumber}`}, your package will be on
            its way shortly.
          </p>
        </header>
        {items.map(({ name, price }) => (
          <OrderItem name={name} price={price} />
        ))}
        <div className="flex justify-between items-center">
          <span className="uppercase font-bold text-gray-800 tracking-wider text-xl">
            total
          </span>
          <span className="text-gray-900 text-lg font-bold">$356</span>
        </div>
      </div>
    </div>
  )
}

Step3Solution.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }),
  ),
}

export default Step3Solution
