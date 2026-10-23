import type {
  AdminAction,
  LowStockAlert,
  Shipment,
  StockRecord,
  SummaryMetric,
} from '../types/dashboard'

export const summaryMetrics: SummaryMetric[] = [
  {
    label: 'On-hand stock',
    value: '33,300',
    description: 'Across six monitored factory SKUs',
  },
  {
    label: 'Reserved',
    value: '11,800',
    description: 'Allocated to scheduled shipments',
  },
  {
    label: 'Available',
    value: '21,500',
    description: 'Available manufacturing stock',
  },
  {
    label: 'Low-stock products',
    value: '3',
    description: 'Need replenishment review',
  },
]

export const stockRecords: StockRecord[] = [
  {
    id: 'MC-BIS-001',
    product: 'Cream Cracker',
    onHand: '12,400',
    reserved: '2,400',
    available: '10,000',
    threshold: '8,000',
  },
  {
    id: 'MC-BIS-002',
    product: 'Chocolate Cream',
    onHand: '6,800',
    reserved: '1,200',
    available: '5,600',
    threshold: '1,000',
  },
  {
    id: 'MC-BIS-003',
    product: 'Lemon Puff',
    onHand: '5,200',
    reserved: '4,500',
    available: '700',
    threshold: '1,000',
  },
  {
    id: 'MC-BIS-004',
    product: 'Nice',
    onHand: '5,400',
    reserved: '800',
    available: '4,600',
    threshold: '3,000',
  },
  {
    id: 'MC-BIS-005',
    product: 'Milk Marie',
    onHand: '1,000',
    reserved: '800',
    available: '200',
    threshold: '500',
  },
  {
    id: 'MC-BIS-006',
    product: 'Tikir Marie',
    onHand: '2,500',
    reserved: '2,100',
    available: '400',
    threshold: '500',
  },
]

export const shipments: Shipment[] = [
  {
    id: 'SCH-2048',
    scheduled: '20 Oct',
    quantity: '2,400',
    product: 'Cream Cracker',
    destination: 'Kandy Shop 014',
  },
  {
    id: 'SCH-2049',
    scheduled: '21 Oct',
    quantity: '1,200',
    product: 'Chocolate Cream',
    destination: 'Gampaha Shop 006',
  },
  {
    id: 'SCH-2050',
    scheduled: '22 Oct',
    quantity: '3,000',
    product: 'Lemon Puff',
    destination: 'Colombo Shop 021',
  },
]

export const lowStockAlerts: LowStockAlert[] = [
  {
    id: 'MC-BIS-003',
    product: 'Lemon Puff',
    available: '700',
    threshold: '1,000',
    message: 'Replenishment review needed',
  },
  {
    id: 'MC-BIS-005',
    product: 'Milk Marie',
    available: '200',
    threshold: '500',
    message: 'Replenishment review needed',
  },
  {
    id: 'MC-BIS-006',
    product: 'Tikir Marie',
    available: '400',
    threshold: '500',
    message: 'Replenishment review needed',
  },
]

export const adminActions: AdminAction[] = [
  { label: 'Review SAP requirements', primary: true },
  { label: 'Review upcoming orders' },
  { label: 'Check manufacturing stocks' },
  { label: 'Reports & History' },
]
