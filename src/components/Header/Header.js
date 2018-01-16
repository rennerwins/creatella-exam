import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  text-align: center;
  margin: 40px 0;
`

const header = () => {
  return (
    <Header>
      <h1 style={{ fontSize: '40px' }}>Products Grid</h1>

      <p>
        Here you're sure to find a bargain on some of the finest ascii available to purchase. Be
        sure to peruse our selection of ascii faces in an exciting range of sizes and prices.
      </p>

      {/* <p>But first, a word from our sponsors:</p> */}
    </Header>
  )
}

export default header
