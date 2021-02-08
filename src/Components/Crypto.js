import React, {useEffect, useState} from 'react'

const Crypto = () => {
   // const [coins, setCoins] = useState([])

    const getCoins = async () => {
       // const url1 = "https://api.coinranking.com/v2/coins?limit=10";
       // const key1 = 'coinrankinge1eab9daa6c8dc7882f498ff84049614872be9fea18cb6d2';
        const url2 = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
        const key2 = "deafcbf6-7fb9-45a7-85de-c889a6eaae83";
        const response = await fetch(url2,{
            qs: {
                'start': '1',
                'limit': '10',
                'convert': 'USD'
            },
            headers: {
                'X-CMC_PRO_API_KEY': key2,
                "Accept": "application/json"
            },
            json: true,
            gzip: true
        })
        const result = await response.json();
        console.log(response)
        
        /*    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",{
            qs: {
                'start': '1',
                'limit': '10',
                'convert': 'USD'
            },
            headers: {
                'X-CMC_PRO_API_KEY': "deafcbf6-7fb9-45a7-85de-c889a6eaae83"
            },
            json: true,
            gzip: true
        }).then(response => response.json()).then(result => console.log(result))

        */
    }
    
    useEffect(() => {
        getCoins();
    },[])
    return (
        <div>
            <h1>cryptooooo</h1>
        </div>
    )
}

export default Crypto
