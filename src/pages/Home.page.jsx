import React, { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../components/ui/Spinner.component';
import axios from "axios";
import { baseUrl } from "../constants/api";
import CoinsComponent from '../components/coins/Coins.component';

function HomePage(props) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setLoading(true)
        axios(baseUrl)
            .then(response => {
                setLoading(false)
                //console.log(response.data)
                setData(response.data)
            })
            .catch(error => { setError("An Error occured!") })
    }
        , [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>Crypto Tracking</h1>
                    <h4>This site is an example of Crypto Tracking...this is a good site for Us</h4>
                    <h4>this site is programmed by Samane Razmi</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                {loading ? <Spinner /> : error !== "" ? <h1>{error}</h1> : <CoinsComponent data={data}/>}
                </div>
            </div>

            {/*<Spinner/>*/}
        </div>
    );
}

export default HomePage;