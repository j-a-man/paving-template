"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const reviews = [
    {
        name: "John D.",
        rating: 5,
        text: "Woolfolk Paving did an amazing job on our driveway. The team was professional, efficient, and the result looks fantastic. Highly recommend!",
    },
    {
        name: "Sarah M.",
        rating: 5,
        text: "We hired them for a commercial parking lot project, and they exceeded our expectations. Great communication and quality work.",
    },
    {
        name: "Michael R.",
        rating: 5,
        text: "Excellent service from start to finish. They explained the process clearly and finished the job on time. The sealcoating looks great.",
    },
    {
        name: "Emily T.",
        rating: 5,
        text: "Very impressed with the tar and chip work they did on our rural road. It's held up perfectly through the winter.",
    },
    {
        name: "David L.",
        rating: 5,
        text: "Professional crew and top-notch equipment. They repaved our office lot over the weekend with minimal disruption.",
    },
    {
        name: "Jessica K.",
        rating: 5,
        text: "I was worried about the cost, but their quote was very competitive. The value for the quality of work is outstanding.",
    },
]

export default function ReviewSection() {
    return (
        <section className="py-16 md:py-24 bg-secondary/5">
            <div className="container mx-auto px-6 md:px-24 lg:px-40">
                <h2 className="text-4xl md:text-5xl font-normal text-secondary text-left mb-12">
                    What Our Clients Say
                </h2>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="h-full border-none shadow-sm bg-white">
                                        <CardContent className="flex flex-col p-8 h-full">
                                            <div className="flex mb-4">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                                ))}
                                            </div>
                                            <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                                                "{review.text}"
                                            </p>
                                            <p className="font-bold text-secondary">{review.name}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex -left-4 bg-white text-secondary hover:bg-primary hover:text-white border-none h-12 w-12 shadow-md" />
                    <CarouselNext className="hidden md:flex -right-4 bg-white text-secondary hover:bg-primary hover:text-white border-none h-12 w-12 shadow-md" />
                </Carousel>
            </div>
        </section>
    )
}
