import React, {useEffect, useState} from 'react'

const Crypto = () => {
    const [coins, setCoins] = useState([])

    const getCoins = async () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const response = await fetch("https://api.coinranking.com/v2/coins?limit=10",{
            headers: {
                'x-access-token': 'coinrankinge1eab9daa6c8dc7882f498ff84049614872be9fea18cb6d2'
            }
        })
        const {data} = await response.json();
        console.log(data.coins)
    }
    
    useEffect(() => {
        getCoins()
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Crypto
