"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

export default function ExitIntentPopup() {
    const [open, setOpen] = useState(false)
    const [hasShown, setHasShown] = useState(false)

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            // Check if cursor left the top of the viewport (intent to close/switch tab)
            // and if we haven't shown the popup yet in this session.
            if (e.clientY <= 0 && !hasShown) {
                setOpen(true)
                setHasShown(true)
            }
        }

        document.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [hasShown])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Add your form submission logic here
        console.log("Exit intent form submitted")
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent showCloseButton={false} className="sm:max-w-[500px] bg-white text-foreground border-t-4 border-primary p-0 overflow-hidden gap-0 shadow-2xl rounded-none">
                {/* Header Section */}
                <div className="bg-secondary p-6 text-center relative">
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-serif text-white mb-2 tracking-wide">
                            Wait! Don't Miss Out
                        </DialogTitle>
                        <DialogDescription className="text-white/80 text-base font-sans">
                            Get a <span className="text-primary font-bold">FREE Estimate</span> for your paving project before you go.
                        </DialogDescription>
                    </DialogHeader>
                    {/* Close button override for style */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                        <span className="sr-only">Close</span>
                    </button>
                </div>

                {/* Form Section */}
                <div className="p-8 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="font-bold text-sm uppercase tracking-wider text-secondary">Full Name</Label>
                            <Input
                                id="name"
                                required
                                placeholder="Enter your name"
                                className="rounded-none border-gray-300 focus:border-primary focus:ring-primary bg-gray-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="font-bold text-sm uppercase tracking-wider text-secondary">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="rounded-none border-gray-300 focus:border-primary focus:ring-primary bg-gray-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="font-bold text-sm uppercase tracking-wider text-secondary">Project Details</Label>
                            <Textarea
                                id="message"
                                placeholder="Briefly describe your project..."
                                className="rounded-none border-gray-300 focus:border-primary focus:ring-primary bg-gray-50 min-h-[80px]"
                            />
                        </div>

                        <div className="flex items-start space-x-3 pt-2">
                            <Checkbox id="terms" required className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary rounded-none" />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                    htmlFor="terms"
                                    className="text-xs text-muted-foreground leading-relaxed"
                                >
                                    I agree to the <a href="/terms" className="underline hover:text-primary">Terms of Service</a> and <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>. I consent to receiving a quote via email or phone.
                                </label>
                            </div>
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest py-6 rounded-none shadow-md mt-2">
                            Get My Free Quote
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}