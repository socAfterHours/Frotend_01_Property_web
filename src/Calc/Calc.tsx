import React from "react";
import { useState } from "react"


 export default function Calc() {
  const [interest, setInterest] = useState(3.3)
  const [years, setYears]= useState(25)
  const [monthlypay, setMonthlyPay] = useState(0)
  const [house, setHouse] = useState(0)

  
  const handleClick = () => {
    let r = (interest/100)/12
    let n = years*12
    let top= (1+r)**n
    let fulltop = r*top
    let bottom = top -1
    let divide =  fulltop/bottom
    let payment = house*divide
    let monthly = Math.round(payment)
    console.log(monthly);
    setMonthlyPay(monthly)
 }



 const handleInterestChange = (e: React.FormEvent<HTMLInputElement>) => {
    const int = Number(e.currentTarget.value)
    setInterest(int)
 }

 const handlePayOffChange = (e: React.FormEvent<HTMLInputElement>) => {
  const payOff = Number(e.currentTarget.value)
  setYears(payOff)
}

const handleHouseCostChange = (e: React.FormEvent<HTMLInputElement>) => {
  const houseCost = Number(e.currentTarget.value)
  setHouse(houseCost)
}


  return (

  <div>
    <label>
      <span>Interest Rate</span> 
      <input onChange={handleInterestChange} type="range" min="0" max="20" step="0.1" value={interest} className="InterestRate"></input>
      <span data-testid="interest">{interest}</span> 
    </label>
    <br/>
    <label>
      <span>Years To Pay Off Mortgage</span> 
      <input onChange={handlePayOffChange} type="range" min="10" max="40" value={years} className="years"></input>
      <span data-testid="years">{years}</span> 
    </label>
    <br/>
    <br/>
    <label>
      <span>Estimated Cost Of House</span> 
      <input data-testid="houseCost" onChange={handleHouseCostChange} type="textarea" className="years"></input> 
    </label>
    <br/>
    <button onClick={handleClick} type="button">Click To Calculate</button>
    <h2 data-testid="monthly">Monthly Payments: £{monthlypay}</h2>
  </div>



  )
  }