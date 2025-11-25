"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, CheckCircle2 } from "lucide-react"

export default function Booking() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  })

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"]

  const handleNext = () => {
    if (step === 1 && formData.date && formData.time) {
      setStep(2)
    } else if (step === 2 && formData.name && formData.email && formData.phone) {
      setStep(3)
    }
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = () => {
    console.log("Booking submitted:", formData)
    // Handle booking submission
  }

  return (
    <section id="contact" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-balance">Schedule Your Free Estimate</h2>
            <p className="text-lg opacity-90">Book your on-site estimate in just a few minutes</p>
          </div>

          <Card className="p-8 bg-background text-foreground">
            {/* Step 1: Date & Time */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label className="flex items-center space-x-2 mb-4 text-lg font-semibold">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Select a Date</span>
                  </Label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="flex items-center space-x-2 mb-4 text-lg font-semibold">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Select a Time</span>
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setFormData({ ...formData, time })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-colors ${
                          formData.time === time
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-foreground hover:bg-muted/80"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={handleNext}
                  disabled={!formData.date || !formData.time}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6"
                >
                  Continue
                </Button>
              </div>
            )}

            {/* Step 2: Contact Info */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-semibold">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-semibold">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="font-semibold">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div className="flex space-x-3">
                  <Button onClick={handleBack} variant="outline" className="flex-1 py-6 bg-transparent">
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-6"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Estimate Scheduled!</h3>
                  <p className="text-muted-foreground">
                    We've received your request and will contact you soon to confirm your appointment.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-left">
                  <p className="text-sm text-muted-foreground mb-2">Estimated Details:</p>
                  <p className="font-semibold">
                    📅 {formData.date} at {formData.time}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">We'll call you at {formData.phone}</p>
                </div>
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6"
                >
                  Confirm Booking
                </Button>
              </div>
            )}
          </Card>

          {/* Step Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-3 h-3 rounded-full transition-colors ${
                  s === step ? "bg-primary" : s < step ? "bg-primary/50" : "bg-secondary-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
