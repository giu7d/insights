import '@/styles.css'

import { Stack } from 'expo-router'

import Provider from '@/services/providers'

export default function RootLayout() {
  return (
    <Provider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='index' />
      </Stack>
    </Provider>
  )
}
