import React, { useState } from 'react'
import { View } from 'react-native'
import ViewContent from './components/ViewContent'
import axios from 'axios'
import ViewButton from './components/ViewButton'
import { typeData } from './type/type'

const baseURL = 'http://jsonplaceholder.typicode.com'

const App = () => {
  const [data, setData] = useState<typeData[]>([])

  const getAPI = async () => {
    try {
      const response = await axios.get(`${baseURL}/posts`)

      setData(response.data)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  const post = async () => {
    try {
      const response = await axios.post(`${baseURL}/posts`, {
        userID: 10,
        id: 101,
        title: 'new title dat',
        body: 'new body dat',
      })

      console.log(response.data)
    } catch (err) {
      console.log('err:', err)
    }
  }

  const handleClear = () => {
    setData([])
  }

  return (
    <View className="flex-1 border-2 m-3">
      <ViewButton getAPI={getAPI} post={post} handleClear={handleClear} />
      <ViewContent data={data} />
    </View>
  )
}

export default App
