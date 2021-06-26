const Header = ({title})=>{
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )

}
Header.defaultProps = {
    title:'Welcome to my first react app',
}

export default Header