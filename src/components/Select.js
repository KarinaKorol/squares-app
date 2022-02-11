import React from 'react'

/** Create component CustomSelect with props {items} **/ 
const CustomSelect = ({items}) =>  {
  
  const keys = Object.keys(items)
  const options = keys.map(elem => {
    return (
      <option 
        key = {elem}
        placeholder = {elem}
        value = {items[elem].field}
      >
      {elem}
      </option>
    )
})

  return  (
    <select className = 'custom-select'>
      {options}
    </select>
  )
}

export default CustomSelect