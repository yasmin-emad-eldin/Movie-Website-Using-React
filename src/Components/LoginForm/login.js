import { useState, useEffect } from "react";

const Login = ()=>{

    const [user, setUser] = useState({mail:'', password:''});
    const [errors, setError] = useState({mailError: null, passError: null});
    const [formValid, setFormValid] = useState(false);

    const [untouched, setTouched] = useState({mail:false, pass: false});

    const validateForm = (evt)=>{
        if (evt.target.name == 'Email')
        {
            setUser({...user, mail: evt.target.value});
            setError({...errors, mailError: (evt.target.value.length == 0)?'* This Field is require':
            ( /^[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(evt.target.value) )?null:"* Email isn't match!" });

            setTouched({...untouched, mail:true});
        }
        else if (evt.target.name == 'password')
        {
            setUser({...user, password: evt.target.value});
            setError({...errors, passError: (evt.target.value.length == 0)?'* This Field is require':
                    (evt.target.value.length < 8)?'Password must be 8 characters at least!':null }) ;
            
            setTouched({...untouched, pass:true});
        }
    }

    
    useEffect(()=>{
        setFormValid(true);

        for (let err in errors)
        {
            console.log( errors[err], err);
            if(errors[err] != null)
            {
                setFormValid(false);
                break;
            }
        }

        for (let toutch in untouched)
        {
            console.log(untouched[toutch], toutch);
            if(untouched[toutch] == false)
            {
                setFormValid(false);
                break;
            }
        }

    },[errors])


    return(
        <>
        <div className="container text-center">
            <h3>** Login Form **</h3>
            <form className="text-start mx-auto w-50">

                <div className="mb-3">
                  <label htmlFor="mail" className="form-label">Email</label>
                  <input type="email" className="form-control" name="Email" id="mail" onChange={(event)=> {validateForm(event) }} value={user.mail}/>
                  <small className="form-text text-danger">{errors.mailError}</small>
                </div>

                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" id="pass" onChange={(event)=> {validateForm(event) }} value={user.password}/>
                  <small className="form-text text-danger">{errors.passError}</small>
                </div>

                <button type="submit" className="btn btn-primary px-5" disabled={!formValid} >Login</button>
            </form>
        </div>
        </>
    );

}
export default Login