import {useState} from "react";
import {encherir, useEncherir} from "../hooks/useData";

function Encherir(){
    const [montant,setMontant]=useState("");
    const [message,setMessage]=useState("");
    const handleMontant = (event) => {
        setMontant(event.target.value);
    }
    const useHandleSubmit = (event) => {
        event.preventDefault();
        console.log(montant);

        const timestamp = Date.now();// This would be the timestamp you want to format
        const datenow = new Intl.DateTimeFormat('fr-FR', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        let datedebut1 = datenow.replace(",","").replace(" PM","").replace(" AM","")
        let datedebut2 = datedebut1.split(" ")[0]
        let datedebut5 = datedebut2.split("")
        let datedebut3 = datedebut5[6]+datedebut5[7]+datedebut5[8]+datedebut5[9]+"-"+datedebut5[3]+datedebut5[4]+"-"+datedebut5[0]+datedebut5[1]
        let datedebut4 = datedebut3+" "+datedebut1.split(" ")[1]
        const dateaction = datedebut4

        const valeur=encherir(sessionStorage.getItem("idenchere"),sessionStorage.getItem("id"),montant,dateaction);
        // setMessage(valeur.message);
        valeur.then((res)=>{
            // console.log()
            res.json().then(ress=>{
                console.log(ress)
                setMessage(ress.message)
            })
        })
        console.log()
        setMontant("");
    }
    return(
        <div className="container">
            <div className="enchere" width="400">
                <h3>Encherir</h3><br/>
                <form action="submit" onSubmit={useHandleSubmit}>

                    <p><label htmlFor="montantdebase">Montant</label>
                        <input className="form-control" type="number" value={montant} onChange={handleMontant} id="montantdebase"/></p>
                    <input className="form-control btn-primary" type="submit" value="Valider" id="valider" />
                </form>
                {message}
            </div>
        </div>
    );
}
export default Encherir;