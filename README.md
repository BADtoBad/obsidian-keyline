# Keyline

**Obsidian, ready to use.**

Spend less time assembling your interface and more time using your notes. Keyline gives Obsidian a coordinated reading and writing space out of the box: clear typography, considered light and dark colours, and navigation that leaves room for your content. Select the theme to get the complete visual foundation, without first assembling a collection of CSS snippets.

[中文](README.zh-CN.md) · [Downloads](https://github.com/BADtoBad/obsidian-keyline/releases)

![Keyline light and dark showcase](assets/keyline-cover-diagonal-v2.png)

[Light screenshot](assets/keyline-showcase-light.png) · [Dark screenshot](assets/keyline-showcase-dark.png)

The existing showcase uses the original **Keyline interactions** companion for editing tools, file-type icons and workspace switching, and **Bucket Sidebar** for the grouped panel on the right. **With Keyline** is the new companion with broadly equivalent everyday features. The theme works without these plugins. The cover is a presentation composite; the full light and dark images are native application screenshots.

## Designed for everyday writing

- **Ready from the first note.** Navigation, writing surfaces, tables and callouts share one visual language. Start with the supplied defaults instead of tuning each part of the interface separately.
- **Clear emphasis without a rainbow.** Heading hierarchy, restrained accents and distinct highlights help you find the important parts of a page without making every element compete for attention.
- **More room for your content.** Floating navigation panels and quiet split-pane boundaries separate work areas without surrounding every pane with visible lines.
- **Details that work together.** Reading surfaces, spacing, rounded controls and themed menus form a consistent workspace in both light and dark mode.

With the companions enabled, this same approach extends to interaction: file names use the available sidebar width until action buttons are needed, common editing controls appear beside your selection, and references can be grouped around the work at hand. **Use the theme for an immediately usable visual setup; add the plugins for the full editing and organising experience.**

## Try the example Vault

Download **Keyline-Studio-Demo-0.8.23.zip** from Releases, unzip it, and use Obsidian’s **Open folder as vault**. Start at `00 Home/Studio showcase.md`.

Explore 27 linked English notes, project pages, research material and original PDF, EPUB, image, audio and Canvas samples. All content is fictional. The prepared workspace demonstrates the theme, file-type icons, Bucket groups and workspace navigation together, so you can explore the setup before configuring your own Vault. Review and enable the bundled optional plugins to use their features. EPUB reading itself needs a separate reader.

## Recommended companions

**For a ready-to-use writing and organising setup, pair the theme with With Keyline and Bucket Sidebar.** Choose only the parts you need.

| Component | What you get |
| --- | --- |
| **Keyline theme** — this repository | The ready-to-use light and dark visual foundation. |
| **[With Keyline](https://community.obsidian.md/plugins/with-keyline)** | Selection toolbar, block handles, page/date mentions, file-type icons, typography and saved-workspace switching. English and Chinese UI. |
| **[Bucket Sidebar](https://github.com/BADtoBad/obsidian-bucket-sidebar)** | Organise references into spaces and groups without moving or duplicating the originals. |

The theme and these two optional plugins are separately installed. Neither plugin is mandatory, they do not require each other, and installing the theme does not install them automatically. Each companion has its own English and Chinese guide and screenshots.

**Previous companion kept as a fallback.** [Keyline interactions on GitHub](https://github.com/BADtoBad/keyline-interactions) remains available (named **Keyline** in Obsidian’s plugin list). Its main everyday features and With Keyline's are broadly equivalent. If With Keyline has a bug in your setup, try the [previous GitHub release](https://github.com/BADtoBad/keyline-interactions/releases). **Disable one before enabling the other**; they are alternatives, not two plugins to run together. Their settings are separate and are not automatically migrated.

## Install in an existing Vault

Use **Add to Obsidian** on the [Keyline Community page](https://community.obsidian.md/themes/keyline), or install manually:

1. Back up the Vault’s `.obsidian` folder and close that Vault’s window.
2. Create `.obsidian/themes/Keyline/` and copy `theme.css` and `manifest.json` from the theme release into it. Keep `LICENSE` and `THIRD_PARTY_NOTICES.md` with redistributed copies.
3. Reopen Obsidian and select **Settings → Appearance → Themes → Keyline**.
4. Install the companion plugins separately if desired. Do not overwrite your existing workspace or plugin `data.json` files with files from the example Vault.

The theme, [With Keyline](https://community.obsidian.md/plugins/with-keyline) and Bucket have separate Community pages. Check each page for the current release and installation entry. [With Keyline GitHub Releases](https://github.com/BADtoBad/with-keyline/releases) are also available for manual installation. The original Keyline interactions remains on GitHub as a fallback.

## Language and compatibility

The theme does not replace Obsidian’s own language. Companion menus, settings and notices support English and Chinese and follow Obsidian’s interface language; restart after changing it. Your notes and saved names are never translated.

Current theme release: **0.8.26**. Minimum declared Obsidian version: **1.7.7**. This update prevents outer sidebar clipping from hiding the left card edge while leaving the right edge visible. Sidebar dimensions, icons and inner file-list scrolling are unchanged. The code-block/search fixes from 0.8.25 and mobile layout improvements from 0.8.24 remain included. Native navigation and keyboard handling remain with Obsidian.

The release screenshots and bilingual interface checks were made in **Obsidian 1.13.7 on macOS**. Mobile CSS was rechecked in that native renderer with phone/tablet-sized viewports and mobile CSS states; **physical iOS/Android devices and their keyboards have not yet been acceptance-tested**. Previous theme regressions also exercised 1.7.7; this does not certify every older Mac or third-party plugin combination. **With Keyline and the original Keyline interactions are desktop-only**; this theme update does not make their editing tools available on mobile. With Keyline requires Obsidian 1.13.7+. See [release verification](RELEASE-VERIFICATION.md) for coverage and limits.

## Feedback

Report an issue with the Obsidian version, Keyline version, light/dark mode, reproduction steps, and a screenshot without private note content. For conflicts, also try with other themes/snippets and unrelated plugins disabled in a test Vault.

## License

MIT. See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md). Companion repositories retain their applicable notices and licenses.
