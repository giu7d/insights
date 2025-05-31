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
        'h-14 min-w-full items-center justify-center rounded-lg bg-black p-4',
        'disabled:opacity-25',
        className,
      )}
      {...props}
    >
      <Text
        className={cn(
          'text-base font-semibold capitalize text-white',
          textClassName,
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
