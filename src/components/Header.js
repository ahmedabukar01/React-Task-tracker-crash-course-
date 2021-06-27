import PropTypes from 'prop-types';
import Button from './Buttons';

const Header = ({title})=>{
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='add' />
            <Button />
        </header>
    )

}
Header.defaultProps = {
    title:'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
// css in js 
// const headerStyling = {
//     background:'red',
//     color:'white',
// }

export default Header