import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Owner on every job site",
  "State-of-the-art equipment",
  "3-Year warranty",
  "Fully licensed & insured",
  "Free estimates",
  "Competitive pricing",
  "Fast turnaround",
  "Professional crew",
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/professional-paving-crew-at-work.jpg"
              alt="Professional paving crew"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground text-balance">Why Choose PAVE PRO?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              With over 20 years of experience in the asphalt paving industry, we deliver exceptional results every
              time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
