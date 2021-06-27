import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,onClick})=>{
   
    return (
        <button onClick={onClick} style={{background:color}}
         className='btn'>{text}</button>
    )
}
Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func,
}
Button.defaultProps ={
    color:'steelblue',
    text:'add'
}
export default Button;