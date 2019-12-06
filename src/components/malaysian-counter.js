import React, {useState} from 'react'

const MalaysianCounter=({slot})=>{
const [amount, setAmount] = useState()

const handleInput =(e)=>{
  setAmount(e.target.value)
}

slot(amount)

 return(<div>
  MYR<input onChange={handleInput} value={amount} type="number" className="input" />
  </div>)
}

export default MalaysianCounter