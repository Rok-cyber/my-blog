import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="my-12 flex flex-col items-center text-center">
      {/* 아바타 이미지 */}
      <div className="border-primary-500 relative h-32 w-32 overflow-hidden rounded-full border-4 shadow-lg">
        <Image
          src="/static/images/avatar.png" // public/static/images/ 에 넣어둔 아바타
          alt="Seongrok Lee Avatar"
          fill
          className="object-cover"
        />
      </div>

      {/* 이름 & 소개 */}
      <h1 className="mt-6 text-4xl font-bold">Seongrok Lee</h1>
      <p className="mt-3 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
        AI/ML Engineer & Full-Stack Developer <br />
        Portfolio, projects, and notes on software & creativity
      </p>

      {/* 버튼 */}
      <div className="mt-6 flex space-x-4">
        <Link
          href="/projects"
          className="bg-primary-500 hover:bg-primary-600 rounded-lg px-5 py-2 font-medium text-white shadow"
        >
          View Projects
        </Link>
        <Link
          href="/about"
          className="border-primary-500 text-primary-500 hover:bg-primary-50 rounded-lg border px-5 py-2 font-medium dark:hover:bg-gray-800"
        >
          About Me
        </Link>
      </div>
    </section>
  )
}
