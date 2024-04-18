import { sculptureList } from "@/data/article"; // ambil data yang sudah ada
import { list } from "postcss";
import { useState } from 'react';

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(0);      // inex data mulai dari 0
    let sculpture = sculptureList[currentPage];
    
    // function handleClick() {
    //     setIndex(index + 1);      // counter index + 1, untuk melihat data selanjutnya
    // }

    function nextButton(){
        setCurrentPage(currentPage + 1);
        if(currentPage >= sculptureList.length - 1){
            setCurrentPage(0);
        }
    }

    function backButton(pageList:any){
        setCurrentPage(currentPage - 1);
        if (currentPage <= 0){
            setCurrentPage(sculptureList.length - 1);
        }
    }

    return(
        <>
            <button 
                onClick={backButton}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded" >
                    Artikel Sebelumnya
            </button>
            
            <button
                onClick={nextButton}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded">
                    Artikel Selanjutnya
            </button>

            <h2><i>{sculpture.name}</i> oleh {sculpture.artist}</h2>
            <h3>({currentPage + 1} dari {sculptureList.length}) </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );

}