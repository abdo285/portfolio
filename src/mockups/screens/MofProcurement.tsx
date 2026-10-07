import { AppShell, Bar, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const pipeline = [
  { stage: 'Purchase requests', count: 46, tone: 'bg-surface-container-high' },
  { stage: 'Purchase orders', count: 31, tone: 'bg-primary/10' },
  { stage: 'Receiving', count: 18, tone: 'bg-primary/20' },
  { stage: 'Inspection', count: 9, tone: 'bg-tertiary/15' },
  { stage: 'Stored', count: 214, tone: 'bg-secondary/15' },
]

const stores = [
  { name: 'Central Medical Store', items: '12,480', fill: 82 },
  { name: 'Pharmacy Store · North', items: '4,215', fill: 64 },
  { name: 'Surgical Supplies', items: '3,906', fill: 47 },
  { name: 'Laboratory Store', items: '2,118', fill: 71 },
]

const orders = [
  { id: 'PO-2026-0418', supplier: 'Gulf Medical Supplies', lines: 24, status: 'Receiving', tone: tones.info },
  { id: 'PO-2026-0412', supplier: 'Al Noor Pharma Trading', lines: 9, status: 'Inspection', tone: tones.warn },
  { id: 'PO-2026-0407', supplier: 'MedEquip International', lines: 15, status: 'Approved', tone: tones.good },
  { id: 'PO-2026-0399', supplier: 'Crescent Lab Systems', lines: 6, status: 'Rejected lines', tone: tones.bad },
]

const scans = [
  { time: '10:42:18', tag: 'E280-1160-6000-0209', reader: 'Gate A · Antenna 2', event: 'OUT' },
  { time: '10:41:57', tag: 'E280-1160-6000-0187', reader: 'Gate A · Antenna 1', event: 'IN' },
  { time: '10:39:03', tag: 'E280-1160-6000-0154', reader: 'Store 3 · Shelf C', event: 'COUNT' },
  { time: '10:36:44', tag: 'E280-1160-6000-0121', reader: 'Gate B · Antenna 1', event: 'IN' },
]

export function MofProcurement() {
  return (
    <AppShell
      theme={themes.moh}
      nav={[
        'Dashboard',
        'Purchase Requests',
        'Purchase Orders',
        'Tenders',
        'Receiving',
        'Stores & Stock',
        'Withdrawals',
        'RFID',
        'Reports',
      ]}
      active="Dashboard"
      user="Store Keeper"
      title="Procurement & Inventory Overview"
      subtitle="Requests to stored stock · all stores"
      actions={
        <>
          <Button>Print template</Button>
          <Button primary>New purchase request</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="Open requests" value="46" note="12 awaiting approval" />
        <Kpi label="Orders in transit" value="31" note="7 suppliers" tone="text-primary" />
        <Kpi label="Items below minimum" value="58" note="Across 4 stores" tone="text-[#b45309]" />
        <Kpi label="RFID reads today" value="3,904" note="6 readers online" tone="text-secondary" />
      </div>
      <Panel title="Procurement pipeline" meta="Current fiscal year" className="mb-4">
        <div className="grid grid-cols-5 gap-2">
          {pipeline.map((step) => (
            <div key={step.stage} className={`rounded-lg px-4 py-3 ${step.tone}`}>
              <div className="text-[11px] text-on-surface">{step.stage}</div>
              <div className="font-mono-metric text-[22px] leading-7 font-semibold">{step.count}</div>
            </div>
          ))}
        </div>
      </Panel>
      <div className="grid grid-cols-12 gap-4">
        <Panel title="Purchase orders" meta="Latest" className="col-span-5">
          <div className="space-y-2">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between bg-surface-container rounded-lg px-3 py-2.5"
              >
                <div>
                  <div className="font-mono-code text-[11px] text-on-surface-variant">{order.id}</div>
                  <div className="text-[12px]">{order.supplier}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-outline">{order.lines} lines</span>
                  <Pill tone={order.tone}>{order.status}</Pill>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Stock by store" meta="Capacity used" className="col-span-3">
          <div className="space-y-4">
            {stores.map((store) => (
              <div key={store.name}>
                <div className="text-[12px] mb-0.5">{store.name}</div>
                <div className="text-[11px] text-outline mb-1.5">{store.items} items</div>
                <Bar value={store.fill} tone="bg-secondary" />
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="RFID scan log" meta="Live" className="col-span-4">
          <div className="space-y-2 font-mono-code text-[11px]">
            {scans.map((scan) => (
              <div key={scan.tag} className="bg-surface-container rounded-lg px-3 py-2">
                <div className="flex justify-between">
                  <span className="text-outline">{scan.time}</span>
                  <Pill tone={scan.event === 'OUT' ? tones.warn : scan.event === 'IN' ? tones.good : tones.info}>
                    {scan.event}
                  </Pill>
                </div>
                <div className="text-on-surface">{scan.tag}</div>
                <div className="text-on-surface-variant">{scan.reader}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}
