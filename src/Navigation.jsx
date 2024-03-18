import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {

    return (

        <header className="nav">
            <div>
                <h2>Navigation </h2>
                <NavLink className='button' exact to="/Catalog">Catalog</NavLink>
                <NavLink className='button' exact to="/Submissions">Submissions</NavLink>
                <NavLink className='button' exact to="/Home">Home</NavLink>


            </div>
        </header>

    )
}


export default Navigation