import { AppShell, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const assets = [
  {
    tag: 'FA-000418',
    name: 'Dell Latitude 7440',
    type: 'IT Equipment',
    location: 'HQ › Building B › IT Department',
    value: '4,850',
    status: 'In use',
    tone: tones.good,
  },
  {
    tag: 'FA-000417',
    name: 'Commercial Display Cooler',
    type: 'Coolers',
    location: 'Branch 07 › Sales Area',
    value: '12,300',
    status: 'Maintenance',
    tone: tones.warn,
  },
  {
    tag: 'FA-000409',
    name: 'Conference Table 12-seat',
    type: 'Furniture',
    location: 'HQ › Building A › Board Room',
    value: '6,120',
    status: 'In use',
    tone: tones.good,
  },
  {
    tag: 'FA-000402',
    name: 'HP LaserJet M507',
    type: 'IT Equipment',
    location: 'Branch 03 › Administration',
    value: '2,240',
    status: 'Pending disposal',
    tone: tones.bad,
  },
  {
    tag: 'FA-000398',
    name: 'Forklift Electric 2.5T',
    type: 'Vehicles',
    location: 'Warehouse › Yard',
    value: '58,900',
    status: 'In use',
    tone: tones.good,
  },
  {
    tag: 'FA-000391',
    name: 'Split AC Unit 24k BTU',
    type: 'Facilities',
    location: 'Branch 11 › Operations',
    value: '3,480',
    status: 'Moving',
    tone: tones.info,
  },
]

const approvals = [
  { kind: 'Movement', ref: 'MV-1182', detail: '14 assets · Branch 03 → HQ', step: 'Checker approval' },
  { kind: 'Disposal', ref: 'DS-0457', detail: 'HP LaserJet M507 · end of life', step: 'Finance review' },
  { kind: 'Maintenance', ref: 'MT-0931', detail: 'Display Cooler · compressor', step: 'Delegated approver' },
]

export function FixedAssets() {
  return (
    <AppShell
      theme={themes.fixedAssets}
      nav={[
        'Dashboard',
        'Asset Register',
        'Purchasing',
        'Depreciation',
        'Requests',
        'Inventory',
        'Locations',
        'Reports',
        'Administration',
      ]}
      active="Asset Register"
      user="Asset Controller"
      title="Asset Register"
      subtitle="RFID-tagged assets across all branches"
      actions={
        <>
          <Button>Print RFID labels</Button>
          <Button primary>Add asset</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="Registered assets" value="18,642" note="Across 24 branches" />
        <Kpi label="Net book value" value="41.7M" note="After monthly depreciation run" tone="text-tertiary" />
        <Kpi label="Pending approvals" value="37" note="Movement · disposal · maintenance" tone="text-primary" />
        <Kpi label="Last inventory" value="96.8%" note="Assets matched by RFID" tone="text-secondary" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Panel title="Assets" meta="Filtered: all types" className="col-span-8">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="text-left text-outline font-label-caps text-[10px] uppercase">
                <th className="pb-2 font-semibold">Tag</th>
                <th className="pb-2 font-semibold">Asset</th>
                <th className="pb-2 font-semibold">Location</th>
                <th className="pb-2 font-semibold text-right">Cost</th>
                <th className="pb-2 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.tag} className="border-t border-outline-variant/30">
                  <td className="py-2.5 font-mono-code text-on-surface-variant">{asset.tag}</td>
                  <td className="py-2.5">
                    <div>{asset.name}</div>
                    <div className="text-[11px] text-outline">{asset.type}</div>
                  </td>
                  <td className="py-2.5 text-[11px] text-on-surface-variant">{asset.location}</td>
                  <td className="py-2.5 text-right font-mono-code">{asset.value}</td>
                  <td className="py-2.5 text-right">
                    <Pill tone={asset.tone}>{asset.status}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
        <div className="col-span-4 space-y-4">
          <Panel title="Approval queue" meta="Maker / checker">
            <div className="space-y-2">
              {approvals.map((item) => (
                <div key={item.ref} className="bg-surface-container rounded-lg px-3 py-2.5">
                  <div className="flex justify-between items-center mb-1">
                    <Pill tone={tones.info}>{item.kind}</Pill>
                    <span className="font-mono-code text-[11px] text-outline">{item.ref}</span>
                  </div>
                  <div className="text-[12px]">{item.detail}</div>
                  <div className="text-[11px] text-on-surface-variant mt-0.5">Waiting: {item.step}</div>
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="Depreciation" meta="Straight-line">
            <div className="flex items-end gap-1.5 h-20">
              {[92, 86, 80, 75, 69, 64, 58, 53, 47, 42, 36, 31].map((v, i) => (
                <div key={i} className="flex-1 rounded-t bg-primary/80" style={{ height: `${v}%` }} />
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-mono-code text-outline mt-1.5">
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  )
}
