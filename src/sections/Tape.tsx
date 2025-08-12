// ======================================================
// TAPE SECTION
// ======================================================

import StarIcon from '@/assets/icons/star.svg'
const words = [
  'Performant',
  'Accesssible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Reliable'
]

export const TapeSection = () => {
  return (
    <section className='py-16 lg:py-32'>
      <div className='bg-gradient-to-r from-emerald-300 to-cyan-500 py-3 -rotate-3'>

        <div className='flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]'>
          <div className='flex flex-none gap-4 text-gray-900'>
            {words.map((word) => (
              <div className='inline-flex gap-4 items-center'>
                <span className='uppercase font-extrabold text-sm'>{word}</span>
                <StarIcon className='size-6 -rotate-12' />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
};
