import { AppShell, Bar, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const nav = ['Dashboard', 'Asset Register', 'Purchasing', 'Depreciation', 'Requests', 'Inventory', 'Locations', 'Reports', 'Administration']

const locations = [
  { name: 'HQ › Building A', expected: 1240, matched: 1228 },
  { name: 'HQ › Building B', expected: 980, matched: 951 },
  { name: 'Branch 03', expected: 412, matched: 398 },
  { name: 'Branch 07', expected: 366, matched: 366 },
  { name: 'Warehouse', expected: 604, matched: 571 },
]

const reads = [
  { time: '14:22:09', tag: 'E280-6894-0000-4012', asset: 'FA-000418 · Dell Latitude 7440', result: 'Matched', tone: tones.good },
  { time: '14:22:07', tag: 'E280-6894-0000-3977', asset: 'FA-000233 · Desk 160cm', result: 'Wrong location', tone: tones.warn },
  { time: '14:22:02', tag: 'E280-6894-0000-3920', asset: 'Unknown tag', result: 'Unexpected', tone: tones.bad },
  { time: '14:21:58', tag: 'E280-6894-0000-3911', asset: 'FA-000409 · Conference Table', result: 'Matched', tone: tones.good },
  { time: '14:21:51', tag: 'Barcode 000398', asset: 'FA-000398 · Forklift 2.5T', result: 'Matched', tone: tones.good },
]

export function FixedAssetsInventory() {
  return (
    <AppShell
      theme={themes.fixedAssets}
      nav={nav}
      active="Inventory"
      user="Inventory Supervisor"
      title="Inventory Count · October 2026"
      subtitle="RFID and barcode count session · 5 locations"
      actions={
        <>
          <Button>Export variance report</Button>
          <Button primary>Close session</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="Expected" value="3,602" note="Assets in scope" />
        <Kpi label="Matched" value="3,514" note="97.6% of expected" tone="text-secondary" />
        <Kpi label="Missing" value="71" note="Not read in any location" tone="text-error" />
        <Kpi label="Wrong location" value="17" note="Movement request suggested" tone="text-primary" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Panel title="Progress by location" meta="Matched / expected" className="col-span-5">
          <div className="space-y-3.5">
            {locations.map((location) => (
              <div key={location.name}>
                <div className="flex justify-between text-[12px] mb-1">
                  <span>{location.name}</span>
                  <span className="tabular-nums text-on-surface-variant">
                    {location.matched} / {location.expected}
                  </span>
                </div>
                <Bar value={(location.matched / location.expected) * 100} tone="bg-primary" />
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Live reads" meta="RFID · barcode" className="col-span-7">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="text-left text-outline text-[10px] uppercase">
                <th className="pb-2 font-semibold">Time</th>
                <th className="pb-2 font-semibold">Tag</th>
                <th className="pb-2 font-semibold">Asset</th>
                <th className="pb-2 font-semibold text-right">Result</th>
              </tr>
            </thead>
            <tbody>
              {reads.map((read) => (
                <tr key={read.tag} className="border-t border-outline-variant/60">
                  <td className="py-2.5 tabular-nums text-on-surface-variant">{read.time}</td>
                  <td className="py-2.5 text-[11px]">{read.tag}</td>
                  <td className="py-2.5">{read.asset}</td>
                  <td className="py-2.5 text-right">
                    <Pill tone={read.tone}>{read.result}</Pill>
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
