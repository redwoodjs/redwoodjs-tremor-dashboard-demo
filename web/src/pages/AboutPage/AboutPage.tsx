import {
  ArrowCircleDownIcon,
  CloudDownloadIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/outline'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudDownloadIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowCircleDownIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <div className="bg-white py-8 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Build dashboards faster
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to build dynamic data-driven dashboards
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              <a
                href="https://www.tremor.so"
                className="font-bold underline hover:text-indigo-600"
              >
                Tremor
              </a>{' '}
              is a React library to build dashboards fast. Its modular
              components are fully open-source, made by data scientists and
              software engineers.
              <a
                href="https://www.redwoodjs.com"
                className="font-bold underline hover:text-indigo-600"
              >
                RedwoodJS
              </a>{' '}
              powers{' '}
              <Link
                to={routes.dashboard()}
                className="font-bold underline hover:text-indigo-600"
              >
                static
              </Link>{' '}
              and{' '}
              <Link
                to={routes.dashboard()}
                className="font-bold underline hover:text-indigo-600"
              >
                dynamic
              </Link>{' '}
              data-driven dashboards with a sweet spot for design.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
