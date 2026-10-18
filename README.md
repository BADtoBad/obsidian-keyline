# Keyline

A quieter place to think. A restrained, macOS-inspired theme for Obsidian, with light and dark surfaces, a floating navigation panel, and generous reading space.

[中文](README.zh-CN.md) · [Downloads](https://github.com/BADtoBad/obsidian-keyline/releases) · [Figma showcase](https://www.figma.com/design/MVtMgxbXIPdd0FbkLH7D8S)

## Recommended setup

**For the complete experience shown below, install the Keyline theme together with Keyline interactions and Bucket Sidebar.** The theme also works on its own; neither plugin is mandatory.

| Component | What it provides | Install it when… |
| --- | --- | --- |
| **Keyline theme** — this repository | Light/dark appearance, reading surfaces, tables, callouts and split-pane styling | You want the visual style. |
| **[Keyline interactions](https://github.com/BADtoBad/keyline-interactions)** — listed as **Keyline** in Obsidian’s plugin settings | Block editing, formatting toolbar, file-type icons, typography controls and workspace switching | You want the editing and navigation features in the screenshots. [Download the preview](https://github.com/BADtoBad/keyline-interactions/releases). |
| **[Bucket Sidebar](https://github.com/BADtoBad/obsidian-bucket-sidebar)** | Spaces, pinned references and custom groups without moving files | You want the curated sidebar shown on the right. [Download](https://github.com/BADtoBad/obsidian-bucket-sidebar/releases). |

These are **three repositories: one theme and two separately installable plugins**, not duplicate copies of the same product. The plugins are optional and do not require each other. Installing the theme does not install or enable them automatically. Both plugins have English/Chinese interfaces and documentation, with their own screenshots linked above.

Keyline interactions is a **GitHub preview**, not a Community-listed plugin. For the theme and Bucket, check the current [theme listing](https://community.obsidian.md/themes/keyline) and [Bucket listing](https://community.obsidian.md/plugins/bucket-sidebar); a public listing alone does not mean review is complete or Community installation is enabled. Manual installation remains available below.

![Keyline light and dark showcase](assets/keyline-cover-diagonal-v2.png)

[Light screenshot](assets/keyline-showcase-light.png) · [Dark screenshot](assets/keyline-showcase-dark.png)

The screenshots show the theme with the two optional companions. Themes alone cannot provide JavaScript interactions. Marginalia and Journal View are not included in this distribution.

## Try the example Vault

Download **Keyline-Studio-Demo-0.8.23.zip** from Releases, unzip it, and use Obsidian’s **Open folder as vault**. Start at `00 Home/Studio showcase.md`.

The Vault contains 27 linked English notes and original PDF, EPUB, image, audio and Canvas samples. All content is fictional. The bundled plugins are optional; review and enable them only if you want the interactive features. Attachment icons, Bucket groups, restrained formatting and workspace navigation are demonstrated. EPUB reading itself needs a separate reader. The diagonal cover is a presentation composite; the full light/dark images are native application screenshots.

Release **0.8.23** includes Community guideline cleanup with no measured visual changes. See [release verification](RELEASE-VERIFICATION.md) for test coverage and limits.

## Install in an existing Vault

1. Back up the Vault’s `.obsidian` folder and close that Vault’s window.
2. Create `.obsidian/themes/Keyline/` and copy `theme.css` and `manifest.json` from the theme release into it. Keep `LICENSE` and `THIRD_PARTY_NOTICES.md` with redistributed copies.
3. Reopen Obsidian and select **Settings → Appearance → Themes → Keyline**.
4. Install the companion plugins separately if desired. Do not overwrite your existing workspace or plugin `data.json` files with files from the example Vault.

This is a manual-install release. A GitHub release does not imply acceptance into Obsidian’s Community catalogue.

## Language and compatibility

The theme does not replace Obsidian’s own language. Companion menus, settings and notices support English and Chinese and follow Obsidian’s interface language; restart after changing it. Your notes and saved names are never translated.

Minimum declared Obsidian version: **1.7.7**. The release screenshots and bilingual interface checks were made in **Obsidian 1.13.7 on macOS**. Previous theme regressions also exercised 1.7.7; this does not certify every older Mac or third-party plugin combination. The interaction companion is desktop-only. Mobile layouts are not release-validated.

## Feedback

Report an issue with the Obsidian version, Keyline version, light/dark mode, reproduction steps, and a screenshot without private note content. For conflicts, also try with other themes/snippets and unrelated plugins disabled in a test Vault.

## License

MIT. See [LICENSE](LICENSE) and [third-party notices](THIRD_PARTY_NOTICES.md). Companion repositories retain their applicable notices and licenses.
