import React from 'react';
import style from "./recipe.module.css";


function Recipe({title,image,url,ingri}) {
    return (
        <div className={style.recipe}>
           
            <h1>{title}</h1>
            <ol className={style.list}>
                {ingri.map(ing=>(<li>{ing.text}</li>))}
            </ol>
            <a className={style.link} href={url}>Know Full Receipe Here</a>
            
            <img className={style.image} src={image}alt="" />
        </div>
    );
}

export default Recipe
