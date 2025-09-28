import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  slug: string
  image?: string
}

export function ServiceCard({ title, description, slug, image }: ServiceCardProps) {
  return (
    <Link href={`/servicios/${slug}`} className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          {image && (
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
              <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <CardTitle className="group-hover:text-brand transition-colors">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-brand font-medium group-hover:translate-x-1 transition-transform">
            Ver más
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
