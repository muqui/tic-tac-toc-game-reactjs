import React from 'react'
import { Box } from './Box'

export const Board = ({board, onclick}) => {
  return (
    <div className='board'>
      {board.map((value, id)=>{
        return <Box value ={value} onclick={() => value === null && onclick(id)}   />
      })}
       
    </div>
  )
}
