import React from 'react'
import PropTypes from 'prop-types'

const Header = ({name,title})=>{
    return(
        <div>
            <h1 style={myStyle}>hey its me man! {name}{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'the comeback history',
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

        // CSS IN JS
        const myStyle = {
            color: 'red',
            background: 'blue',
        }
        // class
// class Header extends React.Component{
//     render(){
//       return(
//         <h2>hey you im still working in the old school :) ya you got something</h2>
//       ) 
//     }
//   }
export default Header