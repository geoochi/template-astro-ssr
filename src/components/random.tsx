import { useState } from 'react'
import { Button } from './ui/button'
export default function Random() {
  const [count, setCount] = useState(0)
  const [randomNum, setRandomNum] = useState(0)
  return (
    <>
      <Button
        onClick={async () => {
          setCount(count + 1)
          const res = await fetch('/api')
          const data = await res.json()
          console.log(data)
          setRandomNum(data.randomNum)
        }}
      >
        click me
      </Button>
      <p>count: {count}</p>
      <p>randomNum: {randomNum}</p>
    </>
  )
}
