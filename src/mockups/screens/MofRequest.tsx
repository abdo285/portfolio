import { AppShell, Button, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const nav = ['Dashboard', 'Purchase Requests', 'Purchase Orders', 'Tenders', 'Receiving', 'Stores & Stock', 'Withdrawals', 'RFID', 'Reports']

const lines = [
  ['MED-10155', 'Ceftriaxone 1g vial', 'Vial', '2,000'],
  ['MED-10388', 'Insulin glargine pen', 'Pen', '1,200'],
  ['SUP-20512', 'Examination gloves M', 'Box', '800'],
  ['SUP-20488', 'IV cannula 20G', 'Piece', '5,000'],
  ['LAB-30117', 'CBC reagent kit', 'Kit', '60'],
]

const approvals = [
  { role: 'Requesting store', who: 'Pharmacy Store · North', state: 'Submitted', tone: tones.good },
  { role: 'Store manager', who: 'Head of Pharmacy', state: 'Approved', tone: tones.good },
  { role: 'Procurement', who: 'Procurement Department', state: 'In review', tone: tones.info },
  { role: 'Financial approval', who: 'Finance Directorate', state: 'Waiting', tone: tones.muted },
]

const reports = ['Purchase request form', 'Items below minimum', 'Store balance by batch', 'Consumption by period']

export function MofRequest() {
  return (
    <AppShell
      theme={themes.moh}
      nav={nav}
      active="Purchase Requests"
      user="Procurement Officer"
      title="Purchase Request PR-2026-0127"
      subtitle="Pharmacy Store · North · 5 lines · created from below-minimum alert"
      actions={
        <>
          <Button>Print (RDLC)</Button>
          <Button primary>Convert to purchase order</Button>
        </>
      }
    >
      <div className="grid grid-cols-12 gap-4">
        <Panel title="Request lines" meta="5 items" className="col-span-8">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="text-left text-outline text-[10px] uppercase">
                <th className="pb-2 font-semibold">Code</th>
                <th className="pb-2 font-semibold">Item</th>
                <th className="pb-2 font-semibold">Unit</th>
                <th className="pb-2 font-semibold text-right">Requested qty</th>
              </tr>
            </thead>
            <tbody>
              {lines.map(([code, name, unit, qty]) => (
                <tr key={code} className="border-t border-outline-variant/60">
                  <td className="py-2.5 text-on-surface-variant">{code}</td>
                  <td className="py-2.5">{name}</td>
                  <td className="py-2.5 text-on-surface-variant">{unit}</td>
                  <td className="py-2.5 text-right tabular-nums">{qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 grid grid-cols-3 gap-3 text-[12px]">
            {[
              ['Priority', 'Urgent'],
              ['Funding', 'Annual budget 2026'],
              ['Attachments', '2 files'],
            ].map(([label, value]) => (
              <div key={label} className="bg-surface-container rounded-lg px-3 py-2">
                <div className="text-[10px] text-outline">{label}</div>
                <div className="font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </Panel>
        <div className="col-span-4 space-y-4">
          <Panel title="Approval chain" meta="Workflow">
            <div className="space-y-2">
              {approvals.map((step) => (
                <div key={step.role} className="flex items-center justify-between bg-surface-container rounded-lg px-3 py-2">
                  <div>
                    <div className="text-[12px] font-semibold">{step.role}</div>
                    <div className="text-[11px] text-on-surface-variant">{step.who}</div>
                  </div>
                  <Pill tone={step.tone}>{step.state}</Pill>
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="Related reports" meta="RDLC">
            <div className="space-y-1.5">
              {reports.map((report) => (
                <div key={report} className="flex justify-between items-center text-[12px] py-1">
                  <span>{report}</span>
                  <span className="text-primary font-semibold">PDF</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  )
}
