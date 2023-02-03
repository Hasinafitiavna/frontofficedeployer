import {useEffect, useState} from "react";

export function useData(){
    const [data,setData] =useState([] );

    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/listeenchere"
            const data = await fetch(url);
            const json =await data.json();
            setData(json)
            // console.log(json)
        };
        loadData();
    },[])

    return data

}

export async function inscription(nom,mdp){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/inscription/"+nom+"/"+mdp;
    return await fetch(url);
}
export function useEnchere(id){
    const [data,setData] =useState([]) ;

    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/getEncherebyId/"+id;
            const data = await fetch(url);
            const json =await data.json();
            setData(json)
            // console.log(json.id)
        };
        loadData();
    },[])

    return data

}


// export function loginClient(name,password){
//     const [data,setData] =useState([]) ;
//
//     useEffect(()=>{
//         const loadData = async ()=>{
//             const url="https://webservice-enchere-production.up.railway.app/api/encheres/"+name+"/"+password;
//             const data = await fetch(url);
//             const json =await data.json();
//             setData(json)
//             // console.log(json.id)
//         };
//         loadData();
//     },[])
//
//     return data
//
// }

export function useHistorique(id){
    const [data,setData] =useState([] );

    useEffect(()=>{
        const loadData = async ()=>{
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/gethistorique/"+id;
            const data = await fetch(url);
            const json =await data.json();
            setData(json)
            // console.log(json)
        };
        loadData();
    },[])

    return data

}

export async function login(name,password ){
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/loginV/"+name+"/"+password;
    return await fetch(url);
}
export async function liste() {
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/listeenchere";
    return await fetch(url);
}

export async function encherir(idenchere,idclient,montant,date) {
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/encherir/"+idenchere+"/"+idclient+"/"+montant+"/"+date;
    return await fetch(url);
}


export async function montantclient(idclient) {
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/getmontantclient/"+idclient;
    return await fetch(url);
}

export async function getClient(idclient) {
    const url="https://webservice-enchere-production.up.railway.app/api/encheres/client/"+idclient;
    return await fetch(url);
}


export function useEncherir(idenchere,idclient,montant,date){
    const [data,setData] =useState([]);

    useEffect(()=>{
        const loadData = async ()=>{
            // const url="https://webservice-enchere-production.up.railway.app/api/encheres/encherir/"+idenchere+"/"+idclient+"/"+montant+"/"+date
            const url="https://webservice-enchere-production.up.railway.app/api/encheres/encherir/3/1/70000/2011-03-10 21:48:00"
            const data = await fetch(url);
            const json =await data.json();
            setData(json)
            // console.log(json)
        };
        loadData();
    },[])

    return data

}

//
// export async function enchere(id) {
//     const [data,setData] =useState() ;
//
//     useEffect(()=>{
//         const loadData = async ()=>{
//             const url="https://webservice-enchere-production.up.railway.app/api/encheres/getenchere/"+id;
//             const data = await fetch(url);
//             const json =await data.json();
//             setData(json);
//             // console.log(json)
//         };
//         loadData();
//     },[]);
//
//     return data;
// }