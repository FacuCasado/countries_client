import React from "react";
import style from './Paginado.module.css'

function Paginado({countriesPerPage,allCountries,paginado, currentPage}){
    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(allCountries/countriesPerPage);i++){
        pageNumbers.push(i);
    }
    //es un array de numeros que van a ser mi numero de pagina
    return(
        <nav className={style.navDiv}>
            <ul>
                <button  className={style.button62} onClick={()=>{paginado(currentPage-1)}} disabled={currentPage === 1}>&#8249;</button>
                {pageNumbers && 
                pageNumbers.map((num)=>(
                    <button  className={num===currentPage?style.buttonActive:style.button62} onClick={()=>{paginado(num)}} key={num}>
                    {num}
                    </button>
                ))}
                <button className={style.button62} onClick={()=>{paginado(currentPage+1)}} disabled={currentPage === pageNumbers.length}>&#8250;</button>
            </ul>
        </nav>
    )

}

export default Paginado;