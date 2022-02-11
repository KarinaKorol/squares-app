import { Box } from '@chakra-ui/react'

/** Create component Square with props {count} **/ 
const Square = ({count}) => {
  const gridStyles = {
    gridTemplateColumns: `repeat(${count}, 50px)`,
    gridTemplateRows: `repeat(${count}, 50px)`
  }

  /** Generate a square with data attributes **/
  const amountSquare = count ** 2; /** Create a square size  **/ 
  const row = [...Array(amountSquare).keys()].map((item, index) => {
    const rowNumber = Math.floor((index) / count)  + 1 /** To get a row number, take a index and divide by the count then add 1 for right number **/
    const columnNumber = (index) % count + 1 /** Do the same action as with rowNumber **/
      return (
        <div 
          key = {index} 
          className = "square-block__item"
          data-column = {columnNumber}
          data-row = {rowNumber}
          data-id = {`${columnNumber}${rowNumber}`}
        >
        </div>
      )
  });
  
  /** Toggle class on event and add/remove result elements in dom **/
  return (
    <Box className = 'square-container'>
      <Box 
        className = 'square-block' 
        style = {gridStyles}
        onMouseOver = {
          (e) => {
            const isSquare = e.target.classList.contains('square-block__item')
            if (!isSquare) return

            e.target.classList.toggle('blue')
            
            const resultColumn = e.target.dataset.column
            const resultRow = e.target.dataset.row
            const resultBlock = document.querySelector('.result-container__items')
            const resultElem = document.createElement('p')
            
            /** Here it could be done differently, 
                but I don't have enough experience, 
                so don't judge strictly :) **/
            if (e.target.classList.contains('blue')) {
              resultElem.innerText = `column : ${resultColumn} row: ${resultRow}`
              resultElem.id = `${resultColumn}${resultRow}`
              resultBlock.append(resultElem)
            } else {
              const removeElem = document.getElementById(`${e.target.dataset.id}`)
              removeElem.remove()
            }
          }
        }
      >
        {row} 
      </Box>
    </Box>
  )
}

export default Square