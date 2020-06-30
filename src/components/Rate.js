/* eslint-disable */ 

import React, {useEffect, useState, useContext} from 'react'
import CatContext from '../Catcontext/CatContext'
import Loading from './Loading'

const Rate = ({rate, description}) => {
    const [value,dispatch] = useContext(CatContext)
    const [loading,setLoading] = useState(false)
    const [tempArray, setTempArray] = useState([])
    const rates = [];

    
      

    useEffect(()=>{
        setLoading(true) 
        for (let i=1; i<= rate ; i++ ){
            rates.push(<li key={i}> {i} </li>)
        }
        setTempArray(rates)
        setLoading(false)
        
        
        
    },[rate])

    if (loading || tempArray === undefined) return <Loading />
    return (
        
            <div >
            <ul className="rate-area">
                    <small className="white-text " style={{margin:'5px',fontSize:'14px'}}> {description} </small>
                    <br/>
                    {tempArray.map((v,i)=>(
                         <li key={i}> <i className="material-icons yellow-text">star</i> </li>
                    ))}

            </ul>

               
            </div>
        
    )
}

export default Rate 
