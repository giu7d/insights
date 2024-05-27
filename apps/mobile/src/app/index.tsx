import { Text, View } from 'react-native'

import { api } from '@/services/api'

export default function Index() {
  const bills = api.bills.list.useQuery()

  if (bills.error) console.log(bills.error)

  if (bills.isLoading) return <Text>Loading...</Text>

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className="color-red-600">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  )
}
