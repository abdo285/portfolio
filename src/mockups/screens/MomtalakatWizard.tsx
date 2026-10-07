import { AppShell, Button, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const nav = ['لوحة التحكم', 'العقارات', 'المزادات', 'العروض', 'طلبات المعاينة', 'المعاملات', 'تقييم الأراضي', 'التقارير']
const steps = ['المعلومات الأساسية', 'الموقع على الخريطة', 'الصور والمستندات', 'بيانات المالك', 'المراجعة والنشر']

const ocrFields = [
  ['الاسم', 'سالم بن خالد ****'],
  ['الرقم المدني', '1029 **** ***'],
  ['تاريخ الانتهاء', '2029/04/18'],
  ['الجنسية', 'عُماني'],
]

export function MomtalakatWizard() {
  return (
    <AppShell
      dir="rtl"
      theme={themes.momtalakat}
      nav={nav}
      active="العقارات"
      user="Agency Manager"
      title="إضافة عقار جديد"
      subtitle="Add listing wizard · step 2 of 5"
      actions={
        <>
          <Button>حفظ كمسودة</Button>
          <Button primary>التالي</Button>
        </>
      }
    >
      <div className="flex items-center gap-2 mb-4">
        {steps.map((step, index) => (
          <div key={step} className="flex-1 flex items-center gap-2">
            <span
              className={`w-7 h-7 rounded-[999px] flex items-center justify-center text-[12px] font-bold shrink-0 ${
                index < 1 ? 'bg-secondary text-on-primary' : index === 1 ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'
              }`}
            >
              {index < 1 ? '✓' : index + 1}
            </span>
            <span className={`text-[12px] ${index === 1 ? 'font-bold' : 'text-on-surface-variant'}`}>{step}</span>
            {index < steps.length - 1 && <span className="flex-1 h-px bg-outline-variant" />}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-4">
        <Panel title="حدد موقع العقار" meta="Google Maps" className="col-span-8">
          <div className="relative h-[330px] rounded-lg overflow-hidden bg-[#e8efe9]">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  'linear-gradient(#d4ddd5 1px, transparent 1px), linear-gradient(90deg, #d4ddd5 1px, transparent 1px)',
                backgroundSize: '44px 44px',
              }}
            />
            <div className="absolute top-0 bottom-0 left-[38%] w-5 bg-white/90" />
            <div className="absolute left-0 right-0 top-[58%] h-4 bg-white/90" />
            <div className="absolute right-[12%] top-[14%] w-40 h-24 rounded-xl bg-[#cfe3d3]" />
            <div className="absolute left-[8%] bottom-[10%] w-56 h-20 rounded-xl bg-[#d7e6ef]" />
            <div className="absolute left-[44%] top-[34%] flex flex-col items-center">
              <span className="w-8 h-8 rounded-[999px] bg-primary border-4 border-white shadow-lg" />
              <span className="mt-1 px-2 py-0.5 rounded bg-white text-[11px] font-semibold shadow">بوشر · مسقط</span>
            </div>
            <div className="absolute bottom-3 right-3 bg-white rounded-lg shadow px-3 py-2 text-[11px]" dir="ltr">
              23.5859° N, 58.4059° E
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3 text-[12px]">
            {[
              ['المحافظة', 'مسقط'],
              ['الولاية', 'بوشر'],
              ['رقم القطعة', '***-412'],
            ].map(([label, value]) => (
              <div key={label} className="bg-surface-container rounded-lg px-3 py-2">
                <div className="text-[10px] text-outline">{label}</div>
                <div className="font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </Panel>
        <div className="col-span-4 space-y-4">
          <Panel title="التحقق من البطاقة الشخصية" meta="OCR">
            <div className="h-24 rounded-lg bg-gradient-to-l from-[#e9e1d0] to-[#d3c19e] mb-3 p-3 flex gap-3">
              <span className="w-14 h-full rounded bg-white/60" />
              <div className="flex-1 space-y-1.5 pt-1">
                <span className="block h-2 w-3/4 rounded bg-white/70" />
                <span className="block h-2 w-1/2 rounded bg-white/70" />
                <span className="block h-2 w-2/3 rounded bg-white/70" />
              </div>
            </div>
            <div className="space-y-1.5">
              {ocrFields.map(([label, value]) => (
                <div key={label} className="flex justify-between text-[12px]">
                  <span className="text-on-surface-variant">{label}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <Pill tone={tones.good}>تم استخراج البيانات تلقائياً</Pill>
            </div>
          </Panel>
          <Panel title="الصور" meta="6 / 12">
            <div className="grid grid-cols-3 gap-2">
              {['from-[#cfe0de] to-[#7fa3a5]', 'from-[#efe4cf] to-[#c4a774]', 'from-[#d9e4ec] to-[#8ea7bb]'].map((hue) => (
                <div key={hue} className={`h-14 rounded-lg bg-gradient-to-b ${hue}`} />
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  )
}
