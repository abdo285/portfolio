import { AppShell, Button, Kpi, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const nav = ['لوحة التحكم', 'العقارات', 'المزادات', 'العروض', 'طلبات المعاينة', 'المعاملات', 'تقييم الأراضي', 'التقارير']
const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس']
const slots = ['10:00', '12:00', '16:00', '18:00']
const booked: Record<string, string> = {
  'الأحد-10:00': 'فيلا · بوشر',
  'الاثنين-16:00': 'شقة · القرم',
  'الثلاثاء-12:00': 'أرض · السيب',
  'الأربعاء-18:00': 'فيلا · بوشر',
  'الخميس-10:00': 'شقة · الخوير',
}

const requests = [
  { ref: 'VR-1214', who: 'عميل #C-882', listing: 'فيلا 5 غرف · بوشر', status: 'بانتظار التأكيد', tone: tones.warn },
  { ref: 'VR-1211', who: 'عميل #C-861', listing: 'شقة مطلة على البحر', status: 'مؤكد', tone: tones.good },
  { ref: 'VR-1209', who: 'عميل #C-850', listing: 'أرض سكنية · السيب', status: 'مجدول', tone: tones.info },
]

const cycle = ['عرض الشراء', 'قبول البائع', 'اتفاقية الخدمة', 'الدفعة المقدمة', 'نقل الملكية']

export function MomtalakatViewings() {
  return (
    <AppShell
      dir="rtl"
      theme={themes.momtalakat}
      nav={nav}
      active="طلبات المعاينة"
      user="Agency Manager"
      title="طلبات المعاينة والمواعيد"
      subtitle="Viewing requests & availability · purchase cycle"
      actions={
        <>
          <Button>إعداد أوقات التوفر</Button>
          <Button primary>جدولة معاينة</Button>
        </>
      }
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <Kpi label="طلبات جديدة" value="14" note="هذا الأسبوع" tone="text-primary" />
        <Kpi label="معاينات مؤكدة" value="9" note="5 خلال 48 ساعة" />
        <Kpi label="تحويل إلى عرض" value="31%" note="آخر 30 يوماً" tone="text-secondary" />
        <Kpi label="صفقات قيد التنفيذ" value="6" note="دورة الشراء" />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Panel title="أوقات التوفر" meta="الأسبوع الحالي" className="col-span-7">
          <div className="grid grid-cols-[56px_repeat(5,1fr)] gap-1.5 text-[11px]">
            <span />
            {days.map((day) => (
              <span key={day} className="text-center font-semibold text-outline pb-1">
                {day}
              </span>
            ))}
            {slots.map((slot) => (
              <div key={slot} className="contents">
                <span className="text-outline pt-2 tabular-nums">{slot}</span>
                {days.map((day) => {
                  const item = booked[`${day}-${slot}`]
                  return (
                    <div
                      key={day}
                      className={`h-[46px] rounded-lg px-2 py-1.5 ${item ? 'bg-primary text-on-primary' : 'bg-surface-container'}`}
                    >
                      {item && <span className="text-[11px] font-semibold">{item}</span>}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="الطلبات الأخيرة" className="col-span-5">
          <div className="space-y-2">
            {requests.map((request) => (
              <div key={request.ref} className="bg-surface-container rounded-lg px-3 py-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-semibold">{request.listing}</span>
                  <Pill tone={request.tone}>{request.status}</Pill>
                </div>
                <div className="text-[11px] text-outline mt-0.5">
                  {request.ref} · {request.who}
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="دورة الشراء · فيلا بوشر" meta="OF-3381" className="col-span-12">
          <div className="flex items-center gap-2">
            {cycle.map((step, index) => (
              <div key={step} className="flex-1 flex items-center gap-2">
                <span
                  className={`w-7 h-7 rounded-[999px] flex items-center justify-center text-[11px] font-bold ${
                    index < 2 ? 'bg-secondary text-on-primary' : index === 2 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'
                  }`}
                >
                  {index < 2 ? '✓' : index + 1}
                </span>
                <span className={`text-[12px] ${index === 2 ? 'font-bold' : 'text-on-surface-variant'}`}>{step}</span>
                {index < cycle.length - 1 && <span className="flex-1 h-px bg-outline-variant" />}
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  )
}
