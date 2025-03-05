import { useState, useEffect } from 'react'
import { Button } from './ui/button'

const Count: React.FC = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        setCount(parseInt(data.count))
      })
  }, [])

  return (
    <>
      <Button
        variant='outline'
        onClick={() => {
          const newCount = count + 1
          setCount(newCount)
          fetch('/api', {
            method: 'POST',
            body: JSON.stringify({ count: newCount }),
          })
        }}
      >
        count++
      </Button>
      <p>count: {count}</p>
      <p>
        backend: GET{' '}
        <a className='underline' target='_blank' href='/api'>
          /api
        </a>
      </p>
    </>
  )
}

export default Count
