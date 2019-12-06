import React, {useState} from 'react'

const Forex=({currency, date, rate, myr})=>{

const valuation = (myr / rate)

  return(<>
<div className="forex">
<p className="valuation">{currency}: { valuation ? valuation.toFixed(2) : "0"}</p>
<p>Exchange rate: {rate}</p>
<p>{date}</p>
</div>
  </>)
}

export default Forex