import { useParams } from 'react-router-dom'


function Number() {
        const {variable,color1,color2} = useParams()
        const num=isNaN(variable)
return (
    <div style={{backgroundColor:color2}}>
    {num?  <h1  style={{color : color1}}>The word is : {variable}</h1> :
    <h1  style={{color: color1}}>The number is : {variable}</h1> }
    </div>
)
}

export default Number