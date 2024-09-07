import React, { ReactNode } from 'react'
import './GlobalStyles.module.scss'
const GlobalStyles = ({children} : {children : ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default GlobalStyles