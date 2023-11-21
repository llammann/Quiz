import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function Sortedbuttons({products,setProducts}) {

  return (
    <>
    <Button
    onClick={(e)=> {
        e.preventDefault()
    let newArr=[...products].sort((a,b)=>(a.price -b.price))
    setProducts(newArr)
    }}
    >Cheapest to Expensive</Button>
    </>
  )
}

export default Sortedbuttons