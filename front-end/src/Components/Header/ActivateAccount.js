import React, { Fragment } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import axios from "axios";
import { Button, Container, Row} from 'react-bootstrap';


const ActivateAccount = () => {

    const { uid, token }: {uid: string, token: string} = useParams();
    
    const history = useHistory();
    
    const activeClick = (e) => {
       
        axios.post('http://127.0.0.1:8000/api/auth/users/activation/', {uid: uid, token: token})
        
            .then(() => {
                console.log({uid: uid, token: token})
                alert("please, press the login button now!" )
            })
            .catch(err => {
                alert(err.response.data);
            })
    };
    
    return (
      
        <>
            <div className="text-center">
            <Row></Row>
            <h3 className="text-white mt-3">To activate your account, please click on the button below:</h3>
            <Button size="lg" onClick={activeClick} variant="danger">Activate Now</Button>
            </div>

        </>
    )
    }
    
    export default ActivateAccount;