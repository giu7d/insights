import React from 'react'
import { Text } from 'react-native'

import Canvas from '@/components/ui/canvas'
import Carousel from '@/components/ui/carousel'
import Pagination from '@/components/ui/pagination'

export default function WelcomeCarousel() {
  return (
    <Carousel.Root
      renderPagination={(index, position) => (
        <Pagination.Item
          key={`carousel-pagination-item-${index}`}
          id={index}
          currentPosition={position}
        />
      )}
    >
      <Carousel.Item>
        <Canvas.Root>
          <Canvas.Scene.AbstractArt />
        </Canvas.Root>
      </Carousel.Item>
      <Carousel.Item>
        <Text>Slide 2</Text>
      </Carousel.Item>
    </Carousel.Root>
  )
}
