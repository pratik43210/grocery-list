/* eslint-disable react/prop-types */
const Header=({title})=>{
  return (
    <header>
        <h1 className="header">{title}</h1>
    </header>
  )
}

Header.defaultProps={
  title: "Default title"
}

export default Header;