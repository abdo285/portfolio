import { AppShell, Button, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { star, tones } from '../tones'

const sections = [
  { name: 'Arrival & Greeting', score: 100, done: true },
  { name: 'Needs Discovery', score: 83, done: true },
  { name: 'Product Knowledge', score: 90, done: true },
  { name: 'Closing & Follow-up', score: 67, done: false },
  { name: 'Ambience & Grooming', score: 95, done: true },
]

const questions = [
  { q: 'Was the shopper greeted within 30 seconds of arrival?', answer: 'Yes', weight: 5, tone: tones.good },
  { q: 'Did the associate introduce themselves by name?', answer: 'Yes', weight: 3, tone: tones.good },
  { q: 'Did the associate offer a follow-up appointment or call?', answer: 'No', weight: 5, tone: tones.bad },
  { q: 'Rate the overall warmth of the interaction', answer: '4 / 5', weight: 4, stars: 4 },
  { q: 'Was a business card or brochure provided?', answer: 'Yes', weight: 2, tone: tones.good },
]

const history = [
  { who: 'QA Reviewer', what: 'Changed Q3 answer Yes → No', when: '10:42' },
  { who: 'QA Reviewer', what: 'Added comment on Closing & Follow-up', when: '10:39' },
  { who: 'Mystery Shopper', what: 'Submitted checklist with 4 photos', when: 'Yesterday' },
]

export function EmaarReview() {
  return (
    <AppShell
      theme={themes.emaar}
      nav={['Dashboard', 'Schedules', 'Visits', 'Action Plans', 'Reports', 'Project Tracker', 'Users & Roles']}
      active="Visits"
      user="Quality Manager"
      title="Visit VS-24809 · Checklist Review"
      subtitle="Mall Concierge · Level 1 · Phone call · submitted by mystery shopper"
      actions={
        <>
          <Button>Return to shopper</Button>
          <Button primary>Approve visit</Button>
        </>
      }
    >
      <div className="grid grid-cols-12 gap-4 h-full">
        <Panel title="Sections" meta="Weighted score 88%" className="col-span-3">
          <div className="space-y-2">
            {sections.map((section) => (
              <div
                key={section.name}
                className={`rounded-lg px-3 py-2.5 ${section.name === 'Closing & Follow-up' ? 'bg-primary-fixed' : 'bg-surface-container'}`}
              >
                <div className="flex justify-between text-[12px] font-semibold">
                  <span>{section.name}</span>
                  <span className="tabular-nums">{section.score}%</span>
                </div>
                <div className="text-[11px] text-on-surface-variant mt-0.5">
                  {section.done ? 'Reviewed' : 'Needs review'}
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Closing & Follow-up" meta="5 questions · 19 points" className="col-span-6">
          <div className="space-y-2.5">
            {questions.map((item, index) => (
              <div key={item.q} className="bg-surface-container rounded-lg px-3 py-2.5 flex items-center gap-3">
                <span className="w-6 h-6 rounded-[999px] bg-surface-container-highest text-[11px] font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px]">{item.q}</div>
                  <div className="text-[10px] text-outline">Weight {item.weight}</div>
                </div>
                {item.stars ? (
                  <span className={`text-[13px] ${star}`}>{'★'.repeat(item.stars)}☆</span>
                ) : (
                  <Pill tone={item.tone ?? tones.muted}>{item.answer}</Pill>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-dashed border-outline-variant px-3 py-2.5">
            <div className="text-[11px] font-semibold text-secondary mb-1">AI-suggested comment · from attached photos</div>
            <p className="text-[12px] text-on-surface-variant">
              The associate answered the product questions clearly but ended the call without offering a viewing or a
              callback. Recommend a closing script that always proposes a next step.
            </p>
            <div className="flex gap-2 mt-2">
              <Pill tone={tones.info}>Use comment</Pill>
              <Pill tone={tones.muted}>Regenerate</Pill>
            </div>
          </div>
        </Panel>
        <div className="col-span-3 space-y-4">
          <Panel title="Evidence" meta="4 photos">
            <div className="grid grid-cols-2 gap-2">
              {['from-[#e9e1d6] to-[#cdbfa9]', 'from-[#dfe6ec] to-[#a9bccb]', 'from-[#efe8df] to-[#d8c7ae]', 'from-[#e3e3e3] to-[#bdbdbd]'].map(
                (hue) => (
                  <div key={hue} className={`h-16 rounded-lg bg-gradient-to-br ${hue}`} />
                ),
              )}
            </div>
          </Panel>
          <Panel title="Answer history" meta="Audit trail">
            <div className="space-y-2.5">
              {history.map((entry) => (
                <div key={entry.what} className="border-l-2 border-primary-container pl-3">
                  <div className="text-[12px]">{entry.what}</div>
                  <div className="text-[10px] text-outline">
                    {entry.who} · {entry.when}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  )
}
