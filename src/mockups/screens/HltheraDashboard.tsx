import { AppShell, Bar, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { star, tones } from '../tones'

const nav = ['Dashboard', 'Bookings', 'Availability', 'Patients', 'Messages', 'Feed', 'Profile', 'Ratings']

const sessions = [
  { time: '11:00', patient: 'Patient #P-1874', kind: 'Video consultation', status: 'Starts in 25 min', tone: tones.info },
  { time: '13:30', patient: 'Patient #P-2090', kind: 'In-clinic visit', status: 'Confirmed', tone: tones.good },
  { time: '15:00', patient: 'Patient #P-1920', kind: 'Follow-up call', status: 'Confirmed', tone: tones.good },
  { time: '17:15', patient: 'Patient #P-2112', kind: 'Video consultation', status: 'Awaiting confirmation', tone: tones.warn },
]

const ratings = [
  { stars: 5, share: 82 },
  { stars: 4, share: 13 },
  { stars: 3, share: 3 },
  { stars: 2, share: 1 },
  { stars: 1, share: 1 },
]

const weekly = [6, 9, 7, 11, 8, 4, 10]

export function HltheraDashboard() {
  return (
    <AppShell
      theme={themes.hlthera}
      nav={nav}
      active="Dashboard"
      user="Dr. Sara M."
      title="Healer Dashboard"
      subtitle="Sessions, ratings and patient activity"
      actions={
        <>
          <Button>Share profile</Button>
          <Button primary>Open availability</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="Sessions this month" value="74" note="+12 vs last month" tone="text-primary" />
        <Kpi label="Video share" value="61%" note="Zoom Video SDK" />
        <Kpi label="Average rating" value="4.8 ★" note="212 reviews" tone={star} />
        <Kpi label="Profile followers" value="1,930" note="Community feed" tone="text-secondary" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Panel title="Today's sessions" meta="4 booked" className="col-span-7">
          <div className="space-y-2">
            {sessions.map((session) => (
              <div key={session.time} className="flex items-center gap-4 bg-surface-container rounded-lg px-3 py-2.5">
                <span className="text-[13px] font-bold tabular-nums w-12">{session.time}</span>
                <div className="flex-1">
                  <div className="text-[12px] font-semibold">{session.patient}</div>
                  <div className="text-[11px] text-on-surface-variant">{session.kind}</div>
                </div>
                <Pill tone={session.tone}>{session.status}</Pill>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="text-[12px] font-semibold mb-2">Sessions per day · last 7 days</div>
            <div className="flex items-end gap-3 h-20">
              {weekly.map((value, index) => (
                <div key={index} className="flex-1 rounded-t bg-primary-container" style={{ height: `${(value / 11) * 100}%` }} />
              ))}
            </div>
          </div>
        </Panel>
        <div className="col-span-5 space-y-4">
          <Panel title="Ratings" meta="212 reviews">
            <div className="space-y-2">
              {ratings.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-3 text-[12px]">
                  <span className={`w-14 ${star}`}>{'★'.repeat(rating.stars)}</span>
                  <div className="flex-1">
                    <Bar value={rating.share} tone="bg-primary-container" />
                  </div>
                  <span className="w-9 text-right tabular-nums text-on-surface-variant">{rating.share}%</span>
                </div>
              ))}
            </div>
          </Panel>
          <Panel title="Latest review">
            <p className="text-[12px] text-on-surface-variant">
              “Clear explanations and a very easy video session. Booking a follow-up took less than a minute.”
            </p>
            <div className="text-[11px] text-outline mt-2">Patient #P-2003 · Video consultation</div>
          </Panel>
        </div>
      </div>
    </AppShell>
  )
}
