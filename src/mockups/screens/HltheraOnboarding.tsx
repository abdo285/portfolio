import { AppShell, Button, Panel, Pill } from '../AppShell'
import { themes } from '../themes'
import { tones } from '../tones'

const nav = ['Dashboard', 'Healers', 'Health Centers', 'Verification', 'Roles & Permissions', 'Reports', 'Settings']

const steps = [
  { name: 'Account', state: 'Done' },
  { name: 'Professional profile', state: 'Done' },
  { name: 'Licences & documents', state: 'Done' },
  { name: 'Identity verification', state: 'In progress' },
  { name: 'Availability & services', state: 'Pending' },
]

const applicants = [
  { name: 'Dr. Omar K.', type: 'Physiotherapist', status: 'ID check passed', tone: tones.good },
  { name: 'Al Noor Health Center', type: 'Health center', status: 'Documents review', tone: tones.info },
  { name: 'Dr. Lina A.', type: 'Nutritionist', status: 'ID check pending', tone: tones.warn },
  { name: 'Dr. Yousef R.', type: 'Dermatologist', status: 'Resubmit licence', tone: tones.bad },
]

const roles = ['Admin', 'Center manager', 'Healer', 'Support']
const permissions = [
  ['View bookings', [true, true, true, true]],
  ['Manage availability', [true, true, true, false]],
  ['Approve healers', [true, true, false, false]],
  ['View reports', [true, true, false, true]],
  ['Manage roles', [true, false, false, false]],
] as const

export function HltheraOnboarding() {
  return (
    <AppShell
      theme={themes.hlthera}
      nav={nav}
      active="Verification"
      user="Platform Admin"
      title="Healer & Health Center Onboarding"
      subtitle="Applications, identity verification and role permissions"
      actions={
        <>
          <Button>Export</Button>
          <Button primary>Invite healer</Button>
        </>
      }
    >
      <div className="grid grid-cols-12 gap-4">
        <Panel title="Application · Dr. Lina A." meta="Nutritionist" className="col-span-5">
          <ol className="space-y-2.5">
            {steps.map((step, index) => (
              <li key={step.name} className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-[999px] flex items-center justify-center text-[11px] font-bold ${
                    step.state === 'Done'
                      ? 'bg-secondary text-on-primary'
                      : step.state === 'In progress'
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container-highest text-on-surface-variant'
                  }`}
                >
                  {step.state === 'Done' ? '✓' : index + 1}
                </span>
                <span className="flex-1 text-[12px] font-semibold">{step.name}</span>
                <span className="text-[11px] text-on-surface-variant">{step.state}</span>
              </li>
            ))}
          </ol>
          <div className="mt-4 rounded-lg bg-primary-fixed px-3 py-2.5">
            <div className="text-[12px] font-semibold text-primary">Identity check sent to verification provider</div>
            <div className="text-[11px] text-on-surface-variant mt-0.5">Document + selfie · result arrives by webhook</div>
          </div>
        </Panel>
        <Panel title="Applicants" meta="Awaiting action" className="col-span-7">
          <div className="space-y-2">
            {applicants.map((applicant) => (
              <div key={applicant.name} className="flex items-center gap-3 bg-surface-container rounded-lg px-3 py-2.5">
                <span className="w-8 h-8 rounded-[999px] bg-primary-fixed" aria-hidden="true" />
                <div className="flex-1">
                  <div className="text-[12px] font-semibold">{applicant.name}</div>
                  <div className="text-[11px] text-on-surface-variant">{applicant.type}</div>
                </div>
                <Pill tone={applicant.tone}>{applicant.status}</Pill>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Roles & permissions" meta="Health center scope" className="col-span-12">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="text-outline text-[10px] uppercase">
                <th className="pb-2 font-semibold text-left">Permission</th>
                {roles.map((role) => (
                  <th key={role} className="pb-2 font-semibold">
                    {role}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {permissions.map(([name, grants]) => (
                <tr key={name} className="border-t border-outline-variant/60">
                  <td className="py-2">{name}</td>
                  {grants.map((granted, index) => (
                    <td key={roles[index]} className="py-2 text-center">
                      <span
                        className={`inline-block w-4 h-4 rounded ${granted ? 'bg-primary-container' : 'border border-outline-variant'}`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
    </AppShell>
  )
}
