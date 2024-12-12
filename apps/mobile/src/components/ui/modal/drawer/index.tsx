import React from 'react'
import { KeyboardAvoidingView, View, type ViewProps } from 'react-native'

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
        'absolute flex w-full h-full z-10 bg-[rgba(0,0,0,0.4)]',
        className,
      )}
    />
  )
}

function ModalDrawerContainer({ children }: ModalDrawerContainerProps) {
  return (
    <KeyboardAvoidingView
      behavior="position"
      className="absolute flex w-full z-50 bottom-0 right-0 left-0"
    >
      <View className="flex flex-col w-fit m-4 mb-6 bg-white rounded-3xl">
        <View className="h-1 w-24 mt-4 bg-neutral-300 rounded-full self-center" />
        <View className="flex flex-col gap-12 p-6">{children}</View>
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
