// ======================================================
// THE HERO ORBIT COMPONENT
// ======================================================
import { PropsWithChildren } from "react"
export const HeroOrbit = ({ children, size, rotationAngle, orbitDuration = "0s", rotationDuration = "0s" }: PropsWithChildren<{
  size: number,
  rotationAngle: number,
  rotationDuration?: string,
  orbitDuration?: string
}>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='animate-spin' style={{
        animationDuration: orbitDuration
      }}>
        <div style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotationAngle}deg)`
        }}>

          <div className='inline-flex animate-spin' style={{
            transform: `rotate(${rotationAngle * -1}deg)`,
            animationDuration: rotationDuration
          }}>
            {children}
          </div>

        </div>
      </div>
    </div>
  )
}
