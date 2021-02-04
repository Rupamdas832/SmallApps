import React, {useEffect, useState} from 'react'

const Crypto = () => {
    const [coins, setCoins] = useState([])

    const getCoins = async () => {
        try {
            fetch("https://api.coinranking.com/v2/coins", {
                mode: "no-cors"
            })
            .then(response => response.json())
            .then(result => console.log(result))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCoins()
    },[])
    return (
        <div>
            crypto
        </div>
    )
}

export default Crypto
