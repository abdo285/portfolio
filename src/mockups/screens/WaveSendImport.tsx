import { AppShell, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const mapping = [
  ['Mobile', 'phone', 'Normalised to E.164'],
  ['Customer name', 'name', 'Template variable {{1}}'],
  ['City', 'attributes.city', 'Custom attribute'],
  ['Segment', 'tags', 'Comma-separated'],
]

const rows = [
  { raw: '0968 123 4567', phone: '+968 9123 4567', name: 'Customer 1042', result: 'Valid', tone: tones.good },
  { raw: '+968-9234-1188', phone: '+968 9234 1188', name: 'Customer 1043', result: 'Valid', tone: tones.good },
  { raw: '9123 4567', phone: '+968 9123 4567', name: 'Customer 1044', result: 'Duplicate', tone: tones.warn },
  { raw: '12345', phone: '—', name: 'Customer 1045', result: 'Invalid number', tone: tones.bad },
  { raw: '+968 9876 0021', phone: '+968 9876 0021', name: 'Customer 1046', result: 'Opted out', tone: tones.muted },
  { raw: '00968 9555 7710', phone: '+968 9555 7710', name: 'Customer 1047', result: 'Valid', tone: tones.good },
]

export function WaveSendImport() {
  return (
    <AppShell
      theme={themes.wavesend}
      nav={['Dashboard', 'Contacts', 'Templates', 'Campaigns']}
      active="Contacts"
      user="Operator Account"
      title="Import contacts"
      subtitle="retail-customers-october.xlsx · 2,418 rows"
      actions={
        <>
          <Button>Download sample CSV</Button>
          <Button primary>Import 2,301 contacts</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="Rows read" value="2,418" note="Excel · sheet 1" />
        <Kpi label="Valid" value="2,301" note="E.164 normalised" tone="text-secondary" />
        <Kpi label="Duplicates" value="84" note="Merged by phone" tone="text-[#b45309]" />
        <Kpi label="Rejected" value="33" note="Invalid or opted out" tone="text-error" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Panel title="Column mapping" meta="Auto-detected" className="col-span-4">
          <div className="space-y-2">
            {mapping.map(([column, field, note]) => (
              <div key={column} className="bg-surface-container rounded-lg px-3 py-2.5">
                <div className="flex justify-between text-[12px]">
                  <span className="font-semibold">{column}</span>
                  <span className="text-primary">→ {field}</span>
                </div>
                <div className="text-[11px] text-on-surface-variant mt-0.5">{note}</div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Validation preview" meta="First 6 rows" className="col-span-8">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="text-left text-outline text-[10px] uppercase">
                <th className="pb-2 font-semibold">Original</th>
                <th className="pb-2 font-semibold">Normalised</th>
                <th className="pb-2 font-semibold">Name</th>
                <th className="pb-2 font-semibold text-right">Result</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name} className="border-t border-outline-variant/60">
                  <td className="py-2.5 text-on-surface-variant tabular-nums">{row.raw}</td>
                  <td className="py-2.5 tabular-nums">{row.phone}</td>
                  <td className="py-2.5">{row.name}</td>
                  <td className="py-2.5 text-right">
                    <Pill tone={row.tone}>{row.result}</Pill>
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
