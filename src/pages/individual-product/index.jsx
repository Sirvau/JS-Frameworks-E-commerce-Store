import { useParams } from "react-router-dom"

function IndividualProductPage() {
    let params = useParams()
    console.log(params)
    return ( 
    <div>Placeholder for Individual Product Page: {params.id}</div>
    )
  }
export default IndividualProductPage