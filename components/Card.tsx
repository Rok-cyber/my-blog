import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <article className="card-surface group overflow-hidden">
    <div className="flex h-full flex-col">
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`${title} 보기`} className="overflow-hidden">
            <Image
              alt={title}
              src={imgSrc}
              className="aspect-[16/10] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
              width={544}
              height={340}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="aspect-[16/10] w-full object-cover object-center"
            width={544}
            height={340}
          />
        ))}
      <div className="flex flex-1 flex-col p-7">
        <h2 className="font-display mb-4 text-3xl leading-tight tracking-[-0.04em]">
          {href ? (
            <Link href={href} aria-label={`${title} 보기`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-7 flex-1 leading-7 text-gray-600 dark:text-gray-400">{description}</p>
        {href && (
          <Link href={href} className="text-link inline-flex" aria-label={`${title} 자세히 보기`}>
            자세히 보기 <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </div>
  </article>
)

export default Card
