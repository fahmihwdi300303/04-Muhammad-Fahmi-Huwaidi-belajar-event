"use client";
import React from "react";

// Practium 1
export default function Tombol_1 (){

    //Langkah 1
    // return (
    //     <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
    //         Ini tombol
    //     </button>

    // ); 

    // Langkah 2
    //menambahkan fungsi untuk menangani klik tombol
    function handleClick(){
        alert("Tombol telah ditekan !!!");
    }

    function handleMouseOver() {
        alert("Eits, mau mencet tombol ya?");
    }

    return(
        <button 
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
                onClick={handleClick}
                onMouseOver={handleMouseOver}
            >
            Ini tombol
        </button>
    );

    //Langkah 2.1
    // return(
    //     <button 
    //         className="bg-blue-500 hover:bg-bkue-700 text-white p-2 rounded"
    //         onClick={handleClick}
    //         //onMouseOver={handleMouseOver}
    //         onMouseLeave={() => {
    //                 alert("Loh, kok sudah pergi!!!")
    //             }
    //         }
    //     >
    //         Ini tombol
    //     </button>
    // );

}