import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const CHECKED_COLOR = '#5AC550'

const CreditCardOption = ({ icon: Icon, selected, vendor, handleClick }) => {
  const vendorStyles = classnames('uppercase text-sm font-bold', {
    'text-gray-300': !selected,
    'text-gray-800': selected,
  })
  const checkStyles = classnames({
    'text-white': !selected,
    'text-lime-500': selected,
  })
  return (
    <div
      className="pl-6 pr-2 py-2 flex justify-between items-center"
      onClick={handleClick}
    >
      <span className="flex items-center space-x-2">
        <span id="icon" className="h-12 w-12">
          <Icon />
        </span>
        <span id="vendor" className={vendorStyles}>
          {vendor}
        </span>
      </span>
      <span id="check" className={checkStyles}>
        <svg
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </span>
    </div>
  )
}

CreditCardOption.propTypes = {
  /** The Vendor's brand */
  icon: PropTypes.node.isRequired,
  /** The Vendor's name */
  vendor: PropTypes.string.isRequired,
  /** Is this option selected */
  selected: PropTypes.bool,
}

const Step2Solution = ({ options, onSelected }) => {
  const [selectedOption, setSelectedOption] = useState('mastercard')
  return (
    <div className="w-max divide-y shadow rounded">
      <header className="py-5 px-20 text-center">
        <div className="space-x-2">
          <span className="inline-block h-2 w-2 rounded-full bg-gray-400" />
          <span className="inline-block h-2 w-2 rounded-full bg-gray-300" />
          <span className="inline-block h-2 w-2 rounded-full bg-gray-300 " />
        </div>
        <h1 className="text-lg font-bold uppercase tracking-wider text-gray-900">
          payment method
        </h1>
      </header>
      {options.map(option => (
        <CreditCardOption
          vendor={option.vendor}
          icon={option.icon}
          selected={selectedOption === option.vendor}
          handleClick={() => setSelectedOption(option.vendor)}
        />
      ))}
      <button className="w-full bg-blue-500 p-4 flex items-center justify-center space-x-3 text-sm text-white uppercase font-bold tracking-wide rounded-bl rounded-br focus:outline-none">
        <span>next step</span>
        <span className="h-6">
          <svg
            className="h-full"
            fill="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </span>
      </button>
    </div>
  )
}

Step2Solution.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelected: PropTypes.func,
}

Step2Solution.defaultProps = {
  onSelected: undefined,
}

export default Step2Solution
