const Theme = ({setColorTheme}) => {

    const handleClick = theme => {
      // set user's choice to state
        setColorTheme(theme);
      // save user's choice to localStogare of browser. 
        localStorage.setItem('theme-color', theme);  
    }

    return(
      <div className="theme-options">
        <div 
          id="theme-grey"
          onClick={()=>handleClick("theme-grey")}
        ></div>
        <div 
          id="theme-green"
          onClick={()=>handleClick("theme-green")}
        ></div>
        <div 
          id="theme-yellow"
          onClick={()=>handleClick("theme-yellow")}
        ></div>
        <div 
          id="theme-pink"
          onClick={()=>handleClick("theme-pink")}
        ></div>
        <div 
          id="theme-dark"
          onClick={()=>handleClick("theme-dark")}
        ></div>
        <div 
          id="theme-white"
          onClick={()=>handleClick("theme-white")}
        ></div>
        <div 
          id="theme-blue"
          onClick={()=>handleClick("theme-blue")}
        ></div>
      </div>
    )
}

export default Theme;