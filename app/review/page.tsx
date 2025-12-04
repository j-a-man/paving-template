"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Star, Send, ThumbsUp } from "lucide-react"

export default function ReviewPage() {
    const [rating, setRating] = useState<number>(0)
    const [hoveredRating, setHoveredRating] = useState<number>(0)
    const [feedback, setFeedback] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const googleReviewUrl = "https://www.google.com/search?sca_esv=711d87e2c6f6d006&rlz=1C1OPNX_enUS983US983&sxsrf=AE3TifORBH3hW6eArALOVKeamFnPwu2Slg:1764884830519&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1pYmrg6bn4pO25KzyNMakwUm1OB937yjyxnZ_kULEfDU3UhWVfk0iopFYJ4sQsseWTYGG_sJvrfBDKsZBQpd3EbqptPL0Udbbaw-XO9-arqCbU6Yw%3D%3D&q=Nuclearnick+Construction+Reviews&sa=X&ved=2ahUKEwiq1pGr9KSRAxU5FmIAHY0OARoQ0bkNegQILhAC&biw=1536&bih=695&dpr=1.25#lrd=0x65ed24f551f422f1:0xc38c56de710ad148,3,,,,"

    const handleStarClick = (selectedRating: number) => {
        setRating(selectedRating)
        if (selectedRating >= 4) {
            window.open(googleReviewUrl, '_blank')
        }
    }

    const handleSubmitFeedback = (e: React.FormEvent) => {
        e.preventDefault()
        // Construct mailto link
        const subject = encodeURIComponent(`New Feedback - ${rating} Stars`)
        const body = encodeURIComponent(`Rating: ${rating} Stars\n\nFeedback:\n${feedback}`)
        window.location.href = `mailto:risticnicholas@yahoo.com?subject=${subject}&body=${body}`
        setSubmitted(true)
    }

    return (
        <main className="min-h-screen bg-background font-sans text-foreground flex flex-col">
            <Header />

            <div className="grow flex items-center justify-center py-20 px-4 bg-secondary/5">
                <Card className="max-w-2xl w-full p-8 md:p-12 shadow-xl border-t-4 border-t-primary">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-secondary">
                            How did we do?
                        </h1>
                        <p className="text-muted-foreground text-lg">
                            Your feedback helps us build better foundations.
                        </p>
                    </div>

                    {!rating ? (
                        <div className="flex justify-center gap-2 md:gap-4 mb-8">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    className="transition-transform hover:scale-110 focus:outline-none"
                                    onMouseEnter={() => setHoveredRating(star)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                    onClick={() => handleStarClick(star)}
                                >
                                    <Star
                                        className={`w-10 h-10 md:w-12 md:h-12 ${star <= (hoveredRating || rating)
                                            ? "fill-primary text-primary"
                                            : "text-gray-300"
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex justify-center gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`w-6 h-6 ${star <= rating
                                            ? "fill-primary text-primary"
                                            : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            {rating >= 4 ? (
                                <div className="text-center space-y-6">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <ThumbsUp className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-secondary">
                                        We're thrilled to hear that!
                                    </h2>
                                    <p className="text-muted-foreground">
                                        It would mean the world to us if you could share your experience on Google. It helps other neighbors find quality paving services.
                                    </p>
                                    <div className="pt-4">
                                        <Link href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
                                            <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 w-full md:w-auto">
                                                Leave a Google Review
                                            </Button>
                                        </Link>
                                    </div>
                                    <button
                                        onClick={() => setRating(0)}
                                        className="text-sm text-muted-foreground underline hover:text-primary mt-4"
                                    >
                                        Start Over
                                    </button>
                                </div>
                            ) : (
                                !submitted ? (
                                    <form onSubmit={handleSubmitFeedback} className="space-y-6">
                                        <div className="text-center mb-6">
                                            <h2 className="text-xl font-bold text-secondary mb-2">
                                                We're sorry we missed the mark.
                                            </h2>
                                            <p className="text-muted-foreground">
                                                Please tell us how we can improve. Your message goes directly to our management team.
                                            </p>
                                        </div>
                                        <Textarea
                                            placeholder="Tell us more about your experience..."
                                            className="min-h-[150px] text-base p-4"
                                            value={feedback}
                                            onChange={(e) => setFeedback(e.target.value)}
                                            required
                                        />
                                        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-6">
                                            <Send className="w-5 h-5 mr-2" />
                                            Submit Feedback
                                        </Button>
                                        <div className="text-center">
                                            <button
                                                type="button"
                                                onClick={() => setRating(0)}
                                                className="text-sm text-muted-foreground underline hover:text-primary"
                                            >
                                                Start Over
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="text-center space-y-6 py-8">
                                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Send className="w-10 h-10 text-primary" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-secondary">
                                            Thank you for your feedback.
                                        </h2>
                                        <p className="text-muted-foreground">
                                            We appreciate your honesty and will use this to improve our services.
                                        </p>
                                        <Link href="/">
                                            <Button variant="outline" className="mt-6">
                                                Return Home
                                            </Button>
                                        </Link>
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </Card>
            </div>

            <Footer />
        </main>
    )
}
