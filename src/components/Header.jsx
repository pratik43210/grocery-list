/* eslint-disable react/prop-types */
const Header=({title})=>{
  return (
    <header>
        <h1 className="header"><img alt="app-icon" className="app-icon" src="https://cdn-icons-png.flaticon.com/512/3724/3724788.png"/>{title}</h1>
    </header>
  )
}

Header.defaultProps={
  title: "Default title"
}

export default Header;