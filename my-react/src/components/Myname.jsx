import React from "react";

const Myname =()=>{

    const name = "goutham";
    let specialClass = "class";
    const mult =(a,b)=> a*b;
    const number = [1,2,3,4,5]

 return(
    <>
       <h1>my name is goutham {name}</h1>
       <p>wht is thei {["gotha " , " gothaj " , " gfsj"]}</p>
       <h2 className={specialClass}> this is special{mult(2,2)} class </h2>
   

    </>
 );
}

export default Myname;