"use client"

import { Link, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "react-day-picker"



const reviews = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "Homeowner",
        content: "Nuclearnick Construction transformed our driveway! The team was professional, efficient, and the quality of work is outstanding. Highly recommend!",
        rating: 5,
    },
    {
        id: 2,
        name: "Michael Ross",
        role: "Property Manager",
        content: "We hired Nuclearnick for a large commercial parking lot project. They finished on time and under budget. The new pavement looks fantastic.",
        rating: 5,
    },
    {
        id: 3,
        name: "David Miller",
        role: "Business Owner",
        content: "Great experience from start to finish. The crew was polite and cleaned up perfectly. Our new tar and chip road is exactly what we wanted.",
        rating: 5,
    },
    {
        id: 4,
        name: "Emily Chen",
        role: "Homeowner",
        content: "I was impressed by their attention to detail. They fixed drainage issues we've had for years. Thank you Nuclearnick Construction!",
        rating: 5,
    },
]

export default function ReviewSection() {
    return (
        <section className="py-24 bg-zinc-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-24 lg:px-40">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        What Our Clients <span className="text-primary">Say</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                        Don't just take our word for it. Here's what our customers have to say about their experience with Nuclearnick Construction.
                    </p>
                </div>

                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {reviews.map((review) => (
                                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="border-0 shadow-lg bg-white h-full">
                                            <CardContent className="flex flex-col p-8 h-full">
                                                <div className="flex mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-5 h-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-muted-foreground mb-6 flex-grow italic">"{review.content}"</p>
                                                <div className="mt-auto">
                                                    <p className="font-bold text-foreground">{review.name}</p>
                                                    <p className="text-sm text-primary">{review.role}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-12 w-10 h-10 border-2 border-primary text-primary hover:bg-primary hover:text-white" />
                            <CarouselNext className="-right-12 w-10 h-10 border-2 border-primary text-primary hover:bg-primary hover:text-white" />
                        </div>
                    </Carousel>


                </div>
            </div>
        </section>
    )
}
