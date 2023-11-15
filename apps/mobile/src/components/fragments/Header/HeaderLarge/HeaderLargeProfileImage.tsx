import { TouchableOpacity } from 'react-native'

import {
  useMarginRightAnimation,
  useSizeAnimation
} from '@/hooks/utils/useAnimation'

import Avatar from '../../Avatar'

type Props = {
  uri?: string
  controlValue?: boolean
  onPress?: () => void
}

export default function HeaderLargeProfileImage({
  uri,
  controlValue = false,
  onPress = () => {}
}: Props) {
  const animatedImageSize = useSizeAnimation(controlValue)
  const animatedImageMargin = useMarginRightAnimation(controlValue)

  return (
    <TouchableOpacity onPress={onPress}>
      <Avatar.Profile
        source={{ uri }}
        style={[animatedImageSize, animatedImageMargin]}
      />
    </TouchableOpacity>
  )
}