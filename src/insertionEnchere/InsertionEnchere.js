function InsertionEnchere() {
    return(
        <div className="container">
            <div className="enchere" width="400">
                <h3>Inserer enchere</h3><br/>
                <form action="#">
                    <p><label>Produit :</label>
                        <select className="form-control" aria-label="Nom produit">
                            <option selected>Voir les encheres</option>
                            <option valur="1">Voiture</option>
                            <option valur="2">Moto</option>
                            <option valur="3">Avion</option>
                        </select></p>
                    <p><input type="text" name="idclientdetenteur" hidden/></p>
                    <p><label htmlFor="datedebut">Date debut :</label>
                        <input className="form-control" type="datetime-local" name="datedebut" id="datedebut" />
                    </p>

                    <p><label htmlFor="datefin">Date fin :</label>
                        <input className="form-control" type="datetime-local" name="datefin" id="datefin" />
                    </p>

                    <p><label htmlFor="montantdebase">Montant de base</label>
                        <input className="form-control" type="number" value="" id="montantdebase"/></p>
                    <input className="form-control btn-primary" type="submit" value="Valider" id="valider" />
                </form>
            </div>
        </div>
    );
}
export default InsertionEnchere