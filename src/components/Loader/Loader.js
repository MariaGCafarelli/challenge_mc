import React from 'react';
import './Loader.css';

/**
 * Componente that represents the
 * loader to improve user experience
 */
function Loader(){
    return (
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div> 
    )
}

export default Loader;