import {useEffect, useState} from "react";
import {useHistorique} from "../hooks/useData";

function Historique() {
    const id=sessionStorage.getItem("id");
    if (sessionStorage.getItem("nom")===null){
        window.location.href=`/login`;
    }
    const [list,setList] =useState([] );
    // const list =tab;

    const handleOnclick = (event) => {
        event.target.className="bloc active";
        const allBlocs = document.querySelectorAll('.bloc');
        allBlocs.forEach(bloc => {
            bloc.addEventListener('click', (e) => {
                e.target.classList.add('active');
                for(let i = 0; i < allBlocs.length; i++ ){
                    if(allBlocs[i] !== e.target){
                        allBlocs[i].classList.remove('active');
                    }
                }
            })
        })

    }
    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/gethistorique/"+sessionStorage.getItem("id");
            const data = await fetch(url);
            const json =await data.json();
            setList(json)
            console.log(json)
        };
        loadData();
    },[])
    const n=list.map((liste,index)=>{


        let b="bloc";
        if (index==0){
            b+=" active";
        }
        return(
            <div key={index} className={b} onClick={handleOnclick}>
                <div className="bloc-haut">
                    <div className="rond">
                        <img src={liste.image} alt=""/>
                    </div>
                    <p className="titre-section">{liste.nom}</p>
                    <div className="ligne"></div>
                    <p className="prix">{"ar"+liste.montant}</p>
                </div>
                <div className="contenu">
                    <img src={liste.image} alt=""/>
                    <div className="infos">
                        <h2>{liste.nomproduit}</h2>
                        {/*<button onClick={()=>handleOnChangePage(liste.id)}>Encherir</button>*/}
                    </div>
                </div>
            </div>
        );
    })
    return(
        <div>{n}</div>
    );
}
export default Historique;