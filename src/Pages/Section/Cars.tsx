import React from 'react'
import { BsFillCaretLeftSquareFill } from 'react-icons/bs'

const Cars = () => {
  return (
    <div className='Cars'>
        <span>
          <h2>CAR CLASSES AND RATES</h2>
        <h1>CHOOSE YOUR CAR</h1>
        </span>
        <div>
          <div>
            <BsFillCaretLeftSquareFill/>
            <h1>Economy Class</h1>
            <p>
              Lorem Ipsum is that it has a more-or- 
              of letters
            </p>
            <strong>$2.5/mi</strong>
          </div>
          <div>
            <BsFillCaretLeftSquareFill/>
            <h1>Economy Class</h1>
            <p>
              Lorem Ipsum is that it has a more-or- 
              of letters
            </p>
            <strong>$2.5/mi</strong>
          </div>
          <div>
            <BsFillCaretLeftSquareFill/>
            <h1>Economy Class</h1>
            <p>
              Lorem Ipsum is that it has a more-or- 
              of letters
            </p>
            <strong>$2.5/mi</strong>
          </div>
        </div>
    </div>
  )
}

export default Cars