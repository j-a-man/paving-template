"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

const portfolioItems = [
  {
    title: "Residential Driveway Transformation",
    category: "Residential",
    image: "/cracked-driveway-before-after.jpg",
  },
  {
    title: "Commercial Parking Lot",
    category: "Commercial",
    image: "/parking-lot-striping.jpg",
  },
  {
    title: "Sealcoated Surface",
    category: "Maintenance",
    image: "/sealcoated-asphalt.jpg",
  },
  {
    title: "Large Scale Parking",
    category: "Commercial",
    image: "/large-parking-lot-paving.jpg",
  },
  {
    title: "Driveway Resurfacing",
    category: "Residential",
    image: "/new-asphalt-driveway.jpg",
  },
  {
    title: "Industrial Complex",
    category: "Commercial",
    image: "/industrial-asphalt-paving.jpg",
  },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Residential", "Commercial", "Maintenance"]
  const filtered =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground text-balance">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Before & after examples of our professional paving work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{item.category}</p>
                <h3 className="font-bold text-foreground">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
