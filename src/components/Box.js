import React from 'react'

export const Box = ({value, onclick}) => {
    const style = value === "X" ? "box x" : "box o";
  return (
    <button className={style} onClick={onclick}>{value}</button>
  )
}
