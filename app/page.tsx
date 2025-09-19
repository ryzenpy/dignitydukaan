"use client"

import { Star, Zap, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Discord Nitro ID - Trial Claimed ",
    description: "Unlock premium Discord features with full Nitro subscription",
    price: "$0.50",
    period: "/month",
    features: ["Higher quality screen share", "Custom emojis everywhere", "500MB file uploads", "HD video calls"],
    icon: Crown,
    popular: true,
    gradient: "from-purple-600 to-blue-600",
  },
  {
    id: 2,
    name: "Nitro Boost Gift Link",
    description: "Essential Discord upgrades at an affordable price",
    price: "SOON",
    period: "/month",
    features: ["Higher quality screen share", "Custom emojis everywhere", "500MB file uploads", "HD video calls"],
    icon: Zap,
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    name: "14x Server Boosts",
    description: "Boost your favorite Discord servers with premium perks",
    price: "ALSO SOON",
    period: "/MONTHLY",
    features: ["Higher audio quality", "Custom server banner", "More emoji slots", "Animated server icon"],
    icon: Star,
    popular: false,
    gradient: "from-pink-500 to-purple-600",
  },
  {
    id: 4,
    name: "OwO Currency",
    description: "Premium currency for the popular Discord bot OwO",
    price: "$1.00",
    period: "/1,000,000 cowoncy",
    features: ["Instant delivery", "Safe & secure", "24/7 support", "Bulk discounts available"],
    icon: Sparkles,
    popular: false,
    gradient: "from-green-500 to-emerald-600",
  },
]

export default function DiscordShop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-800/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Dignity Dukaan</h1>
                <p className="text-purple-300 text-sm">Premium Discord Services</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white bg-transparent"
              onClick={() => window.open("https://discord.gg/N9BvU9srHY", "_blank")}
            >
              <Crown className="w-4 h-4 mr-2" />
              Discord Server
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6 text-balance">
            Level Up Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Discord Experience
            </span>
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto text-pretty">
            Get premium Discord features, server boosts, and OwO currency at unbeatable prices. Instant delivery
            guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
              ⚡ Instant Delivery
            </Badge>
            <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30">
              🛡️ 500% Safe
            </Badge>
            <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30">
              💎 Best Prices
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Choose Your Package</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const IconComponent = product.icon
              return (
                <Card
                  key={product.id}
                  className={`relative overflow-hidden border-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm ${product.popular ? "ring-2 ring-purple-500" : ""}`}
                >
                  {product.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                      POPULAR
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">{product.name}</CardTitle>
                    <CardDescription className="text-purple-200">{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="text-center pb-4">
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{product.price}</span>
                      <span className="text-purple-300">{product.period}</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-purple-200 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button
                      className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white border-0 font-semibold`}
                      onClick={() => window.open("https://dignitydukaan.mysellauth.com", "_blank")}
                    >
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Instant Delivery</h4>
              <p className="text-purple-200">Get your Discord upgrades delivered instantly after purchase</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">24/7 Support</h4>
              <p className="text-purple-200">Our team is always here to help with any questions or issues</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Best Prices</h4>
              <p className="text-purple-200">Competitive pricing with regular discounts and promotions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-800/30 bg-black/20">
        <div className="container mx-auto text-center">
          <p className="text-purple-300 mb-2">© 2024 Dignity Dukaan. All rights reserved.</p>
          <p className="text-sm text-purple-400">
            Not affiliated with Discord Inc. All trademarks belong to their respective owners.
          </p>
        </div>
      </footer>
    </div>
  )
}
