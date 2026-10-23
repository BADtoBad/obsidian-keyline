# Keyline 0.8.26

## Sidebar left-edge visibility

- Prevent outer sidebar clipping styles from cutting off the card behind the left ribbon while the right edge remains visible.
- Keep sidebar dimensions, file indentation, icons, control hit targets and inner file-list scrolling unchanged. The fix is scoped to the expanded desktop left dock; mobile styles and companion plugins are unchanged.
- Retain the code-block, explorer-search and mobile improvements from previous releases.

Verified in a disposable macOS Obsidian 1.13.7 host, in light/dark mode, narrow/wide windows, with and without With Keyline 1.0.2. A controlled clipping conflict reproduces the appearance and passes with the fix; the reporting user's exact plugin/snippet combination remains unconfirmed. See [verification](RELEASE-VERIFICATION.md).

Update **Keyline** under Obsidian's Appearance settings. This is a theme-only update; no plugin reinstall or Vault-settings replacement is needed.

## 中文

- 修复侧栏外层裁切样式可能导致左侧卡片边缘消失、右侧仍正常的问题。
- 不改侧栏尺寸、文件缩进、图标、按钮点击区域或文件列表滚动。仅调整桌面端展开的左侧栏，不改移动端和配套插件。
- 保留之前版本的代码块、搜索框及移动端改进。

已在独立的 macOS Obsidian 1.13.7 测试库中验证明暗模式、窄／宽窗口、启用／停用 With Keyline 1.0.2。通过可控的外层裁切条件复现了相同外观并验证修复；反馈用户的具体插件／CSS 组合尚未确认。

在 Obsidian「设置 → 外观」中更新 **Keyline 主题**即可，无需重装插件或替换个人库设置。

---

# Keyline 0.8.25

## Code blocks and sidebar search

- Keep code-block edges continuous across hard line breaks and blank lines. Only the first and last source lines retain the outer rounded corners; code content and indentation are unchanged.
- Keep the native file-explorer search box above the folder list, even in Vaults with many files. Search focus, typing, clearing and tree scrolling remain native.
- Retain the existing paragraph/list layout and the mobile improvements from 0.8.24.

Validated in a disposable Obsidian 1.13.7 macOS host: 32 targeted layout/search cases, with and without With Keyline 1.0.1, plus 42 mobile-layout and desktop-regression checks. Physical iOS/Android and arbitrary plugin combinations remain unverified. See [verification](RELEASE-VERIFICATION.md).

Update **Keyline** in Obsidian's Appearance settings. This is a theme-only update: do not replace plugin data or Vault settings. Manual installation only requires the new `theme.css` and `manifest.json`.

## 中文

- 修复代码块每次换行、空行处出现圆角凹口的问题；只在整个代码块的首尾保留外侧圆角，不改代码内容和缩进。
- 修复原生文件侧栏搜索框与目录重叠的问题，文件较多时也能保留搜索框所需高度。
- 保留原有正文、列表布局和 0.8.24 的移动端改进。

已在独立的 macOS Obsidian 1.13.7 测试库中通过 32 组专项检查（包含启用／停用 With Keyline 1.0.1），以及 42 项移动布局和桌面回归检查。尚未完成 iOS／Android 真机及任意插件组合验收。

在 Obsidian「设置 → 外观」中更新 **Keyline 主题**即可，无需重装插件或替换个人库设置。

---

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
