import { AppShell, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']

const tasks = [
  { name: 'Mall CX programme 2026', start: 0, span: 9, done: 62, tone: 'bg-primary-container', group: true },
  { name: 'Checklist redesign', start: 0, span: 2, done: 100, tone: 'bg-secondary' },
  { name: 'Shopper onboarding', start: 1, span: 2, done: 100, tone: 'bg-secondary' },
  { name: 'Q1–Q2 visit waves', start: 2, span: 4, done: 85, tone: 'bg-primary-container' },
  { name: 'Executive report pack', start: 5, span: 2, done: 40, tone: 'bg-primary-container' },
  { name: 'Q3 visit wave', start: 6, span: 3, done: 10, tone: 'bg-primary-container' },
  { name: 'Hospitality rollout', start: 3, span: 5, done: 55, tone: 'bg-tertiary', group: true },
  { name: 'Arabic checklist variant', start: 3, span: 2, done: 100, tone: 'bg-secondary' },
]

const changes = [
  { id: 'CR-118', title: 'Add photo evidence to closing section', status: 'Approved', tone: tones.good },
  { id: 'CR-121', title: 'Extend Q3 wave to two new venues', status: 'Pending', tone: tones.warn },
  { id: 'CR-124', title: 'Weighting change for greeting', status: 'In review', tone: tones.info },
]

export function EmaarTracker() {
  return (
    <AppShell
      theme={themes.emaar}
      nav={['Dashboard', 'Schedules', 'Visits', 'Action Plans', 'Reports', 'Project Tracker', 'Users & Roles']}
      active="Project Tracker"
      user="Project Head"
      title="Project Tracker"
      subtitle="Programmes, milestones and change requests · Gantt view"
      actions={
        <>
          <Button>Kanban view</Button>
          <Button primary>New milestone</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="Active projects" value="12" note="3 business units" />
        <Kpi label="Milestones due" value="9" note="Next 30 days" tone="text-primary" />
        <Kpi label="Overdue" value="2" note="Flagged by nightly job" tone="text-error" />
        <Kpi label="Change requests" value="5" note="2 awaiting approval" tone="text-secondary" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Panel title="Timeline" meta="2026" className="col-span-8">
          <div className="grid grid-cols-[180px_1fr] text-[11px]">
            <span />
            <div className="grid grid-cols-9 text-outline font-semibold pb-2">
              {months.map((month) => (
                <span key={month} className="text-center">
                  {month}
                </span>
              ))}
            </div>
            {tasks.map((task) => (
              <div key={task.name} className="contents">
                <span className={`py-2 truncate ${task.group ? 'font-bold' : 'pl-3 text-on-surface-variant'}`}>
                  {task.name}
                </span>
                <div className="relative grid grid-cols-9 border-t border-outline-variant/60">
                  <div
                    className="absolute top-2 h-[18px] rounded bg-surface-container-highest overflow-hidden"
                    style={{ left: `${(task.start / 9) * 100}%`, width: `${(task.span / 9) * 100}%` }}
                  >
                    <div className={`h-full ${task.tone}`} style={{ width: `${task.done}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Change requests" meta="Workflow" className="col-span-4">
          <div className="space-y-2">
            {changes.map((change) => (
              <div key={change.id} className="bg-surface-container rounded-lg px-3 py-2.5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[11px] text-outline">{change.id}</span>
                  <Pill tone={change.tone}>{change.status}</Pill>
                </div>
                <div className="text-[12px]">{change.title}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}
