export interface SummaryMetric {
  label: string
  value: string
  description: string
}

export interface StockRecord {
  id: string
  product: string
  onHand: string
  reserved: string
  available: string
  threshold: string
}

export interface Shipment {
  id: string
  scheduled: string
  quantity: string
  product: string
  destination: string
}

export interface LowStockAlert {
  id: string
  product: string
  available: string
  threshold: string
  message: string
}

export interface AdminAction {
  label: string
  primary?: boolean
}
