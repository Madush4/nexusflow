import type { SummaryMetric } from '../../types/dashboard'

interface SummaryCardProps {
  metric: SummaryMetric
}

function SummaryCard({ metric }: SummaryCardProps) {
  return (
    <article className="summary-card">
      <h2>{metric.label}</h2>
      <p className="summary-value">{metric.value}</p>
      <p className="summary-description">{metric.description}</p>
    </article>
  )
}

export default SummaryCard
