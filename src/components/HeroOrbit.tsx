// ======================================================
// THE HERO ORBIT COMPONENT
// ======================================================
import { PropsWithChildren } from "react"
export const HeroOrbit = ({ children, size, rotationAngle }: PropsWithChildren<{ size: number, rotationAngle: number }>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='' style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotationAngle}deg)`
      }}>

        <div className='inline-flex' style={{
          transform: `rotate(${rotationAngle * -1}deg)`
        }}>
          {children}
        </div>

      </div>
    </div>
  )
}
