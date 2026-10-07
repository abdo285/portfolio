import { AppShell, Bar, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { star, tones } from '../tones'

const units = [
  { name: 'Hospitality (EHG)', score: 91.2 },
  { name: 'Malls (EMG)', score: 88.6 },
  { name: 'Entertainment', score: 84.9 },
  { name: 'Properties', score: 86.3 },
  { name: 'U By Emaar', score: 89.7 },
  { name: 'International', score: 81.4 },
]

const quarters = [
  { q: 'Q1', prev: 78, curr: 82 },
  { q: 'Q2', prev: 80, curr: 85 },
  { q: 'Q3', prev: 83, curr: 87 },
  { q: 'Q4', prev: 82, curr: 88 },
]

const visits = [
  {
    id: 'VS-24817',
    site: 'Downtown Hotel · Front Desk',
    type: 'Walk-in',
    score: 94,
    stars: 5,
    status: 'Approved',
    tone: tones.good,
  },
  {
    id: 'VS-24809',
    site: 'Mall Concierge · Level 1',
    type: 'Phone call',
    score: 88,
    stars: 4,
    status: 'Under review',
    tone: tones.info,
  },
  {
    id: 'VS-24796',
    site: 'Sales Centre · Creek',
    type: 'Walk-in',
    score: 72,
    stars: 3,
    status: 'Action plan',
    tone: tones.warn,
  },
  {
    id: 'VS-24788',
    site: 'Leisure Park · Ticketing',
    type: 'Email',
    score: 90,
    stars: 5,
    status: 'Approved',
    tone: tones.good,
  },
]

export function EmaarChecklist() {
  return (
    <AppShell
      theme={themes.emaar}
      nav={['Dashboard', 'Schedules', 'Visits', 'Action Plans', 'Reports', 'Project Tracker', 'Users & Roles']}
      active="Dashboard"
      user="Quality Manager"
      title="Service Excellence Dashboard"
      subtitle="Mystery shopping results · Year to date"
      actions={
        <>
          <Button>Q3 vs Q2</Button>
          <Button primary>Export PDF report</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="Overall score" value="87.4%" note="+3.1 pts vs last quarter" tone="text-secondary" />
        <Kpi label="Visits completed" value="142 / 160" note="18 scheduled this month" />
        <Kpi label="Open action plans" value="23" note="4 overdue" tone="text-primary" />
        <Kpi label="Avg. rating" value="4.3 ★" note="Across 6 business units" />
      </div>
      <div className="grid grid-cols-12 gap-4 mb-4">
        <Panel title="Score by business unit" meta="YTD" className="col-span-5">
          <div className="space-y-2">
            {units.map((unit) => (
              <div key={unit.name}>
                <div className="flex justify-between text-[12px] mb-1">
                  <span className="text-on-surface-variant">{unit.name}</span>
                  <span className="font-mono-code">{unit.score}%</span>
                </div>
                <Bar value={unit.score} tone={unit.score >= 88 ? 'bg-secondary' : 'bg-primary-container'} />
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Quarterly comparison" meta="Previous year vs current" className="col-span-7">
          <div className="h-[168px] flex items-end justify-around gap-6 pt-4 border-b border-outline-variant/50">
            {quarters.map((quarter) => (
              <div key={quarter.q} className="flex flex-col items-center gap-2 flex-1">
                <div className="flex items-end gap-1.5 h-[150px]">
                  <div
                    className="w-9 rounded-t bg-surface-container-highest"
                    style={{ height: `${quarter.prev * 1.6}px` }}
                  />
                  <div className="w-9 rounded-t bg-primary-container" style={{ height: `${quarter.curr * 1.6}px` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-around text-[11px] font-mono-code text-outline mt-2">
            {quarters.map((quarter) => (
              <span key={quarter.q}>
                {quarter.q} · {quarter.curr}%
              </span>
            ))}
          </div>
        </Panel>
      </div>
      <Panel title="Recent visits" meta="Scored by checklist · reviewed by QA">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="text-left text-outline font-label-caps text-[10px] uppercase">
              <th className="pb-2 font-semibold">Visit</th>
              <th className="pb-2 font-semibold">Location</th>
              <th className="pb-2 font-semibold">Channel</th>
              <th className="pb-2 font-semibold">Score</th>
              <th className="pb-2 font-semibold">Rating</th>
              <th className="pb-2 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit) => (
              <tr key={visit.id} className="border-t border-outline-variant/30">
                <td className="py-2 font-mono-code text-on-surface-variant">{visit.id}</td>
                <td className="py-2">{visit.site}</td>
                <td className="py-2 text-on-surface-variant">{visit.type}</td>
                <td className="py-2 font-mono-code">{visit.score ? `${visit.score}%` : '—'}</td>
                <td className={`py-2 ${star}`}>{'★'.repeat(visit.stars) || '—'}</td>
                <td className="py-2 text-right">
                  <Pill tone={visit.tone}>{visit.status}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </AppShell>
  )
}
