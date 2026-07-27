export default function GoldSweep({ triggerKey }: { triggerKey: string | number }) {
  return <span key={triggerKey} className="sweep-gold" aria-hidden="true" />
}
