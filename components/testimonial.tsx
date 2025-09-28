import { Card, CardContent } from './card'
import { Star } from 'lucide-react'

interface TestimonialProps {
  name: string
  company: string
  content: string
  rating: number
}

export function Testimonial({ name, company, content, rating }: TestimonialProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <blockquote className="text-gray-600 mb-4 italic">
          &ldquo;{content}&rdquo;
        </blockquote>
        <div className="border-t pt-4">
          <div className="font-semibold text-ink">{name}</div>
          <div className="text-sm text-gray-500">{company}</div>
        </div>
      </CardContent>
    </Card>
  )
}
