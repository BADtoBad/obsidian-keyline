# Keyline

**让 Obsidian 开箱即用。**

少一点界面折腾，多一点真正使用笔记的时间。Keyline 为 Obsidian 准备好一套协调的阅读与写作界面：清楚的排版、克制的明暗配色，以及为内容让出空间的导航。启用主题，就有完整一致的视觉基础，不必先拼装一堆 CSS 片段。

[English](README.md) · [下载](https://github.com/BADtoBad/obsidian-keyline/releases)

![明暗拼接展示](assets/keyline-cover-diagonal-v2.png)

[亮色原始截图](assets/keyline-showcase-light.png) · [暗色原始截图](assets/keyline-showcase-dark.png)

现有展示图使用旧版 **Keyline 交互插件**提供编辑工具、分类图标与工作区切换，**Bucket Sidebar** 提供右侧分组面板。新版配套插件 **With Keyline** 的主要日常功能与旧版基本一致。主题本身可独立使用。斜切封面为展示合成图，明暗完整截图来自实际应用。

## 为日常读写准备好的界面

- **从第一篇笔记开始用。** 导航、正文、表格和 callout 使用统一的视觉语言，默认就协调，不必逐项调试界面。
- **重点清楚，不靠五颜六色。** 用标题层级、克制的强调色和清晰的高亮区分内容，让重要信息容易找到，而不是让每个元素争抢注意力。
- **把空间留给内容。** 浮动导航面板与低干扰的分屏边界区分工作区域，减少包围每个窗格的可见线条。
- **细节彼此配合。** 阅读区域、间距、圆角控件与主题样式菜单保持一致，亮色和暗色都能直接使用。

搭配插件后，这种设计也延伸到操作中：侧栏先把宽度留给文件名，需要时再浮出按钮；常用编辑工具出现在选区旁；资料可以围绕当前任务重新组合。**只装主题，即可获得开箱即用的外观；加上插件，再获得完整的编辑与组织体验。**

## 体验示例库

从 Releases 下载 **Keyline-Studio-Demo-0.8.23.zip**，解压后在 Obsidian 中选择“打开本地仓库”，从 `00 Home/Studio showcase.md` 开始。

示例包含 27 篇相互链接的英文笔记、项目页面、研究资料，以及原创 PDF、EPUB、图片、音频与 Canvas 样例，全部是虚构内容。预置工作区把主题、分类图标、Bucket 分组与工作区导航放在一起展示，让你先体验，再配置自己的 Vault。查看并按需启用附带的可选插件，即可使用相应功能。EPUB 阅读本身需另装阅读器。

## 推荐搭配

**想让 Obsidian 的读写与资料组织开箱即用，建议搭配 With Keyline 和 Bucket Sidebar。** 只安装自己需要的部分即可。

| 组件 | 带来的体验 |
| --- | --- |
| **Keyline 主题** — 本仓库 | 开箱即用的明暗视觉基础。 |
| **[With Keyline](https://community.obsidian.md/plugins/with-keyline)** | 选中文字工具栏、块把手、页面／日期引用、分类图标、排版与工作区切换；内置中英双语。 |
| **[Bucket Sidebar](https://github.com/BADtoBad/obsidian-bucket-sidebar)** | 按空间与分组组织引用，不搬动或复制原文件。 |

主题与这两个可选插件分别安装。两个插件均非必需、互不依赖，安装主题也不会自动安装插件。每个插件均有中英文介绍和截图。

**旧版保留，遇到问题可作为备选。** [旧版 Keyline 交互插件](https://github.com/BADtoBad/keyline-interactions)及其 GitHub 发行包继续保留，插件列表中仍显示为 **Keyline**。它与 With Keyline 的主要日常功能基本一致。**如果 With Keyline 出现 bug，建议先停用它，再尝试[旧版 GitHub 插件](https://github.com/BADtoBad/keyline-interactions/releases)。** 两者是替代关系，请勿同时启用；设置分别保存，不会自动迁移。

## 安装到现有库

可在 [Keyline Community 页面](https://community.obsidian.md/themes/keyline)点击 **Add to Obsidian**，或按以下步骤手动安装：

1. 备份 Vault 的 `.obsidian` 文件夹，并关闭该库窗口。
2. 新建 `.obsidian/themes/Keyline/`，放入主题发行包中的 `theme.css` 和 `manifest.json`。再次分发时保留许可证和第三方声明。
3. 重新打开 Obsidian，在“设置 → 外观 → 主题”选择 Keyline。
4. 如需交互功能，另行安装可选插件。不要用示例库的工作区或插件 `data.json` 覆盖自己的配置。

主题、[With Keyline](https://community.obsidian.md/plugins/with-keyline)与 Bucket 分别有独立的 Community 页面，可查看各自的当前版本与安装入口。With Keyline 也可从 [GitHub Releases](https://github.com/BADtoBad/with-keyline/releases)手动安装。旧版 Keyline 交互插件继续保留在 GitHub，供需要时切换使用。

## 语言与兼容性

主题不改变 Obsidian 本身的语言。配套插件的菜单、设置与提示支持中文和英文，跟随 Obsidian 的界面语言；切换语言后重启即可。笔记正文、既有路径和自定义名称不会被翻译。

当前主题版本为 **0.8.24**，最低声明版本为 **Obsidian 1.7.7**。本次补充移动端笔记布局：属性卡片与正文对齐、去除属性名的独立输入框边框、加大属性行触控空间、优化长标题换行，并让间距跟随笔记字号。导航栏和键盘避让仍由 Obsidian 原生机制负责。

封面和双语界面在 **macOS 的 Obsidian 1.13.7** 中验证。新增移动样式已在其真实渲染器中使用手机／平板尺寸和移动端 CSS 状态检查；**尚未完成 iOS／Android 真机及软键盘验收**。此前主题回归也覆盖过 1.7.7，但不等于所有老 Mac 和第三方插件组合都经过实机验证。**With Keyline 与旧版 Keyline 交互插件均仅支持桌面端**，此次主题更新不会让其编辑工具在手机上运行。With Keyline 1.0.0 要求 Obsidian 1.13.7 或以上。覆盖范围及限制见 [发行验证](RELEASE-VERIFICATION.md)。

## 反馈与许可

提交问题时请附 Obsidian/Keyline 版本、明暗模式、复现步骤和不含隐私的截图。冲突问题建议在测试库中排除其他主题片段和无关插件。

MIT 许可，详见 [LICENSE](LICENSE) 与 [第三方声明](THIRD_PARTY_NOTICES.md)。
