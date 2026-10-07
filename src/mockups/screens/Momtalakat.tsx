import { AppShell, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const listings = [
  {
    title: 'فيلا 5 غرف · بوشر',
    sub: 'Villa · Bawshar, Muscat',
    price: '185,000',
    area: '620 m²',
    tag: 'للبيع',
    hue: 'from-[#cfe0de] to-[#7fa3a5]',
  },
  {
    title: 'شقة مطلة على البحر · القرم',
    sub: 'Apartment · Al Qurm',
    price: '78,500',
    area: '165 m²',
    tag: 'للبيع',
    hue: 'from-[#d9e4ec] to-[#8ea7bb]',
  },
  {
    title: 'أرض سكنية · السيب',
    sub: 'Residential land · Seeb',
    price: '42,000',
    area: '600 m²',
    tag: 'مزاد',
    hue: 'from-[#efe4cf] to-[#c4a774]',
  },
]

const bids = [
  { who: 'مزايد #A-214', amount: '46,750', time: 'قبل دقيقة' },
  { who: 'مزايد #A-187', amount: '46,500', time: 'قبل 3 دقائق' },
  { who: 'مزايد #A-214', amount: '45,900', time: 'قبل 7 دقائق' },
  { who: 'مزايد #A-102', amount: '45,000', time: 'قبل 12 دقيقة' },
]

const offers = [
  { ref: 'OF-3381', listing: 'فيلا · بوشر', status: 'قيد التفاوض', tone: tones.info },
  { ref: 'OF-3374', listing: 'شقة · القرم', status: 'مقبول', tone: tones.good },
  { ref: 'VR-1209', listing: 'طلب معاينة · السيب', status: 'مجدول', tone: tones.warn },
]

export function Momtalakat() {
  return (
    <AppShell
      dir="rtl"
      theme={themes.momtalakat}
      nav={[
        'لوحة التحكم',
        'العقارات',
        'المزادات',
        'العروض',
        'طلبات المعاينة',
        'المعاملات',
        'تقييم الأراضي',
        'التقارير',
      ]}
      active="لوحة التحكم"
      user="Agency Manager"
      title="لوحة تحكم الوكالة"
      subtitle="Agency dashboard · Muscat region"
      actions={
        <>
          <Button>تصدير</Button>
          <Button primary>إضافة عقار</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="العقارات النشطة" value="1,284" note="+46 هذا الشهر" />
        <Kpi label="المزادات المباشرة" value="7" note="3 تنتهي اليوم" tone="text-secondary" />
        <Kpi label="عروض الشراء" value="93" note="21 بانتظار الرد" tone="text-primary" />
        <Kpi label="المعاملات المكتملة" value="58" note="العمولات موزعة تلقائياً" tone="text-secondary" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 grid grid-cols-3 gap-4">
          {listings.map((listing) => (
            <article key={listing.sub} className="bg-surface-container-low rounded-xl overflow-hidden">
              <div className={`h-36 bg-gradient-to-b ${listing.hue} relative`}>
                <div className="absolute inset-x-6 bottom-0 h-20 flex items-end gap-1.5 opacity-70" aria-hidden="true">
                  <div className="flex-1 h-12 bg-white/70 rounded-t" />
                  <div className="flex-1 h-20 bg-white/90 rounded-t" />
                  <div className="flex-1 h-16 bg-white/70 rounded-t" />
                </div>
                <span className="absolute top-3 right-3">
                  <Pill tone={listing.tag === 'مزاد' ? tones.warn : tones.good}>{listing.tag}</Pill>
                </span>
              </div>
              <div className="p-3.5">
                <div className="text-[13px] font-semibold">{listing.title}</div>
                <div className="text-[11px] text-outline" dir="ltr">
                  {listing.sub}
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-mono-code text-[13px] text-secondary">{listing.price} ر.ع</span>
                  <span className="text-[11px] text-on-surface-variant">{listing.area}</span>
                </div>
              </div>
            </article>
          ))}
          <Panel title="العروض وطلبات المعاينة" className="col-span-3">
            <div className="space-y-2">
              {offers.map((offer) => (
                <div
                  key={offer.ref}
                  className="flex items-center justify-between bg-surface-container rounded-lg px-3 py-2"
                >
                  <span className="font-mono-code text-[11px] text-outline">{offer.ref}</span>
                  <span className="text-[12px] flex-1 px-4">{offer.listing}</span>
                  <Pill tone={offer.tone}>{offer.status}</Pill>
                </div>
              ))}
            </div>
          </Panel>
        </div>
        <Panel title="مزاد مباشر · أرض سكنية السيب" meta="LIVE" className="col-span-4">
          <div className="bg-surface-container rounded-lg p-3 mb-3 text-center">
            <div className="text-[11px] text-outline">أعلى مزايدة</div>
            <div className="font-mono-metric text-[26px] text-secondary font-semibold">46,750 ر.ع</div>
            <div className="text-[11px] text-on-surface-variant">ينتهي خلال 02:14:36</div>
          </div>
          <div className="space-y-2">
            {bids.map((bid) => (
              <div
                key={bid.amount}
                className="flex justify-between text-[12px] bg-surface-container rounded-lg px-3 py-2"
              >
                <span>{bid.who}</span>
                <span className="font-mono-code">{bid.amount}</span>
                <span className="text-[11px] text-outline">{bid.time}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <span className="flex-1 text-center px-3 py-2 rounded-lg bg-primary text-on-primary text-[12px] font-semibold">
              قدّم مزايدة
            </span>
            <span className="px-3 py-2 rounded-lg bg-surface-container-high text-[12px]">التفاصيل</span>
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}
