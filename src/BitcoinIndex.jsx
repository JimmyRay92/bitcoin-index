import {useState, useEffect} from "react"

function BitcoinIndex({currency}) {
    const [price, setPrice] = useState(0)
    const [usd, setUSD] = useState(0)
    let [count, setCount] = useState(0)

    useEffect(()=>{
        fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
        .then(res =>res.json())
        .then((data) => setPrice(data.bpi[currency].rate))
    }, []
    )

    useEffect(()=>{
        fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
        .then(res => res.json())
        .then((data) => setUSD(data.bpi[currency].rate))
    }, []
    )

    return (
        <>
            <h1>Bitcoin index</h1>
            {price ?  <p>Current price: {currency}{price}</p>: <p>Loading</p>}
            <p>Current price in {currency}: {usd}</p>
            <button onClick={()=>setCount(count+1)}>Click me{count}</button>
        </>
    )
}

export default BitcoinIndex