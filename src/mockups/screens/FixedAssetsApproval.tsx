import { AppShell, Button, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const nav = ['Dashboard', 'Asset Register', 'Purchasing', 'Depreciation', 'Requests', 'Inventory', 'Locations', 'Reports', 'Administration']

const stages = [
  { name: 'Maker', who: 'Branch Asset Officer', state: 'Submitted', when: '02 Oct · 09:14', tone: tones.good },
  { name: 'Checker', who: 'Asset Controller', state: 'Approved', when: '02 Oct · 11:40', tone: tones.good },
  { name: 'Finance review', who: 'Finance Manager', state: 'Pending', when: 'Assigned 02 Oct', tone: tones.warn },
  { name: 'Completion', who: 'Receiving branch', state: 'Not started', when: '—', tone: tones.muted },
]

const lines = [
  ['FA-000512', 'Dell OptiPlex 7010', 'IT Equipment', '3,150'],
  ['FA-000513', 'Dell OptiPlex 7010', 'IT Equipment', '3,150'],
  ['FA-000486', 'Office Chair Ergonomic', 'Furniture', '720'],
  ['FA-000471', 'Network Switch 24-port', 'IT Equipment', '2,480'],
  ['FA-000466', 'Filing Cabinet 4-drawer', 'Furniture', '540'],
  ['FA-000459', 'Projector Epson EB-L', 'IT Equipment', '4,900'],
]

export function FixedAssetsApproval() {
  return (
    <AppShell
      theme={themes.fixedAssets}
      nav={nav}
      active="Requests"
      user="Finance Manager"
      title="Movement Request MV-1182"
      subtitle="14 assets · Branch 03 → HQ › Building B · multi-stage approval"
      actions={
        <>
          <Button>Reject</Button>
          <Button>Return to maker</Button>
          <Button primary>Approve stage</Button>
        </>
      }
    >
      <div className="grid grid-cols-12 gap-4">
        <Panel title="Approval workflow" meta="Maker / checker · 4 stages" className="col-span-12">
          <div className="grid grid-cols-4 gap-3">
            {stages.map((stage, index) => (
              <div key={stage.name} className="relative bg-surface-container rounded-lg px-4 py-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`w-6 h-6 rounded-[999px] flex items-center justify-center text-[11px] font-bold ${
                      index < 2 ? 'bg-secondary text-on-primary' : index === 2 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'
                    }`}
                  >
                    {index < 2 ? '✓' : index + 1}
                  </span>
                  <span className="text-[13px] font-bold">{stage.name}</span>
                </div>
                <div className="text-[12px] text-on-surface-variant">{stage.who}</div>
                <div className="flex justify-between items-center mt-2">
                  <Pill tone={stage.tone}>{stage.state}</Pill>
                  <span className="text-[10px] text-outline">{stage.when}</span>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Assets in this request" meta="Showing 6 of 14" className="col-span-8">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="text-left text-outline text-[10px] uppercase">
                <th className="pb-2 font-semibold">Tag</th>
                <th className="pb-2 font-semibold">Asset</th>
                <th className="pb-2 font-semibold">Category</th>
                <th className="pb-2 font-semibold text-right">Net book value</th>
              </tr>
            </thead>
            <tbody>
              {lines.map(([tag, name, type, value]) => (
                <tr key={tag} className="border-t border-outline-variant/60">
                  <td className="py-2 text-on-surface-variant">{tag}</td>
                  <td className="py-2">{name}</td>
                  <td className="py-2 text-on-surface-variant">{type}</td>
                  <td className="py-2 text-right tabular-nums">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <div className="col-span-4 space-y-4">
          <Panel title="Request details">
            <dl className="space-y-1.5 text-[12px]">
              {[
                ['From', 'Branch 03 › Administration'],
                ['To', 'HQ › Building B › IT'],
                ['Reason', 'Branch consolidation'],
                ['Total NBV', '31,640'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-3">
                  <dt className="text-on-surface-variant">{label}</dt>
                  <dd className="font-semibold text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
          <Panel title="Comments" meta="2">
            <div className="space-y-2 text-[12px]">
              <div className="bg-surface-container rounded-lg px-3 py-2">
                <div className="font-semibold">Asset Controller</div>
                <div className="text-on-surface-variant">Tags verified against last RFID count.</div>
              </div>
              <div className="bg-surface-container rounded-lg px-3 py-2">
                <div className="font-semibold">Branch Asset Officer</div>
                <div className="text-on-surface-variant">Items packed and labelled for transfer.</div>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  )
}
