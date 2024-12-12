import React from 'react'
import type { TouchableOpacityProps } from 'react-native'
import { Text, TouchableOpacity } from 'react-native'

import cn from 'classnames'

type Props = TouchableOpacityProps & {
  textClassName?: string
  children: string
}

export function ButtonPrimary({
  textClassName,
  className,
  children,
  ...props
}: Props) {
  return (
    <TouchableOpacity
      className={cn(
        'min-w-full h-14 p-4 items-center justify-center bg-black rounded-lg',
        'disabled:opacity-25',
        className,
      )}
      {...props}
    >
      <Text
        className={cn(
          'font-semibold text-base text-white capitalize',
          textClassName,
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
