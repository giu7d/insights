import { TouchableOpacity, View } from 'react-native'

import Animated from 'react-native-reanimated'

import CashbackBadge from '@/components/fragments/Badges/Cashback'
import ProfileImage from '@/components/fragments/ProfileImage'
import { trpc } from '@/services/api'

import { createAnimation } from './animation'

type Props = {
  isCompact?: boolean
  onOpenProfile?: () => void
}

export default function Header({
  isCompact = false,
  onOpenProfile = () => {}
}: Props) {
  const { data } = trpc.users.find.useQuery({ id: 'my-id' })
  const animations = createAnimation(isCompact)

  if (!data) return <></>

  return (
    <View className="flex-row items-center p-6 py-4 justify-between">
      <View className="flex-row items-center justify-start">
        <TouchableOpacity onPress={onOpenProfile}>
          <ProfileImage
            source={{ uri: data.photo }}
            component={Animated.Image}
            style={animations.image}
          />
        </TouchableOpacity>
        <View className="gap-1">
          <View>
            <Animated.Text
              className="text-sm text-neutral-500"
              style={animations.hidden}
            >
              Hello
            </Animated.Text>
            <Animated.Text
              className="text-lg capitalize text-neutral-900 font-semibold"
              style={animations.text}
            >
              {data.firstName} {data.lastName}
            </Animated.Text>
          </View>
          <View>
            <CashbackBadge
              cashbackTotal={data.cashback.total}
              component={Animated.View}
              style={animations.hidden}
            />
          </View>
        </View>
      </View>
      <CashbackBadge
        cashbackTotal={data.cashback.total}
        component={Animated.View}
        style={[animations.visibleWhenCompacted]}
      />
    </View>
  )
}
