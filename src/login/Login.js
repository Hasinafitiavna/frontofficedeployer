import {useState} from "react";
import "./Login.css"
import {login} from "../hooks/useData";
import {useParams} from "react-router-dom";
function Login() {
    const params1 = useParams();
    const [nom,setNom]=useState("jones")
    const [password,setPassword]=useState("j")
    const [donne,setDonne]=useState("");
    const [valid,setValid]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        if ((nom==="")||(password==="")){
            setDonne("veuillez remplir tout les cases")
        }
        else {
            login(nom, password).then(async (res) => {

                res.json().then(ress=>{
                    // console.log(ress.state.toString())
                    if ( ress.state.toString() === "true") {
                        sessionStorage.setItem("nom",nom);
                        sessionStorage.setItem("id",ress.idclient);
                        window.location.href="/";
                    }
                    else {
                        setDonne("verifier que tout est correct")
                    }
                })

            });
        }
    }
  const handleChangeNom=(event)=>{
    setNom(event.target.value);
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }
  return (

      <div className="container-xxl">
          <div className="authentication-wrapper authentication-basic container-p-y">
              <div className="authentication-inner">
                  <div className="card">
                      <div className="card-body">
                          <h4 className="mb-2">Login</h4>
                            <form action="submit"  className="mb-3" onSubmit={handleSubmit}>
                                <div className="mb-3">

                                    <label htmlFor="email" className="form-label">Email or Username</label>
                                    <input className="form-control" value={nom} type="text"  onChange={handleChangeNom}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">password</label>
                                    <input className="form-control" value={password} type="password"  onChange={handleChangePassword}/>
                                </div>

                                {/*<input className="form-control" value={params1.id} type="text"  onChange={handleChangeNom}/>*/}
                                <div className="mb-3">
                                    <button  className="btn btn-primary d-grid w-100">
                                        <i className="bi bi-door-open"></i>Login
                                    </button>
                                </div>
                            </form>
                          <p className="text">{donne}</p>
                          <a href="/inscription">Inscription</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
);
}
export default Login;