import siteMetadata from '@/data/siteMetadata'
import fomcMinutes from '@/data/fomcMinutes'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`FOMC Highlights by Financial Gurkha ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            The Federal Reserve Open Market Committee Meeting Highlights
          </h2>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Things I have built</p> */}
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {fomcMinutes.map((d) => (
              <Card key={d.title} title={d.title} description={d.description} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}