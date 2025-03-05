import { useState, useEffect } from 'react'
import { Button } from './ui/button'

const Count: React.FC = () => {
  const [count, setCount] = useState(0)

  function fetchCount(method: string = 'GET') {
    fetch('/api', { method: method })
      .then(res => res.json())
      .then(data => {
        setCount(parseInt(data.count))
      })
  }

  useEffect(fetchCount, [])

  return (
    <>
      <Button variant='outline' onClick={() => fetchCount('POST')}>
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
