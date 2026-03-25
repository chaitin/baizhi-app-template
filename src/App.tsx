import { Navigate, Route, Routes } from "react-router-dom"

import Console from "@/console"
import { defaultConsolePage } from "@/lib/console-pages"
import AccessGuidePage from "@/pages/access-guide-page"
import ApiKeysPage from "@/pages/api-keys-page"
import KnowledgeBasePage from "@/pages/knowledge-base-page"
import KnowledgeBase1Page from "@/pages/knowledge-base-1-page"
import KnowledgeBase2Page from "@/pages/knowledge-base-2-page"
import KnowledgeBase3Page from "@/pages/knowledge-base-3-page"
import UsageMonitoringPage from "@/pages/usage-monitoring-page"

export function App() {
  return (
    <Routes>
      <Route element={<Console />} path="/">
        <Route element={<Navigate replace to={defaultConsolePage} />} index />
        <Route element={<AccessGuidePage />} path="access-guide" />
        <Route element={<KnowledgeBasePage />} path="knowledge-base" />
        <Route element={<KnowledgeBase1Page />} path="knowledge-base/1" />
        <Route element={<KnowledgeBase2Page />} path="knowledge-base/2" />
        <Route element={<KnowledgeBase3Page />} path="knowledge-base/3" />
        <Route element={<ApiKeysPage />} path="api-keys" />
        <Route element={<UsageMonitoringPage />} path="usage-monitoring" />
      </Route>
      <Route element={<Navigate replace to={defaultConsolePage} />} path="*" />
    </Routes>
  )
}

export default App
