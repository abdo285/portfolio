import { AppShell, Button, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const nav = ['Dashboard', 'Purchase Requests', 'Purchase Orders', 'Tenders', 'Receiving', 'Stores & Stock', 'Withdrawals', 'RFID', 'Reports']

const tree = [
  { name: 'Central Medical Store', depth: 0, items: '12,480', active: false },
  { name: 'Pharmacy Store · North', depth: 1, items: '4,215', active: true },
  { name: 'Cold Room A', depth: 2, items: '612', active: false },
  { name: 'Shelf Zone C', depth: 2, items: '1,804', active: false },
  { name: 'Surgical Supplies', depth: 1, items: '3,906', active: false },
  { name: 'Laboratory Store', depth: 1, items: '2,118', active: false },
  { name: 'Reagents Room', depth: 2, items: '744', active: false },
]

const items = [
  { code: 'MED-10422', name: 'Amoxicillin 500mg caps', batch: 'B-2291', qty: '18,400', expiry: '2027-03', state: 'OK', tone: tones.good },
  { code: 'MED-10388', name: 'Insulin glargine pen', batch: 'B-2240', qty: '620', expiry: '2026-12', state: 'Expiring soon', tone: tones.warn },
  { code: 'MED-10291', name: 'Paracetamol 1g IV', batch: 'B-2198', qty: '3,250', expiry: '2027-08', state: 'OK', tone: tones.good },
  { code: 'SUP-20417', name: 'Sterile gauze 10x10', batch: 'B-2177', qty: '9,000', expiry: '2028-01', state: 'Stagnant 180d', tone: tones.info },
  { code: 'MED-10155', name: 'Ceftriaxone 1g vial', batch: 'B-2102', qty: '140', expiry: '2026-11', state: 'Below minimum', tone: tones.bad },
  { code: 'SUP-20366', name: 'Syringe 5ml', batch: 'B-2096', qty: '24,000', expiry: '2029-06', state: 'OK', tone: tones.good },
]

export function MofStores() {
  return (
    <AppShell
      theme={themes.moh}
      nav={nav}
      active="Stores & Stock"
      user="Store Keeper"
      title="Stores & Stock"
      subtitle="Store hierarchy · batches, expiry and stagnant stock alerts"
      actions={
        <>
          <Button>Stock report</Button>
          <Button primary>New transfer</Button>
        </>
      }
    >
      <div className="grid grid-cols-12 gap-4 h-full">
        <Panel title="Store hierarchy" meta="7 nodes" className="col-span-4">
          <div className="space-y-1">
            {tree.map((node) => (
              <div
                key={node.name}
                className={`flex justify-between items-center rounded-lg py-2 pr-3 text-[12px] ${node.active ? 'bg-primary-fixed font-semibold text-primary' : ''}`}
                style={{ paddingLeft: `${12 + node.depth * 18}px` }}
              >
                <span>
                  {node.depth > 0 && <span className="text-outline">└ </span>}
                  {node.name}
                </span>
                <span className="tabular-nums text-on-surface-variant">{node.items}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="rounded-lg bg-[#f59e0b]/10 px-3 py-2 text-[12px]">
              <div className="font-semibold text-[#b45309]">14 batches expire within 90 days</div>
              <div className="text-[11px] text-on-surface-variant">Nightly expiry job · 02:00</div>
            </div>
            <div className="rounded-lg bg-primary/10 px-3 py-2 text-[12px]">
              <div className="font-semibold text-primary">9 items stagnant over 180 days</div>
              <div className="text-[11px] text-on-surface-variant">Reminder sent to store managers</div>
            </div>
          </div>
        </Panel>
        <Panel title="Pharmacy Store · North" meta="Including child stores" className="col-span-8">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="text-left text-outline text-[10px] uppercase">
                <th className="pb-2 font-semibold">Code</th>
                <th className="pb-2 font-semibold">Item</th>
                <th className="pb-2 font-semibold">Batch</th>
                <th className="pb-2 font-semibold text-right">Qty</th>
                <th className="pb-2 font-semibold text-right">Expiry</th>
                <th className="pb-2 font-semibold text-right">State</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.code} className="border-t border-outline-variant/60">
                  <td className="py-2.5 text-on-surface-variant">{item.code}</td>
                  <td className="py-2.5">{item.name}</td>
                  <td className="py-2.5 text-on-surface-variant">{item.batch}</td>
                  <td className="py-2.5 text-right tabular-nums">{item.qty}</td>
                  <td className="py-2.5 text-right tabular-nums">{item.expiry}</td>
                  <td className="py-2.5 text-right">
                    <Pill tone={item.tone}>{item.state}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
    </AppShell>
  )
}
