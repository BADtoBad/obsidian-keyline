# Keyline 0.8.24

## Mobile note layout

- Align property cards with the title and body; remove separate boxed property labels.
- Give property rows and the collapse/add-property controls at least 44px height while preserving native editing and focus feedback.
- Let long titles wrap at a font-relative size, with tighter, font-relative reading and heading spacing.
- Remove the theme's additional desktop end-of-note spacer on mobile. Leave Obsidian's native navigation, virtualisation and keyboard/safe-area behavior in control.
- Keep desktop layout unchanged; all new styles are scoped to mobile Markdown views.

32 phone/tablet-sized layout cases passed in the native Obsidian 1.13.7 macOS renderer, along with desktop comparisons, large text, property saving, collapsing and end-of-note scrolling checks. **These are emulated layout checks, not physical iOS/Android or software-keyboard acceptance.** Keyline interactions remains desktop-only. See [verification](RELEASE-VERIFICATION.md).

Update the theme through Obsidian's Appearance settings, or replace only `theme.css` and `manifest.json` in `.obsidian/themes/Keyline/`. This release does not require replacing Vault settings or plugin data. The existing 0.8.23 desktop demo remains available in the previous release.

## 中文

- 属性卡片与正文对齐，去掉属性名独立的输入框边框。
- 属性行、折叠和添加入口至少 44px 高，保留原生编辑及焦点提示。
- 长标题随字号缩放与换行，优化正文和标题间距。
- 移除主题额外添加的桌面文末留白；不接管原生导航、虚拟渲染、键盘和安全区计算。
- 新增样式仅作用于移动端 Markdown 视图，桌面布局保持不变。

已通过 32 组移动尺寸布局模拟，以及桌面对照、大字号、属性保存、折叠和文末滚动检查。**尚未完成 iOS／Android 真机和软键盘验收**。Keyline 交互插件仍仅限桌面端；此次仅更新主题，不需要替换个人 Vault 设置或插件数据。
