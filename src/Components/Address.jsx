import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
export default function Address(){
    const [form,setForm] = useContext(FormContext)
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const updateAddress = e => { 
        setAddress(e.target.value)
        var updatedForm = {Address: address}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateCity = e => { 
        setCity(e.target.value)
        var updatedForm = {City: city}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateState = e => { 
        setState(e.target.value) 
        var updatedForm = {State: state}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    const updateZip = e => { 
        setZip(e.target.value)
        var updatedForm = {Zip: zip}
        setForm(form => ({
            ...form,
            ...updatedForm
        }))
    }
    return(
        <div>
            <h2>This is address.</h2>
                {/* <TextField 
                    label="Address" 
                    name="address" 
                    value={address}
                    onChange={updateAddress}
                    onSelect={updateAddress}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                /> */}
                Address: <input type="text" value={address} onSelect={updateAddress} onChange={updateAddress} placeholder='House Number'/> <br />
                City: <input type="text" value={city} onSelect={updateCity} onChange={updateCity} placeholder='Faridabad'/> <br />
                State: <input type="text" value={state} onSelect={updateState} onChange={updateState} placeholder='State'/> <br />
                Zip: <input type="text" value={zip} onSelect={updateZip} onChange={updateZip} placeholder='121001'/> <br />
            <Link to='/'>
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginRight: "1rem" }}
                >
                Back
                </Button>
            </Link>
            <Link to='/contact'>
                <Button
                color="primary"
                variant="contained"
                >
                Next
                </Button>
            </Link>
        </div>
    )
}