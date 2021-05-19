import React from 'react';
import style from "./recipe.module.css";

function Header() {
    return (
        <div className={style.Header}>
            <h1 className={style.head}>Foodie Bear</h1>
            <p className={style.para}>Search your favourite Recipe</p>
            
        </div>
    )
}

export default Header

