import React from 'react'
import { KeyboardAvoidingView, View } from 'react-native'
import type { ViewProps } from 'react-native'

import cn from 'classnames'

type Props = {
  isVisible: boolean
  onClose: () => void
  children: JSX.Element | JSX.Element[]
}

type ModalDrawerContainerProps = {
  children: JSX.Element | JSX.Element[]
} // TODO: Rename

function ModalDrawerBackdrop({ className, ...props }: ViewProps) {
  return (
    <View
      {...props}
      className={cn(
        'absolute z-10 flex h-full w-full bg-[rgba(0,0,0,0.4)]',
        className,
      )}
    />
  )
}

function ModalDrawerContainer({ children }: ModalDrawerContainerProps) {
  return (
    <KeyboardAvoidingView
      behavior='position'
      className='absolute bottom-0 left-0 right-0 z-50 flex w-full'
    >
      <View className='m-4 mb-6 flex w-fit flex-col rounded-3xl bg-white'>
        <View className='mt-4 h-1 w-24 self-center rounded-full bg-neutral-300' />
        <View className='flex flex-col gap-12 p-6'>{children}</View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default function ModalDrawer({ children, isVisible, onClose }: Props) {
  if (!isVisible) return <></>

  return (
    <>
      {/* Backdrop */}
      <ModalDrawerBackdrop onTouchEnd={onClose} />
      {/* Modal */}
      <ModalDrawerContainer>{children}</ModalDrawerContainer>
    </>
  )
}
