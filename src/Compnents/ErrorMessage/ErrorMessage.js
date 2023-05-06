import React from 'react'
import '../ErrorMessage/ErrorMessage.css'

function ErrorMessage({text}) {
  return (
    <p className='error'>{text}</p>
  )
}

export default ErrorMessage
