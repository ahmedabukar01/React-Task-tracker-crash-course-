import React from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'


const Header = ({title, onAdd,showAdd})=>{

    return(
        <header className="header">
           <h1>{title}</h1>
          <Buttons color={showAdd ? 'red' : 'green'} 
          text={showAdd? 'close': 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

        // CSS IN JS
        // const myStyle = {
        //     color: 'red',
        //     background: 'blue',
        // }

        
        // class
// class Header extends React.Component{
//     render(){
//       return(
//         <h2>hey you im still working in the old school :) ya you got something</h2>
//       ) 
//     }
//   }
export default Header