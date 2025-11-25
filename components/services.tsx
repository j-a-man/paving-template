import { Card } from "@/components/ui/card"
import { Home, Building2, Droplet, Hammer, Palette, Calculator as Excavator } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Driveways",
    description: "New installs, resurfacing, and repairs for your home.",
  },
  {
    icon: Building2,
    title: "Commercial Parking Lots",
    description: "Large scale paving, striping, and ADA compliance.",
  },
  {
    icon: Droplet,
    title: "Sealcoating & Maintenance",
    description: "Protect your investment and extend pavement life.",
  },
  {
    icon: Hammer,
    title: "Asphalt Patching",
    description: "Expert repair of cracked and damaged asphalt surfaces.",
  },
  {
    icon: Palette,
    title: "Line Striping",
    description: "Professional parking lot and road line striping services.",
  },
  {
    icon: Excavator,
    title: "Excavation & Grading",
    description: "Site preparation and grading for new paving projects.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground text-balance">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete paving solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
