import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { typeData } from '../type/type'

type ViewContentProps = {
  data: typeData[]
}

type ItemType = {
  item: typeData
}

const ViewContent = ({ data }: ViewContentProps) => {
  const renderItem = ({ item }: ItemType) => (
    <View className="bg-violet-400 mb-5 h-[60]">
      <Text>ID: {item.id}</Text>
      <Text numberOfLines={1}>Title: {item.title}</Text>
    </View>
  )

  return (
    <FlatList
      data={data}
      ListEmptyComponent={<Text className="text-5xl font-bold text-center text-black mt-5">No Data</Text>}
      renderItem={renderItem}
    />
  )
}

export default ViewContent
