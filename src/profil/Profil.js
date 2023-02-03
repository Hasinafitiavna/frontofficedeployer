import {useState} from "react";
import {getClient, montantclient} from "../hooks/useData";

function Profil() {
    if (sessionStorage.getItem("nom")===null){
        window.location.href=`/login`;
    }
    const handleOnClick = () => {
        sessionStorage.removeItem("nom");
        window.location.href="/"
    }
    const [montant,setMontant]=useState();
    const [nom,setNom]=useState();
    montantclient(sessionStorage.getItem("id")).then(res=>{
        res.json().then(ress=>{
            setMontant(ress)
        })
    })
    getClient(sessionStorage.getItem("id")).then(res=>{
        res.json().then(ress=>{
            // console.log(ress)
            setNom(ress.nom)
        })

    })
    return(
        <div>
            <h3>nom : {nom}</h3>
            Votre argent est {montant}
            <button onClick={handleOnClick}>Se Deconnecter</button>
        </div>
    );
}
export default Profil;