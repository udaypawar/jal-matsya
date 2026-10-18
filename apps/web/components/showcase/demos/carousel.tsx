"use client"

import * as React from "react"

import { Card, CardContent } from "@jal-matsya/ui/components/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@jal-matsya/ui/components/carousel"

export default function CarouselDemo() {
  return (
    <div className="w-full max-w-sm px-12">
      <Carousel className="w-full">
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((slide) => (
            <CarouselItem key={slide}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{slide}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
