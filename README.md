# 百智云应用前端模板

这是一个用于构建百智云应用前端的基础模板，内置控制台布局、左侧导航、面包屑、主题切换，以及一组可直接复用的 `shadcn/ui` 组件。

## 技术栈

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- shadcn/ui

## 快速开始

```bash
pnpm install
pnpm dev
```

默认启动后可访问本地 Vite 开发服务。

## 常用命令

```bash
pnpm dev
pnpm build
pnpm preview
pnpm lint
pnpm typecheck
pnpm format
```

## 项目结构

```text
src/
  components/
    app-sidebar.tsx         # 应用侧边栏
    nav-console-pages.tsx   # 控制台页面导航
    ui/                     # shadcn/ui 组件
  lib/
    console-pages.tsx       # 控制台路由与导航配置
  pages/
    access-guide-page.tsx
    knowledge-base-page.tsx
    api-keys-page.tsx
    usage-monitoring-page.tsx
  App.tsx                   # 路由入口
  console.tsx               # 控制台壳层与面包屑
```

## 模板说明

- 左侧导航页面配置集中在 `src/lib/console-pages.tsx`。
- 知识库二级页面共用 `src/pages/knowledge-base-page.tsx`，通过路由参数 `:id` 区分。
- 控制台整体布局在 `src/console.tsx`，包含面包屑、主题切换和内容出口。
- 页面内容可基于 `src/pages/console-page-shell.tsx` 继续扩展。

## 添加 UI 组件

项目已集成 `shadcn/ui`。新增组件时可使用：

```bash
pnpm dlx shadcn@latest add button
```

新增后的组件默认放在 `src/components/ui` 下。
