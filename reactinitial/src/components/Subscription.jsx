import React, {useState} from 'react';
import http from 'axios';

import LoadingMask from './LoadingMask';


const Subscription = ({setIsShown}) => {

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [hasSent, setHasSent] = useState(false);

    const loadSub = async() => {
        setLoading(true);
        const response = await http.post('https://seriescharacters.com/api/newsletter', {
            email: email
        });
        setLoading(false);
        setHasSent(true);
        setTimeout(() => {
            setIsShown(false);
        }, 5 * 1000);
    };

    const isValid = email.includes('@') && email.includes('.');
  return (
    <div>
        <h3>Subscribe to our newsletter</h3>
        {loading ? <LoadingMask/> : hasSent ? "Subscribed" : 
        <div>
            <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value) }/>
            <button onClick={loadSub} disabled={!isValid}>Subscribe</button>
        </div>
    }
        
    </div>
  )
}

export default Subscription