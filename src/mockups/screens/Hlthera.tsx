import { AppShell, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { star, tones } from '../tones'

const days = ['Sun 12', 'Mon 13', 'Tue 14', 'Wed 15', 'Thu 16']
const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00']

const bookings: Record<string, { patient: string; kind: string; tone: string }> = {
  'Sun 12-09:00': { patient: 'Patient #P-2041', kind: 'Video', tone: 'bg-primary-fixed text-primary' },
  'Sun 12-11:00': { patient: 'Patient #P-1987', kind: 'In clinic', tone: 'bg-secondary/20 text-secondary' },
  'Mon 13-10:00': { patient: 'Patient #P-2066', kind: 'Video', tone: 'bg-primary-fixed text-primary' },
  'Mon 13-13:00': { patient: 'Patient #P-1920', kind: 'Follow-up', tone: 'bg-tertiary/20 text-tertiary' },
  'Tue 14-09:00': { patient: 'Patient #P-2071', kind: 'In clinic', tone: 'bg-secondary/20 text-secondary' },
  'Tue 14-12:00': { patient: 'Patient #P-2003', kind: 'Video', tone: 'bg-primary-fixed text-primary' },
  'Wed 15-11:00': { patient: 'Patient #P-1874', kind: 'Video', tone: 'bg-primary-fixed text-primary' },
  'Wed 15-14:00': { patient: 'Patient #P-2090', kind: 'In clinic', tone: 'bg-secondary/20 text-secondary' },
  'Thu 16-10:00': { patient: 'Patient #P-2012', kind: 'Follow-up', tone: 'bg-tertiary/20 text-tertiary' },
}

const posts = [
  {
    author: 'Dr. Sara M.',
    role: 'Cardiologist',
    text: 'Five everyday habits that support long-term heart health. #prevention',
    meta: '128 reactions · 24 comments',
  },
  {
    author: 'Dr. Omar K.',
    role: 'Physiotherapist',
    text: 'Poll: how many minutes do you stretch after a workout?',
    meta: 'Poll · 342 votes',
  },
]

export function Hlthera() {
  return (
    <AppShell
      theme={themes.hlthera}
      nav={['Dashboard', 'Bookings', 'Availability', 'Patients', 'Messages', 'Feed', 'Profile', 'Ratings']}
      active="Bookings"
      user="Dr. Sara M."
      title="Bookings & Availability"
      subtitle="Week view · video and in-clinic consultations"
      actions={
        <>
          <Button>Set availability</Button>
          <Button primary>Start video session</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="Today's bookings" value="6" note="3 video · 3 in clinic" />
        <Kpi label="Next session" value="11:00" note="Video · in 25 min" tone="text-primary" />
        <Kpi label="Avg. rating" value="4.8 ★" note="From 212 reviews" tone={star} />
        <Kpi label="Unread messages" value="9" note="2 from new patients" tone="text-secondary" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Panel title="This week" meta="Asia/Dubai" className="col-span-8">
          <div className="grid grid-cols-[56px_repeat(5,1fr)] gap-1.5 text-[11px]">
            <span />
            {days.map((day) => (
              <span key={day} className="text-center font-label-caps text-[10px] uppercase text-outline pb-1">
                {day}
              </span>
            ))}
            {hours.map((hour) => (
              <div key={hour} className="contents">
                <span className="font-mono-code text-outline pt-2">{hour}</span>
                {days.map((day) => {
                  const booking = bookings[`${day}-${hour}`]
                  return (
                    <div
                      key={day}
                      className={`h-[52px] rounded-lg px-2 py-1.5 ${booking ? booking.tone : 'bg-surface-container'}`}
                    >
                      {booking && (
                        <>
                          <div className="font-semibold text-[11px]">{booking.patient}</div>
                          <div className="text-[10px] opacity-80">{booking.kind}</div>
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </Panel>
        <div className="col-span-4 space-y-4">
          <Panel title="Upcoming" meta="Today">
            <div className="space-y-2">
              {[
                ['11:00', 'Video consultation', tones.info],
                ['13:30', 'In-clinic visit', tones.good],
                ['15:00', 'Follow-up call', tones.muted],
              ].map(([time, label, tone]) => (
                <div key={time} className="flex items-center justify-between bg-surface-container rounded-lg px-3 py-2">
                  <span className="font-mono-code text-[12px]">{time}</span>
                  <span className="text-[12px] flex-1 px-3">{label}</span>
                  <Pill tone={tone}>Confirmed</Pill>
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="Community feed">
            <div className="space-y-2">
              {posts.map((post) => (
                <div key={post.author} className="bg-surface-container rounded-lg px-3 py-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 rounded-[999px] bg-surface-container-highest" aria-hidden="true" />
                    <span className="text-[12px] font-semibold">{post.author}</span>
                    <span className="text-[10px] text-outline">{post.role}</span>
                  </div>
                  <p className="text-[12px] text-on-surface-variant">{post.text}</p>
                  <div className="text-[10px] text-outline mt-1">{post.meta}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  )
}
