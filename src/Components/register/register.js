import { useState, useEffect } from "react";

const Register = ()=>{

    const [user, setUser] = useState({Name:'', mail:'', userName:'', password:'', confirmPass:''});
    const [errors, setError] = useState({nameError:null, mailError: null, userNameError:null, passError: null, confirmPassError:null});

    const [formValid, setFormValid] = useState(false);
    const [untouched, setTouched] = useState({Name:false, mail:false, userName:false, password: false, confirmPass:false});


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
                    (evt.target.value.length < 8)?'Password must be 8 characters at least!':
                    !( /[A-Z]+/.test(evt.target.value) )? 'Password must contain at least one uppercass character.':
                    !( /[a-z]+/.test(evt.target.value) )? 'Password must contain at least one lowercass character.':
                    !( /[*@%$#]+/.test(evt.target.value) )? 'Password must contain at least one special character.':null

                 }) ;
                    // ( /[@<>%].*[a-z].*[A-Z].*/.test(evt.target.value) )?null: 'Password mast contain at least one upper, lower cass and special char.' }) ;
            
            setTouched({...untouched, password:true});
        }
        else if (evt.target.name == 'name')
        {
            setUser({...user, Name: evt.target.value});
            setError({...errors, nameError: (evt.target.value.length == 0)?'* This Field is require':null});
            
            setTouched({...untouched, Name:true});
        }
        else if (evt.target.name == 'userName')
        {
            setUser({...user, userName: evt.target.value});
            setError({...errors, userNameError: (evt.target.value.length == 0)?'* This Field is require':
            ( /^[A-Z0-9.@]{2,}$/i.test(evt.target.value) )?null:"* UserName isn't match!" });

            setTouched({...untouched, userName:true});
        }
        else if (evt.target.name == 'confirmPassword')
        {
            setUser({...user, confirmPass: evt.target.value});
            setError({...errors, confirmPassError: (evt.target.value == user.password)?null:'* Two password not equal!' });

            setTouched({...untouched, confirmPass:true});
        }

    }

    useEffect(()=>{
        setFormValid(true);

        for (let err in errors)
        {
            // console.log( errors[err], err);
            if(errors[err] != null)
            {
                setFormValid(false);
                break;
            }
        }

        for (let toutch in untouched)
        {
            // console.log(untouched[toutch], toutch);
            if(untouched[toutch] == false)
            {
                setFormValid(false);
                break;
            }
        }

    },[errors])


    return (
        <>
        <div className="container text-center">
            <h3>** Registeration Form **</h3>

            <form className="text-start mx-auto w-50">

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" className="form-control" name="name" id="name" onChange={(event)=> {validateForm(event) }} value={user.Name}/>
                  <small className="form-text text-danger">{errors.nameError}</small>
                </div>

                <div className="mb-3">
                  <label htmlFor="mail" className="form-label">Email</label>
                  <input type="email" className="form-control" name="Email" id="mail" onChange={(event)=> {validateForm(event) }} value={user.mail}/>
                  <small className="form-text text-danger">{errors.mailError}</small>
                </div>

                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">userName:</label>
                  <input type="text" className="form-control" name="userName" id="userName" onChange={(event)=> {validateForm(event) }} value={user.userName}/>
                  <small className="form-text text-danger">{errors.userNameError}</small>
                </div>

                <div className="mb-3">
                  <label htmlFor="pass" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" id="pass" onChange={(event)=> {validateForm(event) }} value={user.password}/>
                  <small className="form-text text-danger">{errors.passError}</small>
                </div>

                <div className="mb-3">
                  <label htmlFor="cpass" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" name="confirmPassword" id="cpass" onChange={(event)=> {validateForm(event) }} value={user.confirmPass}/>
                  <small className="form-text text-danger">{errors.confirmPassError}</small>
                </div>

                <button type="submit" className="btn btn-primary px-5" disabled={!formValid} >Login</button>
            </form>

        </div>
        </>
    );


}
export default Register;