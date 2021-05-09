import React from 'react'

import { useEffect, useState } from 'react'
const KEY = 'codepen-clone-'

export default function History(name,initialValue) {

  // const {
  //   name, initialValue
  // } = props

  const prefix = KEY + name

  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(prefix)
    if (data != null)
      return JSON.parse(data)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(prefix, JSON.stringify(value))
  }, [prefix, value])

  return [value, setValue]
}