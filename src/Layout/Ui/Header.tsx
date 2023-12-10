import React from 'react'
import { BsMenuButtonWideFill } from 'react-icons/bs'
import WithDrawer from '../../HighOrderComponent/WithDrawer'
import { Button } from 'antd'

const Header = () => {
  return (
    <div className='Header'>
      <div>
        <img src="../image/etaxlogo.svg" alt="Logo" />

      </div>
      <div className='Links none'>
        <a href="#Home">Home</a>
        <a href="#Offer">Offer</a>
        <a href="#Download">Download</a>
        <a href="#Cars">Cars</a>
        <a href="#Driver">Driver</a>
        <a href="#Client">Client</a>
      </div>
      <div>
        <button className='none'>
          sign in
        </button>
        <div className='Header_Menu'>

          <WithDrawer
            button={<Button type="primary"> <BsMenuButtonWideFill /></Button>}
            title='HomeLinks'
          //  width="200"
          >
            <div className='Links '>
              <a href="#Home">Home</a>
              <a href="#Offer">Offer</a>
              <a href="#Download">Download</a>
              <a href="#Cars">Cars</a>
              <a href="#Driver">Driver</a>
              <a href="#Client">Client</a>
            </div>
          </WithDrawer>
        </div>
      </div>
    </div>
  )
}

export default Header