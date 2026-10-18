var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => BucketSidebarPlugin
});
module.exports = __toCommonJS(main_exports);

// src/locale/uiMessages.ts
var english = {
  "\u7070\u8272": "Gray",
  "\u84DD\u8272": "Blue",
  "\u7EA2\u8272": "Red",
  "\u7EFF\u8272": "Green",
  "\u7D2B\u8272": "Purple",
  "\u7425\u73C0": "Amber",
  "\u9752\u8272": "Cyan",
  "\u6A59\u8272": "Orange",
  "\u7C89\u8272": "Pink",
  "\u6587\u4EF6": "File",
  "\u6587\u6863": "Document",
  "\u7B14\u8BB0": "Note",
  "\u56FE\u7247": "Image",
  "\u97F3\u4E50": "Music",
  "\u97F3\u9891": "Audio",
  "\u89C6\u9891": "Video",
  "\u6587\u4EF6\u5939": "Folder",
  "\u4E66": "Book",
  "\u661F": "Star",
  "\u5DE5\u4F5C": "Work",
  "\u65E5\u5386": "Calendar",
  "\u4EE3\u7801": "Code",
  "\u6536\u85CF": "Favorite",
  "\u9879\u76EE": "Project",
  "\u66F4\u6539\u56FE\u6807": "Change icon",
  "\u56FE\u6807\u8DDF\u968F\u81EA\u52A8\u89C4\u5219": "Use automatic icon",
  "\u641C\u7D22\u56FE\u6807\uFF1A\u6587\u4EF6\u3001\u65E5\u5386\u3001star\u2026": "Search icons: file, calendar, star\u2026",
  "\u641C\u7D22\u56FE\u6807": "Search icons",
  "\u53EF\u9009\u56FE\u6807": "Available icons",
  "\u989C\u8272": "Color",
  "\u56FE\u6807\u989C\u8272": "Icon color",
  "\u8DDF\u968F\u81EA\u52A8\u89C4\u5219": "Automatic",
  "\u81EA\u5B9A\u4E49\u989C\u8272\u2026": "Custom color\u2026",
  "\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272": "Custom icon color",
  "\u5F53\u524D\u4F7F\u7528\u5355\u8272\u6A21\u5F0F\u3002\u989C\u8272\u9009\u62E9\u4F1A\u4FDD\u5B58\uFF0C\u5173\u95ED\u5355\u8272\u6A21\u5F0F\u540E\u751F\u6548\u3002": "Monochrome mode is on. Your color is saved and will appear when monochrome mode is turned off.",
  "\u9884\u8BBE\u989C\u8272\u9002\u914D\u6D45\u8272\u4E0E\u6DF1\u8272\u4E3B\u9898\u3002\u81EA\u5B9A\u4E49\u989C\u8272\u8BF7\u5206\u522B\u68C0\u67E5\u4E24\u79CD\u6A21\u5F0F\u4E0B\u7684\u53EF\u8BFB\u6027\u3002": "Preset colors adapt to light and dark mode. Check custom colors for readability in both modes.",
  "\u6062\u590D\u81EA\u52A8": "Reset to automatic",
  "\u53D6\u6D88": "Cancel",
  "\u4FDD\u5B58": "Save",
  "\u56FE\u6807\u8BBE\u7F6E\u672A\u4FDD\u5B58\uFF0C\u8BF7\u91CD\u8BD5\u3002": "Could not save the icon. Please try again.",
  "\u81EA\u5B9A\u4E49\u56FE\u6807": "Custom icon",
  "\u81EA\u52A8\u56FE\u6807": "Automatic icon",
  "\u81EA\u5B9A\u4E49\u989C\u8272": "Custom color",
  "\u81EA\u52A8\u989C\u8272": "Automatic color",
  "\uFF0C\u53EF\u7EE7\u7EED\u8F93\u5165\u5173\u952E\u8BCD\u7F29\u5C0F\u8303\u56F4": "; keep typing to narrow the results",
  "\u6CA1\u6709\u5339\u914D\u7684\u56FE\u6807\uFF0C\u8BF7\u6362\u4E2A\u5173\u952E\u8BCD\u3002": "No matching icons. Try another search.",
  "Markdown \u7B14\u8BB0": "Markdown note",
  "PDF \u6587\u6863": "PDF document",
  "EPUB \u7535\u5B50\u4E66": "EPUB book",
  "Canvas \u753B\u5E03": "Canvas",
  "\u4EE3\u7801\u4E0E\u914D\u7F6E": "Code and configuration",
  "\u538B\u7F29\u6587\u4EF6": "Archive",
  "\u5176\u4ED6\u6587\u4EF6": "Other files",
  "\u6587\u4EF6\u81EA\u5B9A\u4E49": "File override",
  "\u7C7B\u578B\u9ED8\u8BA4": "Type default",
  "\u5185\u7F6E\u9ED8\u8BA4": "Built-in default",
  "\u5355\u8272\u6A21\u5F0F": "Monochrome",
  "\u66F4\u6539\u56FE\u6807\u2026": "Change icon\u2026",
  "\u5207\u6362\u5DE5\u4F5C\u533A\u5E03\u5C40": "Switch workspace layout",
  "\u4FDD\u5B58\u5F53\u524D\u5DE5\u4F5C\u533A\u5E03\u5C40": "Save current workspace layout",
  "\u53E6\u5B58\u4E3A\u65B0\u5DE5\u4F5C\u533A\u5E03\u5C40": "Save as new workspace layout",
  "\u6062\u590D\u5207\u6362\u524D\u5DE5\u4F5C\u533A\u5E03\u5C40": "Restore previous workspace layout",
  "\u66F4\u6539\u5F53\u524D\u6587\u4EF6\u56FE\u6807": "Change current file icon",
  "\u5207\u6362 Markdown \u6E90\u7801\u7B26\u53F7\u663E\u793A": "Toggle Markdown source markers",
  "\u5DF2\u663E\u793A Markdown \u6E90\u7801\u7B26\u53F7": "Markdown source markers are visible",
  "\u5DF2\u6062\u590D\u9690\u85CF\u751F\u6548\u7684 Markdown \u7B26\u53F7": "Valid Markdown markers are hidden again",
  "\u8DF3\u8F6C\u5230\u4E0B\u4E00\u4E2A\u53EF\u7591 Markdown \u7B26\u53F7": "Go to next suspicious Markdown marker",
  "\u7B14\u8BB0\u8FD8\u5728\u89E3\u6790\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002": "The note is still being parsed. Please try again shortly.",
  "\u672A\u53D1\u73B0\u53EF\u7591\u7684 Markdown \u6210\u5BF9\u7B26\u53F7\u3002": "No suspicious Markdown delimiters found.",
  "\u56FE\u6807\u5DF2\u4EA4\u7531\u5176\u4ED6\u63D2\u4EF6\u7BA1\u7406": "Icons are managed by another plugin",
  "\u6587\u4EF6\u5DF2\u88AB\u5220\u9664": "The file has been deleted",
  "\u63D2\u5165\u65E5\u671F\u6216\u94FE\u63A5\u5230\u9875\u9762": "Insert a date or link to a page",
  "\u2191\u2193 \u9009\u62E9 \xB7 Enter \u63D2\u5165 \xB7 Esc \u4FDD\u7559\u539F\u6587": "\u2191\u2193 Select \xB7 Enter Insert \xB7 Esc Keep text",
  "\u6839\u76EE\u5F55": "Vault root",
  "\u65E5\u671F": "Date",
  "\u94FE\u63A5\u5230\u9875\u9762": "Link to a page",
  "\u6CA1\u6709\u5339\u914D\u9879\uFF0C\u7EE7\u7EED\u8F93\u5165\u4F1A\u4FDD\u7559\u539F\u6587": "No results. Keep typing to retain your text.",
  "\u9875\u9762\u5DF2\u79FB\u52A8\u6216\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165 @ \u641C\u7D22\u3002": "The page moved or was deleted. Type @ to search again.",
  "\u6587\u4EF6\u540D\u542B\u5185\u90E8\u94FE\u63A5\u4FDD\u7559\u5B57\u7B26\uFF0C\u8BF7\u7528 Obsidian \u539F\u751F\u94FE\u63A5\u547D\u4EE4\u63D2\u5165\u3002\u539F\u6587\u5DF2\u4FDD\u7559\u3002": "The filename contains reserved link characters. Use the native link command. Your text was kept.",
  "\u4ECA\u5929": "Today",
  "\u660E\u5929": "Tomorrow",
  "\u6628\u5929": "Yesterday",
  "\u5F53\u524D\u65F6\u95F4": "Current time",
  "\u6B64\u7248\u672C\u672A\u63D0\u4F9B\u53EF\u7528\u7684\u83DC\u5355\u8BBE\u7F6E": "Menu preferences are unavailable in this version",
  "\u8FD9\u4E2A\u6587\u4EF6\u5939\u5DF2\u4E0D\u5B58\u5728\uFF0C\u8BF7\u5237\u65B0\u6587\u4EF6\u5217\u8868\u540E\u518D\u8BD5\u3002": "This folder no longer exists. Refresh the file list and try again.",
  "\u65B0\u5EFA\u7B14\u8BB0\u5931\u8D25\uFF1B\u539F\u6587\u4EF6\u6CA1\u6709\u88AB\u6539\u52A8\u3002": "Could not create the note. Existing files were not changed.",
  "\u672A\u547D\u540D": "Untitled",
  "\u9ED8\u8BA4\u6587\u672C": "Default text",
  "\u7070\u8272\u6587\u672C": "Gray text",
  "\u68D5\u8272\u6587\u672C": "Brown text",
  "\u6A59\u8272\u6587\u672C": "Orange text",
  "\u9EC4\u8272\u6587\u672C": "Yellow text",
  "\u7EFF\u8272\u6587\u672C": "Green text",
  "\u84DD\u8272\u6587\u672C": "Blue text",
  "\u7D2B\u8272\u6587\u672C": "Purple text",
  "\u7C89\u8272\u6587\u672C": "Pink text",
  "\u7EA2\u8272\u6587\u672C": "Red text",
  "\u9ED8\u8BA4\u80CC\u666F": "Default background",
  "\u7070\u8272\u80CC\u666F": "Gray background",
  "\u68D5\u8272\u80CC\u666F": "Brown background",
  "\u6A59\u8272\u80CC\u666F": "Orange background",
  "\u9EC4\u8272\u80CC\u666F": "Yellow background",
  "\u7EFF\u8272\u80CC\u666F": "Green background",
  "\u84DD\u8272\u80CC\u666F": "Blue background",
  "\u7D2B\u8272\u80CC\u666F": "Purple background",
  "\u7C89\u8272\u80CC\u666F": "Pink background",
  "\u7EA2\u8272\u80CC\u666F": "Red background",
  "\u9009\u4E2D\u6587\u5B57\u5916\u5C42\u6CA1\u6709\u672C\u63D2\u4EF6\u6DFB\u52A0\u7684\u989C\u8272\u3002": "The selected text has no color applied by Keyline.",
  "\u7C97\u4F53": "Bold",
  "\u659C\u4F53": "Italic",
  "\u5220\u9664\u7EBF": "Strikethrough",
  "\u884C\u5185\u4EE3\u7801": "Inline code",
  "\u94FE\u63A5": "Link",
  "\u9AD8\u4EAE": "Highlight",
  "\u6807\u9898 5": "Heading 5",
  "\u6807\u9898 4": "Heading 4",
  "\u6807\u9898 3": "Heading 3",
  "\u6807\u9898 2": "Heading 2",
  "\u6807\u9898 1": "Heading 1",
  "\u5F85\u529E": "Task",
  "\u9879\u76EE\u7B26\u53F7\u5217\u8868": "Bulleted list",
  "\u7F16\u53F7\u5217\u8868": "Numbered list",
  "\u5F15\u7528": "Quote",
  "\u4EE3\u7801\u5757": "Code block",
  "\u516C\u5F0F\u5757": "Math block",
  "\u6B63\u6587": "Text",
  "\u6587\u672C\u683C\u5F0F": "Text formatting",
  "\u6BB5\u843D\u4E0E\u5757\u7C7B\u578B": "Paragraph and block type",
  "\u63D2\u5165\u65C1\u6CE8\uFF08\u7F16\u53F7\uFF09": "Insert sidenote (numbered)",
  "\u63D2\u5165\u8FB9\u6CE8\uFF08\u65E0\u7F16\u53F7\uFF09": "Insert margin note (unnumbered)",
  "\u6587\u5B57\u4E0E\u80CC\u666F\u989C\u8272": "Text and background colors",
  "\u66F4\u591A\u5757\u64CD\u4F5C": "More block actions",
  "\u8BF7\u542F\u7528\u72EC\u7ACB\u63D2\u4EF6 Keyline Marginalia\u3002": "Enable the separate Keyline Marginalia plugin to use this action.",
  "\u641C\u7D22\u8BBE\u7F6E": "Search settings",
  "\u641C\u7D22 Keyline \u8BBE\u7F6E": "Search Keyline settings",
  "\u8BBE\u7F6E\u5206\u7C7B": "Settings categories",
  "\u6CA1\u6709\u5339\u914D\u7684\u8BBE\u7F6E": "No matching settings",
  "\u663E\u793A": "Display",
  "\u60AC\u505C\u8BF4\u660E": "Hover hints",
  "\u663E\u793A\u6309\u94AE\u4E0E\u5DE5\u5177\u7684\u8BF4\u660E\u6C14\u6CE1\u3002\u5173\u95ED\u4E0D\u5F71\u54CD\u94FE\u63A5\u9884\u89C8\u3001\u9519\u8BEF\u63D0\u9192\u548C\u786E\u8BA4\u5F39\u7A97\u3002": "Show descriptions for buttons and tools. Link previews, errors and confirmation dialogs are unaffected.",
  "\u83DC\u5355": "Menus",
  "\u5F53\u524D\u73AF\u5883\u672A\u63D0\u4F9B\u83DC\u5355\u5207\u6362\u63A5\u53E3\u3002": "Menu switching is unavailable in this environment.",
  "\u590D\u7528 Obsidian \u7684\u83DC\u5355\u8BBE\u7F6E\uFF1BKeyline \u4F7F\u7528\u4E3B\u9898\u6837\u5F0F\uFF0C\u7CFB\u7EDF\u4F7F\u7528\u64CD\u4F5C\u7CFB\u7EDF\u6837\u5F0F\u3002": "Uses the Obsidian menu preference. Keyline uses themed menus; System uses operating-system menus.",
  "\u7CFB\u7EDF": "System",
  "\u83DC\u5355\u8BBE\u7F6E\u672A\u4FDD\u5B58": "Could not save the menu preference",
  "\u5BFC\u822A": "Navigation",
  "\u5E95\u680F\u5E03\u5C40\u5207\u6362\u5668": "Workspace switcher",
  "\u5728 Keyline \u5E95\u680F\u4E2D\u592E\u663E\u793A\u5F53\u524D\u5DE5\u4F5C\u533A\u3002\u9700\u5F00\u542F\u6838\u5FC3\u63D2\u4EF6\u300C\u5DE5\u4F5C\u533A\u300D\uFF1B\u4E0D\u81EA\u52A8\u8986\u76D6\u5DF2\u4FDD\u5B58\u5E03\u5C40\uFF0C\u4E0D\u5728\u542F\u52A8\u65F6\u91CD\u8F7D\u5E03\u5C40\u3002": "Show the current workspace in the center of the status bar. Requires the Workspaces core plugin. Saved layouts are not overwritten automatically or restored on startup.",
  "Keyline \u6587\u4EF6\u5BFC\u822A": "Keyline file navigation",
  "\u6587\u4EF6\u5939\u5E73\u65F6\u663E\u793A\u56FE\u6807\uFF0C\u60AC\u505C\u6216\u952E\u76D8\u805A\u7126\u65F6\u6062\u590D\u539F\u751F\u5C55\u5F00\u7B26\u53F7\uFF1B\u53F3\u4FA7\u5FEB\u6377\u6309\u94AE\u4ECD\u8C03\u7528 Obsidian \u7684\u539F\u751F\u6587\u4EF6\u83DC\u5355\u548C\u6587\u4EF6\u64CD\u4F5C\u3002": "Folders show icons at rest and native disclosure arrows on hover or focus. Row actions use native file menus and operations.",
  "\u81EA\u52A8\u6587\u4EF6\u56FE\u6807": "Automatic file icons",
  "Sidebar \u4E0E Tab \u5171\u7528\u6587\u4EF6\u7C7B\u578B\u56FE\u6807\u548C\u989C\u8272\u3002\u542F\u7528 Iconic \u65F6\u81EA\u52A8\u8BA9\u4F4D\uFF1B\u5173\u95ED\u6B64\u9879\u5219\u4EA4\u7ED9\u5176\u4ED6\u63D2\u4EF6\u3002\u5173\u95ED\u4E0D\u5220\u9664\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3002": "Share file-type icons and colors across sidebars and tabs. Yield automatically to Iconic. Turning this off preserves your custom settings.",
  "\u5355\u8272\u56FE\u6807": "Monochrome icons",
  "\u4FDD\u7559\u4E0D\u540C\u56FE\u5F62\uFF0C\u7EDF\u4E00\u4F7F\u7528\u4E2D\u6027\u8272\u3002\u5173\u95ED\u540E\u6062\u590D\u5DF2\u8BBE\u7F6E\u7684\u7C7B\u578B\u8272\u4E0E\u81EA\u5B9A\u4E49\u989C\u8272\u3002": "Keep distinct shapes in a neutral color. Turn off to restore type colors and custom colors.",
  "\u53F3\u952E\u6587\u4EF6\u3001\u6587\u4EF6\u5939\u6216 Tab \u2192 \u66F4\u6539\u56FE\u6807\u3002\u4E5F\u53EF\u5728\u547D\u4EE4\u9762\u677F\u4E2D\u66F4\u6539\u5F53\u524D\u6587\u4EF6\u56FE\u6807\u3002\u4F18\u5148\u7EA7\uFF1A\u6587\u4EF6\u81EA\u5B9A\u4E49 > \u7C7B\u578B\u9ED8\u8BA4 > \u5185\u7F6E\u9ED8\u8BA4\uFF1B\u6062\u590D\u81EA\u52A8\u4E0D\u4F1A\u4FEE\u6539\u7B14\u8BB0\u5185\u5BB9\u3002": "Right-click a file, folder or tab and choose Change icon, or use the command palette. File overrides take priority over type defaults and built-in defaults. Resetting icons does not change notes.",
  "\u8C03\u6574\u5404\u6587\u4EF6\u7C7B\u578B\u7684\u9ED8\u8BA4\u56FE\u6807\u4E0E\u989C\u8272": "Set default icons and colors for each file type",
  "\u66F4\u6539\u2026": "Change\u2026",
  "\u4EA4\u4E92": "Interaction",
  "\u4E66\u5199\u4FDD\u62A4": "Writing safeguards",
  "\u9690\u85CF\u5DF2\u751F\u6548\u7684 Markdown \u7B26\u53F7": "Hide valid Markdown markers",
  "\u4EC5\u9690\u85CF Obsidian \u89E3\u6790\u5668\u5DF2\u786E\u8BA4\u7684\u5F3A\u8C03\u3001\u5220\u9664\u7EBF\u3001\u884C\u5185\u4EE3\u7801\u3001\u6807\u9898\u7B26\u53F7\u548C\u6709\u6548\u8F6C\u4E49\u53CD\u659C\u6760\uFF1B\u53EF\u7591\u6216\u65E0\u6548\u7B26\u53F7\u4F1A\u7559\u5728\u5C4F\u5E55\u4E0A\u3002": "Hide only parser-confirmed emphasis, strikethrough, inline-code, heading and escape markers. Suspicious or invalid markers stay visible.",
  "\u6807\u51FA\u53EF\u7591\u7684\u6210\u5BF9\u8BED\u6CD5": "Mark suspicious delimiters",
  "\u5BF9\u672A\u88AB\u89E3\u6790\u5668\u63A5\u53D7\u7684 **\u3001__\u3001~~ \u548C\u53CD\u5F15\u53F7\u52A0\u6CE2\u6D6A\u7EBF\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u6539\u5199\u6B63\u6587\u3002": "Underline unrecognized **, __, ~~ and backticks. Note contents are never corrected automatically.",
  "@ \u83DC\u5355\u4E0E\u4E2D\u6587\u62EC\u53F7": "@ menu and fullwidth brackets",
  "\u8F93\u5165 @ \u641C\u7D22\u65E5\u671F\u3001\u65F6\u95F4\u6216\u9875\u9762\uFF1B\u9009\u62E9\u9875\u9762\u540E\u624D\u5199\u5165 [[\u94FE\u63A5]]\uFF0C\u53D6\u6D88\u4F1A\u4FDD\u7559\u539F\u6587\u3002\u90AE\u7BB1\u4E0D\u89E6\u53D1\u83DC\u5355\u3002\u2191\u2193 \u9009\u62E9\u3001Enter \u63D2\u5165\uFF1B\u672A\u9009\u62E9\u65F6 Enter \u6B63\u5E38\u6362\u884C\u3002\u3010\u3010\u4E0E\u3011\u3011\u4ECD\u7B49\u540C\u4E8E [[ \u4E0E ]]\u3002": "Type @ to search dates, times and pages. A page becomes a [[link]] only after selection; canceling keeps your text. Email addresses do not trigger the menu. Use arrows to select and Enter to insert. Without a selection, Enter adds a line break. Fullwidth bracket pairs act as [[ and ]].",
  "\u6309\u4F4F \u2325 \u663E\u793A\u6E90\u7801": "Hold Alt / Option to reveal source",
  "\u6309\u4F4F Option \u65F6\u4E34\u65F6\u6062\u590D Obsidian \u7684\u539F\u751F Markdown \u7B26\u53F7\u663E\u793A\uFF0C\u677E\u5F00\u5373\u8FD4\u56DE\u65E0\u7B26\u53F7\u4E66\u5199\u3002": "Hold Alt / Option to reveal native Markdown markers temporarily. Release to hide them again.",
  "\u7C98\u8D34\u540E\u63D0\u9192": "Warn after paste",
  "\u7C98\u8D34\u5185\u5BB9\u5E26\u5165\u53EF\u7591\u8BED\u6CD5\u65F6\u663E\u793A\u4E00\u6761\u975E\u6A21\u6001\u63D0\u793A\uFF0C\u4E0D\u6253\u65AD\u7EE7\u7EED\u8F93\u5165\u3002": "Show a brief, non-blocking notice when pasted text contains suspicious syntax.",
  "\u589E\u5F3A\u6587\u672C\u9009\u62E9\u83DC\u5355": "Selection toolbar",
  "\u9009\u4E2D\u6587\u672C\u65F6\u663E\u793A\u6BB5\u843D\u5C42\u7EA7\u3001\u5E38\u7528\u683C\u5F0F\u3001\u94FE\u63A5\u3001\u9AD8\u4EAE\u4E0E\u989C\u8272\uFF1B\u542F\u7528\u65F6\u66FF\u4EE3 Make.md \u7684\u7B80\u6613\u9009\u62E9\u5DE5\u5177\u6761\u3002\u5173\u95ED\u540E Make.md \u539F\u83DC\u5355\u4F1A\u81EA\u52A8\u6062\u590D\u3002": "Show block types, formatting, links, highlights and colors for selected text. Replaces the Make.md selection toolbar while enabled; restores it when disabled.",
  "\u5757\u7F16\u8F91": "Block editing",
  "\u6574\u5757\u9009\u62E9": "Whole-block selection",
  "\u9F20\u6807\u8DE8\u5757\u9009\u62E9\u65F6\u6269\u5C55\u4E3A\u5B8C\u6574\u5757\uFF0C\u8F93\u5165\u548C\u9000\u683C\u4E5F\u4F5C\u7528\u4E8E\u6574\u5757\uFF1B\u4E0D\u6539\u53D8 Shift\uFF0B\u65B9\u5411\u952E\u7684\u7CBE\u786E\u9009\u62E9\u3002": "Expand pointer selections across blocks to whole blocks. Typing and Backspace affect those blocks. Shift + arrow selection remains precise.",
  "\u5757\u7EA7\u5FEB\u6377\u952E": "Block shortcuts",
  "\u2318A \u5148\u9009\u5F53\u524D\u5757\uFF0C\u518D\u9009\u5168\u6587\uFF1B\u5757\u9996\u9000\u683C\u4F9D\u6B21\u9000\u7F29\u8FDB\u3001\u79FB\u9664\u5217\u8868\u6216\u6807\u9898\u6807\u8BB0\uFF0C\u518D\u5408\u5E76\u4E0A\u5757\u3002": "Mod+A selects the current block, then the whole note. Backspace at a block start outdents, removes a list or heading marker, then joins the previous block.",
  "\u89E6\u53D1": "Triggers",
  "\u52A0\u53F7\u6309\u94AE": "Insert button",
  "\u5728\u5757\u62D6\u52A8\u624B\u67C4\u65C1\u663E\u793A\u63D2\u5165\u6309\u94AE\u3002": "Show an insert button beside the block drag handle.",
  "\u8F93\u5165\u89E6\u53D1": "Typed trigger",
  "\u8F93\u5165\u89E6\u53D1\u5B57\u7B26\u6253\u5F00\u63D2\u5165\u83DC\u5355\uFF0C\u7EE7\u7EED\u8F93\u5165\u53EF\u7B5B\u9009\u9879\u76EE\u3002": "Type the trigger character to open the insert menu. Keep typing to filter.",
  "\u89E6\u53D1\u5B57\u7B26": "Trigger character",
  "\u5355\u4E2A\u5B57\u7B26\u3002\u8BBE\u4E3A / \u65F6\u517C\u5BB9\u4E2D\u6587\u8F93\u5165\u6CD5\u7684\u300C\u3001\u300D\uFF1B\u7EC4\u5408\u952E\u53EF\u5728 Obsidian \u5FEB\u6377\u952E\u4E2D\u8BBE\u7F6E\u3002": "One character. The / trigger also accepts \u3001 from Chinese input methods. Set keyboard shortcuts in Obsidian.",
  "\u884C\u5185\u89E6\u53D1": "Inline trigger",
  "\u5141\u8BB8\u5728\u884C\u5185\u7A7A\u683C\u540E\u89E6\u53D1\uFF1B\u5173\u95ED\u540E\u53EA\u5728\u7A7A\u5757\u89E6\u53D1\u3002\u4E0D\u6539\u53D8\u7F51\u5740\u3001\u65E5\u671F\u548C\u5355\u8BCD\u4E2D\u7684\u659C\u6760\u3002": "Allow triggers after a space within a line. Otherwise, only empty blocks trigger the menu. Slashes in URLs, dates and words are unaffected.",
  "\u5D4C\u5165\u9644\u4EF6": "Embed attachments",
  "\u5173\u95ED\u65F6\u63D2\u5165\u94FE\u63A5\uFF1B\u5F00\u542F\u65F6\u76F4\u63A5\u663E\u793A\u9644\u4EF6\u5185\u5BB9\u3002\u4FDD\u5B58\u4F4D\u7F6E\u4ECD\u7531\u300C\u6587\u4EF6\u4E0E\u94FE\u63A5\u300D\u8BBE\u7F6E\u51B3\u5B9A\u3002": "Insert links when off, or display attachment contents when on. Files & links settings still determine the save location.",
  "\u683C\u5F0F": "Formats",
  "\u65E5\u671F\u683C\u5F0F": "Date format",
  "\u65F6\u95F4\u683C\u5F0F": "Time format",
  "\u65F6\u95F4": "Time",
  "\u517C\u5BB9": "Compatibility",
  "\u542F\u7528\u65F6\u81EA\u52A8\u8BA9\u51FA\u56FE\u6807\u63A7\u5236\u6743\uFF0CKeyline \u7684\u81EA\u5B9A\u4E49\u56FE\u6807\u6570\u636E\u4FDD\u7559\u3002": "Keyline yields icon control when enabled and preserves custom icon data.",
  "\u539F\u751F\u6587\u4EF6\u6811\u5355\u72EC\u8BC6\u522B\uFF1B\u9009\u62E9\u5DE5\u5177\u6761\u5173\u95ED\u540E\uFF0C\u6062\u590D Make.md \u7684\u5DE5\u5177\u6761\u3002": "The native file tree is detected independently. Turning off the selection toolbar restores the Make.md toolbar.",
  "\u5206\u7EC4\u3001\u8DEF\u5F84\u4E0E\u6392\u5E8F\u4ECD\u7531 Bucket \u7BA1\u7406\uFF1BKeyline \u53EA\u63D0\u4F9B\u914D\u5957\u6837\u5F0F\u3002": "Bucket manages groups, paths and sorting. Keyline provides matching styles.",
  "\u6570\u636E\u5B89\u5168": "Data",
  "\u6392\u7248\u4E0E\u754C\u9762\u8BBE\u7F6E\u4E0D\u6539\u5199\u7B14\u8BB0\u3002\u83DC\u5355\u64CD\u4F5C\u3001\u5DE5\u4F5C\u533A\u4FDD\u5B58\u7EE7\u7EED\u4F7F\u7528\u539F\u6709\u529F\u80FD\u3002": "Typography and interface preferences do not rewrite notes. Menus and workspace saving use their existing operations.",
  "\u5373\u65F6\u751F\u6548": "Live updates",
  "\u53C2\u6570\u81EA\u52A8\u4FDD\u5B58\uFF1B\u65E0\u9700 Style Settings\u3002": "Changes save automatically. Style Settings is not required.",
  "\u6062\u590D\u6392\u7248\u9ED8\u8BA4": "Reset typography",
  "\u53EA\u91CD\u7F6E\u672C\u9762\u677F\u7684\u6392\u7248\u53C2\u6570": "Reset only the typography preferences in this panel",
  "\u9884\u89C8": "Preview",
  "\u7F16\u8F91\u89C6\u56FE": "Editing view",
  "\u793A\u4F8B\u6807\u9898": "Sample heading",
  "\u8FD9\u662F\u6B63\u6587\u7B2C\u4E00\u884C\uFF0C\u7528\u6765\u89C2\u5BDF\u884C\u9AD8\u3001\u6BB5\u8DDD\u548C\u9996\u884C\u7F29\u8FDB\u3002": "Use this first line to preview line height, paragraph spacing and indentation.",
  "\u7B2C\u4E8C\u884C\u4F1A\u968F\u7740\u7F16\u8F91\u89C6\u56FE\u884C\u9AD8\u4E00\u8D77\u53D8\u5316\u3002": "The second line follows the editing-view line height.",
  "\u8FD9\u662F\u7B2C\u4E8C\u4E2A\u6BB5\u843D\uFF0C\u7528\u6765\u5206\u8FA8\u6BB5\u524D\u8DDD\u4E0E\u6BB5\u540E\u8DDD\u3002": "A second paragraph shows the space before and after each paragraph.",
  "\u5217\u8868\u5706\u70B9\u4E0E\u6B63\u6587\u95F4\u8DDD": "Space between the bullet and text",
  "\u7B2C\u4E8C\u5C42\u7F29\u8FDB\u5BBD\u5EA6": "Second-level indentation",
  "\u5F15\u7528\u7B2C\u4E00\u884C": "First line of a quote",
  "\u5F15\u7528\u7B2C\u4E8C\u884C\u4E0E\u4E0A\u4E00\u884C\u4FDD\u6301\u5BF9\u9F50": "The second line stays aligned with the first",
  "\u9605\u8BFB\u89C6\u56FE\u884C\u9AD8": "Reading line height",
  "\u9605\u8BFB\u89C6\u56FE\u7B2C\u4E00\u884C\u3002": "First line in Reading view.",
  "\u9605\u8BFB\u89C6\u56FE\u7B2C\u4E8C\u884C\u3002": "Second line in Reading view.",
  "\u9875\u9762": "Page",
  "\u6B63\u6587\u6700\u5927\u5BBD\u5EA6": "Maximum text width",
  "\u9650\u5236\u7F16\u8F91\u4E0E\u9605\u8BFB\u89C6\u56FE\u7684\u6700\u5927\u5BBD\u5EA6\uFF1B\u9700\u5F00\u542F\u300C\u7F29\u51CF\u680F\u5BBD\u300D\u3002\u7A84\u7A97\u53E3\u81EA\u52A8\u6536\u62E2\u3002": "Limit text width in Editing and Reading views. Requires Readable line length. Narrow panes shrink automatically.",
  "\u5DE6\u53F3\u7559\u767D": "Side padding",
  "\u6700\u5DE6\u7AEF\u4E3A\u81EA\u52A8\u7559\u767D\uFF1B\u624B\u52A8\u503C\u5728\u7A84\u7A97\u53E3\u4E2D\u4E0D\u8D85\u8FC7\u6BCF\u4FA7 20%\u3002": "The leftmost value uses automatic padding. Manual padding is capped at 20% per side in narrow panes.",
  "\u7F16\u8F91\u89C6\u56FE\u884C\u9AD8": "Editing line height",
  "\u63A7\u5236 Live Preview / Source mode \u6B63\u6587\u884C\u9AD8\u3002": "Set body-text line height in Live Preview and Source mode.",
  "\u63A7\u5236 Reading View \u6B63\u6587\u884C\u9AD8\u3002": "Set body-text line height in Reading view.",
  "\u6B63\u6587\u6362\u884C\uFF0F\u6BB5\u843D\u95F4\u8DDD": "Text line spacing",
  "\u63A7\u5236\u76F8\u90BB\u666E\u901A\u6B63\u6587\u6E90\u884C\uFF08\u6309 Enter \u6362\u884C\uFF09\u4E4B\u95F4\u7684\u7559\u767D\uFF1B\u5207\u6362\u4E3A\u6807\u9898\u3001\u5217\u8868\u6216\u5F15\u7528\u7B49\u65B0\u5757\u65F6\uFF0C\u7531\u8BE5\u5757\u7684\u6BB5\u524D\uFF0F\u6BB5\u540E\u8DDD\u63A5\u7BA1\u3002": "Add space between adjacent plain-text source lines. Headings, lists and quotes use their own block spacing.",
  "\u6BB5\u524D\u8DDD": "Space before",
  "\u63A7\u5236\u666E\u901A\u6B63\u6587\u53CA Quote \u7B49\u72EC\u7ACB\u6587\u672C\u5757\u4E0A\u65B9\u7684\u7559\u767D\uFF1B\u4E0E\u4E0A\u4E00\u5757\u7684\u6BB5\u540E\u8DDD\u76F8\u9047\u65F6\u6309\u8F83\u5927\u503C\u6298\u53E0\uFF0C\u4E0D\u4F1A\u53E0\u6210\u4E00\u4E2A\u7A7A\u884C\u3002": "Space above paragraphs and quotes. Adjacent block margins use the larger value rather than adding together.",
  "\u6BB5\u540E\u8DDD": "Space after",
  "\u63A7\u5236\u666E\u901A\u6B63\u6587\u53CA Quote \u7B49\u72EC\u7ACB\u6587\u672C\u5757\u4E0B\u65B9\u7684\u7559\u767D\uFF1B\u4E0E\u4E0B\u4E00\u5757\u7684\u6BB5\u524D\u8DDD\u76F8\u9047\u65F6\u6309\u8F83\u5927\u503C\u6298\u53E0\uFF0C\u4E0D\u4F1A\u91CD\u590D\u7D2F\u52A0\u3002": "Space below paragraphs and quotes. Adjacent block margins use the larger value rather than adding together.",
  "\u9996\u884C\u7F29\u8FDB": "First-line indent",
  "\u4EC5\u7528\u4E8E\u666E\u901A\u6B63\u6587\u6BB5\u843D\uFF0C\u4E0D\u7F29\u8FDB\u6807\u9898\u3001\u5217\u8868\u3001\u5F15\u7528\u6216\u4EE3\u7801\u5757\u3002": "Indent plain-text paragraphs only. Headings, lists, quotes and code are unaffected.",
  "\u5217\u8868": "Lists",
  "\u5217\u8868\u884C\u9AD8": "List line height",
  "\u63A7\u5236\u5217\u8868\u6587\u5B57\u672C\u8EAB\u7684\u884C\u9AD8\uFF1B\u4E00\u9879\u6587\u5B57\u6362\u884C\u65F6\u5C24\u5176\u660E\u663E\u3002": "Set line height within list items, including wrapped lines.",
  "\u5217\u8868\u9879\u95F4\u8DDD": "List item spacing",
  "\u63A7\u5236\u4E24\u4E2A\u72EC\u7ACB\u7684\u5706\u70B9\u3001\u6570\u5B57\u6216 Todo \u9879\u76EE\u4E4B\u95F4\u989D\u5916\u589E\u52A0\u7684\u5782\u76F4\u7559\u767D\u3002": "Add vertical space between separate bullet, numbered or task items.",
  "\u5217\u8868\u5C42\u7EA7\u7F29\u8FDB": "List indentation",
  "\u7B2C\u4E00\u5C42\u4F1A\u968F\u4E4B\u5C0F\u5E45\u79FB\u52A8\uFF0C\u7B2C\u4E8C\u5C42\u8D77\u4F7F\u7528\u5B8C\u6574\u6570\u503C\uFF1B\u9002\u7528\u4E8E\u6709\u5E8F\u3001\u65E0\u5E8F\u53CA\u4EFB\u52A1\u5217\u8868\u3002": "Adjust indentation for bulleted, numbered and task lists. The first level shifts slightly; deeper levels use the full value.",
  "\u5217\u8868\u7B26\u53F7\u4E0E\u6B63\u6587\u95F4\u8DDD": "List marker spacing",
  "\u63A7\u5236 Live Preview\u3001Reading View \u548C\u8BBE\u7F6E\u9884\u89C8\u4E2D\u5706\u70B9\u3001\u6570\u5B57\u6216 Todo \u590D\u9009\u6846\u4E0E\u6B63\u6587\u7684\u7559\u767D\u3002\u7F16\u8F91\u89C6\u56FE\u53EA\u6539\u53D8\u771F\u5B9E Markdown \u5206\u9694\u7A7A\u683C\u7684\u5B57\u5BBD\uFF0C\u4E0D\u66FF\u6362\u7B26\u53F7\u6216\u5149\u6807\u3002": "Space between text and bullets, numbers or task checkboxes in all views. Editing changes separator-space width without replacing markers or the caret.",
  "\u65E0\u5E8F\u5217\u8868\u5706\u70B9\u5927\u5C0F": "Bullet size",
  "\u63A7\u5236\u65E0\u5E8F\u5217\u8868\u5B9E\u5FC3\u5706\u70B9\u7684\u76F4\u5F84\u3002": "Set the diameter of filled list bullets.",
  "\u5F15\u7528\u4E0E\u6807\u9898": "Quotes and headings",
  "\u5F15\u7528\u7F29\u8FDB": "Quote indentation",
  "\u63A7\u5236\u5F15\u7528\u7EBF\u4E0E\u6B63\u6587\u4E4B\u95F4\u7684\u6C34\u5E73\u7559\u767D\uFF1BFigma \u539F\u7A3F\u4E3A 16px\u3002": "Space between the quote rule and text. The design default is 16px.",
  "\u6807\u9898\u6BB5\u524D\u8DDD": "Space before headings",
  "\u63A7\u5236\u5404\u7EA7\u6807\u9898\u4E0A\u65B9\u7684\u547C\u5438\u7A7A\u95F4\u3002": "Set the space above headings.",
  "\u6807\u9898\u6BB5\u540E\u8DDD": "Space after headings",
  "\u63A7\u5236\u6807\u9898\u4E0E\u4E0B\u4E00\u6BB5\u6B63\u6587\u4E4B\u95F4\u7684\u8DDD\u79BB\u3002": "Set the space between a heading and the following paragraph.",
  "\u754C\u9762": "Interface",
  "\u5BFC\u822A\u3001\u83DC\u5355\u4E0E\u63D0\u793A\u3002": "Navigation, menus and hints.",
  "\u6392\u7248": "Typography",
  "\u9875\u9762\u3001\u6B63\u6587\u3001\u5217\u8868\u4E0E\u6807\u9898\u3002": "Page, text, lists and headings.",
  "\u56FE\u6807": "Icons",
  "\u6587\u4EF6\u7C7B\u578B\u3001\u56FE\u5F62\u4E0E\u989C\u8272\u3002": "File types, shapes and colors.",
  "\u7F16\u8F91": "Editing",
  "\u4E66\u5199\u4FDD\u62A4\u3001\u6587\u672C\u9009\u62E9\u4E0E\u5757\u64CD\u4F5C\u3002": "Writing safeguards, selections and block actions.",
  "\u63D2\u5165": "Insert",
  "\u89E6\u53D1\u65B9\u5F0F\u3001\u9644\u4EF6\u4E0E\u83DC\u5355\u9879\u76EE\u3002": "Triggers, attachments and menu items.",
  "\u9AD8\u7EA7": "Advanced",
  "\u683C\u5F0F\u4E0E\u517C\u5BB9\u8BF4\u660E\u3002": "Formats and compatibility.",
  "\u8BBE\u7F6E": "Settings",
  "\u5E2E\u52A9": "Help",
  "\u8FD9\u4E2A\u53CD\u5F15\u53F7\u6CA1\u6709\u88AB Markdown \u89E3\u6790\u4E3A\u6709\u6548\u7684\u884C\u5185\u4EE3\u7801\u6216\u4EE3\u7801\u56F4\u680F": "This backtick is not parsed as valid inline code or a code fence",
  "\u8FD9\u4E2A\u5220\u9664\u7EBF\u7B26\u53F7\u6CA1\u6709\u88AB Markdown \u89E3\u6790\u4E3A\u6709\u6548\u914D\u5BF9": "This strikethrough delimiter has no valid parsed pair",
  "\u8FD9\u4E2A\u5F3A\u8C03\u7B26\u53F7\u6CA1\u6709\u88AB Markdown \u89E3\u6790\u4E3A\u6709\u6548\u914D\u5BF9\uFF0C\u53EF\u80FD\u4F1A\u4E0E\u66F4\u8FDC\u5904\u7684\u7B26\u53F7\u4E32\u8054": "This emphasis delimiter has no valid parsed pair and may match a later delimiter",
  "\u81EA\u52A8": "Auto",
  "\u5E03\u5C40\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u672A\u6267\u884C\u5207\u6362\u3002": "Layout data is incomplete. No switch was made.",
  "\u6062\u590D\u5907\u4EFD\u683C\u5F0F\u672A\u77E5\uFF0C\u5DF2\u4FDD\u7559\u539F\u6587\u4EF6\u3002": "Unknown recovery format. The original file was kept.",
  "\u6062\u590D\u5907\u4EFD\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u539F\u6587\u4EF6\u5DF2\u4FDD\u7559\u3002": "Could not read the recovery backup. The original file was kept.",
  "\u6062\u590D\u5907\u4EFD\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u672A\u6267\u884C\u5207\u6362\u3002": "Could not read the recovery backup. No switch was made.",
  "\u5207\u6362\u524D\u5907\u4EFD\u6821\u9A8C\u5931\u8D25\uFF0C\u672A\u6267\u884C\u5207\u6362\u3002": "The recovery backup failed verification. No switch was made.",
  "\u8BF7\u8F93\u5165\u5E03\u5C40\u540D\u79F0\u3002": "Enter a layout name.",
  "\u6B64\u5E03\u5C40\u540D\u79F0\u4E0D\u53EF\u7528\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002": "This layout name is unavailable. Choose another.",
  "Keyline \u5E03\u5C40\u5207\u6362\u5DF2\u5173\u95ED\u3002": "Keyline workspace switching is off.",
  "\u8BF7\u5148\u505C\u7528 Workspaces Plus / Workspace++\uFF0C\u907F\u514D\u4E24\u5957\u5E03\u5C40\u7BA1\u7406\u540C\u65F6\u63A5\u7BA1\u3002\u539F\u5E03\u5C40\u65E0\u9700\u5220\u9664\u3002": "Disable Workspaces Plus / Workspace++ before using this switcher. Your saved layouts can stay.",
  "\u8BF7\u5728\u300C\u8BBE\u7F6E \u2192 \u6838\u5FC3\u63D2\u4EF6\u300D\u4E2D\u5F00\u542F\u300C\u5DE5\u4F5C\u533A\u300D\u3002": "Enable Workspaces in Settings \u2192 Core plugins.",
  "\u5E03\u5C40\u64CD\u4F5C\u8FDB\u884C\u4E2D\uFF0C\u8BF7\u7A0D\u5019\u3002": "A layout operation is in progress. Please wait.",
  "\u5DE5\u4F5C\u533A\u72B6\u6001\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5\u3002": "Workspace state changed. Please try again.",
  "\u6B64\u5E03\u5C40\u5DF2\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002": "This layout no longer exists. Choose another.",
  "\u6240\u9009\u5E03\u5C40\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002": "The selected layout changed. Select it again.",
  "\u8FD8\u6CA1\u6709\u53EF\u6062\u590D\u7684\u5207\u6362\u524D\u5E03\u5C40\u3002": "There is no previous layout to restore yet.",
  "\u5E03\u5C40\u5207\u6362\u672A\u5B8C\u6210\uFF1B\u5207\u6362\u524D\u5907\u4EFD\u5DF2\u4FDD\u7559\uFF0C\u8BF7\u901A\u8FC7\u300C\u6062\u590D\u5207\u6362\u524D\u5E03\u5C40\u300D\u91CD\u8BD5\u3002": "The layout switch failed. The recovery backup was kept; use Restore previous layout to retry.",
  "\u5E03\u5C40\u5207\u6362\u672A\u5B8C\u6210\uFF0C\u5DF2\u6062\u590D\u5207\u6362\u524D\u7684\u5E03\u5C40\u3002": "The switch failed. The previous layout was restored.",
  "\u5DF2\u5B58\u5728\u540C\u540D\u5E03\u5C40\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002": "A layout with this name already exists. Choose another.",
  "\u5F53\u524D\u5E03\u5C40\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u4FDD\u5B58\u3002": "The current layout changed. Choose Save again.",
  "\u5E03\u5C40\u672A\u80FD\u4FDD\u5B58\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E\u76EE\u5F55\u7684\u5199\u5165\u6743\u9650\u540E\u91CD\u8BD5\u3002": "Could not save the layout. Check write access to the configuration folder.",
  "\u5DE5\u4F5C\u533A\u5E03\u5C40": "Workspace layouts",
  "\u53E6\u5B58\u4E3A\u65B0\u5E03\u5C40": "Save as new layout",
  "\u4F8B\u5982\uFF1A\u9605\u8BFB\u3001\u5199\u4F5C": "For example: Reading, Writing",
  "\u5E03\u5C40\u540D\u79F0": "Layout name",
  "\u5E03\u5C40\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u3002": "The layout operation did not finish. Please try again.",
  "\u5E03\u5C40": "Layout",
  "\u5F53\u524D\u5E03\u5C40\u5DF2\u4FDD\u5B58": "Current layout saved",
  "\u65B0\u5E03\u5C40\u5DF2\u4FDD\u5B58": "New layout saved",
  "\u5DF2\u6062\u590D\u5207\u6362\u524D\u7684\u5E03\u5C40": "Previous layout restored",
  "\u4FDD\u5B58\u5F53\u524D\u5E03\u5C40": "Save current layout",
  "\u53E6\u5B58\u4E3A\u65B0\u5E03\u5C40\u2026": "Save as new layout\u2026",
  "\u6062\u590D\u5207\u6362\u524D\u5E03\u5C40": "Restore previous layout",
  "\u539F\u751F\u5DE5\u4F5C\u533A\u7BA1\u7406\u2026": "Manage workspaces\u2026",
  "\u663E\u793A {0} / {1} \u4E2A\u56FE\u6807{2}": "Showing {0} of {1} icons{2}",
  "\u7C98\u8D34\u5185\u5BB9\u4E2D\u68C0\u6D4B\u5230 {0} \u4E2A\u53EF\u7591 Markdown \u7B26\u53F7\uFF1B\u5DF2\u4FDD\u7559\u5E76\u6807\u51FA\u3002": "Found {0} suspicious Markdown markers in pasted text. They were kept and marked.",
  "{0} \xB7 \u7C7B\u578B\u9ED8\u8BA4": "{0} \xB7 Type default",
  "{0} \u7684\u5FEB\u6377\u64CD\u4F5C": "Quick actions for {0}",
  "\u5728 {0} \u4E2D\u65B0\u5EFA\u7B14\u8BB0": "Create a note in {0}",
  "{0} \u7684\u66F4\u591A\u64CD\u4F5C": "More actions for {0}",
  "Obsidian \u672A\u63D0\u4F9B\u201C{0}\u201D\u547D\u4EE4\u3002": "The \u201C{0}\u201D command is unavailable in Obsidian.",
  "\u7528\u4E8E\u63D2\u5165{0}\u3002": "Used when inserting {0}.",
  "\u5207\u6362 Vault\uFF1A{0}": "Switch vault: {0}",
  "\u5207\u6362\u5DE5\u4F5C\u533A\u5E03\u5C40\uFF1A{0}": "Switch workspace layout: {0}",
  "\u65B0\u5EFA\u6587\u4EF6\u5939": "New folder",
  "\u672A\u547D\u540D\u6587\u4EF6\u5939": "Untitled folder",
  "\u6587\u4EF6\u5939\u540D\u79F0": "Folder name",
  "\u521B\u5EFA": "Create",
  "\u521B\u5EFA\u4E2D\u2026": "Creating\u2026",
  "\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u76EE\u6807\u6587\u4EF6\u5939\u540E\u91CD\u8BD5\u3002": "The operation did not finish. Check the destination folder and try again.",
  "\u8BF7\u8F93\u5165\u6587\u4EF6\u5939\u540D\u79F0\u3002": "Enter a folder name.",
  "\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u4EE5\u70B9\u5F00\u5934\u3002": "Folder names cannot begin with a dot.",
  "\u8BF7\u8F93\u5165\u5355\u4E2A\u6587\u4EF6\u5939\u540D\u79F0\uFF0C\u4E0D\u80FD\u5305\u542B\u659C\u6760\u3001\u5192\u53F7\u6216\u5176\u4ED6\u65E0\u6548\u5B57\u7B26\u3002": "Enter one folder name without slashes, colons or other invalid characters.",
  "\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u4EE5\u70B9\u7ED3\u5C3E\u3002": "Folder names cannot end with a dot.",
  "\u6B64\u540D\u79F0\u662F\u7CFB\u7EDF\u4FDD\u7559\u540D\u79F0\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002": "This name is reserved by the system. Choose another.",
  "\u56FE\u5C42": "Layers",
  "\u4E3B\u9875": "Home",
  "\u4E66\u7B7E": "Bookmark",
  "\u9605\u8BFB": "Reading",
  "\u7075\u611F": "Ideas",
  "\u76EE\u6807": "Goals",
  "\u521B\u4F5C": "Create",
  "\u751F\u6D3B": "Life",
  "\u9886\u57DF": "Area",
  "\u5F52\u6863": "Archive",
  "\u4E2A\u4EBA": "Personal",
  "\u9009\u62E9 Space \u56FE\u6807": "Choose Space icon",
  "Space \u56FE\u6807": "Space icon",
  "\u8FD9\u4E2A\u6587\u4EF6\u5939\u5DF2\u4E0D\u5B58\u5728\uFF0C\u65E0\u6CD5\u65B0\u5EFA\u5B50\u6587\u4EF6\u5939\u3002": "This folder no longer exists. A subfolder cannot be created.",
  "\u539F\u6587\u4EF6\u5939\u5DF2\u88AB\u79FB\u52A8\u6216\u5220\u9664\uFF0C\u8BF7\u5173\u95ED\u6B64\u7A97\u53E3\u540E\u91CD\u65B0\u9009\u62E9\u4F4D\u7F6E\u3002": "The original folder moved or was deleted. Close this dialog and choose a new location.",
  "\u8FD9\u4E2A\u6587\u4EF6\u5939\u6B63\u5728\u521B\u5EFA\uFF0C\u8BF7\u7A0D\u5019\u3002": "This folder is being created. Please wait.",
  "\u6B64\u4F4D\u7F6E\u5DF2\u5B58\u5728\u540C\u540D\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002": "A file or folder with this name already exists here. Choose another.",
  "\u65B0\u5EFA\u6587\u4EF6\u5939\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540C\u6B65\u72B6\u6001\u6216\u6587\u4EF6\u5939\u5199\u5165\u6743\u9650\u540E\u91CD\u8BD5\u3002": "Could not create the folder. Check sync status and write access, then try again.",
  "\u8FD9\u4E2A\u6587\u4EF6\u5939\u5DF2\u4E0D\u5B58\u5728\uFF0C\u65E0\u6CD5\u65B0\u5EFA\u7B14\u8BB0\u3002": "This folder no longer exists. A note cannot be created.",
  "\u65B0\u5EFA\u7B14\u8BB0\u5931\u8D25\uFF0C\u539F\u6709\u6587\u4EF6\u6CA1\u6709\u88AB\u6539\u52A8\u3002": "Could not create the note. Existing files were not changed.",
  "\u6253\u5F00 Bucket Sidebar": "Open Bucket Sidebar",
  "\u65B0\u5EFA Bucket": "New Bucket",
  "\u65B0\u5EFA Project / Area": "New Project / Area",
  "\u628A\u5F53\u524D\u7B14\u8BB0\u52A0\u5165 Bucket": "Add current note to a Bucket",
  "\u5207\u6362\u5F53\u524D\u7B14\u8BB0\u7684\u7F6E\u9876\u72B6\u6001": "Toggle pin for current note",
  "\u64A4\u9500\u4E0A\u4E00\u6B21 Bucket \u53D8\u66F4": "Undo last Bucket change",
  "\u8BBE\u7F6E\u5F53\u524D\u7B14\u8BB0\u6240\u5728\u6587\u4EF6\u5939\u7684 Bucket \u6392\u5E8F": "Set Bucket sorting for the current folder",
  "\u4ECE Bucket Sidebar \u53D6\u6D88\u7F6E\u9876": "Unpin from Bucket Sidebar",
  "\u7F6E\u9876\u5230 Bucket Sidebar": "Pin to Bucket Sidebar",
  "\u6DFB\u52A0\u5230 Bucket\u2026": "Add to Bucket\u2026",
  "\u66F4\u65B0\u91CD\u547D\u540D\u540E\u7684\u5F15\u7528": "Update renamed references",
  "\u65E0\u6CD5\u521B\u5EFA\u5DE6\u4FA7\u680F\u89C6\u56FE": "Could not create the left sidebar view",
  "\u4F8B\u5982\uFF1A\u672C\u5468\u5173\u6CE8": "For example: This week",
  "\u4F8B\u5982\uFF1A\u5DE5\u4F5C\u3001\u4E2A\u4EBA\u6216 Project Atlas": "For example: Work, Personal or Project Atlas",
  "Project / Area \u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u4E5F\u4E0D\u80FD\u4E0E\u73B0\u6709\u540D\u79F0\u91CD\u590D": "Project / Area names must be nonempty and unique",
  "\u91CD\u547D\u540D Space": "Rename Space",
  "Space \u540D\u79F0": "Space name",
  "Space \u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u4E5F\u4E0D\u80FD\u4E0E\u73B0\u6709\u540D\u79F0\u91CD\u590D": "Space names must be nonempty and unique",
  "\u66F4\u6362 Space \u56FE\u6807": "Change Space icon",
  "\u79FB\u9664 Space": "Remove Space",
  "\u5DF2\u79FB\u9664 Space\uFF1B\u771F\u5B9E\u6587\u4EF6\u6CA1\u6709\u6539\u53D8\uFF0C\u53EF\u64A4\u9500": "Space removed. Files were not changed. You can undo this.",
  "\u81F3\u5C11\u9700\u8981\u4FDD\u7559\u4E00\u4E2A Space": "Keep at least one Space",
  "\u91CD\u547D\u540D Bucket": "Rename Bucket",
  "Bucket \u540D\u79F0": "Bucket name",
  "\u8BF7\u5148\u65B0\u5EFA\u4E00\u4E2A Bucket": "Create a Bucket first",
  "\u9009\u62E9\u76EE\u6807 Bucket\u2026": "Choose a destination Bucket\u2026",
  "\u6DFB\u52A0\u5F15\u7528": "Add reference",
  "\u8FD9\u4E2A\u5F15\u7528\u5DF2\u5728\u8BE5 Bucket \u4E2D": "This reference is already in the Bucket",
  "\u6279\u91CF\u6DFB\u52A0\u5F15\u7528": "Add references",
  "\u6240\u9009\u5185\u5BB9\u5DF2\u7ECF\u5728\u8FD9\u4E2A Bucket \u4E2D": "The selected items are already in this Bucket",
  "\u590D\u5236\u5F15\u7528\u5230\u53E6\u4E00\u4E2A Bucket": "Copy reference to another Bucket",
  "\u76EE\u6807 Bucket \u5DF2\u7ECF\u5305\u542B\u8FD9\u4E2A\u5F15\u7528": "The destination Bucket already contains this reference",
  "\u8C03\u6574 Bucket \u987A\u5E8F": "Reorder Buckets",
  "\u79FB\u9664\u5F15\u7528": "Remove reference",
  "\u5DF2\u79FB\u9664\u5F15\u7528\uFF1B\u771F\u5B9E\u6587\u4EF6\u6CA1\u6709\u6539\u53D8": "Reference removed. Files were not changed.",
  "\u7F6E\u9876\u5F15\u7528": "Pin reference",
  "\u5DF2\u7F6E\u9876\uFF1B\u771F\u5B9E\u6587\u4EF6\u6CA1\u6709\u79FB\u52A8": "Pinned. Files were not moved.",
  "\u8FD9\u4E2A\u9879\u76EE\u5DF2\u7ECF\u7F6E\u9876": "This item is already pinned",
  "\u53D6\u6D88\u7F6E\u9876": "Unpin",
  "\u5DF2\u53D6\u6D88\u7F6E\u9876\uFF1B\u771F\u5B9E\u6587\u4EF6\u6CA1\u6709\u6539\u53D8": "Unpinned. Files were not changed.",
  "\u79FB\u9664 Bucket": "Remove Bucket",
  "\u5DF2\u79FB\u9664\u865A\u62DF Bucket\uFF1B\u771F\u5B9E\u6587\u4EF6\u6CA1\u6709\u6539\u53D8\uFF0C\u53EF\u64A4\u9500": "Virtual Bucket removed. Files were not changed. You can undo this.",
  "\u6CA1\u6709\u53EF\u64A4\u9500\u7684 Bucket \u53D8\u66F4": "No Bucket change to undo",
  "Bucket \u6587\u4EF6\u5939\u6392\u5E8F\u2026": "Bucket folder sorting\u2026",
  "Bucket \u6587\u4EF6\u5939\u6392\u5E8F": "Bucket folder sorting",
  "\u4EC5\u5F71\u54CD\u6B64\u6587\u4EF6\u5939\u53CA\u672A\u5355\u72EC\u8BBE\u7F6E\u7684\u5B50\u6587\u4EF6\u5939\u3002\u6587\u4EF6\u5939\u4ECD\u5728\u524D\uFF1B\u65E5\u671F\u4F18\u5148\u8BFB\u53D6 created \u5C5E\u6027\uFF0C\u7F3A\u5931\u65F6\u4F7F\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF0C\u4E0D\u4F7F\u7528\u4FEE\u6539\u65F6\u95F4\u3002": "Applies to this folder and descendants without their own rules. Folders stay first. Dates use the created property, falling back to file creation time, never modification time.",
  "\u8DDF\u968F\u4E0A\u7EA7\uFF08\u9ED8\u8BA4\u6309\u540D\u79F0\uFF09": "Inherit (name by default)",
  "\u540D\u79F0\uFF1AA \u2192 Z": "Name: A \u2192 Z",
  "\u521B\u5EFA\u65F6\u95F4\uFF1A\u65B0 \u2192 \u65E7": "Created: newest first",
  "\u6587\u4EF6\u5939\u5DF2\u79FB\u52A8\u6216\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002": "The folder moved or was deleted. Choose it again.",
  "\u521B\u5EFA\u65F6\u95F4\uFF0C\u65B0\u5230\u65E7": "Created, newest first",
  "\u540D\u79F0\uFF0CA \u5230 Z": "Name, A to Z",
  "\u8C03\u6574\u6587\u4EF6\u5939\u6392\u5E8F": "Change folder sorting",
  "Bucket Sidebar \u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u5F00\u53D1\u8005\u63A7\u5236\u53F0": "Could not save Bucket Sidebar. Check the developer console.",
  "\u5916\u89C2": "Appearance",
  "\u663E\u793A Space \u540D\u79F0": "Show Space names",
  "\u9ED8\u8BA4\u53EA\u663E\u793A\u56FE\u6807\u3002Space \u6570\u91CF\u8F83\u5C11\u65F6\uFF0C\u53EF\u540C\u65F6\u663E\u793A\u56FE\u6807\u548C\u540D\u79F0\u3002": "Show icons only by default. With fewer Spaces, show names beside their icons.",
  "\u4FA7\u680F\u884C\u9AD8": "Sidebar row height",
  "\u6062\u590D\u9ED8\u8BA4\u884C\u9AD8": "Reset row height",
  "\u5F53\u524D\u6CA1\u6709\u6253\u5F00\u6587\u4EF6": "No file is open",
  "\u865A\u62DF Bucket \u5217\u8868": "Virtual Bucket list",
  "\u5206\u7EC4": "Groups",
  "Project / Area \u5207\u6362\u5668": "Project / Area switcher",
  "\u7F6E\u9876": "Pinned",
  "\u7F3A\u5931": "Missing",
  "\u8FD8\u6CA1\u6709 Bucket": "No Buckets yet",
  "Bucket \u53EA\u4FDD\u5B58\u5F15\u7528\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u5220\u9664\u771F\u5B9E\u6587\u4EF6\u3002": "Buckets store references. They do not move or delete your files.",
  "\u6DFB\u52A0\u7B14\u8BB0\u6216\u6587\u4EF6\u5939\u2026": "Add notes or folders\u2026",
  "\u91CD\u547D\u540D Space\u2026": "Rename Space\u2026",
  "\u66F4\u6362\u56FE\u6807\u2026": "Change icon\u2026",
  "\u79FB\u9664 Space\uFF08\u4E0D\u5220\u9664\u6587\u4EF6\uFF09": "Remove Space (keep files)",
  "\u8FD9\u4E2A\u6587\u4EF6\u5939\u5DF2\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u4F4D\u7F6E\u3002": "This folder no longer exists. Choose a new location.",
  "\u5728\u6B64\u6587\u4EF6\u5939\u4E2D\u65B0\u5EFA\u7B14\u8BB0": "Create a note in this folder",
  "\u65B0\u5EFA\u5B50\u6587\u4EF6\u5939\u2026": "New subfolder\u2026",
  "\u6253\u5F00\u7B14\u8BB0": "Open note",
  "\u6253\u5F00\u6587\u4EF6": "Open file",
  "\u91CD\u547D\u540D Bucket\u2026": "Rename Bucket\u2026",
  "\u79FB\u9664\u865A\u62DF Bucket\uFF08\u4E0D\u5220\u9664\u6587\u4EF6\uFF09": "Remove virtual Bucket (keep files)",
  "\u590D\u5236\u5F15\u7528\u5230\u53E6\u4E00\u4E2A Bucket\u2026": "Copy reference to another Bucket\u2026",
  "\u8FD8\u6CA1\u6709\u5176\u4ED6 Bucket": "No other Buckets yet",
  "\u9009\u62E9\u8981\u590D\u5236\u5230\u7684 Bucket\u2026": "Choose a Bucket to copy to\u2026",
  "\u5728\u5F53\u524D Bucket \u4E2D\u4E0A\u79FB": "Move up in this Bucket",
  "\u5728\u5F53\u524D Bucket \u4E2D\u4E0B\u79FB": "Move down in this Bucket",
  "\u4EC5\u79FB\u9664\u5F15\u7528\uFF08\u4FDD\u7559\u771F\u5B9E\u6587\u4EF6\uFF09": "Remove reference (keep file)",
  "\u4E3B\u7A7A\u95F4": "Main Space",
  "\u672A\u547D\u540D Bucket": "Untitled Bucket",
  "\u672A\u547D\u540D Space": "Untitled Space",
  "\u641C\u7D22 Markdown\u3001PDF \u6216\u6587\u4EF6\u5939\u2026": "Search Markdown, PDFs or folders\u2026",
  "\u641C\u7D22 Markdown\u3001PDF \u6216\u6587\u4EF6\u5939": "Search Markdown, PDFs or folders",
  "Vault \u6587\u4EF6\u5C42\u7EA7": "Vault file tree",
  "\u9009\u62E9\u6587\u4EF6\u5939\u4F1A\u5305\u542B\u5176\u540E\u4EE3\uFF1B\u53EF\u7EE7\u7EED\u53D6\u6D88\u4E0D\u9700\u8981\u7684\u5B50\u9879\u3002": "Selecting a folder includes its descendants. Deselect any items you do not need.",
  "\u6CA1\u6709\u5339\u914D\u7684\u6587\u4EF6\u6216\u6587\u4EF6\u5939": "No matching files or folders",
  "Vault \u4E2D\u6CA1\u6709 Markdown\u3001PDF \u6216\u6587\u4EF6\u5939": "No Markdown, PDFs or folders in this vault",
  "\u5DF2\u5728\u6B64 Bucket \u4E2D": "Already in this Bucket",
  "\u90E8\u5206\u9009\u4E2D": "Partially selected",
  "\u53D6\u6D88\u52A0\u5165": "Remove from selection",
  "\u52A0\u5165": "Add",
  "\u5C1A\u672A\u9009\u62E9\u65B0\u9879\u76EE": "No new items selected",
  "\u521B\u5EFA\u4F4D\u7F6E\uFF1A{0}": "Create in: {0}",
  "{0}  \xB7  {1} \u9879": "{0}  \xB7  {1} items",
  "\u6587\u4EF6\u5939\u5DF2\u521B\u5EFA\uFF1A{0}\uFF0C\u4F46\u672A\u80FD\u5237\u65B0\u4FA7\u680F\u3002": "Folder created: {0}, but the sidebar could not refresh.",
  "{0}/\u672A\u547D\u540D{1}.md": "{0}/Untitled{1}.md",
  "\u7B14\u8BB0\u5DF2\u521B\u5EFA\uFF1A{0}\uFF0C\u4F46\u672A\u80FD\u81EA\u52A8\u6253\u5F00\u3002": "Note created: {0}, but it could not be opened automatically.",
  "\u5DF2\u52A0\u5165 {0} \u9879": "Added {0} items",
  "\u5DF2\u64A4\u9500\uFF1A{0}": "Undone: {0}",
  "\u5F53\u524D\u751F\u6548\uFF1A{0}\u3002\u53EF\u901A\u8FC7 Bucket \u64A4\u9500\u547D\u4EE4\u6062\u590D\u3002": "Active: {0}. Use the Bucket undo command to revert.",
  "\u8C03\u6574 Bucket\u3001\u6587\u4EF6\u5939\u548C\u7B14\u8BB0\u7684\u6BCF\u884C\u9AD8\u5EA6\u3002\u8303\u56F4 {0}\u2013{1}px\uFF0C\u9ED8\u8BA4 {2}px\u3002": "Set row height for Buckets, folders and notes. Range: {0}\u2013{1}px. Default: {2}px.",
  "\u6536\u8D77 {0}": "Collapse {0}",
  "\u5C55\u5F00 {0}": "Expand {0}",
  "{0}\uFF08\u76EE\u6807\u5F53\u524D\u4E0D\u5B58\u5728\uFF09": "{0} (target unavailable)",
  "\u627E\u4E0D\u5230\u76EE\u6807\uFF1A{0}": "Target not found: {0}",
  "{0} \u4E2A\u5F15\u7528": "{0} references",
  "\u5411 {0} \u6DFB\u52A0\u5185\u5BB9": "Add items to {0}",
  "\u5728 {0} \u4E2D\u65B0\u5EFA\u2026": "Create in {0}\u2026",
  "\u6DFB\u52A0\u5230 {0}": "Add to {0}",
  "\u5DF2\u9009\u62E9 {0} \u9879": "{0} items selected",
  "\u52A0\u5165 {0} \u9879": "Add {0} items"
};

// src/locale/ui.ts
function interfaceLanguage() {
  var _a;
  if (typeof window === "undefined")
    return "zh";
  try {
    const lang = ((_a = window.localStorage) == null ? void 0 : _a.getItem("language")) || (typeof document === "undefined" ? "" : document.documentElement.lang) || "en";
    return lang.toLowerCase().startsWith("zh") ? "zh" : "en";
  } catch (e) {
    return "en";
  }
}
function localize(text, ...values) {
  var _a;
  const key = typeof text === "string" ? text : text.reduce((s, part, i) => s + (i ? `{${i - 1}}` : "") + part, "");
  const translated = interfaceLanguage() === "zh" ? key : (_a = english[key]) != null ? _a : key;
  return typeof text === "string" ? translated : translated.replace(/\{(\d+)\}/g, (match, i) => Number(i) < values.length ? String(values[Number(i)]) : match);
}

// src/main.ts
var import_obsidian3 = require("obsidian");

// src/model.ts
var DEFAULT_ROW_HEIGHT = 32;
var MIN_ROW_HEIGHT = 28;
var MAX_ROW_HEIGHT = 40;
var DEFAULT_SPACE_ID = "space-default";
var DEFAULT_SPACE_NAME = localize("\u4E3B\u7A7A\u95F4");
var DEFAULT_SPACE_ICON = "layers";
var idCounter = 0;
function createId(prefix) {
  idCounter += 1;
  return `${prefix}-${Date.now().toString(36)}-${idCounter.toString(36)}`;
}
function cleanVaultPath(path) {
  return path.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "").replace(/\/{2,}/g, "/");
}
function isSameOrDescendant(path, ancestor) {
  return path === ancestor || path.startsWith(`${ancestor}/`);
}
function normalizeDescendantPaths(parentPath, paths) {
  const parent = cleanVaultPath(parentPath);
  if (!parent || !paths)
    return [];
  const candidates = Array.from(
    new Set(
      paths.map(cleanVaultPath).filter((path) => path !== parent && path.startsWith(`${parent}/`))
    )
  ).sort((left, right) => left.split("/").length - right.split("/").length || left.localeCompare(right));
  return candidates.filter(
    (path, index) => !candidates.slice(0, index).some((ancestor) => isSameOrDescendant(path, ancestor))
  );
}
function isPathExcluded(entry, path) {
  if (entry.type !== "folder")
    return false;
  const candidate = cleanVaultPath(path);
  return (entry.excludedPaths || []).some((excluded) => isSameOrDescendant(candidate, excluded));
}
function createEmptyData() {
  const space = createSpace(DEFAULT_SPACE_NAME, DEFAULT_SPACE_ICON, DEFAULT_SPACE_ID);
  return {
    version: 2,
    spaces: [space],
    activeSpaceId: space.id,
    settings: { rowHeight: DEFAULT_ROW_HEIGHT, showSpaceNames: false }
  };
}
function normalizeRowHeight(value) {
  if (typeof value !== "number" || !Number.isFinite(value))
    return DEFAULT_ROW_HEIGHT;
  return Math.min(MAX_ROW_HEIGHT, Math.max(MIN_ROW_HEIGHT, Math.round(value)));
}
function normalizeFolderSortOrders(value) {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return void 0;
  const result = {};
  for (const [raw, order] of Object.entries(value)) {
    const path = cleanVaultPath(raw);
    if (!path || path.split("/").some((part) => [".", "..", "__proto__", "constructor", "prototype"].includes(part)))
      continue;
    if (order === "name-asc" || order === "created-desc")
      result[path] = order;
  }
  return Object.keys(result).length ? result : void 0;
}
function getFolderSortOrder(settings, folderPath) {
  var _a;
  let path = cleanVaultPath(folderPath);
  while (path) {
    const order = (_a = settings.folderSortOrders) == null ? void 0 : _a[path];
    if (order === "name-asc" || order === "created-desc")
      return order;
    path = path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : "";
  }
  return "name-asc";
}
function setFolderSortOrder(settings, rawPath, order) {
  const path = cleanVaultPath(rawPath);
  if (!path)
    return false;
  const rules = { ...settings.folderSortOrders };
  const previous = rules[path];
  if (order === "inherit")
    delete rules[path];
  else
    rules[path] = order;
  const normalized = normalizeFolderSortOrders(rules);
  if (previous === (normalized == null ? void 0 : normalized[path]))
    return false;
  if (normalized)
    settings.folderSortOrders = normalized;
  else
    delete settings.folderSortOrders;
  return true;
}
function createBucket(name) {
  const cleanedName = name.trim();
  return {
    id: createId("bucket"),
    name: cleanedName || localize("\u672A\u547D\u540D Bucket"),
    collapsed: false,
    entries: []
  };
}
function createSpace(name, icon = DEFAULT_SPACE_ICON, id) {
  const cleanedName = name.trim();
  const cleanedIcon = icon.trim();
  return {
    id: id || createId("space"),
    name: cleanedName || localize("\u672A\u547D\u540D Space"),
    icon: cleanedIcon || DEFAULT_SPACE_ICON,
    buckets: [],
    pinnedEntries: []
  };
}
function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}
function asRecord(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value))
    return null;
  return value;
}
function normalizeEntry(value) {
  const record = asRecord(value);
  if (!record)
    return null;
  if (record.type !== "file" && record.type !== "folder")
    return null;
  if (typeof record.path !== "string")
    return null;
  const path = cleanVaultPath(record.path);
  if (!path)
    return null;
  const expandedPaths = Array.isArray(record.expandedPaths) ? record.expandedPaths.filter((item) => typeof item === "string").map(cleanVaultPath).filter(Boolean) : [];
  const rawExcludedPaths = Array.isArray(record.excludedPaths) ? record.excludedPaths.filter((item) => typeof item === "string") : [];
  return {
    id: typeof record.id === "string" && record.id ? record.id : createId("entry"),
    type: record.type,
    path,
    label: typeof record.label === "string" && record.label.trim() ? record.label.trim() : void 0,
    expanded: record.expanded === true,
    expandedPaths,
    excludedPaths: record.type === "folder" ? normalizeDescendantPaths(path, rawExcludedPaths) : []
  };
}
function normalizeBucket(value) {
  const record = asRecord(value);
  if (!record)
    return null;
  const entries = Array.isArray(record.entries) ? record.entries.map(normalizeEntry).filter((entry) => entry !== null) : [];
  return {
    id: typeof record.id === "string" && record.id ? record.id : createId("bucket"),
    name: typeof record.name === "string" && record.name.trim() ? record.name.trim() : localize("\u672A\u547D\u540D Bucket"),
    collapsed: record.collapsed === true,
    entries
  };
}
function normalizePinnedEntries(value) {
  return Array.isArray(value) ? value.map(normalizeEntry).filter((entry) => entry !== null).filter(
    (entry, index, entries) => entries.findIndex((candidate) => candidate.type === entry.type && candidate.path === entry.path) === index
  ) : [];
}
function normalizeSpace(value) {
  const record = asRecord(value);
  if (!record)
    return null;
  const buckets = Array.isArray(record.buckets) ? record.buckets.map(normalizeBucket).filter((bucket) => bucket !== null) : [];
  return {
    id: typeof record.id === "string" && record.id ? record.id : createId("space"),
    name: typeof record.name === "string" && record.name.trim() ? record.name.trim() : localize("\u672A\u547D\u540D Space"),
    icon: typeof record.icon === "string" && record.icon.trim() ? record.icon.trim() : DEFAULT_SPACE_ICON,
    buckets,
    pinnedEntries: normalizePinnedEntries(record.pinnedEntries)
  };
}
function normalizeData(value) {
  const record = asRecord(value);
  let spaces = record && Array.isArray(record.spaces) ? record.spaces.map(normalizeSpace).filter((space) => space !== null) : [];
  if (spaces.length === 0) {
    const legacySpace = createSpace(DEFAULT_SPACE_NAME, DEFAULT_SPACE_ICON, DEFAULT_SPACE_ID);
    legacySpace.buckets = record && Array.isArray(record.buckets) ? record.buckets.map(normalizeBucket).filter((bucket) => bucket !== null) : [];
    legacySpace.pinnedEntries = normalizePinnedEntries(record == null ? void 0 : record.pinnedEntries);
    spaces = [legacySpace];
  }
  const requestedActiveSpaceId = record && typeof record.activeSpaceId === "string" ? record.activeSpaceId : "";
  const activeSpaceId = spaces.some((space) => space.id === requestedActiveSpaceId) ? requestedActiveSpaceId : spaces[0].id;
  const rawSettings = record ? asRecord(record.settings) : null;
  return {
    version: 2,
    spaces,
    activeSpaceId,
    settings: {
      rowHeight: normalizeRowHeight(rawSettings == null ? void 0 : rawSettings.rowHeight),
      showSpaceNames: (rawSettings == null ? void 0 : rawSettings.showSpaceNames) === true,
      ...normalizeFolderSortOrders(rawSettings == null ? void 0 : rawSettings.folderSortOrders) ? { folderSortOrders: normalizeFolderSortOrders(rawSettings == null ? void 0 : rawSettings.folderSortOrders) } : {}
    }
  };
}
function findSpace(data, spaceId) {
  return data.spaces.find((space) => space.id === spaceId);
}
function getActiveSpace(data) {
  const active = findSpace(data, data.activeSpaceId);
  if (active)
    return active;
  const fallback = data.spaces[0] || createSpace(DEFAULT_SPACE_NAME, DEFAULT_SPACE_ICON, DEFAULT_SPACE_ID);
  if (data.spaces.length === 0)
    data.spaces.push(fallback);
  data.activeSpaceId = fallback.id;
  return fallback;
}
function setActiveSpace(data, spaceId) {
  if (data.activeSpaceId === spaceId || !findSpace(data, spaceId))
    return false;
  data.activeSpaceId = spaceId;
  return true;
}
function addSpace(data, name, icon = DEFAULT_SPACE_ICON) {
  const cleanedName = name.trim();
  if (!cleanedName || data.spaces.some((space2) => space2.name === cleanedName))
    return null;
  const space = createSpace(cleanedName, icon);
  data.spaces.push(space);
  data.activeSpaceId = space.id;
  return space;
}
function renameSpace(data, spaceId, name) {
  const space = findSpace(data, spaceId);
  const cleanedName = name.trim();
  if (!space || !cleanedName || space.name === cleanedName)
    return false;
  if (data.spaces.some((candidate) => candidate.id !== spaceId && candidate.name === cleanedName))
    return false;
  space.name = cleanedName;
  return true;
}
function setSpaceIcon(data, spaceId, icon) {
  const space = findSpace(data, spaceId);
  const cleanedIcon = icon.trim();
  if (!space || !cleanedIcon || space.icon === cleanedIcon)
    return false;
  space.icon = cleanedIcon;
  return true;
}
function removeSpace(data, spaceId) {
  if (data.spaces.length <= 1)
    return false;
  const index = data.spaces.findIndex((space) => space.id === spaceId);
  if (index < 0)
    return false;
  data.spaces.splice(index, 1);
  if (data.activeSpaceId === spaceId) {
    data.activeSpaceId = data.spaces[Math.min(index, data.spaces.length - 1)].id;
  }
  return true;
}
function findSpaceForBucket(data, bucketId) {
  return data.spaces.find((space) => space.buckets.some((bucket) => bucket.id === bucketId));
}
function findBucket(data, bucketId) {
  const space = findSpaceForBucket(data, bucketId);
  return space ? space.buckets.find((bucket) => bucket.id === bucketId) : void 0;
}
function addBucket(data, name) {
  const bucket = createBucket(name);
  getActiveSpace(data).buckets.push(bucket);
  return bucket;
}
function renameBucket(data, bucketId, name) {
  const bucket = findBucket(data, bucketId);
  const cleanedName = name.trim();
  if (!bucket || !cleanedName || bucket.name === cleanedName)
    return false;
  bucket.name = cleanedName;
  return true;
}
function removeBucket(data, bucketId) {
  const space = findSpaceForBucket(data, bucketId);
  if (!space)
    return false;
  const index = space.buckets.findIndex((bucket) => bucket.id === bucketId);
  if (index < 0)
    return false;
  space.buckets.splice(index, 1);
  return true;
}
function isTargetPinned(data, type, rawPath) {
  const path = cleanVaultPath(rawPath);
  return Boolean(path) && getActiveSpace(data).pinnedEntries.some(
    (entry) => entry.type === type && entry.path === path
  );
}
function addPinnedEntry(data, target) {
  const path = cleanVaultPath(target.path);
  if (!path || isTargetPinned(data, target.type, path))
    return null;
  const entry = {
    id: createId("pin"),
    type: target.type,
    path,
    label: target.label && target.label.trim() ? target.label.trim() : void 0,
    expanded: false,
    expandedPaths: [],
    excludedPaths: []
  };
  getActiveSpace(data).pinnedEntries.push(entry);
  return entry;
}
function removePinnedEntry(data, type, rawPath) {
  const path = cleanVaultPath(rawPath);
  const pinnedEntries = getActiveSpace(data).pinnedEntries;
  const index = pinnedEntries.findIndex((entry) => entry.type === type && entry.path === path);
  if (index < 0)
    return false;
  pinnedEntries.splice(index, 1);
  return true;
}
function addEntryToBucket(data, bucketId, target, index) {
  const bucket = findBucket(data, bucketId);
  const path = cleanVaultPath(target.path);
  if (!bucket || !path)
    return null;
  const duplicate = bucket.entries.some((entry2) => entry2.type === target.type && entry2.path === path);
  if (duplicate)
    return null;
  const entry = {
    id: createId("entry"),
    type: target.type,
    path,
    label: target.label && target.label.trim() ? target.label.trim() : void 0,
    expanded: false,
    expandedPaths: [],
    excludedPaths: target.type === "folder" ? normalizeDescendantPaths(path, target.excludedPaths) : []
  };
  const insertionIndex = typeof index === "number" ? Math.max(0, Math.min(index, bucket.entries.length)) : bucket.entries.length;
  bucket.entries.splice(insertionIndex, 0, entry);
  return entry;
}
function removeEntryFromBucket(data, bucketId, entryId) {
  const bucket = findBucket(data, bucketId);
  if (!bucket)
    return false;
  const index = bucket.entries.findIndex((entry) => entry.id === entryId);
  if (index < 0)
    return false;
  bucket.entries.splice(index, 1);
  return true;
}
function reorderEntry(data, bucketId, entryId, targetIndex) {
  const bucket = findBucket(data, bucketId);
  if (!bucket)
    return false;
  const currentIndex = bucket.entries.findIndex((entry) => entry.id === entryId);
  if (currentIndex < 0)
    return false;
  const boundedTarget = Math.max(0, Math.min(targetIndex, bucket.entries.length));
  const adjustedTarget = currentIndex < boundedTarget ? boundedTarget - 1 : boundedTarget;
  if (currentIndex === adjustedTarget)
    return false;
  const removed = bucket.entries.splice(currentIndex, 1)[0];
  bucket.entries.splice(adjustedTarget, 0, removed);
  return true;
}
function copyEntryBetweenBuckets(data, sourceBucketId, entryId, targetBucketId, targetIndex) {
  const source = findBucket(data, sourceBucketId);
  const entry = source ? source.entries.find((candidate) => candidate.id === entryId) : void 0;
  if (!entry)
    return null;
  return addEntryToBucket(
    data,
    targetBucketId,
    { type: entry.type, path: entry.path, label: entry.label, excludedPaths: entry.excludedPaths },
    targetIndex
  );
}
function replacePath(path, oldPath, newPath, includeDescendants) {
  if (path === oldPath)
    return newPath;
  if (includeDescendants && path.startsWith(`${oldPath}/`)) {
    return `${newPath}${path.slice(oldPath.length)}`;
  }
  return path;
}
function updatePathsAfterRename(data, oldRawPath, newRawPath, renamedType) {
  const oldPath = cleanVaultPath(oldRawPath);
  const newPath = cleanVaultPath(newRawPath);
  if (!oldPath || !newPath || oldPath === newPath)
    return 0;
  let changed = 0;
  const includeDescendants = renamedType === "folder";
  if (includeDescendants && data.settings.folderSortOrders) {
    const rules = { ...data.settings.folderSortOrders };
    for (const [path, order] of Object.entries(data.settings.folderSortOrders)) {
      const nextPath = replacePath(path, oldPath, newPath, true);
      if (nextPath === path)
        continue;
      delete rules[path];
      if (!Object.prototype.hasOwnProperty.call(rules, nextPath))
        rules[nextPath] = order;
      changed += 1;
    }
    data.settings.folderSortOrders = rules;
  }
  const entryCollections = [];
  for (const space of data.spaces) {
    entryCollections.push(space.pinnedEntries);
    for (const bucket of space.buckets)
      entryCollections.push(bucket.entries);
  }
  for (const entries of entryCollections) {
    for (const entry of entries) {
      const nextPath = replacePath(entry.path, oldPath, newPath, includeDescendants);
      if (nextPath !== entry.path) {
        entry.path = nextPath;
        changed += 1;
      }
      if (entry.expandedPaths) {
        entry.expandedPaths = entry.expandedPaths.map(
          (path) => replacePath(path, oldPath, newPath, includeDescendants)
        );
      }
      if (entry.excludedPaths) {
        entry.excludedPaths = entry.excludedPaths.map(
          (path) => replacePath(path, oldPath, newPath, includeDescendants)
        );
      }
    }
  }
  return changed;
}

// src/target-picker.ts
var import_obsidian = require("obsidian");

// src/selection.ts
function depth(path) {
  return path.split("/").length;
}
function strictAncestor(candidate, path) {
  return candidate !== path && isSameOrDescendant(path, candidate);
}
function clearAtOrBelow(markers, path) {
  for (const candidate of Array.from(markers)) {
    if (isSameOrDescendant(candidate, path))
      markers.delete(candidate);
  }
}
function nearestMarker(path, markers) {
  let nearestPath = "";
  let nearestKind = null;
  for (const candidate of markers.selected) {
    if (isSameOrDescendant(path, candidate) && candidate.length > nearestPath.length) {
      nearestPath = candidate;
      nearestKind = "selected";
    }
  }
  for (const candidate of markers.excluded) {
    if (isSameOrDescendant(path, candidate) && candidate.length > nearestPath.length) {
      nearestPath = candidate;
      nearestKind = "excluded";
    }
  }
  return nearestKind;
}
function createSelectionMarkers() {
  return { selected: /* @__PURE__ */ new Set(), excluded: /* @__PURE__ */ new Set() };
}
function isMarkerSelected(rawPath, markers) {
  const path = cleanVaultPath(rawPath);
  return path ? nearestMarker(path, markers) === "selected" : false;
}
function toggleMarkerSelection(rawPath, markers) {
  const path = cleanVaultPath(rawPath);
  if (!path)
    return;
  const wasSelected = isMarkerSelected(path, markers);
  clearAtOrBelow(markers.selected, path);
  clearAtOrBelow(markers.excluded, path);
  if (wasSelected) {
    const inheritedFromParent = Array.from(markers.selected).some((candidate) => strictAncestor(candidate, path)) && nearestMarker(path, markers) === "selected";
    if (inheritedFromParent)
      markers.excluded.add(path);
    return;
  }
  if (!isMarkerSelected(path, markers))
    markers.selected.add(path);
}
function isMarkerPartial(rawPath, markers) {
  const path = cleanVaultPath(rawPath);
  if (!path)
    return false;
  if (!isMarkerSelected(path, markers))
    return false;
  return Array.from(markers.excluded).some((candidate) => strictAncestor(path, candidate));
}
function selectedPlanRoots(markers) {
  const selected = Array.from(markers.selected).sort(
    (left, right) => depth(left) - depth(right) || left.localeCompare(right)
  );
  const roots = [];
  for (const path of selected) {
    const coveringRoot = roots.find((root) => strictAncestor(root, path));
    if (!coveringRoot) {
      roots.push(path);
      continue;
    }
    const crossesExclusion = Array.from(markers.excluded).some(
      (excluded) => strictAncestor(coveringRoot, excluded) && isSameOrDescendant(path, excluded)
    );
    if (crossesExclusion)
      roots.push(path);
  }
  return roots;
}
function exclusionsForRoot(root, markers) {
  return Array.from(markers.excluded).filter((path) => strictAncestor(root, path)).sort((left, right) => depth(left) - depth(right) || left.localeCompare(right)).filter(
    (path, index, paths) => !paths.slice(0, index).some((ancestor) => isSameOrDescendant(path, ancestor))
  );
}

// src/target-picker.ts
function isBucketFile(file) {
  return file instanceof import_obsidian.TFile && ["md", "pdf"].includes(file.extension.toLowerCase());
}
function eligibleChildren(folder) {
  return folder.children.filter((child) => child instanceof import_obsidian.TFolder || isBucketFile(child)).sort((left, right) => {
    const leftFolder = left instanceof import_obsidian.TFolder;
    const rightFolder = right instanceof import_obsidian.TFolder;
    if (leftFolder !== rightFolder)
      return leftFolder ? -1 : 1;
    return left.name.localeCompare(right.name);
  });
}
function appendIcon(parent, icon, className) {
  const element = document.createElement("span");
  element.className = className;
  element.setAttribute("aria-hidden", "true");
  (0, import_obsidian.setIcon)(element, icon);
  parent.appendChild(element);
  return element;
}
var BatchTargetPickerModal = class extends import_obsidian.Modal {
  constructor(app, bucket, onSubmitTargets) {
    super(app);
    this.markers = createSelectionMarkers();
    this.expandedPaths = /* @__PURE__ */ new Set();
    this.filesByPath = /* @__PURE__ */ new Map();
    this.query = "";
    this.treeEl = null;
    this.confirmButton = null;
    this.countEl = null;
    this.bucket = bucket;
    this.onSubmitTargets = onSubmitTargets;
    this.indexFiles(this.app.vault.getRoot());
  }
  onOpen() {
    this.modalEl.classList.add("bucket-target-picker-modal");
    this.titleEl.textContent = localize`添加到 ${this.bucket.name}`;
    this.contentEl.replaceChildren();
    const layout = document.createElement("div");
    layout.className = "bucket-target-picker";
    const search = document.createElement("input");
    search.type = "search";
    search.className = "bucket-target-search";
    search.placeholder = localize("\u641C\u7D22 Markdown\u3001PDF \u6216\u6587\u4EF6\u5939\u2026");
    search.setAttribute("aria-label", localize("\u641C\u7D22 Markdown\u3001PDF \u6216\u6587\u4EF6\u5939"));
    search.addEventListener("input", () => {
      this.query = search.value.trim().toLocaleLowerCase();
      this.renderTree(false);
    });
    this.treeEl = document.createElement("div");
    this.treeEl.className = "bucket-target-tree";
    this.treeEl.setAttribute("role", "tree");
    this.treeEl.setAttribute("aria-label", localize("Vault \u6587\u4EF6\u5C42\u7EA7"));
    const hint = document.createElement("div");
    hint.className = "bucket-target-hint";
    hint.textContent = localize("\u9009\u62E9\u6587\u4EF6\u5939\u4F1A\u5305\u542B\u5176\u540E\u4EE3\uFF1B\u53EF\u7EE7\u7EED\u53D6\u6D88\u4E0D\u9700\u8981\u7684\u5B50\u9879\u3002");
    const footer = document.createElement("div");
    footer.className = "bucket-target-footer";
    this.countEl = document.createElement("div");
    this.countEl.className = "bucket-target-count";
    const footerActions = document.createElement("div");
    footerActions.className = "bucket-target-footer-actions";
    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.textContent = localize("\u53D6\u6D88");
    cancel.addEventListener("click", () => this.close());
    this.confirmButton = document.createElement("button");
    this.confirmButton.type = "button";
    this.confirmButton.className = "mod-cta";
    this.confirmButton.addEventListener("click", () => this.submit());
    footerActions.append(cancel, this.confirmButton);
    footer.append(this.countEl, footerActions);
    layout.append(search, this.treeEl, hint, footer);
    this.contentEl.appendChild(layout);
    this.renderTree(false);
    window.setTimeout(() => search.focus(), 0);
  }
  onClose() {
    this.modalEl.classList.remove("bucket-target-picker-modal");
    this.contentEl.replaceChildren();
    this.treeEl = null;
    this.confirmButton = null;
    this.countEl = null;
  }
  indexFiles(folder) {
    for (const child of eligibleChildren(folder)) {
      this.filesByPath.set(child.path, child);
      if (child instanceof import_obsidian.TFolder)
        this.indexFiles(child);
    }
  }
  renderTree(preserveScroll) {
    if (!this.treeEl)
      return;
    const previousScroll = preserveScroll ? this.treeEl.scrollTop : 0;
    this.treeEl.replaceChildren();
    const matchCache = /* @__PURE__ */ new Map();
    const root = this.app.vault.getRoot();
    for (const child of eligibleChildren(root)) {
      if (!this.matchesTree(child, matchCache))
        continue;
      this.renderNode(this.treeEl, child, 0, matchCache);
    }
    if (!this.treeEl.hasChildNodes()) {
      const empty = document.createElement("div");
      empty.className = "bucket-target-empty";
      empty.textContent = this.query ? localize("\u6CA1\u6709\u5339\u914D\u7684\u6587\u4EF6\u6216\u6587\u4EF6\u5939") : localize("Vault \u4E2D\u6CA1\u6709 Markdown\u3001PDF \u6216\u6587\u4EF6\u5939");
      this.treeEl.appendChild(empty);
    }
    this.treeEl.scrollTop = previousScroll;
    this.updateFooter();
  }
  renderNode(parent, file, depth2, matchCache) {
    const row = document.createElement("div");
    row.className = "bucket-target-row";
    row.style.setProperty("--bucket-picker-indent", `${depth2 * 14}px`);
    row.setAttribute("role", "treeitem");
    row.setAttribute("aria-level", String(depth2 + 1));
    const isFolder = file instanceof import_obsidian.TFolder;
    const hasMatchingChild = isFolder && eligibleChildren(file).some((child) => this.matchesTree(child, matchCache));
    const expanded = isFolder && (this.expandedPaths.has(file.path) || Boolean(this.query) && hasMatchingChild);
    if (isFolder)
      row.setAttribute("aria-expanded", String(expanded));
    if (isFolder) {
      const disclosure = document.createElement("button");
      disclosure.type = "button";
      disclosure.className = "bucket-target-disclosure";
      disclosure.setAttribute("aria-label", expanded ? localize`收起 ${file.path}` : localize`展开 ${file.path}`);
      (0, import_obsidian.setIcon)(disclosure, expanded ? "chevron-down" : "chevron-right");
      disclosure.addEventListener("click", () => this.toggleFolder(file.path));
      row.appendChild(disclosure);
    } else {
      const spacer = document.createElement("span");
      spacer.className = "bucket-target-disclosure-spacer";
      row.appendChild(spacer);
    }
    appendIcon(row, isFolder ? "folder" : "file-text", "bucket-target-icon");
    const label = document.createElement("button");
    label.type = "button";
    label.className = "bucket-target-label";
    label.textContent = file instanceof import_obsidian.TFile && file.extension.toLowerCase() === "md" ? file.basename : file.name;
    label.title = file.path;
    label.addEventListener("click", () => {
      if (isFolder)
        this.toggleFolder(file.path);
      else
        this.toggleTarget(file.path);
    });
    row.appendChild(label);
    const existing = this.isCoveredByExisting(file.path);
    const selected = existing || isMarkerSelected(file.path, this.markers);
    const partial = !existing && isMarkerPartial(file.path, this.markers);
    if (selected)
      row.classList.add("is-selected");
    if (partial)
      row.classList.add("is-partial");
    if (existing)
      row.classList.add("is-existing");
    row.setAttribute("aria-selected", String(selected));
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "bucket-target-toggle";
    if (selected)
      toggle.classList.add("is-selected");
    if (partial)
      toggle.classList.add("is-partial");
    if (existing)
      toggle.classList.add("is-existing");
    toggle.disabled = existing;
    toggle.setAttribute("aria-checked", partial ? "mixed" : String(selected));
    toggle.setAttribute("role", "checkbox");
    const stateLabel = existing ? localize("\u5DF2\u5728\u6B64 Bucket \u4E2D") : partial ? localize("\u90E8\u5206\u9009\u4E2D") : selected ? localize("\u53D6\u6D88\u52A0\u5165") : localize("\u52A0\u5165");
    toggle.setAttribute("aria-label", `${stateLabel}\uFF1A${file.path}`);
    toggle.title = stateLabel;
    (0, import_obsidian.setIcon)(toggle, partial ? "minus" : selected ? "check" : "plus");
    toggle.addEventListener("click", () => this.toggleTarget(file.path));
    row.appendChild(toggle);
    parent.appendChild(row);
    if (isFolder && expanded) {
      for (const child of eligibleChildren(file)) {
        if (!this.matchesTree(child, matchCache))
          continue;
        this.renderNode(parent, child, depth2 + 1, matchCache);
      }
    }
  }
  toggleFolder(path) {
    if (this.expandedPaths.has(path))
      this.expandedPaths.delete(path);
    else
      this.expandedPaths.add(path);
    this.renderTree(true);
  }
  toggleTarget(path) {
    if (this.isCoveredByExisting(path))
      return;
    toggleMarkerSelection(path, this.markers);
    this.renderTree(true);
  }
  matchesTree(file, cache) {
    if (!this.query)
      return true;
    const cached = cache.get(file.path);
    if (cached !== void 0)
      return cached;
    const matchesSelf = file.name.toLocaleLowerCase().includes(this.query) || file.path.toLocaleLowerCase().includes(this.query);
    const matchesChild = file instanceof import_obsidian.TFolder && eligibleChildren(file).some((child) => this.matchesTree(child, cache));
    const matches = matchesSelf || matchesChild;
    cache.set(file.path, matches);
    return matches;
  }
  isCoveredByExisting(path) {
    return this.bucket.entries.some((entry) => {
      if (entry.type === "file")
        return entry.path === path;
      return isSameOrDescendant(path, entry.path) && !isPathExcluded(entry, path);
    });
  }
  selectedItemCount() {
    let count = 0;
    for (const [path] of this.filesByPath) {
      if (!this.isCoveredByExisting(path) && isMarkerSelected(path, this.markers))
        count += 1;
    }
    return count;
  }
  buildTargets() {
    const targets = [];
    for (const path of selectedPlanRoots(this.markers)) {
      const file = this.filesByPath.get(path);
      if (!file || this.isCoveredByExisting(path))
        continue;
      if (file instanceof import_obsidian.TFolder) {
        const existingDescendants = this.bucket.entries.map((entry) => entry.path).filter((existingPath) => existingPath !== path && isSameOrDescendant(existingPath, path));
        const excludedPaths = normalizeDescendantPaths(path, [
          ...exclusionsForRoot(path, this.markers),
          ...existingDescendants
        ]);
        targets.push({ type: "folder", path, excludedPaths });
      } else {
        targets.push({ type: "file", path });
      }
    }
    return targets;
  }
  updateFooter() {
    const count = this.selectedItemCount();
    const targets = this.buildTargets();
    if (this.countEl)
      this.countEl.textContent = count > 0 ? localize`已选择 ${count} 项` : localize("\u5C1A\u672A\u9009\u62E9\u65B0\u9879\u76EE");
    if (this.confirmButton) {
      this.confirmButton.textContent = count > 0 ? localize`加入 ${count} 项` : localize("\u52A0\u5165");
      this.confirmButton.disabled = count === 0 || targets.length === 0;
    }
  }
  submit() {
    const count = this.selectedItemCount();
    const targets = this.buildTargets();
    if (count === 0 || targets.length === 0)
      return;
    this.onSubmitTargets(targets, count);
    this.close();
  }
};

// src/create-folder-modal.ts
var import_obsidian2 = require("obsidian");
var CreateFolderModal = class extends import_obsidian2.Modal {
  constructor(app, parentPath, createFolder) {
    super(app);
    this.parentPath = parentPath;
    this.createFolder = createFolder;
  }
  onOpen() {
    this.titleEl.textContent = localize("\u65B0\u5EFA\u6587\u4EF6\u5939");
    this.modalEl.classList.add("bucket-create-folder-modal");
    const form = document.createElement("form");
    form.className = "bucket-text-form";
    const location = document.createElement("p");
    location.className = "bucket-folder-location";
    location.textContent = localize`创建位置：${this.parentPath}`;
    const input = document.createElement("input");
    input.type = "text";
    input.className = "bucket-text-input";
    input.value = localize("\u672A\u547D\u540D\u6587\u4EF6\u5939");
    input.setAttribute("aria-label", localize("\u6587\u4EF6\u5939\u540D\u79F0"));
    const error = document.createElement("p");
    error.className = "bucket-folder-error";
    error.setAttribute("role", "alert");
    error.hidden = true;
    const clearError = () => {
      error.hidden = true;
      error.textContent = "";
      input.removeAttribute("aria-invalid");
      input.setCustomValidity("");
    };
    input.addEventListener("input", clearError);
    const actions = document.createElement("div");
    actions.className = "bucket-modal-actions";
    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.textContent = localize("\u53D6\u6D88");
    cancel.addEventListener("click", () => this.close());
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "mod-cta";
    submit.textContent = localize("\u521B\u5EFA");
    let pending = false;
    form.noValidate = true;
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (pending)
        return;
      pending = true;
      clearError();
      input.disabled = submit.disabled = cancel.disabled = true;
      submit.textContent = localize("\u521B\u5EFA\u4E2D\u2026");
      form.setAttribute("aria-busy", "true");
      try {
        const message = await this.createFolder(input.value.trim());
        if (message === null) {
          this.close();
          return;
        }
        error.textContent = message;
        error.hidden = false;
        input.setAttribute("aria-invalid", "true");
        input.setCustomValidity(message);
      } catch (cause) {
        console.error("Bucket Sidebar: folder dialog", cause);
        error.textContent = localize("\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5\u76EE\u6807\u6587\u4EF6\u5939\u540E\u91CD\u8BD5\u3002");
        error.hidden = false;
      } finally {
        pending = false;
        input.disabled = submit.disabled = cancel.disabled = false;
        submit.textContent = localize("\u521B\u5EFA");
        form.removeAttribute("aria-busy");
        if (input.isConnected)
          input.focus();
      }
    });
    actions.append(cancel, submit);
    form.append(location, input, error, actions);
    this.contentEl.replaceChildren(form);
    window.setTimeout(() => {
      if (input.isConnected) {
        input.focus();
        input.select();
      }
    }, 0);
  }
  onClose() {
    this.contentEl.replaceChildren();
  }
};

// src/folder-name.ts
function validateFolderName(value) {
  const name = value.trim();
  if (!name)
    return localize("\u8BF7\u8F93\u5165\u6587\u4EF6\u5939\u540D\u79F0\u3002");
  if (name.startsWith("."))
    return localize("\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u4EE5\u70B9\u5F00\u5934\u3002");
  if (/[\\/:*?"<>|\u0000-\u001f\u007f]/.test(name)) {
    return localize("\u8BF7\u8F93\u5165\u5355\u4E2A\u6587\u4EF6\u5939\u540D\u79F0\uFF0C\u4E0D\u80FD\u5305\u542B\u659C\u6760\u3001\u5192\u53F7\u6216\u5176\u4ED6\u65E0\u6548\u5B57\u7B26\u3002");
  }
  if (name.endsWith("."))
    return localize("\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u4EE5\u70B9\u7ED3\u5C3E\u3002");
  if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(name)) {
    return localize("\u6B64\u540D\u79F0\u662F\u7CFB\u7EDF\u4FDD\u7559\u540D\u79F0\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002");
  }
  return null;
}

// src/folder-sort.ts
function parseCreatedDate(value) {
  if (value instanceof Date)
    return Number.isFinite(value.getTime()) ? value.getTime() : null;
  if (typeof value !== "string")
    return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.\d{1,3})?)?(Z|[+-]\d{2}:\d{2})?)?$/.exec(value.trim());
  if (!match)
    return null;
  const [, year, month, day, hour, minute, second, zone] = match;
  const y = Number(year), m = Number(month), d = Number(day);
  const calendar = new Date(Date.UTC(y, m - 1, d));
  if (y < 1e3 || calendar.getUTCFullYear() !== y || calendar.getUTCMonth() !== m - 1 || calendar.getUTCDate() !== d)
    return null;
  if (Number(hour || 0) > 23 || Number(minute || 0) > 59 || Number(second || 0) > 59)
    return null;
  if (zone && zone !== "Z" && (Number(zone.slice(1, 3)) > 23 || Number(zone.slice(4)) > 59))
    return null;
  const timestamp = hour === void 0 ? new Date(y, m - 1, d).getTime() : Date.parse(value.trim().replace(" ", "T"));
  return Number.isFinite(timestamp) ? timestamp : null;
}
function fileCreated(child) {
  return typeof child.ctime === "number" && Number.isFinite(child.ctime) && child.ctime > 0 ? child.ctime : 0;
}
function compareFolderChildren(left, right, order) {
  var _a, _b;
  if (left.folder !== right.folder)
    return left.folder ? -1 : 1;
  if (!left.folder && order === "created-desc") {
    const leftTime = (_a = parseCreatedDate(left.created)) != null ? _a : fileCreated(left);
    const rightTime = (_b = parseCreatedDate(right.created)) != null ? _b : fileCreated(right);
    if (leftTime !== rightTime)
      return rightTime - leftTime;
    const tie = fileCreated(right) - fileCreated(left);
    if (tie)
      return tie;
  }
  return left.name.localeCompare(right.name) || left.path.localeCompare(right.path);
}

// src/main.ts
var VIEW_TYPE_BUCKET_SIDEBAR = "bucket-sidebar-view";
var DRAG_MIME = "application/x-obsidian-bucket-entry";
var bucketViewLabelSequence = 0;
var SPACE_ICON_CHOICES = [
  { id: "layers", label: localize("\u56FE\u5C42") },
  { id: "home", label: localize("\u4E3B\u9875") },
  { id: "briefcase", label: localize("\u5DE5\u4F5C") },
  { id: "folder", label: localize("\u6587\u4EF6\u5939") },
  { id: "star", label: localize("\u6536\u85CF") },
  { id: "bookmark", label: localize("\u4E66\u7B7E") },
  { id: "book-open", label: localize("\u9605\u8BFB") },
  { id: "lightbulb", label: localize("\u7075\u611F") },
  { id: "target", label: localize("\u76EE\u6807") },
  { id: "rocket", label: localize("\u9879\u76EE") },
  { id: "code-2", label: localize("\u4EE3\u7801") },
  { id: "palette", label: localize("\u521B\u4F5C") },
  { id: "heart", label: localize("\u751F\u6D3B") },
  { id: "globe-2", label: localize("\u9886\u57DF") },
  { id: "archive", label: localize("\u5F52\u6863") },
  { id: "user", label: localize("\u4E2A\u4EBA") }
];
function isBucketFile2(file) {
  return file instanceof import_obsidian3.TFile && ["md", "pdf"].includes(file.extension.toLowerCase());
}
function targetFromFile(file) {
  if (file instanceof import_obsidian3.TFolder && file.path)
    return { type: "folder", path: file.path };
  if (isBucketFile2(file))
    return { type: "file", path: file.path };
  return null;
}
function displayName(path) {
  const parts = path.split("/");
  const name = parts[parts.length - 1] || path;
  return name.toLowerCase().endsWith(".md") ? name.slice(0, -3) : name;
}
function iconButton(parent, icon, label, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "bucket-icon-button clickable-icon";
  button.setAttribute("aria-label", label);
  button.title = label;
  (0, import_obsidian3.setIcon)(button, icon);
  button.addEventListener("click", onClick);
  parent.appendChild(button);
  return button;
}
var TextInputModal = class extends import_obsidian3.Modal {
  constructor(app, heading, initialValue, placeholder, submitLabel, onSubmitValue) {
    super(app);
    this.heading = heading;
    this.initialValue = initialValue;
    this.placeholder = placeholder;
    this.submitLabel = submitLabel;
    this.onSubmitValue = onSubmitValue;
  }
  onOpen() {
    this.titleEl.textContent = this.heading;
    this.contentEl.replaceChildren();
    const form = document.createElement("form");
    form.className = "bucket-text-form";
    const input = document.createElement("input");
    input.type = "text";
    input.value = this.initialValue;
    input.placeholder = this.placeholder;
    input.className = "bucket-text-input";
    input.setAttribute("aria-label", this.heading);
    const actions = document.createElement("div");
    actions.className = "bucket-modal-actions";
    const cancel = document.createElement("button");
    cancel.type = "button";
    cancel.textContent = localize("\u53D6\u6D88");
    cancel.addEventListener("click", () => this.close());
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.className = "mod-cta";
    submit.textContent = this.submitLabel;
    actions.append(cancel, submit);
    form.append(input, actions);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = input.value.trim();
      if (!value)
        return;
      this.onSubmitValue(value);
      this.close();
    });
    this.contentEl.appendChild(form);
    window.setTimeout(() => {
      input.focus();
      input.select();
    }, 0);
  }
  onClose() {
    this.contentEl.replaceChildren();
  }
};
var SpaceIconPickerModal = class extends import_obsidian3.Modal {
  constructor(app, currentIcon, onChooseIcon) {
    super(app);
    this.currentIcon = currentIcon;
    this.onChooseIcon = onChooseIcon;
  }
  onOpen() {
    this.modalEl.classList.add("bucket-space-icon-modal");
    this.titleEl.textContent = localize("\u9009\u62E9 Space \u56FE\u6807");
    this.contentEl.replaceChildren();
    const grid = document.createElement("div");
    grid.className = "bucket-space-icon-grid";
    grid.setAttribute("role", "listbox");
    grid.setAttribute("aria-label", localize("Space \u56FE\u6807"));
    let selectedButton = null;
    for (const choice of SPACE_ICON_CHOICES) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "bucket-space-icon-choice";
      button.setAttribute("role", "option");
      const selected = choice.id === this.currentIcon;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-selected", String(selected));
      button.title = choice.label;
      const icon = document.createElement("span");
      icon.className = "bucket-space-icon-choice-symbol";
      icon.setAttribute("aria-hidden", "true");
      (0, import_obsidian3.setIcon)(icon, choice.id);
      const label = document.createElement("span");
      label.className = "bucket-space-icon-choice-label";
      label.textContent = choice.label;
      button.append(icon, label);
      button.addEventListener("click", () => {
        this.onChooseIcon(choice.id);
        this.close();
      });
      grid.appendChild(button);
      if (selected)
        selectedButton = button;
    }
    this.contentEl.appendChild(grid);
    window.setTimeout(() => {
      var _a;
      return (_a = selectedButton || grid.querySelector("button")) == null ? void 0 : _a.focus();
    }, 0);
  }
  onClose() {
    this.modalEl.classList.remove("bucket-space-icon-modal");
    this.contentEl.replaceChildren();
  }
};
var BucketPickerModal = class extends import_obsidian3.FuzzySuggestModal {
  constructor(app, buckets, placeholder, onChooseBucket) {
    super(app);
    this.buckets = buckets;
    this.onChooseBucket = onChooseBucket;
    this.setPlaceholder(placeholder);
  }
  getItems() {
    return this.buckets;
  }
  getItemText(bucket) {
    return localize`${bucket.name}  ·  ${bucket.entries.length} 项`;
  }
  onChooseItem(bucket) {
    this.onChooseBucket(bucket);
  }
};
var BucketSidebarPlugin = class extends import_obsidian3.Plugin {
  constructor() {
    super(...arguments);
    this.data = createEmptyData();
    this.history = [];
    this.creatingFolders = /* @__PURE__ */ new Set();
    this.pendingSubfolders = /* @__PURE__ */ new Set();
  }
  promptCreateFolder(folderPath) {
    const parent = this.app.vault.getAbstractFileByPath(folderPath);
    if (!(parent instanceof import_obsidian3.TFolder)) {
      new import_obsidian3.Notice(localize("\u8FD9\u4E2A\u6587\u4EF6\u5939\u5DF2\u4E0D\u5B58\u5728\uFF0C\u65E0\u6CD5\u65B0\u5EFA\u5B50\u6587\u4EF6\u5939\u3002"));
      return;
    }
    const space = this.activeSpace;
    new CreateFolderModal(
      this.app,
      folderPath,
      (name) => this.createFolderInFolder(folderPath, name, parent, space)
    ).open();
  }
  async createFolderInFolder(folderPath, value, expectedParent, space = this.activeSpace) {
    const invalidName = validateFolderName(value);
    if (invalidName)
      return invalidName;
    if (this.app.vault.getAbstractFileByPath(folderPath) !== expectedParent || !(expectedParent instanceof import_obsidian3.TFolder)) {
      return localize("\u539F\u6587\u4EF6\u5939\u5DF2\u88AB\u79FB\u52A8\u6216\u5220\u9664\uFF0C\u8BF7\u5173\u95ED\u6B64\u7A97\u53E3\u540E\u91CD\u65B0\u9009\u62E9\u4F4D\u7F6E\u3002");
    }
    const path = `${folderPath ? folderPath + "/" : ""}${value.trim()}`;
    if (this.pendingSubfolders.has(path))
      return localize("\u8FD9\u4E2A\u6587\u4EF6\u5939\u6B63\u5728\u521B\u5EFA\uFF0C\u8BF7\u7A0D\u5019\u3002");
    if (this.app.vault.getAbstractFileByPath(path))
      return localize("\u6B64\u4F4D\u7F6E\u5DF2\u5B58\u5728\u540C\u540D\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002");
    this.pendingSubfolders.add(path);
    let created = false;
    try {
      await this.app.vault.createFolder(path);
      created = true;
      for (const entry of [...space.pinnedEntries, ...space.buckets.flatMap((bucket) => bucket.entries)]) {
        if (entry.type !== "folder" || !(folderPath === entry.path || folderPath.startsWith(entry.path + "/")))
          continue;
        entry.expanded = true;
        const paths = new Set(entry.expandedPaths || []);
        let ancestor = folderPath;
        while (ancestor !== entry.path) {
          paths.add(ancestor);
          ancestor = ancestor.slice(0, ancestor.lastIndexOf("/"));
        }
        entry.expandedPaths = [...paths];
      }
      await this.persist();
      return null;
    } catch (error) {
      console.error("Bucket Sidebar: create folder", error);
      if (created) {
        new import_obsidian3.Notice(localize`文件夹已创建：${path}，但未能刷新侧栏。`);
        return null;
      }
      return this.app.vault.getAbstractFileByPath(path) ? localize("\u6B64\u4F4D\u7F6E\u5DF2\u5B58\u5728\u540C\u540D\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002") : localize("\u65B0\u5EFA\u6587\u4EF6\u5939\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u540C\u6B65\u72B6\u6001\u6216\u6587\u4EF6\u5939\u5199\u5165\u6743\u9650\u540E\u91CD\u8BD5\u3002");
    } finally {
      this.pendingSubfolders.delete(path);
    }
  }
  async createNoteInFolder(folderPath) {
    if (this.creatingFolders.has(folderPath))
      return null;
    const folder = this.app.vault.getAbstractFileByPath(folderPath);
    if (!(folder instanceof import_obsidian3.TFolder)) {
      new import_obsidian3.Notice(localize("\u8FD9\u4E2A\u6587\u4EF6\u5939\u5DF2\u4E0D\u5B58\u5728\uFF0C\u65E0\u6CD5\u65B0\u5EFA\u7B14\u8BB0\u3002"));
      return null;
    }
    const space = this.activeSpace;
    let created = null;
    this.creatingFolders.add(folderPath);
    try {
      for (let index = 0; index < 1e4; index++) {
        if (this.app.vault.getAbstractFileByPath(folderPath) !== folder)
          throw new Error("Folder changed");
        const path = localize`${folderPath}/未命名${index ? ` ${index}` : ""}.md`;
        if (this.app.vault.getAbstractFileByPath(path))
          continue;
        try {
          created = await this.app.vault.create(path, "");
          break;
        } catch (error) {
          if (!this.app.vault.getAbstractFileByPath(path))
            throw error;
        }
      }
      if (!created)
        throw new Error("No available note name");
      for (const entry of [...space.pinnedEntries, ...space.buckets.flatMap((bucket) => bucket.entries)]) {
        if (entry.type !== "folder" || !(folderPath === entry.path || folderPath.startsWith(entry.path + "/")))
          continue;
        entry.expanded = true;
        const paths = new Set(entry.expandedPaths || []);
        let ancestor = folderPath;
        while (ancestor !== entry.path) {
          paths.add(ancestor);
          ancestor = ancestor.slice(0, ancestor.lastIndexOf("/"));
        }
        entry.expandedPaths = [...paths];
      }
      await this.persist();
      const leaf = this.app.workspace.getLeaf(false);
      await leaf.openFile(created);
      const title = leaf.view.containerEl.querySelector(".inline-title");
      if (title == null ? void 0 : title.isContentEditable) {
        title.focus();
        const range = title.ownerDocument.createRange();
        range.selectNodeContents(title);
        const selection = title.ownerDocument.getSelection();
        selection == null ? void 0 : selection.removeAllRanges();
        selection == null ? void 0 : selection.addRange(range);
      }
      return created;
    } catch (error) {
      console.error("Bucket Sidebar: create note", error);
      new import_obsidian3.Notice(created ? localize`笔记已创建：${created.path}，但未能自动打开。` : localize("\u65B0\u5EFA\u7B14\u8BB0\u5931\u8D25\uFF0C\u539F\u6709\u6587\u4EF6\u6CA1\u6709\u88AB\u6539\u52A8\u3002"));
      return created;
    } finally {
      this.creatingFolders.delete(folderPath);
    }
  }
  get activeSpace() {
    return getActiveSpace(this.data);
  }
  async onload() {
    this.data = normalizeData(await this.loadData());
    this.addSettingTab(new BucketSidebarSettingTab(this.app, this));
    this.registerView(VIEW_TYPE_BUCKET_SIDEBAR, (leaf) => new BucketSidebarView(leaf, this));
    this.addRibbonIcon("layers", localize("\u6253\u5F00 Bucket Sidebar"), () => {
      void this.activateView();
    });
    this.addCommand({
      id: "open-bucket-sidebar",
      name: localize("\u6253\u5F00 Bucket Sidebar"),
      callback: () => {
        void this.activateView();
      }
    });
    this.addCommand({
      id: "create-bucket",
      name: localize("\u65B0\u5EFA Bucket"),
      callback: () => this.promptCreateBucket()
    });
    this.addCommand({
      id: "create-space",
      name: localize("\u65B0\u5EFA Project / Area"),
      callback: () => this.promptCreateSpace()
    });
    this.addCommand({
      id: "add-active-file-to-bucket",
      name: localize("\u628A\u5F53\u524D\u7B14\u8BB0\u52A0\u5165 Bucket"),
      checkCallback: (checking) => {
        const active = this.app.workspace.getActiveFile();
        if (!active)
          return false;
        if (!checking)
          this.chooseBucketForTarget({ type: "file", path: active.path });
        return true;
      }
    });
    this.addCommand({
      id: "toggle-pin-active-file",
      name: localize("\u5207\u6362\u5F53\u524D\u7B14\u8BB0\u7684\u7F6E\u9876\u72B6\u6001"),
      checkCallback: (checking) => {
        const active = this.app.workspace.getActiveFile();
        if (!active)
          return false;
        if (!checking)
          this.togglePinned({ type: "file", path: active.path });
        return true;
      }
    });
    this.addCommand({
      id: "undo-bucket-change",
      name: localize("\u64A4\u9500\u4E0A\u4E00\u6B21 Bucket \u53D8\u66F4"),
      checkCallback: (checking) => {
        if (this.history.length === 0)
          return false;
        if (!checking)
          this.undo();
        return true;
      }
    });
    this.addCommand({
      id: "sort-active-folder",
      name: localize("\u8BBE\u7F6E\u5F53\u524D\u7B14\u8BB0\u6240\u5728\u6587\u4EF6\u5939\u7684 Bucket \u6392\u5E8F"),
      checkCallback: (checking) => {
        var _a;
        const folder = (_a = this.app.workspace.getActiveFile()) == null ? void 0 : _a.parent;
        if (!(folder == null ? void 0 : folder.path))
          return false;
        if (!checking)
          this.promptFolderSort(folder.path);
        return true;
      }
    });
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        const target = targetFromFile(file);
        if (!target)
          return;
        this.addFolderSortMenu(menu, file);
        menu.addItem((item) => {
          const pinned = this.isPinned(target);
          item.setTitle(pinned ? localize("\u4ECE Bucket Sidebar \u53D6\u6D88\u7F6E\u9876") : localize("\u7F6E\u9876\u5230 Bucket Sidebar")).setIcon(pinned ? "pin-off" : "pin").onClick(() => this.togglePinned(target));
        });
        menu.addItem((item) => {
          item.setTitle(localize("\u6DFB\u52A0\u5230 Bucket\u2026")).setIcon("layers").onClick(() => this.chooseBucketForTarget(target));
        });
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file, oldPath) => {
        const renamedType = file instanceof import_obsidian3.TFolder ? "folder" : "file";
        const before = cloneData(this.data);
        const changed = updatePathsAfterRename(this.data, oldPath, file.path, renamedType);
        if (changed === 0) {
          this.refreshViews();
          return;
        }
        this.pushHistory(localize("\u66F4\u65B0\u91CD\u547D\u540D\u540E\u7684\u5F15\u7528"), before);
        void this.persist();
      })
    );
    this.registerEvent(this.app.workspace.on("file-open", () => this.refreshViews()));
    this.registerEvent(this.app.vault.on("create", () => this.refreshViews()));
    this.registerEvent(this.app.vault.on("delete", () => this.refreshViews()));
    this.registerEvent(this.app.metadataCache.on("changed", (file) => {
      if (file.parent && getFolderSortOrder(this.data.settings, file.parent.path) === "created-desc")
        this.refreshViews();
    }));
    this.registerEvent(this.app.metadataCache.on("resolved", () => this.refreshViews()));
    this.app.workspace.onLayoutReady(() => {
      if (this.app.workspace.getLeavesOfType(VIEW_TYPE_BUCKET_SIDEBAR).length === 0) {
        void this.activateView();
      }
    });
  }
  onunload() {
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_BUCKET_SIDEBAR);
  }
  async activateView() {
    let leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE_BUCKET_SIDEBAR)[0] || null;
    if (!leaf) {
      leaf = this.app.workspace.getLeftLeaf(false);
      if (!leaf) {
        new import_obsidian3.Notice(localize("\u65E0\u6CD5\u521B\u5EFA\u5DE6\u4FA7\u680F\u89C6\u56FE"));
        return;
      }
      await leaf.setViewState({ type: VIEW_TYPE_BUCKET_SIDEBAR, active: true });
    }
    this.app.workspace.revealLeaf(leaf);
  }
  promptCreateBucket() {
    new TextInputModal(
      this.app,
      localize("\u65B0\u5EFA Bucket"),
      "",
      localize("\u4F8B\u5982\uFF1A\u672C\u5468\u5173\u6CE8"),
      localize("\u521B\u5EFA"),
      (name) => {
        this.mutate(localize("\u65B0\u5EFA Bucket"), () => {
          addBucket(this.data, name);
          return true;
        });
      }
    ).open();
  }
  promptCreateSpace() {
    new TextInputModal(
      this.app,
      localize("\u65B0\u5EFA Project / Area"),
      "",
      localize("\u4F8B\u5982\uFF1A\u5DE5\u4F5C\u3001\u4E2A\u4EBA\u6216 Project Atlas"),
      localize("\u521B\u5EFA"),
      (name) => {
        const changed = this.mutate(localize("\u65B0\u5EFA Project / Area"), () => addSpace(this.data, name) !== null);
        if (!changed)
          new import_obsidian3.Notice(localize("Project / Area \u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u4E5F\u4E0D\u80FD\u4E0E\u73B0\u6709\u540D\u79F0\u91CD\u590D"));
      }
    ).open();
  }
  promptRenameSpace(space) {
    new TextInputModal(
      this.app,
      localize("\u91CD\u547D\u540D Space"),
      space.name,
      localize("Space \u540D\u79F0"),
      localize("\u4FDD\u5B58"),
      (name) => {
        const changed = this.mutate(localize("\u91CD\u547D\u540D Space"), () => renameSpace(this.data, space.id, name));
        if (!changed && name !== space.name)
          new import_obsidian3.Notice(localize("Space \u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF0C\u4E5F\u4E0D\u80FD\u4E0E\u73B0\u6709\u540D\u79F0\u91CD\u590D"));
      }
    ).open();
  }
  promptChangeSpaceIcon(space) {
    new SpaceIconPickerModal(this.app, space.icon, (icon) => {
      this.mutate(localize("\u66F4\u6362 Space \u56FE\u6807"), () => setSpaceIcon(this.data, space.id, icon));
    }).open();
  }
  activateSpace(spaceId) {
    if (!setActiveSpace(this.data, spaceId))
      return;
    void this.persist();
  }
  removeSpace(spaceId) {
    const changed = this.mutate(localize("\u79FB\u9664 Space"), () => removeSpace(this.data, spaceId));
    if (changed)
      new import_obsidian3.Notice(localize("\u5DF2\u79FB\u9664 Space\uFF1B\u771F\u5B9E\u6587\u4EF6\u6CA1\u6709\u6539\u53D8\uFF0C\u53EF\u64A4\u9500"));
    else
      new import_obsidian3.Notice(localize("\u81F3\u5C11\u9700\u8981\u4FDD\u7559\u4E00\u4E2A Space"));
  }
  promptRenameBucket(bucket) {
    new TextInputModal(
      this.app,
      localize("\u91CD\u547D\u540D Bucket"),
      bucket.name,
      localize("Bucket \u540D\u79F0"),
      localize("\u4FDD\u5B58"),
      (name) => {
        this.mutate(localize("\u91CD\u547D\u540D Bucket"), () => renameBucket(this.data, bucket.id, name));
      }
    ).open();
  }
  promptAddTarget(bucketId) {
    const bucket = findBucket(this.data, bucketId);
    if (!bucket)
      return;
    new BatchTargetPickerModal(this.app, bucket, (targets, selectedItemCount) => {
      this.addTargets(bucketId, targets, selectedItemCount);
    }).open();
  }
  chooseBucketForTarget(target) {
    const buckets = this.activeSpace.buckets;
    if (buckets.length === 0) {
      new import_obsidian3.Notice(localize("\u8BF7\u5148\u65B0\u5EFA\u4E00\u4E2A Bucket"));
      this.promptCreateBucket();
      return;
    }
    new BucketPickerModal(this.app, buckets, localize("\u9009\u62E9\u76EE\u6807 Bucket\u2026"), (bucket) => {
      this.addTarget(bucket.id, target);
    }).open();
  }
  addTarget(bucketId, target, index) {
    const changed = this.mutate(
      localize("\u6DFB\u52A0\u5F15\u7528"),
      () => addEntryToBucket(this.data, bucketId, target, index) !== null
    );
    if (!changed)
      new import_obsidian3.Notice(localize("\u8FD9\u4E2A\u5F15\u7528\u5DF2\u5728\u8BE5 Bucket \u4E2D"));
  }
  addTargets(bucketId, targets, selectedItemCount) {
    let added = 0;
    const changed = this.mutate(localize("\u6279\u91CF\u6DFB\u52A0\u5F15\u7528"), () => {
      for (const target of targets) {
        if (addEntryToBucket(this.data, bucketId, target) !== null)
          added += 1;
      }
      return added > 0;
    });
    if (changed)
      new import_obsidian3.Notice(localize`已加入 ${selectedItemCount} 项`);
    else
      new import_obsidian3.Notice(localize("\u6240\u9009\u5185\u5BB9\u5DF2\u7ECF\u5728\u8FD9\u4E2A Bucket \u4E2D"));
  }
  copyEntry(sourceBucketId, entryId, targetBucketId, targetIndex) {
    const changed = this.mutate(
      localize("\u590D\u5236\u5F15\u7528\u5230\u53E6\u4E00\u4E2A Bucket"),
      () => copyEntryBetweenBuckets(this.data, sourceBucketId, entryId, targetBucketId, targetIndex) !== null
    );
    if (!changed)
      new import_obsidian3.Notice(localize("\u76EE\u6807 Bucket \u5DF2\u7ECF\u5305\u542B\u8FD9\u4E2A\u5F15\u7528"));
  }
  reorder(bucketId, entryId, targetIndex) {
    this.mutate(localize("\u8C03\u6574 Bucket \u987A\u5E8F"), () => reorderEntry(this.data, bucketId, entryId, targetIndex));
  }
  removeEntry(bucketId, entryId) {
    const changed = this.mutate(localize("\u79FB\u9664\u5F15\u7528"), () => removeEntryFromBucket(this.data, bucketId, entryId));
    if (changed)
      new import_obsidian3.Notice(localize("\u5DF2\u79FB\u9664\u5F15\u7528\uFF1B\u771F\u5B9E\u6587\u4EF6\u6CA1\u6709\u6539\u53D8"));
  }
  isPinned(target) {
    return isTargetPinned(this.data, target.type, target.path);
  }
  togglePinned(target) {
    if (this.isPinned(target))
      this.unpinTarget(target);
    else
      this.pinTarget(target);
  }
  pinTarget(target) {
    const changed = this.mutate(localize("\u7F6E\u9876\u5F15\u7528"), () => addPinnedEntry(this.data, target) !== null);
    if (changed)
      new import_obsidian3.Notice(localize("\u5DF2\u7F6E\u9876\uFF1B\u771F\u5B9E\u6587\u4EF6\u6CA1\u6709\u79FB\u52A8"));
    else
      new import_obsidian3.Notice(localize("\u8FD9\u4E2A\u9879\u76EE\u5DF2\u7ECF\u7F6E\u9876"));
  }
  unpinTarget(target) {
    const changed = this.mutate(localize("\u53D6\u6D88\u7F6E\u9876"), () => removePinnedEntry(this.data, target.type, target.path));
    if (changed)
      new import_obsidian3.Notice(localize("\u5DF2\u53D6\u6D88\u7F6E\u9876\uFF1B\u771F\u5B9E\u6587\u4EF6\u6CA1\u6709\u6539\u53D8"));
  }
  removeBucket(bucketId) {
    const changed = this.mutate(localize("\u79FB\u9664 Bucket"), () => removeBucket(this.data, bucketId));
    if (changed)
      new import_obsidian3.Notice(localize("\u5DF2\u79FB\u9664\u865A\u62DF Bucket\uFF1B\u771F\u5B9E\u6587\u4EF6\u6CA1\u6709\u6539\u53D8\uFF0C\u53EF\u64A4\u9500"));
  }
  setUiState(operation) {
    if (!operation())
      return;
    void this.persist();
  }
  undo() {
    const previous = this.history.pop();
    if (!previous) {
      new import_obsidian3.Notice(localize("\u6CA1\u6709\u53EF\u64A4\u9500\u7684 Bucket \u53D8\u66F4"));
      return;
    }
    const currentSettings = this.data.settings;
    this.data = previous.data;
    const previousSortOrders = this.data.settings.folderSortOrders;
    this.data.settings = { ...currentSettings };
    if (previousSortOrders)
      this.data.settings.folderSortOrders = previousSortOrders;
    else
      delete this.data.settings.folderSortOrders;
    void this.persist();
    new import_obsidian3.Notice(localize`已撤销：${previous.label}`);
  }
  canUndo() {
    return this.history.length > 0;
  }
  async setSidebarRowHeight(value) {
    const rowHeight = normalizeRowHeight(value);
    if (this.data.settings.rowHeight === rowHeight)
      return;
    this.data.settings.rowHeight = rowHeight;
    await this.persist();
  }
  async setShowSpaceNames(value) {
    if (this.data.settings.showSpaceNames === value)
      return;
    this.data.settings.showSpaceNames = value;
    await this.persist();
  }
  addFolderSortMenu(menu, file) {
    if (!(file instanceof import_obsidian3.TFolder) || !file.path)
      return;
    menu.addItem((item) => item.setTitle(localize("Bucket \u6587\u4EF6\u5939\u6392\u5E8F\u2026")).setIcon("arrow-down-wide-narrow").onClick(() => this.promptFolderSort(file.path)));
  }
  promptFolderSort(path) {
    if (!(this.app.vault.getAbstractFileByPath(path) instanceof import_obsidian3.TFolder))
      return;
    const modal = new import_obsidian3.Modal(this.app);
    modal.titleEl.textContent = localize("Bucket \u6587\u4EF6\u5939\u6392\u5E8F");
    const resolved = getFolderSortOrder(this.data.settings, path);
    new import_obsidian3.Setting(modal.contentEl).setName(path).setDesc(localize("\u4EC5\u5F71\u54CD\u6B64\u6587\u4EF6\u5939\u53CA\u672A\u5355\u72EC\u8BBE\u7F6E\u7684\u5B50\u6587\u4EF6\u5939\u3002\u6587\u4EF6\u5939\u4ECD\u5728\u524D\uFF1B\u65E5\u671F\u4F18\u5148\u8BFB\u53D6 created \u5C5E\u6027\uFF0C\u7F3A\u5931\u65F6\u4F7F\u7528\u6587\u4EF6\u521B\u5EFA\u65F6\u95F4\uFF0C\u4E0D\u4F7F\u7528\u4FEE\u6539\u65F6\u95F4\u3002")).addDropdown((dropdown) => {
      var _a;
      return dropdown.addOption("inherit", localize("\u8DDF\u968F\u4E0A\u7EA7\uFF08\u9ED8\u8BA4\u6309\u540D\u79F0\uFF09")).addOption("name-asc", localize("\u540D\u79F0\uFF1AA \u2192 Z")).addOption("created-desc", localize("\u521B\u5EFA\u65F6\u95F4\uFF1A\u65B0 \u2192 \u65E7")).setValue(((_a = this.data.settings.folderSortOrders) == null ? void 0 : _a[path]) || "inherit").onChange((value) => {
        if (!(this.app.vault.getAbstractFileByPath(path) instanceof import_obsidian3.TFolder)) {
          new import_obsidian3.Notice(localize("\u6587\u4EF6\u5939\u5DF2\u79FB\u52A8\u6216\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002"));
          modal.close();
          return;
        }
        this.changeFolderSort(path, value);
        modal.close();
      });
    });
    const description = document.createElement("p");
    description.textContent = localize`当前生效：${resolved === "created-desc" ? localize("\u521B\u5EFA\u65F6\u95F4\uFF0C\u65B0\u5230\u65E7") : localize("\u540D\u79F0\uFF0CA \u5230 Z")}。可通过 Bucket 撤销命令恢复。`;
    modal.contentEl.appendChild(description);
    modal.open();
  }
  changeFolderSort(path, order) {
    this.mutate(localize("\u8C03\u6574\u6587\u4EF6\u5939\u6392\u5E8F"), () => setFolderSortOrder(this.data.settings, path, order));
  }
  mutate(label, operation) {
    const before = cloneData(this.data);
    if (!operation())
      return false;
    this.pushHistory(label, before);
    void this.persist();
    return true;
  }
  pushHistory(label, data) {
    this.history.push({ label, data });
    if (this.history.length > 30)
      this.history.shift();
  }
  async persist() {
    try {
      await this.saveData(this.data);
      this.refreshViews();
    } catch (error) {
      console.error("Bucket Sidebar: failed to save data", error);
      new import_obsidian3.Notice(localize("Bucket Sidebar \u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u67E5\u770B\u5F00\u53D1\u8005\u63A7\u5236\u53F0"));
    }
  }
  refreshViews() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_BUCKET_SIDEBAR)) {
      if (leaf.view instanceof BucketSidebarView)
        leaf.view.render();
    }
  }
};
var BucketSidebarSettingTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.bucketPlugin = plugin;
  }
  display() {
    this.containerEl.empty();
    new import_obsidian3.Setting(this.containerEl).setName(localize("\u5916\u89C2")).setHeading();
    new import_obsidian3.Setting(this.containerEl).setName(localize("\u663E\u793A Space \u540D\u79F0")).setDesc(localize("\u9ED8\u8BA4\u53EA\u663E\u793A\u56FE\u6807\u3002Space \u6570\u91CF\u8F83\u5C11\u65F6\uFF0C\u53EF\u540C\u65F6\u663E\u793A\u56FE\u6807\u548C\u540D\u79F0\u3002")).addToggle((toggle) => {
      toggle.setValue(this.bucketPlugin.data.settings.showSpaceNames).onChange((value) => {
        void this.bucketPlugin.setShowSpaceNames(value);
      });
    });
    const rowHeightSetting = new import_obsidian3.Setting(this.containerEl).setName(localize("\u4FA7\u680F\u884C\u9AD8")).setDesc(localize`调整 Bucket、文件夹和笔记的每行高度。范围 ${MIN_ROW_HEIGHT}–${MAX_ROW_HEIGHT}px，默认 ${DEFAULT_ROW_HEIGHT}px。`);
    rowHeightSetting.addSlider((slider) => {
      slider.setLimits(MIN_ROW_HEIGHT, MAX_ROW_HEIGHT, 1).setValue(this.bucketPlugin.data.settings.rowHeight).setDynamicTooltip().onChange((value) => {
        void this.bucketPlugin.setSidebarRowHeight(value);
      });
    });
    rowHeightSetting.addExtraButton((button) => {
      button.setIcon("reset").setTooltip(localize("\u6062\u590D\u9ED8\u8BA4\u884C\u9AD8")).onClick(() => {
        void this.bucketPlugin.setSidebarRowHeight(DEFAULT_ROW_HEIGHT).then(() => this.display());
      });
    });
  }
};
var BucketSidebarView = class extends import_obsidian3.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.rootEl = null;
    this.plugin = plugin;
    this.addAction("layout-grid", localize("\u65B0\u5EFA Project / Area"), () => this.plugin.promptCreateSpace());
    this.addAction("plus", localize("\u65B0\u5EFA Bucket"), () => this.plugin.promptCreateBucket());
    this.addCurrentAction = this.addAction("file-plus", localize("\u628A\u5F53\u524D\u7B14\u8BB0\u52A0\u5165 Bucket"), () => {
      const current = this.app.workspace.getActiveFile();
      if (!current) {
        new import_obsidian3.Notice(localize("\u5F53\u524D\u6CA1\u6709\u6253\u5F00\u6587\u4EF6"));
        return;
      }
      this.plugin.chooseBucketForTarget({ type: "file", path: current.path });
    });
    this.undoAction = this.addAction("undo", localize("\u64A4\u9500\u4E0A\u4E00\u6B21 Bucket \u53D8\u66F4"), () => {
      if (this.plugin.canUndo())
        this.plugin.undo();
    });
  }
  getViewType() {
    return VIEW_TYPE_BUCKET_SIDEBAR;
  }
  getDisplayText() {
    return "Bucket";
  }
  getIcon() {
    return "layers";
  }
  async onOpen() {
    this.rootEl = document.createElement("div");
    this.rootEl.className = "bucket-sidebar-root";
    this.contentEl.replaceChildren(this.rootEl);
    this.render();
  }
  async onClose() {
    this.rootEl = null;
    this.contentEl.replaceChildren();
  }
  render() {
    if (!this.rootEl)
      return;
    this.rootEl.replaceChildren();
    this.rootEl.style.setProperty("--bucket-row-height", `${this.plugin.data.settings.rowHeight}px`);
    this.syncNativeActions();
    this.rootEl.appendChild(this.renderSpaceSwitcher());
    const activeSpace = this.plugin.activeSpace;
    const list = document.createElement("div");
    list.className = "bucket-list";
    list.setAttribute("role", "tree");
    const treeLabel = document.createElement("span");
    treeLabel.className = "bucket-accessible-label";
    treeLabel.id = `bucket-tree-label-${++bucketViewLabelSequence}`;
    treeLabel.textContent = localize("\u865A\u62DF Bucket \u5217\u8868");
    list.setAttribute("aria-labelledby", treeLabel.id);
    list.appendChild(treeLabel);
    const hasPinnedEntries = activeSpace.pinnedEntries.length > 0;
    if (hasPinnedEntries) {
      list.appendChild(this.renderPinnedSection());
      if (activeSpace.buckets.length > 0) {
        const groupsHeading = this.renderSectionHeading(localize("\u5206\u7EC4"));
        groupsHeading.classList.add("bucket-groups-heading");
        list.appendChild(groupsHeading);
      }
    }
    if (activeSpace.buckets.length === 0) {
      list.appendChild(this.renderEmptyState());
    } else {
      for (const bucket of activeSpace.buckets)
        list.appendChild(this.renderBucket(bucket));
    }
    this.rootEl.appendChild(list);
  }
  renderSpaceSwitcher() {
    const wrapper = document.createElement("div");
    wrapper.className = "bucket-space-switcher-wrap";
    const switcher = document.createElement("div");
    switcher.className = "bucket-space-switcher";
    const tabs = document.createElement("div");
    tabs.className = "bucket-space-tabs";
    tabs.setAttribute("role", "radiogroup");
    tabs.setAttribute("aria-label", localize("Project / Area \u5207\u6362\u5668"));
    const spaces = this.plugin.data.spaces;
    const activeSpaceId = this.plugin.data.activeSpaceId;
    for (let index = 0; index < spaces.length; index += 1) {
      const space = spaces[index];
      const active = space.id === activeSpaceId;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "bucket-space-tab";
      button.classList.toggle("is-active", active);
      button.dataset.spaceId = space.id;
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", String(active));
      button.setAttribute("aria-label", space.name);
      button.tabIndex = active ? 0 : -1;
      button.title = space.name;
      const icon = document.createElement("span");
      icon.className = "bucket-space-tab-icon";
      icon.setAttribute("aria-hidden", "true");
      (0, import_obsidian3.setIcon)(icon, space.icon || DEFAULT_SPACE_ICON);
      button.appendChild(icon);
      if (this.plugin.data.settings.showSpaceNames) {
        const label = document.createElement("span");
        label.className = "bucket-space-tab-label";
        label.textContent = space.name;
        button.appendChild(label);
      }
      button.addEventListener("click", () => this.plugin.activateSpace(space.id));
      button.addEventListener("contextmenu", (event) => this.showSpaceMenu(event, space));
      button.addEventListener("keydown", (event) => {
        let targetIndex = index;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          targetIndex = (index + 1) % spaces.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          targetIndex = (index - 1 + spaces.length) % spaces.length;
        } else if (event.key === "Home") {
          targetIndex = 0;
        } else if (event.key === "End") {
          targetIndex = spaces.length - 1;
        } else {
          return;
        }
        event.preventDefault();
        const target = spaces[targetIndex];
        this.plugin.activateSpace(target.id);
        window.setTimeout(() => this.focusSpaceTab(target.id), 0);
      });
      tabs.appendChild(button);
    }
    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "bucket-space-add";
    addButton.setAttribute("aria-label", localize("\u65B0\u5EFA Project / Area"));
    addButton.title = localize("\u65B0\u5EFA Project / Area");
    const addIcon = document.createElement("span");
    addIcon.setAttribute("aria-hidden", "true");
    (0, import_obsidian3.setIcon)(addIcon, "plus");
    addButton.appendChild(addIcon);
    addButton.addEventListener("click", () => this.plugin.promptCreateSpace());
    switcher.appendChild(tabs);
    switcher.appendChild(addButton);
    wrapper.appendChild(switcher);
    return wrapper;
  }
  focusSpaceTab(spaceId) {
    var _a;
    const buttons = (_a = this.rootEl) == null ? void 0 : _a.querySelectorAll(".bucket-space-tab");
    if (!buttons)
      return;
    for (const button of Array.from(buttons)) {
      if (button.dataset.spaceId === spaceId) {
        button.focus();
        return;
      }
    }
  }
  renderPinnedSection() {
    const section = document.createElement("section");
    section.className = "bucket-pinned-section";
    section.setAttribute("role", "group");
    section.setAttribute("aria-label", localize("\u7F6E\u9876"));
    section.appendChild(this.renderSectionHeading(localize("\u7F6E\u9876")));
    const entries = document.createElement("div");
    entries.className = "bucket-pinned-entries";
    entries.setAttribute("role", "group");
    for (const entry of this.plugin.activeSpace.pinnedEntries) {
      entries.appendChild(this.renderPinnedEntry(entry));
    }
    section.appendChild(entries);
    return section;
  }
  renderSectionHeading(label) {
    const heading = document.createElement("div");
    heading.className = "bucket-section-heading";
    heading.textContent = label;
    heading.setAttribute("role", "heading");
    heading.setAttribute("aria-level", "2");
    return heading;
  }
  renderPinnedEntry(entry) {
    var _a;
    const wrapper = document.createElement("div");
    wrapper.className = "bucket-entry-wrapper bucket-pinned-entry";
    wrapper.dataset.entryId = entry.id;
    const target = this.app.vault.getAbstractFileByPath(entry.path);
    const validFolder = entry.type === "folder" && target instanceof import_obsidian3.TFolder ? target : null;
    const validFile = entry.type === "file" && isBucketFile2(target) ? target : null;
    const missing = validFolder === null && validFile === null;
    const row = document.createElement("div");
    row.className = "bucket-entry-row";
    row.setAttribute("role", "treeitem");
    row.setAttribute("aria-level", "1");
    row.dataset.bucketPath = entry.path;
    row.dataset.bucketKind = entry.type;
    if (missing)
      row.classList.add("is-missing");
    if (validFile && ((_a = this.app.workspace.getActiveFile()) == null ? void 0 : _a.path) === validFile.path) {
      row.classList.add("is-active");
      row.setAttribute("aria-current", "page");
    }
    row.addEventListener("contextmenu", (event) => this.showPinnedMenu(event, entry));
    if (entry.type === "folder") {
      const disclosure = iconButton(
        row,
        entry.expanded ? "chevron-down" : "chevron-right",
        entry.expanded ? localize`收起 ${entry.path}` : localize`展开 ${entry.path}`,
        (event) => {
          event.stopPropagation();
          if (!validFolder)
            return;
          this.plugin.setUiState(() => {
            entry.expanded = !entry.expanded;
            return true;
          });
        }
      );
      disclosure.classList.add("bucket-disclosure");
      disclosure.disabled = validFolder === null;
      disclosure.setAttribute("aria-expanded", String(entry.expanded === true));
    } else {
      const spacer = document.createElement("span");
      spacer.className = "bucket-disclosure-spacer";
      row.appendChild(spacer);
    }
    const leading = document.createElement("span");
    leading.className = "bucket-entry-icon";
    leading.setAttribute("aria-hidden", "true");
    (0, import_obsidian3.setIcon)(leading, entry.type === "folder" ? "folder" : "file-text");
    row.appendChild(leading);
    const label = document.createElement("button");
    label.type = "button";
    label.className = "bucket-entry-label";
    label.textContent = entry.label || displayName(entry.path);
    label.title = missing ? localize`${entry.path}（目标当前不存在）` : entry.path;
    label.addEventListener("click", () => {
      if (validFile) {
        void this.app.workspace.getLeaf(false).openFile(validFile);
      } else if (validFolder) {
        this.plugin.setUiState(() => {
          entry.expanded = !entry.expanded;
          return true;
        });
      } else {
        new import_obsidian3.Notice(localize`找不到目标：${entry.path}`);
      }
    });
    row.appendChild(label);
    if (missing) {
      const status = document.createElement("span");
      status.className = "bucket-missing-label";
      status.textContent = localize("\u7F3A\u5931");
      row.appendChild(status);
    }
    const actions = document.createElement("div");
    actions.className = "bucket-row-actions";
    if (validFolder)
      this.addCreationAction(actions, validFolder.path);
    iconButton(actions, "more-horizontal", localize`${label.textContent || entry.path} 的更多操作`, (event) => {
      event.stopPropagation();
      this.showPinnedMenu(event, entry);
    });
    row.appendChild(actions);
    wrapper.appendChild(row);
    if (validFolder && entry.expanded) {
      const children = document.createElement("div");
      children.className = "bucket-folder-children";
      children.setAttribute("role", "group");
      this.renderFolderChildren(children, entry, validFolder, 1, 1);
      wrapper.appendChild(children);
    }
    return wrapper;
  }
  syncNativeActions() {
    this.setNativeActionEnabled(this.addCurrentAction, this.app.workspace.getActiveFile() !== null);
    this.setNativeActionEnabled(this.undoAction, this.plugin.canUndo());
  }
  setNativeActionEnabled(action, enabled) {
    action.classList.toggle("is-disabled", !enabled);
    action.setAttribute("aria-disabled", String(!enabled));
  }
  renderEmptyState() {
    const empty = document.createElement("div");
    empty.className = "bucket-empty-state";
    const heading = document.createElement("div");
    heading.className = "bucket-empty-heading";
    heading.textContent = localize("\u8FD8\u6CA1\u6709 Bucket");
    const description = document.createElement("div");
    description.className = "bucket-empty-description";
    description.textContent = localize("Bucket \u53EA\u4FDD\u5B58\u5F15\u7528\uFF0C\u4E0D\u4F1A\u79FB\u52A8\u6216\u5220\u9664\u771F\u5B9E\u6587\u4EF6\u3002");
    const create = document.createElement("button");
    create.type = "button";
    create.className = "mod-cta";
    create.textContent = localize("\u65B0\u5EFA Bucket");
    create.addEventListener("click", () => this.plugin.promptCreateBucket());
    empty.append(heading, description, create);
    return empty;
  }
  renderBucket(bucket) {
    const section = document.createElement("section");
    section.className = "bucket-section";
    section.dataset.bucketId = bucket.id;
    section.setAttribute("role", "treeitem");
    section.setAttribute("aria-expanded", String(!bucket.collapsed));
    const header = document.createElement("div");
    header.className = "bucket-header";
    const disclosure = iconButton(
      header,
      bucket.collapsed ? "chevron-right" : "chevron-down",
      bucket.collapsed ? localize`展开 ${bucket.name}` : localize`收起 ${bucket.name}`,
      () => {
        this.plugin.setUiState(() => {
          bucket.collapsed = !bucket.collapsed;
          return true;
        });
      }
    );
    disclosure.classList.add("bucket-disclosure");
    disclosure.setAttribute("aria-expanded", String(!bucket.collapsed));
    const bucketIcon = document.createElement("span");
    bucketIcon.className = "bucket-leading-icon";
    bucketIcon.setAttribute("aria-hidden", "true");
    (0, import_obsidian3.setIcon)(bucketIcon, "layers");
    header.appendChild(bucketIcon);
    const name = document.createElement("button");
    name.type = "button";
    name.className = "bucket-name";
    name.textContent = bucket.name;
    name.title = bucket.name;
    name.addEventListener("click", () => disclosure.click());
    header.appendChild(name);
    const count = document.createElement("span");
    count.className = "bucket-count";
    count.textContent = String(bucket.entries.length);
    count.setAttribute("aria-label", localize`${bucket.entries.length} 个引用`);
    header.appendChild(count);
    const actions = document.createElement("div");
    actions.className = "bucket-row-actions";
    iconButton(actions, "plus", localize`向 ${bucket.name} 添加内容`, (event) => {
      event.stopPropagation();
      this.plugin.promptAddTarget(bucket.id);
    });
    iconButton(actions, "more-horizontal", localize`${bucket.name} 的更多操作`, (event) => {
      event.stopPropagation();
      this.showBucketMenu(event, bucket);
    });
    header.appendChild(actions);
    header.addEventListener("contextmenu", (event) => this.showBucketMenu(event, bucket));
    header.addEventListener("dragover", (event) => this.prepareDrop(event, bucket.id));
    header.addEventListener("drop", (event) => {
      event.stopPropagation();
      this.handleDrop(event, bucket.id, bucket.entries.length);
    });
    section.appendChild(header);
    const entries = document.createElement("div");
    entries.className = "bucket-entries";
    entries.setAttribute("role", "group");
    entries.hidden = bucket.collapsed === true;
    entries.addEventListener("dragover", (event) => this.prepareDrop(event, bucket.id));
    entries.addEventListener("drop", (event) => this.handleDrop(event, bucket.id, bucket.entries.length));
    if (bucket.entries.length === 0) {
      const empty = document.createElement("button");
      empty.type = "button";
      empty.className = "bucket-entry-empty";
      empty.textContent = localize("\u6DFB\u52A0\u7B14\u8BB0\u6216\u6587\u4EF6\u5939\u2026");
      empty.addEventListener("click", () => this.plugin.promptAddTarget(bucket.id));
      entries.appendChild(empty);
    } else {
      bucket.entries.forEach((entry, index) => {
        entries.appendChild(this.renderEntry(bucket, entry, index));
      });
    }
    section.appendChild(entries);
    section.addEventListener("dragenter", () => section.classList.add("is-drop-target"));
    section.addEventListener("dragleave", (event) => {
      const related = event.relatedTarget;
      if (!(related instanceof Node) || !section.contains(related))
        section.classList.remove("is-drop-target");
    });
    section.addEventListener("drop", () => section.classList.remove("is-drop-target"));
    return section;
  }
  renderEntry(bucket, entry, index) {
    var _a;
    const wrapper = document.createElement("div");
    wrapper.className = "bucket-entry-wrapper";
    wrapper.dataset.entryId = entry.id;
    const target = this.app.vault.getAbstractFileByPath(entry.path);
    const validFolder = entry.type === "folder" && target instanceof import_obsidian3.TFolder ? target : null;
    const validFile = entry.type === "file" && isBucketFile2(target) ? target : null;
    const missing = validFolder === null && validFile === null;
    const row = document.createElement("div");
    row.className = "bucket-entry-row";
    row.setAttribute("role", "treeitem");
    row.setAttribute("aria-level", "2");
    row.dataset.bucketPath = entry.path;
    row.dataset.bucketKind = entry.type;
    row.draggable = true;
    if (missing)
      row.classList.add("is-missing");
    if (validFile && ((_a = this.app.workspace.getActiveFile()) == null ? void 0 : _a.path) === validFile.path) {
      row.classList.add("is-active");
      row.setAttribute("aria-current", "page");
    }
    row.addEventListener("dragstart", (event) => {
      if (!event.dataTransfer)
        return;
      const payload = { bucketId: bucket.id, entryId: entry.id };
      event.dataTransfer.setData(DRAG_MIME, JSON.stringify(payload));
      event.dataTransfer.setData("text/plain", entry.path);
      event.dataTransfer.effectAllowed = "copyMove";
      row.classList.add("is-dragging");
    });
    row.addEventListener("dragend", () => row.classList.remove("is-dragging"));
    row.addEventListener("dragover", (event) => this.prepareDrop(event, bucket.id));
    row.addEventListener("drop", (event) => {
      event.stopPropagation();
      this.handleDrop(event, bucket.id, index);
    });
    row.addEventListener("contextmenu", (event) => this.showEntryMenu(event, bucket, entry));
    if (entry.type === "folder") {
      const disclosure = iconButton(
        row,
        entry.expanded ? "chevron-down" : "chevron-right",
        entry.expanded ? localize`收起 ${entry.path}` : localize`展开 ${entry.path}`,
        (event) => {
          event.stopPropagation();
          if (!validFolder)
            return;
          this.plugin.setUiState(() => {
            entry.expanded = !entry.expanded;
            return true;
          });
        }
      );
      disclosure.classList.add("bucket-disclosure");
      disclosure.disabled = validFolder === null;
      disclosure.setAttribute("aria-expanded", String(entry.expanded === true));
    } else {
      const spacer = document.createElement("span");
      spacer.className = "bucket-disclosure-spacer";
      row.appendChild(spacer);
    }
    const leading = document.createElement("span");
    leading.className = "bucket-entry-icon";
    leading.setAttribute("aria-hidden", "true");
    (0, import_obsidian3.setIcon)(leading, entry.type === "folder" ? "folder" : "file-text");
    row.appendChild(leading);
    const label = document.createElement("button");
    label.type = "button";
    label.className = "bucket-entry-label";
    label.textContent = entry.label || displayName(entry.path);
    label.title = missing ? localize`${entry.path}（目标当前不存在）` : entry.path;
    label.addEventListener("click", () => {
      if (validFile) {
        void this.app.workspace.getLeaf(false).openFile(validFile);
      } else if (validFolder) {
        this.plugin.setUiState(() => {
          entry.expanded = !entry.expanded;
          return true;
        });
      } else {
        new import_obsidian3.Notice(localize`找不到目标：${entry.path}`);
      }
    });
    row.appendChild(label);
    if (missing) {
      const status = document.createElement("span");
      status.className = "bucket-missing-label";
      status.textContent = localize("\u7F3A\u5931");
      row.appendChild(status);
    }
    const actions = document.createElement("div");
    actions.className = "bucket-row-actions";
    if (validFolder)
      this.addCreationAction(actions, validFolder.path);
    iconButton(actions, "more-horizontal", localize`${label.textContent || entry.path} 的更多操作`, (event) => {
      event.stopPropagation();
      this.showEntryMenu(event, bucket, entry);
    });
    row.appendChild(actions);
    wrapper.appendChild(row);
    if (validFolder && entry.expanded) {
      const children = document.createElement("div");
      children.className = "bucket-folder-children";
      children.setAttribute("role", "group");
      this.renderFolderChildren(children, entry, validFolder, 1);
      wrapper.appendChild(children);
    }
    return wrapper;
  }
  renderFolderChildren(parent, rootEntry, folder, depth2, rootAriaLevel = 2) {
    var _a;
    const order = getFolderSortOrder(this.plugin.data.settings, folder.path);
    const children = folder.children.filter((child) => (child instanceof import_obsidian3.TFolder || isBucketFile2(child)) && !isPathExcluded(rootEntry, child.path)).map((child) => {
      var _a2, _b, _c;
      return { child, key: {
        name: child.name,
        path: child.path,
        folder: child instanceof import_obsidian3.TFolder,
        ctime: child instanceof import_obsidian3.TFile ? (_a2 = child.stat) == null ? void 0 : _a2.ctime : void 0,
        created: order === "created-desc" && child instanceof import_obsidian3.TFile && child.extension.toLowerCase() === "md" ? (_c = (_b = this.app.metadataCache.getFileCache(child)) == null ? void 0 : _b.frontmatter) == null ? void 0 : _c.created : void 0
      } };
    }).sort((left, right) => compareFolderChildren(left.key, right.key, order)).map((item) => item.child);
    for (const child of children) {
      const target = targetFromFile(child);
      if (!target)
        continue;
      const row = document.createElement("div");
      row.className = "bucket-entry-row bucket-nested-row";
      row.dataset.bucketPath = child.path;
      row.dataset.bucketKind = child instanceof import_obsidian3.TFolder ? "folder" : "file";
      row.style.setProperty("--bucket-indent", `${depth2 * 14}px`);
      row.setAttribute("role", "treeitem");
      row.setAttribute("aria-level", String(depth2 + rootAriaLevel));
      row.addEventListener("contextmenu", (event) => this.showTargetMenu(event, target));
      if (isBucketFile2(child) && ((_a = this.app.workspace.getActiveFile()) == null ? void 0 : _a.path) === child.path) {
        row.classList.add("is-active");
        row.setAttribute("aria-current", "page");
      }
      if (child instanceof import_obsidian3.TFolder) {
        const expanded = (rootEntry.expandedPaths || []).includes(child.path);
        const disclosure = iconButton(
          row,
          expanded ? "chevron-down" : "chevron-right",
          expanded ? localize`收起 ${child.path}` : localize`展开 ${child.path}`,
          (event) => {
            event.stopPropagation();
            this.toggleNestedFolder(rootEntry, child.path);
          }
        );
        disclosure.classList.add("bucket-disclosure");
        disclosure.setAttribute("aria-expanded", String(expanded));
        const icon = document.createElement("span");
        icon.className = "bucket-entry-icon";
        icon.setAttribute("aria-hidden", "true");
        (0, import_obsidian3.setIcon)(icon, "folder");
        row.appendChild(icon);
        const label = document.createElement("button");
        label.type = "button";
        label.className = "bucket-entry-label";
        label.textContent = child.name;
        label.title = child.path;
        label.addEventListener("click", () => this.toggleNestedFolder(rootEntry, child.path));
        row.appendChild(label);
        const actions = document.createElement("div");
        actions.className = "bucket-row-actions";
        this.addCreationAction(actions, child.path);
        iconButton(actions, "more-horizontal", localize`${child.name} 的更多操作`, (event) => {
          event.stopPropagation();
          this.showTargetMenu(event, target);
        });
        row.appendChild(actions);
        parent.appendChild(row);
        if (expanded)
          this.renderFolderChildren(parent, rootEntry, child, depth2 + 1, rootAriaLevel);
      } else if (isBucketFile2(child)) {
        const spacer = document.createElement("span");
        spacer.className = "bucket-disclosure-spacer";
        row.appendChild(spacer);
        const icon = document.createElement("span");
        icon.className = "bucket-entry-icon";
        icon.setAttribute("aria-hidden", "true");
        (0, import_obsidian3.setIcon)(icon, "file-text");
        row.appendChild(icon);
        const label = document.createElement("button");
        label.type = "button";
        label.className = "bucket-entry-label";
        label.textContent = displayName(child.path);
        label.title = child.path;
        label.addEventListener("click", () => {
          void this.app.workspace.getLeaf(false).openFile(child);
        });
        row.appendChild(label);
        const actions = document.createElement("div");
        actions.className = "bucket-row-actions";
        iconButton(actions, "more-horizontal", localize`${child.basename} 的更多操作`, (event) => {
          event.stopPropagation();
          this.showTargetMenu(event, target);
        });
        row.appendChild(actions);
        parent.appendChild(row);
      }
    }
  }
  toggleNestedFolder(entry, path) {
    this.plugin.setUiState(() => {
      const paths = entry.expandedPaths || [];
      const index = paths.indexOf(path);
      if (index >= 0)
        paths.splice(index, 1);
      else
        paths.push(path);
      entry.expandedPaths = paths;
      return true;
    });
  }
  showSpaceMenu(event, space) {
    event.preventDefault();
    const menu = new import_obsidian3.Menu();
    menu.addItem((item) => {
      item.setTitle(localize("\u91CD\u547D\u540D Space\u2026")).setIcon("pencil").onClick(() => this.plugin.promptRenameSpace(space));
    });
    menu.addItem((item) => {
      item.setTitle(localize("\u66F4\u6362\u56FE\u6807\u2026")).setIcon("smile").onClick(() => this.plugin.promptChangeSpaceIcon(space));
    });
    if (this.plugin.data.spaces.length > 1) {
      menu.addSeparator();
      menu.addItem((item) => {
        item.setTitle(localize("\u79FB\u9664 Space\uFF08\u4E0D\u5220\u9664\u6587\u4EF6\uFF09")).setIcon("trash").onClick(() => this.plugin.removeSpace(space.id));
      });
    }
    menu.showAtMouseEvent(event);
  }
  addCreationAction(actions, path) {
    const button = iconButton(actions, "plus", localize`在 ${path} 中新建…`, (event) => {
      event.stopPropagation();
      const target = this.app.vault.getAbstractFileByPath(path);
      if (!(target instanceof import_obsidian3.TFolder)) {
        new import_obsidian3.Notice(localize("\u8FD9\u4E2A\u6587\u4EF6\u5939\u5DF2\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u4F4D\u7F6E\u3002"));
        return;
      }
      const menu = new import_obsidian3.Menu();
      this.addFolderCreationItems(menu, target);
      const bounds = button.getBoundingClientRect();
      menu.showAtPosition({ x: bounds.left, y: bounds.bottom });
    });
    button.classList.add("bucket-create-menu");
    button.setAttribute("aria-haspopup", "menu");
  }
  addFolderCreationItems(menu, target) {
    menu.addItem((item) => item.setTitle(localize("\u5728\u6B64\u6587\u4EF6\u5939\u4E2D\u65B0\u5EFA\u7B14\u8BB0")).setIcon("file-plus").onClick(() => {
      void this.plugin.createNoteInFolder(target.path);
    }));
    menu.addItem((item) => item.setTitle(localize("\u65B0\u5EFA\u5B50\u6587\u4EF6\u5939\u2026")).setIcon("folder-plus").onClick(() => this.plugin.promptCreateFolder(target.path)));
  }
  addCreationMenu(menu, target) {
    if (!(target instanceof import_obsidian3.TFolder))
      return;
    this.addFolderCreationItems(menu, target);
    this.plugin.addFolderSortMenu(menu, target);
    menu.addSeparator();
  }
  showTargetMenu(event, target) {
    event.preventDefault();
    const menu = new import_obsidian3.Menu();
    const file = this.app.vault.getAbstractFileByPath(target.path);
    this.addCreationMenu(menu, file);
    if (isBucketFile2(file)) {
      menu.addItem((item) => {
        item.setTitle(file.extension.toLowerCase() === "md" ? localize("\u6253\u5F00\u7B14\u8BB0") : localize("\u6253\u5F00\u6587\u4EF6")).setIcon("file-text").onClick(() => {
          void this.app.workspace.getLeaf(false).openFile(file);
        });
      });
    }
    menu.addItem((item) => {
      const pinned = this.plugin.isPinned(target);
      item.setTitle(pinned ? localize("\u53D6\u6D88\u7F6E\u9876") : localize("\u7F6E\u9876")).setIcon(pinned ? "pin-off" : "pin").onClick(() => this.plugin.togglePinned(target));
    });
    menu.addItem((item) => {
      item.setTitle(localize("\u6DFB\u52A0\u5230 Bucket\u2026")).setIcon("layers").onClick(() => {
        this.plugin.chooseBucketForTarget(target);
      });
    });
    menu.showAtMouseEvent(event);
  }
  showPinnedMenu(event, entry) {
    event.preventDefault();
    const target = { type: entry.type, path: entry.path, label: entry.label };
    const menu = new import_obsidian3.Menu();
    const file = this.app.vault.getAbstractFileByPath(entry.path);
    this.addCreationMenu(menu, file);
    if (isBucketFile2(file)) {
      menu.addItem((item) => {
        item.setTitle(file.extension.toLowerCase() === "md" ? localize("\u6253\u5F00\u7B14\u8BB0") : localize("\u6253\u5F00\u6587\u4EF6")).setIcon("file-text").onClick(() => {
          void this.app.workspace.getLeaf(false).openFile(file);
        });
      });
    }
    menu.addItem((item) => {
      item.setTitle(localize("\u6DFB\u52A0\u5230 Bucket\u2026")).setIcon("layers").onClick(() => {
        this.plugin.chooseBucketForTarget(target);
      });
    });
    menu.addSeparator();
    menu.addItem((item) => {
      item.setTitle(localize("\u53D6\u6D88\u7F6E\u9876")).setIcon("pin-off").onClick(() => this.plugin.unpinTarget(target));
    });
    menu.showAtMouseEvent(event);
  }
  showBucketMenu(event, bucket) {
    event.preventDefault();
    const menu = new import_obsidian3.Menu();
    menu.addItem((item) => {
      item.setTitle(localize("\u6DFB\u52A0\u7B14\u8BB0\u6216\u6587\u4EF6\u5939\u2026")).setIcon("plus").onClick(() => this.plugin.promptAddTarget(bucket.id));
    });
    menu.addItem((item) => {
      item.setTitle(localize("\u91CD\u547D\u540D Bucket\u2026")).setIcon("pencil").onClick(() => this.plugin.promptRenameBucket(bucket));
    });
    menu.addSeparator();
    menu.addItem((item) => {
      item.setTitle(localize("\u79FB\u9664\u865A\u62DF Bucket\uFF08\u4E0D\u5220\u9664\u6587\u4EF6\uFF09")).setIcon("trash").onClick(() => this.plugin.removeBucket(bucket.id));
    });
    menu.showAtMouseEvent(event);
  }
  showEntryMenu(event, bucket, entry) {
    event.preventDefault();
    const menu = new import_obsidian3.Menu();
    const entryTarget = { type: entry.type, path: entry.path, label: entry.label };
    const target = this.app.vault.getAbstractFileByPath(entry.path);
    const entryIndex = bucket.entries.findIndex((candidate) => candidate.id === entry.id);
    this.addCreationMenu(menu, target);
    if (isBucketFile2(target)) {
      menu.addItem((item) => {
        item.setTitle(target.extension.toLowerCase() === "md" ? localize("\u6253\u5F00\u7B14\u8BB0") : localize("\u6253\u5F00\u6587\u4EF6")).setIcon("file-text").onClick(() => {
          void this.app.workspace.getLeaf(false).openFile(target);
        });
      });
    }
    menu.addItem((item) => {
      const pinned = this.plugin.isPinned(entryTarget);
      item.setTitle(pinned ? localize("\u53D6\u6D88\u7F6E\u9876") : localize("\u7F6E\u9876")).setIcon(pinned ? "pin-off" : "pin").onClick(() => this.plugin.togglePinned(entryTarget));
    });
    menu.addItem((item) => {
      item.setTitle(localize("\u590D\u5236\u5F15\u7528\u5230\u53E6\u4E00\u4E2A Bucket\u2026")).setIcon("copy").onClick(() => {
        const choices = this.plugin.activeSpace.buckets.filter((candidate) => candidate.id !== bucket.id);
        if (choices.length === 0) {
          new import_obsidian3.Notice(localize("\u8FD8\u6CA1\u6709\u5176\u4ED6 Bucket"));
          return;
        }
        new BucketPickerModal(this.app, choices, localize("\u9009\u62E9\u8981\u590D\u5236\u5230\u7684 Bucket\u2026"), (targetBucket) => {
          this.plugin.copyEntry(bucket.id, entry.id, targetBucket.id);
        }).open();
      });
    });
    menu.addItem((item) => {
      item.setTitle(localize("\u5728\u5F53\u524D Bucket \u4E2D\u4E0A\u79FB")).setIcon("arrow-up").setDisabled(entryIndex <= 0).onClick(() => this.plugin.reorder(bucket.id, entry.id, entryIndex - 1));
    });
    menu.addItem((item) => {
      item.setTitle(localize("\u5728\u5F53\u524D Bucket \u4E2D\u4E0B\u79FB")).setIcon("arrow-down").setDisabled(entryIndex < 0 || entryIndex >= bucket.entries.length - 1).onClick(() => this.plugin.reorder(bucket.id, entry.id, entryIndex + 2));
    });
    menu.addSeparator();
    menu.addItem((item) => {
      item.setTitle(localize("\u4EC5\u79FB\u9664\u5F15\u7528\uFF08\u4FDD\u7559\u771F\u5B9E\u6587\u4EF6\uFF09")).setIcon("x").onClick(() => this.plugin.removeEntry(bucket.id, entry.id));
    });
    menu.showAtMouseEvent(event);
  }
  prepareDrop(event, targetBucketId) {
    event.preventDefault();
    if (!event.dataTransfer)
      return;
    const payload = this.readDragPayload(event.dataTransfer);
    event.dataTransfer.dropEffect = payload && payload.bucketId === targetBucketId ? "move" : "copy";
  }
  handleDrop(event, targetBucketId, targetIndex) {
    event.preventDefault();
    if (!event.dataTransfer)
      return;
    const payload = this.readDragPayload(event.dataTransfer);
    if (payload) {
      if (payload.bucketId === targetBucketId) {
        this.plugin.reorder(targetBucketId, payload.entryId, targetIndex);
      } else {
        this.plugin.copyEntry(payload.bucketId, payload.entryId, targetBucketId, targetIndex);
      }
      return;
    }
    const path = event.dataTransfer.getData("text/plain").trim();
    const file = path ? this.app.vault.getAbstractFileByPath(path) : null;
    const target = file ? targetFromFile(file) : null;
    if (target)
      this.plugin.addTarget(targetBucketId, target, targetIndex);
  }
  readDragPayload(dataTransfer) {
    const raw = dataTransfer.getData(DRAG_MIME);
    if (!raw)
      return null;
    try {
      const value = JSON.parse(raw);
      if (typeof value.bucketId !== "string" || typeof value.entryId !== "string")
        return null;
      if (!findBucket(this.plugin.data, value.bucketId))
        return null;
      return { bucketId: value.bucketId, entryId: value.entryId };
    } catch (_error) {
      return null;
    }
  }
};
