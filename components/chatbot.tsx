"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, MinusCircle, User, Bot, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type Message = {
    id: string
    role: "user" | "bot"
    text: string
    timestamp: Date
}

const INITIAL_MESSAGE: Message = {
    id: "init-1",
    role: "bot",
    text: "Hello! I'm your Tallahassee Energy assistant. I can help with quotes, service details, or scheduling. How can I assist you today?",
    timestamp: new Date(),
}

const SUGGESTIONS = [
    "Get a Free Quote",
    "Services Offered",
    "Contact Info",
    "Emergency Help"
]

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom of chat
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping, isOpen])

    const handleSendMessage = async (e?: React.FormEvent, textOverride?: string) => {
        e?.preventDefault()

        const text = textOverride || inputValue.trim()
        if (!text) return

        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            text: text,
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMsg])
        setInputValue("")
        setIsTyping(true)

        // Simulate network delay for "thinking"
        setTimeout(() => {
            const botResponseText = getBotResponse(text)
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                text: botResponseText,
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, botMsg])
            setIsTyping(false)
        }, 800)
    }

    // KEYWORD LOGIC ENGINE
    // KEYWORD LOGIC ENGINE
    const getBotResponse = (input: string): string => {
        const lowerInput = input.toLowerCase()

        // 0. CONVERSATIONAL / PERSONALITY
        if (lowerInput.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|yo)\b/)) {
            return "Hello! Welcome to Tallahassee Energy Solutions. How can I help you today? You can ask about 'Services', 'Quotes', or 'Emergency' help."
        }
        if (lowerInput.match(/\b(thank|thanks|appreciate|cool|great|awesome)\b/)) {
            return "You're very welcome! Let me know if there's anything else I can do for you."
        }
        if (lowerInput.match(/\b(bye|goodbye|see ya|later|exit)\b/)) {
            return "Goodbye! Have a safe day. Remember, we are open 24/7 if you need us. (448) 500-9492."
        }
        if (lowerInput.match(/\b(human|person|robot|bot|ai|real)\b/)) {
            return "I'm the Tallahassee Energy virtual assistant! I can answer most questions, but if you want to talk to a real person (like Tommy!), just call (448) 500-9492."
        }

        // 1. EMERGENCY (High Priority)
        if (lowerInput.match(/\b(emergency|urgent|fire|smoke|spark|smell|danger|now|help)\b/)) {
            return "⚠️ URGENT: If you see fire or smoke, call 911 immediately. For electrical emergencies (sparking, total power loss), we are Open 24/7. Call (448) 500-9492 right now."
        }

        // 2. COMPANY INFO / HISTORY / PEOPLE
        if (lowerInput.match(/\b(who|about|history|experience|years|tommy|mission|values)\b/)) {
            return "Tallahassee Energy Solutions has been serving our community for over 15 years. We are fully Licensed & Insured. Tommy, our main contact, leads a team dedicated to honest work and safety."
        }

        // 3. CONTACT / PHONE / EMAIL
        if (lowerInput.match(/\b(phone|call|number|contact|email|reach|address|talk to human)\b/)) {
            return "You can call us 24/7 at (448) 500-9492 or email tallahasseeenergysolutions@gmail.com. We serve Tallahassee and the surrounding areas."
        }

        // 4. HOURS
        if (lowerInput.match(/\b(hours|time|open|closed|days|weekend|schedule|when)\b/)) {
            return "We are Open 24 Hours, 7 days a week! Prioritizing your safety around the clock."
        }

        // 5. QUOTES / ESTIMATES / PRICING
        if (lowerInput.match(/\b(quote|estimate|cost|price|pricing|rate|expensive|cheap|how much)\b/)) {
            return "We offer FREE estimates! Each job is unique, so we'll come out to give you a clear, upfront price. Click 'Get A Quote' above or call us to schedule."
        }

        // 6. LOCATION
        if (lowerInput.match(/\b(where|location|area|city|count(y|ies)|tallahassee|florida)\b/)) {
            return "We are proud to serve Tallahassee, FL and the nearby areas. Unsure if we cover your spot? Give us a quick call at (448) 500-9492!"
        }

        // 7. PAYMENT / WARRANTY (New)
        if (lowerInput.match(/\b(pay|payment|card|credit|cash|finance|financing)\b/)) {
            return "We accept most standard forms of payment. For specific questions about credit cards or financing options, please give our office a call at (448) 500-9492."
        }
        if (lowerInput.match(/\b(warranty|guarantee|insured|licensed|bond)\b/)) {
            return "Yes, we are 100% Licensed & Insured. We stand behind our quality work. For specific warranty details on parts vs. labor, please ask during your estimate!"
        }

        // --- DETAILED SERVICES ---

        // Breaker Box / Panel
        if (lowerInput.match(/\b(breaker|panel|box|fuse|circuit|upgrade|amps|100|200)\b/)) {
            return "Your breaker box is the heart of your home. We specialize in upgrades (e.g., 100 to 200 amp) to handle modern appliances safely. Old fuse box? We can replace that too."
        }

        // Ground Setup / Surge
        if (lowerInput.match(/\b(ground|grounding|surge|protection|lightning|shock)\b/)) {
            return "Our Ground Setup service protects your home from Florida lightning and surges. Proper grounding prevents shocks and protects expensive electronics. Safety first!"
        }

        // Meter Box
        if (lowerInput.match(/\b(meter|connection|mast|service entrance)\b/)) {
            return "We install and replace Electric Meter Boxes to ensure accurate power readings and safety. We make sure it's weatherproof and up to code."
        }

        // Commercial / Retail / Industrial
        if (lowerInput.match(/\b(commercial|business|building|shop|retail|warehouse|3-phase|three phase|industrial)\b/)) {
            return "For businesses, we provide comprehensive solutions: 'Office & Retail' wiring, 'Industrial Power' (3-phase, heavy machinery), and minimal-downtime scheduling. We keep your business powered and code-compliant."
        }

        // Inspections / Real Estate
        if (lowerInput.match(/\b(inspection|real estate|buying|selling|audit|knob|aluminum|wiring)\b/)) {
            return "Buying a home? Our Real Estate Inspections check for dangerous outdated wiring (like knob-and-tube or aluminum), panel corrosion, and ungrounded outlets. Buy with confidence knowing the electrical system is safe."
        }

        // Generators
        if (lowerInput.match(/\b(generator|backup|power outage|storm)\b/)) {
            return "Don't get caught in the dark! We install whole-home standby generators that automatically power your home during outages. Essential for Florida storm seasons."
        }

        // Smart Home
        if (lowerInput.match(/\b(smart|automation|camera|alexa|wifi|doorbell|lighting control)\b/)) {
            return "We do full Smart Home integration! From automated lighting and climate control to security cameras and video doorbells, we make your home connected and modern."
        }

        // Lighting
        if (lowerInput.match(/\b(light|led|landscape|outdoor|indoor|fixture|curb appeal)\b/)) {
            return "We handle all lighting needs: commercial LED retrofits for efficiency, or beautiful outdoor landscape lighting to enhance your home's security and curb appeal."
        }

        // Rewiring / General
        if (lowerInput.match(/\b(wire|wiring|rewire|outlet|plug|switch|renovation|remodel|fix)\b/)) {
            return "We are experts in Safe Rewiring, especially for older historic homes or renovations. We replace dangerous old wiring with modern, grounded standards to prevent fire hazards."
        }

        // 8. REVIEWS
        if (lowerInput.match(/\b(review|good|reputation|trust)\b/)) {
            return "We have a 5-star reputation built on 15+ years of trust. Our clients love our 'Friendly, Cooperative, Reliable' service. Check our Reviews page!"
        }

        // 9. SERVICES - GENERAL LIST
        if (lowerInput.match(/\b(service|what do you do|offer|work|services|offer)\b/)) {
            return "We provide a full range of electrical services:\n• Residential: Breaker Boxes, Meter Upgrades, Grounding, Rewiring (Historic Homes).\n• Commercial: 3-Phase Power, Retail Lighting, Maintenance.\n• Specialized: Generators, Smart Home Integration, Real Estate Inspections.\n\nWhich one would you like to know more about?"
        }

        // FALLBACK
        return "I'm not sure about that specific detail, but I'd be happy to connect you with a team member! We are Open 24/7. Call (448) 500-9492 or ask about 'Services' or 'Quotes'."
    }

    // RENDER UI
    return (
        <>
            {/* TOGGLE BUTTON */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-[0_0_20px_rgba(226,185,24,0.4)] bg-secondary hover:bg-secondary/90 text-white z-50 transition-all duration-300 hover:scale-105 flex items-center justify-center border-4 border-primary"
                >
                    <MessageCircle className="h-6 w-6" />
                </Button>
            )}

            {/* CHAT WINDOW */}
            {isOpen && (
                <div className={cn(
                    "fixed bottom-6 right-6 w-[350px] md:w-[400px] shadow-2xl z-50 flex flex-col bg-background transition-all duration-300 font-sans mx-4 mb-safe overflow-hidden animate-in slide-in-from-bottom-10 fade-in zoom-in-95",
                    isMinimized ? "h-[80px] rounded-3xl" : "h-[600px] max-h-[80vh] rounded-3xl"
                )}>
                    {/* HEADER */}
                    <div className="bg-secondary text-white p-4 flex items-center justify-between shadow-md relative overflow-hidden h-[80px] shrink-0">
                        {/* Removed blur effect for solid color */}
                        <div className="flex items-center gap-3 z-10">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
                                <Zap className="h-6 w-6 text-primary" fill="currentColor" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight">Energy Assistant</h3>
                                {!isMinimized && <p className="text-xs text-secondary-foreground/80">Online • Replies Instantly</p>}
                            </div>
                        </div>
                        <div className="flex items-center gap-1 z-10">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 hover:bg-white/10 text-white rounded-full transition-colors"
                                onClick={() => setIsMinimized(!isMinimized)}
                            >
                                <MinusCircle className="h-6 w-6" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-9 w-9 hover:bg-white/10 text-white rounded-full transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>

                    {/* BACKGROUND PATTERN */}
                    {!isMinimized && (
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none z-0"></div>
                    )}


                    {/* MESSAGES AREA (Hidden if minimized) */}
                    {!isMinimized && (
                        <>
                            <div className="flex-1 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 relative z-0">
                                <div
                                    ref={scrollRef}
                                    className="h-full overflow-y-auto px-4 py-6 space-y-6"
                                >
                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={cn(
                                                "flex w-full animate-in slide-in-from-bottom-2 fade-in duration-300",
                                                msg.role === "user" ? "justify-end" : "justify-start"
                                            )}
                                        >
                                            <div className={cn(
                                                "max-w-[85%] rounded-2xl px-5 py-3 text-sm shadow-sm relative group transition-all hover:shadow-md",
                                                msg.role === "user"
                                                    ? "bg-primary text-secondary-foreground font-medium rounded-br-none"
                                                    : "bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-foreground rounded-bl-none"
                                            )}>
                                                {msg.text}
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
                                            <div className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5 shadow-sm">
                                                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                                <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                            </div>
                                        </div>
                                    )}

                                    {/* Spacer for bottom input area */}
                                    <div className="h-4"></div>
                                </div>
                            </div>

                            {/* SUGGESTION CHIPS (Only show if not typing and last message was bot) */}
                            {!isTyping && messages[messages.length - 1].role === 'bot' && (
                                <div className="px-4 pb-2 bg-zinc-50 dark:bg-zinc-900/50 flex gap-2 overflow-x-auto no-scrollbar mask-gradient animate-in fade-in slide-in-from-bottom-2 duration-500 delay-100">
                                    {SUGGESTIONS.map((suggestion) => (
                                        <button
                                            key={suggestion}
                                            onClick={() => handleSendMessage(undefined, suggestion)}
                                            className="whitespace-nowrap bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:scale-105 active:scale-95"
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* INPUT AREA */}
                            <div className="p-4 border-t bg-background rounded-b-3xl z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
                                <form onSubmit={(e) => handleSendMessage(e)} className="flex items-center gap-2 relative">
                                    <Input
                                        placeholder="Ask a question..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        className="flex-1 focus-visible:ring-primary h-12 rounded-full pl-5 pr-12 bg-secondary/5 border-0 focus-visible:bg-white transition-all shadow-inner"
                                    />
                                    <Button
                                        type="submit"
                                        size="icon"
                                        className={cn(
                                            "absolute right-1 w-10 h-10 rounded-full transition-all duration-300",
                                            inputValue.trim() ? "bg-primary hover:bg-primary/90 text-white scale-100" : "bg-transparent text-muted-foreground scale-0 opacity-0 pointer-events-none"
                                        )}
                                    >
                                        <ArrowRight className="h-5 w-5" />
                                    </Button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    )
}
