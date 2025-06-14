import { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function download () {
      const response = await fetch('http://localhost:4000/count')
      const data = await response.json()
      console.log('data', data)
      setCount(data.count)
    }
    download()
  }, [])

  async function handleClick () {
    const response = await fetch('http://localhost:4000/count', {
      method: 'PATCH'
    })
    const data = await response.json()
    console.log('increment', data)
    setCount(data.count)
  }

  return (
    <>
      <button onClick={handleClick}>
        count is {count}
      </button>
    </>
  )
}
