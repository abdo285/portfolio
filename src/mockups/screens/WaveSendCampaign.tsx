import { AppShell, Bar, Button, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const funnel = [
  { label: 'Queued', value: 9800, tone: 'bg-outline' },
  { label: 'Sent', value: 9612, tone: 'bg-primary' },
  { label: 'Delivered', value: 9240, tone: 'bg-[#8b8cf8]' },
  { label: 'Read', value: 6731, tone: 'bg-[#25D366]' },
  { label: 'Failed', value: 188, tone: 'bg-error' },
]

const log = [
  { time: '14:08:21', to: '+968 9123 ****', status: 'READ', tone: tones.good, note: 'webhook · signature verified' },
  { time: '14:08:20', to: '+968 9234 ****', status: 'DELIVERED', tone: tones.info, note: 'webhook · signature verified' },
  { time: '14:08:19', to: '+968 9555 ****', status: 'FAILED', tone: tones.bad, note: 'retry 2 of 3 · backoff 8s' },
  { time: '14:08:19', to: '+968 9876 ****', status: 'SENT', tone: tones.muted, note: 'Cloud API accepted' },
  { time: '14:08:18', to: '+968 9311 ****', status: 'QUEUED', tone: tones.warn, note: 'rate limit 20 msg/s' },
]

export function WaveSendCampaign() {
  return (
    <AppShell
      theme={themes.wavesend}
      nav={['Dashboard', 'Contacts', 'Templates', 'Campaigns']}
      active="Campaigns"
      user="Operator Account"
      title="Ramadan offers · Muscat"
      subtitle="Template seasonal_offer_v2 · 9,800 recipients · running"
      actions={
        <>
          <Button>Pause campaign</Button>
          <Button primary>Duplicate</Button>
        </>
      }
    >
      <div className="grid grid-cols-12 gap-4">
        <Panel title="Delivery funnel" meta="Live" className="col-span-8">
          <div className="space-y-3">
            {funnel.map((step) => (
              <div key={step.label} className="flex items-center gap-3 text-[12px]">
                <span className="w-20 text-on-surface-variant">{step.label}</span>
                <div className="flex-1 h-5 rounded bg-surface-container overflow-hidden">
                  <div className={`h-full rounded ${step.tone}`} style={{ width: `${(step.value / 9800) * 100}%` }} />
                </div>
                <span className="w-14 text-right tabular-nums font-semibold">{step.value.toLocaleString('en-US')}</span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-[12px] mb-1">
              <span className="font-semibold">Overall progress</span>
              <span className="tabular-nums">98%</span>
            </div>
            <Bar value={98} tone="bg-[#25D366]" />
          </div>
        </Panel>
        <Panel title="Template preview" meta="Approved by Meta" className="col-span-4">
          <div className="rounded-lg bg-[#e5ddd5] p-3">
            <div className="bg-white rounded-lg rounded-tl-none shadow-sm p-3 text-[12px] max-w-[95%]">
              <div className="font-bold mb-1">Ramadan Kareem, Customer 1042 🌙</div>
              <p className="text-[#374151]">
                Enjoy up to 30% off selected items at our Muscat stores this week. Show this message at checkout.
              </p>
              <div className="text-[10px] text-[#6b7280] mt-2">Reply STOP to unsubscribe · إلغاء</div>
              <div className="text-right text-[10px] text-[#6b7280]">14:08 ✓✓</div>
            </div>
          </div>
        </Panel>
        <Panel title="Message log" meta="BullMQ worker · status webhooks" className="col-span-12">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="text-left text-outline text-[10px] uppercase">
                <th className="pb-2 font-semibold">Time</th>
                <th className="pb-2 font-semibold">Recipient</th>
                <th className="pb-2 font-semibold">Status</th>
                <th className="pb-2 font-semibold">Detail</th>
              </tr>
            </thead>
            <tbody>
              {log.map((entry) => (
                <tr key={entry.to} className="border-t border-outline-variant/60">
                  <td className="py-2 tabular-nums text-on-surface-variant">{entry.time}</td>
                  <td className="py-2 tabular-nums">{entry.to}</td>
                  <td className="py-2">
                    <Pill tone={entry.tone}>{entry.status}</Pill>
                  </td>
                  <td className="py-2 text-on-surface-variant">{entry.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
    </AppShell>
  )
}
