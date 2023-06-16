import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

type ViewButtonProp = {
  getAPI: () => void

  post: () => void
  handleClear: () => void
}

const ViewButton = ({ getAPI, post, handleClear }: ViewButtonProp) => {
  return (
    <View className="flex-row bg-red-400 py-4 justify-around">
      <TouchableOpacity className="border-2 bg-cyan-300 p-2 rounded-xl " onPress={getAPI}>
        <Text className="text-black">Get</Text>
      </TouchableOpacity>

      <TouchableOpacity className="border-2 bg-cyan-300 p-2 rounded-xl" onPress={post}>
        <Text className="text-black">Post</Text>
      </TouchableOpacity>
      <TouchableOpacity className="border-2 bg-cyan-300 p-2 rounded-xl" onPress={handleClear}>
        <Text className="text-black">Clear</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ViewButton
