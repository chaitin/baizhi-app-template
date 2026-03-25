import {
  BookOpenTextIcon,
  BookTextIcon,
  ChartNoAxesColumnIncreasingIcon,
  KeyRoundIcon,
} from "lucide-react"

export const consolePages = [
  {
    path: "/access-guide",
    title: "接入指南",
    icon: <BookOpenTextIcon />,
  },
  {
    path: "/knowledge-base",
    title: "知识库",
    icon: <BookTextIcon />,
  },
  {
    path: "/api-keys",
    title: "密钥管理",
    icon: <KeyRoundIcon />,
  },
  {
    path: "/usage-monitoring",
    title: "用量监控",
    icon: <ChartNoAxesColumnIncreasingIcon />,
  },
] as const

export const defaultConsolePage = consolePages[0].path

export function getConsolePage(pathname: string) {
  return consolePages.find((page) => page.path === pathname) ?? consolePages[0]
}
