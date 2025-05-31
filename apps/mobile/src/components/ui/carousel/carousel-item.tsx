import type { ViewProps } from 'react-native'
import { View, useWindowDimensions } from 'react-native'

import cn from 'classnames'

type Props = ViewProps & {
  children: JSX.Element
}

export default function CarouselItem({ children, className, ...props }: Props) {
  const layout = useWindowDimensions()

  return (
    <View style={{ width: layout.width }} className='align-center items-center'>
      <View
        className={cn(
          'h-full w-[90%]',
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
