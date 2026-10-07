import { AppShell, Bar, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const statusBars = [
  { status: 'QUEUED', value: 1240, tone: 'bg-outline' },
  { status: 'SENT', value: 3180, tone: 'bg-primary' },
  { status: 'DELIVERED', value: 8420, tone: 'bg-[#8b8cf8]' },
  { status: 'READ', value: 6115, tone: 'bg-[#25D366]' },
  { status: 'FAILED', value: 214, tone: 'bg-error' },
]

const campaigns = [
  {
    name: 'Ramadan offers · Muscat',
    template: 'seasonal_offer_v2',
    list: 'Retail customers',
    status: 'RUNNING',
    tone: tones.info,
    progress: 64,
  },
  {
    name: 'Service reminder · October',
    template: 'service_reminder',
    list: 'Workshop clients',
    status: 'SCHEDULED',
    tone: tones.warn,
    progress: 0,
  },
  {
    name: 'Order ready pickup',
    template: 'order_ready_ar',
    list: 'Pickup orders',
    status: 'COMPLETED',
    tone: tones.good,
    progress: 100,
  },
]

const max = Math.max(...statusBars.map((bar) => bar.value))

export function WaveSend() {
  return (
    <AppShell
      theme={themes.wavesend}
      nav={['Dashboard', 'Contacts', 'Templates', 'Campaigns']}
      active="Dashboard"
      user="Operator Account"
      title="Dashboard"
      subtitle="WhatsApp Business Cloud API · refreshed every 10s"
      actions={
        <>
          <Button>Sync templates from Meta</Button>
          <Button primary>New campaign</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="Contacts" value="24,618" note="312 opted out" />
        <Kpi label="Approved templates" value="9 / 12" note="3 pending review" tone="text-secondary" />
        <Kpi label="Campaigns" value="18" note="1 running" tone="text-primary" />
        <Kpi label="Sent today" value="4,920" note="20/s throughput" />
      </div>
      <div className="grid grid-cols-12 gap-4 mb-4">
        <Panel title="Messages by status" meta="All campaigns" className="col-span-8">
          <div className="h-[150px] flex items-end gap-6 px-4 border-b border-outline-variant/50">
            {statusBars.map((bar) => (
              <div key={bar.status} className="flex-1 flex flex-col items-center justify-end h-full gap-1">
                <span className="font-mono-code text-[11px] text-on-surface-variant">
                  {bar.value.toLocaleString('en-US')}
                </span>
                <div className={`w-full rounded-t ${bar.tone}`} style={{ height: `${(bar.value / max) * 82}%` }} />
              </div>
            ))}
          </div>
          <div className="flex gap-6 px-4 mt-2">
            {statusBars.map((bar) => (
              <span key={bar.status} className="flex-1 text-center font-mono-code text-[10px] text-outline">
                {bar.status}
              </span>
            ))}
          </div>
        </Panel>
        <div className="col-span-4 grid grid-rows-3 gap-4">
          <Kpi label="Total messages" value="19,169" note="Across 18 campaigns" />
          <Kpi label="Delivery rate" value="94.2%" note="Delivered or read" tone="text-secondary" />
          <Kpi label="Read rate" value="68.7%" note="From webhook status updates" tone="text-primary" />
        </div>
      </div>
      <Panel title="Campaigns" meta="Rate-limited queue · retries with backoff">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="text-left text-outline font-label-caps text-[10px] uppercase">
              <th className="pb-2 font-semibold">Name</th>
              <th className="pb-2 font-semibold">Template</th>
              <th className="pb-2 font-semibold">List</th>
              <th className="pb-2 font-semibold">Status</th>
              <th className="pb-2 font-semibold w-48">Progress</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.name} className="border-t border-outline-variant/30">
                <td className="py-2">{campaign.name}</td>
                <td className="py-2 font-mono-code text-on-surface-variant">{campaign.template}</td>
                <td className="py-2 text-on-surface-variant">{campaign.list}</td>
                <td className="py-2">
                  <Pill tone={campaign.tone}>{campaign.status}</Pill>
                </td>
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <Bar value={campaign.progress} tone="bg-[#25D366]" />
                    </div>
                    <span className="font-mono-code text-[11px] w-9 text-right">{campaign.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </AppShell>
  )
}
