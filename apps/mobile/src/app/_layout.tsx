import '../styles.css'
import { Stack } from 'expo-router'
import Provider from '@/providers'

export { ErrorBoundary } from 'expo-router'

export default function AppLayout() {
  return (
    <Provider>
      <Stack
        screenOptions={{
          header: () => null,
        }}
      >
        {/* Setup Stack as Modal */}
        <Stack.Screen
          name="bills/create"
          options={{
            presentation: 'modal',
            gestureEnabled: true,
          }}
        />
      </Stack>
    </Provider>
  )
}
