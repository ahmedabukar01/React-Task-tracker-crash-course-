import PropTypes from 'prop-types'

const Buttons = ({color,text, onClick}) =>{
   
    return(
        <button className="btn"
         style={{background:color}}
         onClick={onClick}
         >{text}</button>
    )
}

Buttons.defaultProps = {
    color:'steelblue',
}
Buttons.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}
export default Buttons