import type { StockRecord } from '../../types/dashboard'

interface StockOverviewProps {
  records: StockRecord[]
}

function StockOverview({ records }: StockOverviewProps) {
  return (
    <section className="panel stock-panel">
      <div className="panel-heading">
        <div>
          <h2>Manufacturing stock</h2>
          <p>Factory baseline and low-stock products</p>
        </div>
        <span className="panel-count">{records.length} monitored SKUs</span>
      </div>
      <div className="stock-table-wrap">
        <table className="stock-table">
          <caption className="visually-hidden">Manufacturing stock by product</caption>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">On-hand</th>
              <th scope="col">Reserved</th>
              <th scope="col">Available</th>
              <th scope="col">Threshold</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <th scope="row">
                  {record.id} · {record.product}
                </th>
                <td>On-hand {record.onHand}</td>
                <td>Reserved {record.reserved}</td>
                <td>Available {record.available}</td>
                <td>Threshold {record.threshold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default StockOverview
