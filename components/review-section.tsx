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
        name: "Pam R.",
        role: "Homeowner",
        content: "Difficult job but it was handled expertly and everything was explained to me. Very polite. Very good value for the money. Would hire again.",
        rating: 5,
    },
    {
        id: 2,
        name: "Frank S.",
        role: "Homeowner",
        content: "Rob was the best electrician to work in my house. He listened carefully to my requests, brought the materials in, did the work to my specifications, and cleaned up.",
        rating: 5,
    },
    {
        id: 3,
        name: "Sarah P.",
        role: "Homeowner",
        content: "Directly connected with the service and they answered the phone! They were able to come out in hours. Appreciated the customer service!",
        rating: 5,
    },
    {
        id: 4,
        name: "James L.",
        role: "Business Owner",
        content: "We needed a complete lighting overhaul for our warehouse. The team was professional, efficient, and finished ahead of schedule. Highly recommended!",
        rating: 5,
    },
    {
        id: 5,
        name: "Maria G.",
        role: "Homeowner",
        content: "I had an emergency power outage on a weekend, and they responded immediately. The technician was knowledgeable and fixed the issue in no time.",
        rating: 5,
    },
    {
        id: 6,
        name: "Robert K.",
        role: "Property Manager",
        content: "Consistent quality service for all our rental properties. Whether it's a small repair or a panel upgrade, they are our go-to electricians.",
        rating: 5,
    },
    {
        id: 7,
        name: "Emily W.",
        role: "Homeowner",
        content: "Very transparent pricing and excellent communication throughout the project. They installed our new EV charger perfectly.",
        rating: 5,
    },
    {
        id: 8,
        name: "David H.",
        role: "Restaurant Owner",
        content: "Electrical issues in a kitchen are a nightmare, but these guys sorted it out quickly without disrupting our dinner service. Lifesavers!",
        rating: 5,
    },
]

export default function ReviewSection() {
    return (
        <section className="py-24 bg-zinc-50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-24 lg:px-40">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        What Our Customers <span className="text-primary"> <br /> Say About Us</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
                        ⭐⭐⭐⭐⭐ 5/5
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
                                                <p className="text-muted-foreground mb-6 grow italic">"{review.content}"</p>
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
