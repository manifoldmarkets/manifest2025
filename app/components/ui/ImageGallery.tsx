import Image from 'next/image'
import gallery from '../../data/gallery'

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {gallery.map((image) => (
        <div
          key={image.src}
          className="relative aspect-[16/9] overflow-hidden rounded-lg transition-transform hover:scale-[1.02]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw"
          />
        </div>
      ))}
    </div>
  )
}
