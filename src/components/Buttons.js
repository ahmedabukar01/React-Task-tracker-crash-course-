import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text})=>{
    return (
        <button style={{background:color}} className='btn'>{text}</button>
    )
}
Button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string,
}
Button.defaultProps ={
    color:'steelblue',
    text:'add'
}
export default Button;