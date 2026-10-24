import { stats } from '../data/stats'

export default function Stats() {
  return (
    <ul className="list-none absolute inset-x-0 bottom-0 z-20 px-6 sm:px-10 lg:px-16 pb-6 sm:pb-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {stats.map((stat, index) => (
        <li key={index} className="stat-item border-t border-white/20 pt-3 sm:pt-4">
          <span className="block text-4xl md:text-5xl lg:text-6xl font-light">
            <span className="stat-number tabular-nums">{stat.value}</span>
            {stat.suffix}
          </span>
          <p className="mt-1 text-sm text-white/60">
            {stat.label}
          </p>
        </li>
      ))}
    </ul>
  )
}
