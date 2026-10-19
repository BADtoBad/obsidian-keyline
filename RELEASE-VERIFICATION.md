# Release verification — 2026-10-19

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
