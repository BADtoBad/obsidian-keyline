# Release verification

## Theme 0.8.28 — Report-style tables, 2026-10-25

Scope: Markdown table CSS only. All tables share the same style; no per-note
activation, inferred total/forecast treatment or text/number conversion.

- **14 native host checks** pass in a disposable fictional Vault on macOS
  Obsidian 1.13.7: light/dark, Reading/Live Preview, native column alignment,
  ordinary text tables, unchanged negative-number text, editing/caret/Tab
  behaviour and stable cell geometry when entering edit mode.
- The matrix includes **8 narrow viewport cases** (390/768px × light/dark ×
  Reading/Live Preview), retaining native horizontal table scrolling without
  expanding the note page. These are layout-emulation checks, not device tests.
- Ordinary paragraphs/lists and raw source retain their previous styling.
  Note contents remain unchanged except explicit editing in the test fixture.
- The same theme also passes With Keyline 1.2.0's 29 property/calendar, 31
  insertion and 36 mobile-emulation checks. No renderer exceptions were recorded
  in those plugin runs.
- Official Stylelint: **0 errors, 23 pre-existing advisory warnings**, none added.
  `git diff --check` passes. The source theme and public CSS are identical.

Reproduce with Node.js 22+ and a desktop Obsidian installation:

```sh
node scripts/check-tables-host.mjs
```

Set `OBSIDIAN_TEST_BINARY` to override the executable. The harness creates its
own temporary profile/Vault, compares against the 0.8.27 commit, guards renderer
access by Vault path and closes only its own process. Reports/captures are saved
under `evidence/tables/`, not shipped as theme assets.

No personal Vault was changed. Physical iOS/Android, Windows/Linux, older cores
and arbitrary third-party overrides remain outside this release's validation.
The minimum declared Obsidian version remains 1.7.7; this run used 1.13.7. The
sidebar and other earlier checks below describe their stated historical builds.

## Theme 0.8.27 — Obsidian 1.14 ribbon rename

The reporter supplied a screenshot confirming Obsidian **1.14.5** and installed Keyline **0.8.26**. The official 1.14.5 core constructs the ribbon with `mod-primary` only. Unlike the dock, it does not retain `mod-left`. Keyline's desktop ribbon rules consequently missed it, leaving an opaque toolbar above the extended card. This is distinct from the controlled clipping condition tested for 0.8.26.

Scope: add the new ribbon class alongside the old one in eight existing desktop selectors, with unchanged declarations and specificity. No JavaScript runtime change, companion update, mobile rule change or personal Vault write.

- **Actual-core reproduction:** official `obsidian-1.14.5.asar.gz` verified against GitHub's SHA-256 `20544378d99335bd54f4f03d9bb4b8ba8e4dc68ac4b5072eed81cde53d33503b`. It was loaded through Obsidian's normal update mechanism in a disposable profile. Renderer IPC confirmed version 1.14.5. No synthetic clipping style or third-party plugin was used.
- **18 native-setting cases:** light/dark × opaque/translucent × 80/100/125% native zoom, plus 640/800/1280px windows with ribbon shown/hidden after collapse/reopen. Under 0.8.26, all nine opaque/ribbon-visible cases lose the left edge while retaining the right. Under 0.8.27, both edges are visible in all 18 cases. At light/100%, left-edge shadow samples change from 0/4832 to 4832/4832; the right remains 4832/4832. Before/after screenshots were visually inspected.
- **40 older-host sidebar regressions:** native 1.13.7, light/dark × narrow/wide × theme alone/With Keyline 1.0.2. Normal geometry, file rows, resize handles, footer and hit targets remain unchanged. The prior clipping protection, inner scrolling, collapse and hidden-ribbon checks still pass.
- **42 mobile-layout/desktop checks:** pass against 0.8.26; no mobile declarations changed. Representative mobile screenshots reviewed.
- Official Stylelint: 0 errors, 23 pre-existing advisory warnings, none added. `git diff --check` passes.

Reproduce with Node.js 22+ on macOS (the core path is optional; without it, the installed core is used):

```sh
KEYLINE_CORE_ASAR=/path/to/obsidian-1.14.5.asar node scripts/check-sidebar-native-settings.mjs /tmp/keyline-native-results
KEYLINE_TEST_PLUGIN=/path/to/with-keyline node scripts/check-sidebar-edge-host.mjs /tmp/keyline-edge-results
KEYLINE_TEST_BASELINE=929dd81186ef6fd3fb4d223273a54cd4d3256ac5 node scripts/check-mobile-host.mjs /tmp/keyline-mobile-results
```

The 1.14.5 core ran on the installed Electron 43.3.0 / Chrome 150 macOS runtime; this is not a separate test of the 1.14.5 installer/Electron 43.8.3 package. Physical iOS/Android, Windows/Linux, RTL layouts, arbitrary third-party overrides and the reporter's hardware remain outside this verification. Every host uses a guarded, fictional Vault and closes only its own process.

## Historical verification — 0.8.26

## Theme 0.8.26 — sidebar left-edge clipping

Scope: one CSS declaration (`overflow: visible`) on the expanded desktop left dock. Its painted card extends outside the dock, behind the ribbon. A general workspace-split clipping style can erase that left segment while leaving the right edge intact. Internal file/view scrolling remains native; no JavaScript, companion plugin, mobile rule or personal Vault was changed.

- **40 targeted checks** in native macOS Obsidian 1.13.7: light/dark × 800/1280px × theme alone/With Keyline 1.0.2. The baseline reproduces the missing left edge under an explicit `.workspace-split { overflow: hidden }` conflict. Screenshot pixel comparisons find 0/1428 left-edge samples with the old CSS, and 1428/1428 after the fix; the right edge remains visible in both. Normal sidebar geometry, rows, resize-handle geometry, footer and control hit targets match the baseline. Inner scrolling, collapsed and hidden-ribbon states pass.
- **42 mobile-layout/desktop regression checks** pass using 0.8.25 as the baseline. Representative light/dark mobile-emulation screenshots visually reviewed. These are renderer-layout tests, not iOS/Android device tests.
- **10 legacy-CSS safety cases** pass using official Obsidian 1.7.7 CSS/icons in a current Chrome fixture: light/dark, 1×/2×, narrow, hidden-ribbon and fullscreen states. Header clearance stays at least 8px and footer rendering does not erase card-edge pixels. This is not old-Electron or Catalina acceptance.
- Official Stylelint preset: 0 errors, 23 existing advisory warnings; no additional warnings. `git diff --check` passes. Test-note contents remain unchanged and no native runtime exceptions were recorded.

Reproduce the native regression with Node.js 22+ on macOS:

```sh
KEYLINE_TEST_PLUGIN=/absolute/path/to/with-keyline node scripts/check-sidebar-edge-host.mjs /tmp/keyline-sidebar-edge-results
KEYLINE_TEST_BASELINE=f4a5b2d node scripts/check-mobile-host.mjs /tmp/keyline-mobile-results
```

The edge harness creates its own temporary profile/Vault, guards every renderer evaluation with the Vault path, records the tested CSS hash and stops only its own process. Without `KEYLINE_TEST_PLUGIN`, it runs the theme-only half.

**Evidence boundary:** this confirms a reproducible clipping cause with the same visual symptom; the reporting user's installed version and exact CSS/plugin combination have not been supplied. More-specific or `!important` third-party overrides may require separate diagnosis. No claim of universal plugin compatibility is made.

## Historical verification — 2026-10-22

## Theme 0.8.25 — code-block edges and native explorer search

Scope: two theme CSS fixes only. With Keyline and Bucket Sidebar are unchanged. All notes, profiles and settings used for verification are fictional and disposable; no personal Vault is accessed.

Validated in the native macOS Obsidian **1.13.7** application:

- 24 code-layout cases: theme alone / With Keyline 1.0.1 × light/dark × 800/1280px widths × Live Preview, Source and Reading. Hard line breaks, blank lines and long wrapped SQL are included. Only the first/last editor rows have outer corners, all code rows share the left axis, and rendered blocks retain their existing rounded outline.
- 8 native-search cases: the same companion, colour and width matrix, with 60 root files. The previous CSS reproduces the overlap; the new CSS places the first folder below the search box. The closed header height is unchanged, and focus, typing, clearing and list scrolling pass.
- Paragraph/list computed layout matches the previous theme in the tested editing cases. Test Markdown content remains byte-for-byte unchanged.
- 42 checks from the mobile-layout harness pass again using 0.8.24 as the comparison baseline: 32 phone/tablet-sized note cases, 4 unchanged desktop comparisons, and large-text, property editing, collapse/expand, end-of-note and landscape checks.
- Light/dark native screenshots and representative mobile-emulation screenshots reviewed. Official Stylelint preset: 0 errors and 23 existing advisory warnings, with no new warnings. `git diff --check` passes.

Reproduce from this repository on macOS with Node.js 22+ and an official Obsidian installation:

```sh
# Optional: point to the three release files for With Keyline 1.0.1.
KEYLINE_TEST_PLUGIN=/absolute/path/to/with-keyline node scripts/check-layout-host.mjs /tmp/keyline-layout-results
KEYLINE_TEST_BASELINE=0fdd570d3a0373e42be1466137587c71056b4b19 node scripts/check-mobile-host.mjs /tmp/keyline-mobile-results
```

Both scripts create their own profile and Vault, validate that Vault before evaluating its renderer, record the theme SHA-256, and stop only their own process. Set `KEYLINE_TEST_APP` to override the application executable. Without `KEYLINE_TEST_PLUGIN`, the targeted script runs the theme-only half of the matrix.

Limits: this is native macOS host verification plus mobile CSS emulation, not physical iOS/Android, software-keyboard, Windows/Linux, old-core or arbitrary plugin/snippet certification. Minimum declared Obsidian version remains 1.7.7; this patch was tested on 1.13.7.

## Historical verification — 2026-10-19

## Theme 0.8.24 — mobile note layout

Scope: theme CSS only. The optional interaction plugin is still desktop-only; Bucket Sidebar is not changed by this release. No personal Vault content or settings were used.

Validated against Obsidian **1.13.7**, in a disposable macOS host and fictional test Vault:

- 32 native-renderer layout cases: Chinese/English long titles × light/dark × 320/390/430/768 CSS-pixel widths × Reading/Live Preview. The harness supplies mobile CSS classes and the active tab's mobile visibility state; it does not run the iOS/Android app.
- Property fields remain within the note column; label/input chrome is transparent and borderless; property rows are at least 44 CSS pixels tall. The native row focus indicator remains visible.
- 22px note text in a 390×420 viewport and a separate 844×390 phone-layout check: text scales, with no horizontal page overflow in the tested cases.
- Native property editing persisted to the test Markdown file. Native property collapse/expand and reaching the final line in both view modes passed.
- Desktop before/after computed styles and geometry matched at 390px and 1440px, light/dark (307 visible elements per case). Transitions were disabled only in the test harness to compare settled values.
- Visual review of rendered light/dark, narrow, large-text, focused, collapsed and landscape samples completed.
- Official Obsidian Stylelint preset: **0 errors, 23 existing advisory warnings**; no new warnings from this mobile section. `git diff --check` passed.

The theme removes its own desktop end spacer on mobile, but deliberately leaves core inline virtualisation padding, native navigation, keyboard height and safe-area handling intact. It does not hide properties, change stored note data or add mobile JavaScript tools.

**Not yet verified:** physical iOS/Android devices, their software keyboards, WebKit-specific behavior, VoiceOver/TalkBack, all device rotations and arbitrary plugins/snippets. This is a conservative mobile CSS improvement, not full mobile-suite certification. The declared minimum stays at 1.7.7; this patch's host matrix used 1.13.7, not the old core.

Reproduce the host check on macOS with Node.js 22+ and an existing official Obsidian installation:

```sh
KEYLINE_TEST_APP="/Applications/Obsidian.app/Contents/MacOS/Obsidian" node scripts/check-mobile-host.mjs /tmp/keyline-mobile-results
```

The script creates a fresh temporary profile and Vault, verifies the Vault path before each evaluation, then stops only its own process. Its screenshots are **layout-emulation evidence**, not phone screenshots. Result JSON records the tested CSS SHA-256. The 0.8.24 CSS hash is `657b169379d674e489b2e4bb548ee3c08665fed0988368c300e5fa0194e0470c`.

## Historical verification — 2026-10-18

Versions: Keyline theme 0.8.23; optional Keyline interactions 0.7.4; Bucket Sidebar 0.5.5.

## Checks performed

- TypeScript checks, production builds and regression tests: 453 interaction tests and 65 Bucket tests passed.
- Official Obsidian ESLint recommended rules: no errors in either plugin. Remaining advisory warnings are reviewed below.
- Official Obsidian Stylelint preset: no errors. 23 advisory warnings with the browser target lowered to Electron 31. Explicit, documented exceptions retain Obsidian-owned mixed-case selectors, measured platform font aliases, and the established component cascade.
- Real macOS Obsidian 1.13.7: both plugins load; settings pass English/Chinese, light/dark and wide/narrow cases (8 combinations).
- Official Obsidian 1.7.7 application core running in a separate current Electron/macOS host: both plugins load and the same 8 settings combinations pass. Static inspection also confirms all 42 imported host symbols exist in 1.7.7.
- Bucket: disable/re-enable retains leaf identity, parent and saved data on both cores. View opening waits for reveal completion; an injected rejection is handled without escaping the command.
- Theme cleanup: before/after computed visual styles and element geometry match in light/dark on 1.13.7 (402 visible elements) and 1.7.7 (404 elements).
- Bucket bundle remains ES2018/CommonJS, imports only the host module, and passes the standalone UI contract checks.

## Deliberate compatibility choices

- Document-specific element creation remains in the interaction plugin for pop-out ownership; replacing it with a main-document shortcut is not a safe mechanical cleanup.
- The legacy language fallback and IME composition guard remain for older hosts. New settings-definition APIs are not assumed available on the minimum supported core.
- Bucket's existing command ID remains stable so user hotkeys do not silently break.
- Theme `:has()` selectors are limited to specific rows/paragraphs, not unrestricted document descendants. Remaining `!important` rules target host cursor/overlay behavior; partial-support warnings concern basic clip-path/text-indent forms, visually checked in the host.

## Limits and publication status

- The old-core test uses today's Electron runtime. It is **not** a physical old-Mac, macOS 10.15, old WebView, iOS, Android, Windows or Linux device certification.
- Mobile device acceptance and arbitrary third-party plugin combinations remain unverified. Bucket uses host APIs and has no Node-only runtime dependency, but this does not substitute for mobile testing.
- Screenshots include optional companions; the theme itself does not supply JavaScript interactions.
- GitHub publication is not Community directory acceptance. Theme and Bucket are prepared for independent Community submission. Interaction-plugin submission is on hold until publicly documented upstream permission is available; upstream MIT notices and provenance remain intact.

## Reproduce local checks

Use Node.js 22 and pnpm 10.11.0 with the committed lockfile. Run `pnpm install --frozen-lockfile`, then `pnpm lint`. Plugin repositories also support `pnpm typecheck`, `pnpm test`, and `pnpm build`; run `pnpm pretest` before the interaction suite. Bucket adds `pnpm check:legacy` and `pnpm check:ui`.

No personal Vault content, credentials, application profiles or workspace recovery files are part of these packages.
