import { StrictMode, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import './mockups.css'
import { EmaarChecklist } from './screens/EmaarChecklist'
import { EmaarReview } from './screens/EmaarReview'
import { EmaarTracker } from './screens/EmaarTracker'
import { FixedAssets } from './screens/FixedAssets'
import { FixedAssetsApproval } from './screens/FixedAssetsApproval'
import { FixedAssetsInventory } from './screens/FixedAssetsInventory'
import { Hlthera } from './screens/Hlthera'
import { HltheraDashboard } from './screens/HltheraDashboard'
import { HltheraOnboarding } from './screens/HltheraOnboarding'
import { MofProcurement } from './screens/MofProcurement'
import { MofRequest } from './screens/MofRequest'
import { MofStores } from './screens/MofStores'
import { Momtalakat } from './screens/Momtalakat'
import { MomtalakatViewings } from './screens/MomtalakatViewings'
import { MomtalakatWizard } from './screens/MomtalakatWizard'
import { WaveSend } from './screens/WaveSend'
import { WaveSendCampaign } from './screens/WaveSendCampaign'
import { WaveSendImport } from './screens/WaveSendImport'

// Keys are the project slugs; scripts/capture-covers.mjs writes <slug>-<n>.webp for screen n.
const screens: Record<string, ComponentType[]> = {
  'emaar-msm-checklist': [EmaarChecklist, EmaarReview, EmaarTracker],
  momtalakat: [Momtalakat, MomtalakatWizard, MomtalakatViewings],
  'smartech-fixed-assets': [FixedAssets, FixedAssetsApproval, FixedAssetsInventory],
  hlthera: [Hlthera, HltheraDashboard, HltheraOnboarding],
  wavesend: [WaveSend, WaveSendImport, WaveSendCampaign],
  'moh-medical-stores': [MofProcurement, MofStores, MofRequest],
}

const params = new URLSearchParams(location.search)
const slug = params.get('p')
const Screen = slug ? screens[slug]?.[Number(params.get('s') ?? 1) - 1] : undefined

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {Screen ? (
      <div id="cover">
        <Screen />
      </div>
    ) : (
      <ul className="p-8 space-y-2">
        {Object.entries(screens).flatMap(([key, list]) =>
          list.map((_, index) => (
            <li key={`${key}-${index}`}>
              <a className="text-primary underline" href={`?p=${key}&s=${index + 1}`}>
                {key} · screen {index + 1}
              </a>
            </li>
          )),
        )}
      </ul>
    )}
  </StrictMode>,
)
