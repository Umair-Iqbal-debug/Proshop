import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  const style = {
    width: '100px',
    height: '100px',
    margin: 'auto',
    display: 'block',
  }
  return <Spinner animation='border' role='status' style={style}></Spinner>
}

export default Loader
