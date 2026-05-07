import * as React from "react"
import {
  AppWindowIcon,
  ArrowLeftIcon,
  ChevronsUpDownIcon,
  ClipboardListIcon,
  FileTextIcon,
  GlobeIcon,
  LogOutIcon,
  UserIcon,
  UsersRoundIcon,
  WalletIcon,
} from "lucide-react"

import { NavConsolePages } from "@/components/nav-console-pages"
import { consolePages } from "@/lib/console-pages"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const CURRENT_PRODUCT = { name: "DolphinMem", subtitle: "百智云服务" }

const CONSOLE_BASE = import.meta.env.DEV
  ? `http://${location.hostname}:4321/console`
  : "/console"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="cursor-default hover:bg-transparent active:bg-transparent">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground shrink-0">
                <AppWindowIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight min-w-0">
                <span className="truncate font-medium">{CURRENT_PRODUCT.name}</span>
                <span className="truncate text-xs text-sidebar-foreground/70">{CURRENT_PRODUCT.subtitle}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavConsolePages
          pages={consolePages.map((page) => ({
            name: page.title,
            url: page.path,
            icon: page.icon,
            children: page.children?.map((child) => ({
              name: child.title,
              url: child.path,
            })),
          }))}
        />
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  size="sm"
                  render={<a href={CONSOLE_BASE} />}
                >
                  <ArrowLeftIcon />
                  <span>返回控制台</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <HoverCard>
                  <HoverCardTrigger
                    render={
                      <SidebarMenuButton
                        aria-label="技术交流群"
                        className="cursor-default"
                        size="sm"
                        tooltip="技术交流群"
                        type="button"
                      />
                    }
                  >
                    <UsersRoundIcon />
                    <span>技术交流群</span>
                  </HoverCardTrigger>
                  <HoverCardContent
                    align="start"
                    className="w-52"
                    side="top"
                    sideOffset={10}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="overflow-hidden rounded-xl border bg-background shadow-xs">
                        <img
                          alt="技术交流群二维码"
                          className="size-full object-cover"
                          src="/tech-community-qr.png"
                        />
                      </div>
                      <div className="text-center text-sm text-muted-foreground">
                        扫码加入技术交流群
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  size="sm"
                  render={
                    <a
                      href="https://bbs.baizhi.cloud/"
                      rel="noreferrer noopener"
                      target="_blank"
                    />
                  }
                >
                  <GlobeIcon />
                  <span>百智云论坛</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger render={<SidebarMenuButton size="lg" />}>
                    <Avatar className="size-8 shrink-0">
                      <AvatarImage src="/avatars/user.jpg" />
                      <AvatarFallback className="text-xs font-medium text-white" style={{ backgroundColor: "#5c63f2" }}>
                        用
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left leading-tight min-w-0">
                      <span className="truncate text-sm font-medium">用户</span>
                      <span className="truncate text-[11px] text-sidebar-foreground/55 tabular-nums">1,858.6 积分</span>
                    </div>
                    <ChevronsUpDownIcon className="size-3.5 opacity-40" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" align="start" className="w-52 rounded-[10px] p-1">
                    <div className="px-2 py-2 mb-1">
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-[11px] text-muted-foreground">可用积分</span>
                        <span className="text-sm font-bold tabular-nums">1,858.6</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-muted-foreground">免费额度</span>
                          <span className="tabular-nums">
                            <span className="font-medium">624.6</span>
                            <span className="text-muted-foreground opacity-60"> / 2,000</span>
                          </span>
                        </div>
                        <div className="h-[3px] rounded-full bg-border overflow-hidden">
                          <div className="h-full rounded-full bg-amber-400" style={{ width: `${(624.6 / 2000) * 100}%` }} />
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-muted-foreground">充值余额</span>
                          <span className="tabular-nums font-medium">1,234.0</span>
                        </div>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem render={<a href={`${CONSOLE_BASE}/user`} />}>
                      <UserIcon className="size-[15px]" />
                      个人中心
                    </DropdownMenuItem>
                    <DropdownMenuItem render={<a href={`${CONSOLE_BASE}/wallet`} />}>
                      <WalletIcon className="size-[15px]" />
                      钱包
                    </DropdownMenuItem>
                    <DropdownMenuItem render={<a href={`${CONSOLE_BASE}/order`} />}>
                      <ClipboardListIcon className="size-[15px]" />
                      订单管理
                    </DropdownMenuItem>
                    <DropdownMenuItem render={<a href={`${CONSOLE_BASE}/invoice`} />}>
                      <FileTextIcon className="size-[15px]" />
                      发票管理
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      <LogOutIcon />
                      退出登录
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
