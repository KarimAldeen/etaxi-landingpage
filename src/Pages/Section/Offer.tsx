import React from 'react'
import { BsFillBadgeArFill } from 'react-icons/bs'

const Offer = () => {
  return (
    <div className='Offer'>
      <div>
        <h2> WHAT WE OFFER </h2>
        <h1> WELCOME TO US </h1>
      </div>
      <div>
        <p>
          Lorem Ipsum is that it has a more-or-less normal distribution
          of letters, as opposed to using 'Content here, content here',
          making it look like readable English.
        </p>
      </div>
      <span>
        <div>
          <BsFillBadgeArFill />
          <h3>Address Pickup</h3>
          <p>Lorem Ipsum is that it has a more-or- of letters</p>
        </div>
        <div>
          <BsFillBadgeArFill />

          <h3>Airport Transfer</h3>
          <p>Lorem Ipsum is that it has a more-or- of letters</p>
        </div>
        <div>
          <BsFillBadgeArFill />

          <h3>Long Distance</h3>
          <p>Lorem Ipsum is that it has a more-or- of letters</p>
        </div>
        <div>
          <BsFillBadgeArFill />

          <h3>Taxi Tours</h3>
          <p>Lorem Ipsum is that it has a more-or- of letters</p>
        </div>
      </span>
    </div>

  )
}

export default Offer