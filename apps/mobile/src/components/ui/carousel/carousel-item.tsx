import type { ViewProps } from 'react-native'
import { View, useWindowDimensions } from 'react-native'

import cn from 'classnames'

type Props = ViewProps & {
  children: JSX.Element
}

export default function CarouselItem({ children, className, ...props }: Props) {
  const layout = useWindowDimensions()

  return (
    <View style={{ width: layout.width }} className="items-center align-center">
      <View
        className={cn(
          'w-[90%] h-full',
          'items-center justify-center',
          className,
        )}
        {...props}
      >
        {children}
      </View>
    </View>
  )
}
