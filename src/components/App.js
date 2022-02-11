import React, { useEffect, useState } from 'react'
import CustomSelect from './Select'
import StartBtn from './Button'
import Square from './Square'
import Result from './Result'

const App = () => {
  const [items, setItems] = useState({})
  const [selectVal, setSelectVal] = useState('')

  /** Get data from request **/
  useEffect(() => {
    fetch('https://demo1030918.mockable.io/')
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result)
        },
        (error) => {
            console.log(error)
        }
      )
  }, [])
    
  return (
    <div className = 'app-block'>
      <div className = 'app-block__start grid'>
        <CustomSelect items = {items} />
        <StartBtn 
          onClick = { () => {
            setSelectVal (document.querySelector('.custom-select').value);

            /** Generate new square and remove hovers result block **/
            [...document.querySelectorAll('.square-block__item')].map(item => item.classList.remove('blue'));
            [...document.querySelectorAll('.result-container__items p')].map(item => item.remove())
          }}
        />
      </div>

      <div className='app-block__square'>
        <Square count = {selectVal} />
        <div className ='result-container'>
          <strong> Hover Squares </strong>
          <Result />  
        </div>
      </div>
    </div>
  )
}

export default App