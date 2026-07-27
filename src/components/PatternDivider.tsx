import type { CSSProperties } from 'react'

type PatternDividerProps = {
  src: string
  height?: number
  className?: string
}

export default function PatternDivider({ src, height = 28, className = '' }: PatternDividerProps) {
  return (
    <div
      role="presentation"
      className={`pattern-strip w-full ${className}`}
      style={{ height, '--pattern-image': `url(${src})` } as CSSProperties}
    />
  )
}
