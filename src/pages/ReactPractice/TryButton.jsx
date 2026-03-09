import React from 'react'
import Button from '../../components/ReactPracticeComponents/Button'


function TryButton() {
  return (
    <div className='reactElementCon'>
      <div>Do This One</div>

      <Button children={"Jala's Button"} color={'darkgreen'} bColor={'lightgreen'} motion={'Salam Aleykum, to you whose name is unknown.'} />

      <Button children={"Jala's Second Button"} color={'darkblue'} bColor={'lightblue'} motion={'Hello, my unknown friend.'} />
    </div>
  )
}

export default TryButton