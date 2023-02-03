
import "./ListeEnchere.css"
import {useEffect, useState} from "react";
function ListeEnchere() {
    const [list,setList] =useState([] );
    // const list =tab;

    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/listeenchere"
            const data = await fetch(url);
            const json =await data.json();
            setList(json)
            console.log(json)
        };
        loadData();
    },[])
    const [nomproduit,setNomproduit]=useState("");
    const handleOnChangePage = (id) => {
        const n=sessionStorage.getItem("nom");
        console.log(n+"  n")
        if (n===null){
            window.location.href=`/login`;
        }
        else{
            console.log("efa  misy ao "+n);
            // window.location.href=`/encherir/${id}`;
            sessionStorage.setItem("idenchere",id);
            window.location.href="/encherir";
        }
    }
    const [prix,setPrix]=useState("");
    const handleOnChangePrix = (event) => {
      setPrix(event.target.value)
    }
    const [prixmax,setPrixMax]=useState("");
    const handleOnChangePrixMax = (event) => {
        setPrixMax(event.target.value)
    }
    const Click =async (event) => {

        event.preventDefault();
        if (list.length===0){

            const url = "https://webservice-enchere-production.up.railway.app/api/encheres/listeenchere";
            const data = await fetch(url);
            const json = data.json();
            json.then((result) => {
                setList(result)
            })
        }
        const produitcopy = [...list];
        console.log(parseInt(prix))
        const produitcopyUpdated = produitcopy.filter((l) => l.nomproduit.includes(nomproduit)&&l.montantBase>=parseInt(prix)&&l.montantBase<=parseInt(prixmax) );
        setList(produitcopyUpdated);
        // if (nomproduit===""){
        //
        //     const url = "https://webservice-enchere-production.up.railway.app/api/encheres/listeenchere";
        //     const data = await fetch(url);
        //     const json = data.json();
        //     json.then((result) => {
        //         setList(result)
        //     })
        // }
    }
    const handleOnChange = async (event) => {

        setNomproduit(event.target.value);
        // console.log(event.target.value)

    }
    // const handleButton=async () => {
    //     const url="https://webservice-enchere-production.up.railway.app/api/encheres/listeenchere";
    //     const data=await fetch(url);
    //     const json=data.json();
    //     json.then((result)=>{
    //         // setList(result)
    //     })
    //
    //     // console.log(json);
    // }
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


    const n=list.map((liste,index)=>{


        let b="bloc";
        if (index===0){
            b+=" active";
        }
        return(
            <div key={index} className={b} onClick={handleOnclick}>
                <div className="bloc-haut">
                    <div className="rond">
                        <img src={liste.image} alt=""/>
                    </div>
                    <p>enchere numero {liste.id}</p>
                    <p className="titre-section">{liste.nomproduit}</p>
                    <div className="ligne"></div>
                    <p className="prix">{"ar"+liste.montantBase}</p>
                </div>
                <div className="contenu">
                    <img src={liste.image} alt=""/>
                    <div className="infos">
                        <h2>{liste.nomproduit}</h2>
                        <button onClick={()=>handleOnChangePage(liste.id)}>Encherir</button>
                    </div>
                </div>
            </div>
        );
    })
    return(
        <div>
            <form action="submit" onSubmit={Click}>
                <input type="text"  placeholder="nomproduit" value={nomproduit} onChange={handleOnChange}/>
                <input type="text" required placeholder="prixmin" value={prix} onChange={handleOnChangePrix}/>
                <input type="text" required placeholder="prixmax" value={prixmax} onChange={handleOnChangePrixMax}/>
                <input type="submit" value="rechercher"/>
            </form>
            <div className="cont">
                {n}
            </div>
        </div>
    );
}
export default ListeEnchere;
