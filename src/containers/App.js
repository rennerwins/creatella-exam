import React, { Component } from 'react'

import Card from '../components/Card/Card'
import Container from '../components/Layout/Container'
import Header from '../components/Header/Header'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Card />
      </Container>
    )
  }
}
