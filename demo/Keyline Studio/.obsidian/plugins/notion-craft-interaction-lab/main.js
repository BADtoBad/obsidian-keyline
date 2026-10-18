var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => NotionBlock
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
var import_state8 = require("@codemirror/state");
var import_obsidian20 = require("obsidian");

// src/settings.ts
var import_obsidian3 = require("obsidian");

// src/settingsNavigation.ts
var SETTINGS_SECTIONS = [
  { id: "interface", label: localize("\u754C\u9762"), icon: "panels-top-left", description: localize("\u5BFC\u822A\u3001\u83DC\u5355\u4E0E\u63D0\u793A\u3002"), keywords: "\u5916\u89C2 \u5E03\u5C40 sidebar \u6587\u4EF6\u5BFC\u822A workspace \u5DE5\u4F5C\u533A \u5E95\u680F \u5207\u6362\u5668 \u83DC\u5355 \u539F\u751F\u83DC\u5355 \u7CFB\u7EDF \u60AC\u505C\u8BF4\u660E \u6C14\u6CE1 \u63D0\u793A tooltip" },
  { id: "typography", label: localize("\u6392\u7248"), icon: "type", description: localize("\u9875\u9762\u3001\u6B63\u6587\u3001\u5217\u8868\u4E0E\u6807\u9898\u3002"), keywords: "\u6837\u5F0F \u6B63\u6587\u6700\u5927\u5BBD\u5EA6 \u5DE6\u53F3\u7559\u767D \u7F16\u8F91\u89C6\u56FE\u884C\u9AD8 \u9605\u8BFB\u89C6\u56FE\u884C\u9AD8 \u6B63\u6587\u6362\u884C \u6BB5\u843D\u95F4\u8DDD \u6BB5\u524D\u8DDD \u6BB5\u540E\u8DDD \u9996\u884C\u7F29\u8FDB \u5217\u8868\u884C\u9AD8 \u5217\u8868\u9879\u95F4\u8DDD \u5217\u8868\u5C42\u7EA7\u7F29\u8FDB \u5217\u8868\u7B26\u53F7\u4E0E\u6B63\u6587\u95F4\u8DDD \u65E0\u5E8F\u5217\u8868\u5706\u70B9\u5927\u5C0F \u5F15\u7528\u7F29\u8FDB \u6807\u9898\u6BB5\u524D\u8DDD \u6807\u9898\u6BB5\u540E\u8DDD \u9884\u89C8 \u9ED8\u8BA4" },
  { id: "icons", label: localize("\u56FE\u6807"), icon: "palette", description: localize("\u6587\u4EF6\u7C7B\u578B\u3001\u56FE\u5F62\u4E0E\u989C\u8272\u3002"), keywords: "\u6587\u4EF6 \u6587\u4EF6\u5939 \u7C7B\u578B \u989C\u8272 \u5355\u8272 \u81EA\u52A8 \u81EA\u5B9A\u4E49 markdown pdf \u56FE\u7247 \u97F3\u9891 \u89C6\u9891 \u767D\u677F \u753B\u677F \u538B\u7F29 \u4EE3\u7801 \u672A\u77E5 iconic" },
  { id: "editing", label: localize("\u7F16\u8F91"), icon: "pencil", description: localize("\u4E66\u5199\u4FDD\u62A4\u3001\u6587\u672C\u9009\u62E9\u4E0E\u5757\u64CD\u4F5C\u3002"), keywords: "\u542F\u7528 \u5F00\u542F \u4FDD\u62A4 markdown \u8BED\u6CD5 \u7B26\u53F7 \u53EF\u7591 \u9690\u85CF \u5185\u90E8\u94FE\u63A5 @ \u3010\u3010 \u6E90\u7801 option alt \u7C98\u8D34 \u63D0\u9192 \u9009\u62E9 \u83DC\u5355 \u5DE5\u5177\u6761 \u62D6\u52A8 \u62D6\u62FD \u7C92\u5EA6 \u5EF6\u8FDF \u4F4D\u7F6E \u5DE6 \u53F3 \u5E38\u9A7B \u6298\u53E0 \u5168\u9009 \u9000\u683C cmd backspace block handle hover selection" },
  { id: "insert", label: localize("\u63D2\u5165"), icon: "plus", description: localize("\u89E6\u53D1\u65B9\u5F0F\u3001\u9644\u4EF6\u4E0E\u83DC\u5355\u9879\u76EE\u3002"), keywords: "\u52A0\u53F7 \u659C\u6760 / \u89E6\u53D1 \u5B57\u7B26 \u884C\u5185 \u9644\u4EF6 \u5D4C\u5165 \u547D\u4EE4 \u9690\u85CF \u91CD\u6392 \u987A\u5E8F \u6392\u5E8F \u81EA\u5B9A\u4E49 \u83DC\u5355 \u6DFB\u52A0 \u91CD\u7F6E slash embed command insert" },
  { id: "advanced", label: localize("\u9AD8\u7EA7"), icon: "settings", description: localize("\u683C\u5F0F\u4E0E\u517C\u5BB9\u8BF4\u660E\u3002"), keywords: "\u65E5\u671F \u65F6\u95F4 \u683C\u5F0F \u517C\u5BB9 iconic make.md bucket \u7248\u672C \u5B89\u5168 \u6587\u4EF6 \u5B58\u50A8" }
];
function searchTerms(query) {
  return query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
}
function matchesSettingsSearch(text, query) {
  const haystack = text.toLocaleLowerCase();
  return searchTerms(query).every((term) => haystack.includes(term));
}
function findSettingsSections(query) {
  return SETTINGS_SECTIONS.filter((section) => matchesSettingsSearch(
    `${section.label} ${section.description} ${section.keywords}`,
    query
  )).map((section) => section.id);
}

// src/menuPreference.ts
var import_obsidian = require("obsidian");
function readNativeMenuPreference(app) {
  const vault = app.vault;
  if (!import_obsidian.Platform.isDesktopApp || typeof vault.getConfig !== "function" || typeof vault.setConfig !== "function")
    return null;
  if (!("useNativeMenu" in import_obsidian.Menu))
    return null;
  const value = import_obsidian.Menu.useNativeMenu;
  if (typeof value === "boolean")
    return value;
  const saved = vault.getConfig("nativeMenus");
  return typeof saved === "boolean" ? saved : import_obsidian.Platform.isMacOS;
}
async function writeNativeMenuPreference(app, native) {
  if (readNativeMenuPreference(app) === null)
    throw new Error(localize("\u6B64\u7248\u672C\u672A\u63D0\u4F9B\u53EF\u7528\u7684\u83DC\u5355\u8BBE\u7F6E"));
  const vault = app.vault;
  await vault.setConfig("nativeMenus", native);
  import_obsidian.Menu.useNativeMenu = native;
}

// src/locale/lang/en.ts
var en = {
  "settings.enablePlugin.name": "Enable plugin",
  "settings.enablePlugin.desc": "Enable or disable the block plugin.",
  "settings.dragGranularity.name": "Drag granularity",
  "settings.dragGranularity.desc": "Switch between line mode and paragraph mode.",
  "settings.dragGranularity.line": "Line mode",
  "settings.dragGranularity.paragraph": "Paragraph mode",
  "settings.hoverDelay.name": "Button hover delay",
  "settings.hoverDelay.desc": "Delay (ms) before showing handles.",
  "settings.hideDelay.name": "Button hide delay",
  "settings.hideDelay.desc": "Delay (ms) before hiding handles.",
  "settings.handleSide.name": "Handle side",
  "settings.handleSide.desc": "Which edge of the text the handle sits beside.",
  "settings.handleSide.left": "Left",
  "settings.handleSide.right": "Right",
  "settings.handleAlwaysVisible.name": "Always show the handle",
  "settings.handleAlwaysVisible.desc": "Pin the handle to the block the caret is in, so it never hides when the pointer moves away.",
  "settings.dateFormat.name": "Date format",
  "settings.dateFormat.desc": "Format for today/yesterday/tomorrow.",
  "settings.timeFormat.name": "Time format",
  "settings.timeFormat.desc": "Format for current time.",
  "handles.addBlock": "Add block below",
  "handles.dragReorder": "Drag to reorder",
  "handles.switchToParagraph": "Switch to paragraph mode",
  "handles.switchToLine": "Switch to line mode",
  "handles.fold": "Fold block",
  "handles.unfold": "Unfold block",
  "fold.expand": "Click to unfold",
  "settings.foldHandle.name": "Show the fold chevron",
  "settings.foldHandle.desc": "A chevron on the handle that collapses a block to its first line. It only appears on blocks that have something to hide.",
  "drag.blocks": "{n} blocks",
  "menu.turnInto": "Turn into",
  "menu.insert": "Insert",
  "menu.color": "Color",
  "menu.textColor": "Text color",
  "menu.backgroundColor": "Background color",
  "menu.callout": "Callout",
  "menu.headings": "Headings",
  "menu.custom": "Custom",
  "menu.paragraph": "Text",
  "menu.h1": "Heading 1",
  "menu.h2": "Heading 2",
  "menu.h3": "Heading 3",
  "menu.h4": "Heading 4",
  "menu.h5": "Heading 5",
  "menu.todo": "To-do list",
  "menu.bullet": "Bulleted list",
  "menu.numbered": "Numbered list",
  "menu.blockquote": "Quote",
  "menu.code": "Code block",
  "menu.math": "Math block",
  "menu.divider": "Divider",
  "menu.toc": "Table of contents",
  "menu.page": "Page",
  "menu.copyLink": "Copy block link",
  "menu.delete": "Delete",
  "menu.link": "Internal link",
  "menu.extLink": "External link",
  "menu.image": "Insert image",
  "menu.attachment": "Insert attachment",
  "menu.table": "Table",
  "menu.today": "Today",
  "menu.yesterday": "Yesterday",
  "menu.tomorrow": "Tomorrow",
  "menu.time": "Current time",
  "menu.footnote": "Footnote",
  "menu.comment": "Comment",
  "color.default": "Default",
  "color.gray": "Gray",
  "color.brown": "Brown",
  "color.orange": "Orange",
  "color.yellow": "Yellow",
  "color.green": "Green",
  "color.blue": "Blue",
  "color.purple": "Purple",
  "color.pink": "Pink",
  "color.red": "Red",
  "color.textDefault": "Default text",
  "color.textGray": "Gray text",
  "color.textBrown": "Brown text",
  "color.textOrange": "Orange text",
  "color.textYellow": "Yellow text",
  "color.textGreen": "Green text",
  "color.textBlue": "Blue text",
  "color.textPurple": "Purple text",
  "color.textPink": "Pink text",
  "color.textRed": "Red text",
  "color.bgDefault": "Default background",
  "color.bgGray": "Gray background",
  "color.bgBrown": "Brown background",
  "color.bgOrange": "Orange background",
  "color.bgYellow": "Yellow background",
  "color.bgGreen": "Green background",
  "color.bgBlue": "Blue background",
  "color.bgPurple": "Purple background",
  "color.bgPink": "Pink background",
  "color.bgRed": "Red background",
  "callout.note": "Note",
  "callout.info": "Info",
  "callout.todo": "Todo",
  "callout.tip": "Tip",
  "callout.success": "Success",
  "callout.question": "Question",
  "callout.warning": "Warning",
  "callout.failure": "Failure",
  "callout.danger": "Danger",
  "callout.bug": "Bug",
  "callout.example": "Example",
  "callout.quote": "Quote",
  "notice.noActiveNote": "No active note",
  "notice.linkCopied": "Block link copied",
  "notice.linkCopyFailed": "Failed to copy block link",
  "notice.selectImage": "Please select an image file.",
  "notice.insertImageFailed": "Failed to insert image.",
  "notice.insertAttachmentFailed": "Failed to insert attachment.",
  "notice.createPageFailed": "Failed to create the page.",
  "notice.noHeadings": "This note has no headings to list.",
  "command.openInsertMenu": "Open block insert menu",
  "menu.closeMenu": "Close menu",
  "page.untitled": "Untitled",
  "toc.title": "Table of contents",
  "settings.insertItems.name": "Insert menu items",
  "settings.insertItems.desc": "Drag to reorder. Uncheck to hide a row. Add a row to run any Obsidian command from the menu.",
  "settings.addCommand": "Add command",
  "settings.resetOrder": "Reset order",
  "settings.commandMissing": "Command unavailable",
  "settings.customCommand.title": "Custom insert command",
  "settings.customCommand.label": "Name",
  "settings.customCommand.command": "Command",
  "settings.customCommand.commandDesc": "Start typing to search Obsidian's commands.",
  "settings.customCommand.icon": "Icon",
  "settings.customCommand.iconDesc": 'A Lucide icon name, e.g. "zap" or "pencil".',
  "settings.customCommand.save": "Save",
  "settings.customCommand.cancel": "Cancel",
  "settings.customCommand.boundTo": "Runs Obsidian \u201C{name}\u201D",
  "settings.customCommand.edit": "Edit",
  "settings.customCommand.delete": "Delete"
};
var en_default = en;

// src/locale/lang/zh.ts
var zh = {
  "settings.enablePlugin.name": "\u542F\u7528\u63D2\u4EF6",
  "settings.enablePlugin.desc": "\u542F\u7528\u6216\u7981\u7528\u533A\u5757\u63D2\u4EF6\u3002",
  "settings.dragGranularity.name": "\u62D6\u62FD\u7C92\u5EA6",
  "settings.dragGranularity.desc": "\u5728\u884C\u6A21\u5F0F\u548C\u6BB5\u843D\u6A21\u5F0F\u4E4B\u95F4\u5207\u6362\u3002",
  "settings.dragGranularity.line": "\u884C\u6A21\u5F0F",
  "settings.dragGranularity.paragraph": "\u6BB5\u843D\u6A21\u5F0F",
  "settings.hoverDelay.name": "\u60AC\u6D6E\u663E\u793A\u5EF6\u8FDF",
  "settings.hoverDelay.desc": "\u663E\u793A\u53E5\u67C4\u4E4B\u524D\u7684\u5EF6\u8FDF\uFF08\u6BEB\u79D2\uFF09\u3002",
  "settings.hideDelay.name": "\u60AC\u6D6E\u9690\u85CF\u5EF6\u8FDF",
  "settings.hideDelay.desc": "\u9690\u85CF\u53E5\u67C4\u4E4B\u524D\u7684\u5EF6\u8FDF\uFF08\u6BEB\u79D2\uFF09\u3002",
  "settings.handleSide.name": "\u624B\u67C4\u4F4D\u7F6E",
  "settings.handleSide.desc": "\u624B\u67C4\u663E\u793A\u5728\u6B63\u6587\u7684\u54EA\u4E00\u4FA7\u3002",
  "settings.handleSide.left": "\u5DE6\u4FA7",
  "settings.handleSide.right": "\u53F3\u4FA7",
  "settings.handleAlwaysVisible.name": "\u59CB\u7EC8\u663E\u793A\u624B\u67C4",
  "settings.handleAlwaysVisible.desc": "\u5C06\u624B\u67C4\u56FA\u5B9A\u5728\u5149\u6807\u6240\u5728\u7684\u5757\u4E0A\uFF0C\u9F20\u6807\u79FB\u5F00\u65F6\u4E5F\u4E0D\u9690\u85CF\u3002",
  "settings.dateFormat.name": "\u65E5\u671F\u683C\u5F0F",
  "settings.dateFormat.desc": "\u4ECA\u5929/\u6628\u5929/\u660E\u5929\u7684\u65E5\u671F\u683C\u5F0F\u3002",
  "settings.timeFormat.name": "\u65F6\u95F4\u683C\u5F0F",
  "settings.timeFormat.desc": "\u5F53\u524D\u65F6\u95F4\u7684\u683C\u5F0F\u3002",
  "handles.addBlock": "\u5728\u4E0B\u65B9\u6DFB\u52A0\u533A\u5757",
  "handles.dragReorder": "\u62D6\u62FD\u4EE5\u91CD\u6392",
  "handles.switchToParagraph": "\u5207\u6362\u5230\u6BB5\u843D\u6A21\u5F0F",
  "handles.switchToLine": "\u5207\u6362\u5230\u884C\u6A21\u5F0F",
  "handles.fold": "\u6298\u53E0\u5757",
  "handles.unfold": "\u5C55\u5F00\u5757",
  "fold.expand": "\u70B9\u51FB\u5C55\u5F00",
  "settings.foldHandle.name": "\u663E\u793A\u6298\u53E0\u7BAD\u5934",
  "settings.foldHandle.desc": "\u624B\u67C4\u4E0A\u7684\u7BAD\u5934\uFF0C\u53EF\u5C06\u5757\u6298\u53E0\u4E3A\u9996\u884C\u3002\u4EC5\u5728\u6709\u5185\u5BB9\u53EF\u6298\u53E0\u7684\u5757\u4E0A\u663E\u793A\u3002",
  "drag.blocks": "{n} \u4E2A\u5757",
  "menu.turnInto": "\u8F6C\u6362\u6210",
  "menu.insert": "\u65B0\u589E",
  "menu.color": "\u989C\u8272",
  "menu.textColor": "\u6587\u672C\u989C\u8272",
  "menu.backgroundColor": "\u80CC\u666F\u989C\u8272",
  "menu.callout": "Callout",
  "menu.paragraph": "\u6587\u672C",
  "menu.headings": "\u6807\u9898",
  "menu.custom": "\u81EA\u5B9A\u4E49",
  "menu.h1": "\u6807\u9898 1",
  "menu.h2": "\u6807\u9898 2",
  "menu.h3": "\u6807\u9898 3",
  "menu.h4": "\u6807\u9898 4",
  "menu.h5": "\u6807\u9898 5",
  "menu.todo": "\u5F85\u529E\u5217\u8868",
  "menu.bullet": "\u65E0\u5E8F\u5217\u8868",
  "menu.numbered": "\u6709\u5E8F\u5217\u8868",
  "menu.blockquote": "\u5F15\u7528",
  "menu.code": "\u4EE3\u7801\u5757",
  "menu.math": "\u6570\u5B66\u5757",
  "menu.divider": "\u5206\u5272\u7EBF",
  "menu.toc": "\u76EE\u5F55",
  "menu.page": "\u9875\u9762",
  "menu.copyLink": "\u62F7\u8D1D\u533A\u5757\u94FE\u63A5",
  "menu.delete": "\u5220\u9664",
  "menu.link": "\u5185\u90E8\u94FE\u63A5",
  "menu.extLink": "\u5916\u90E8\u94FE\u63A5",
  "menu.image": "\u63D2\u5165\u56FE\u7247",
  "menu.attachment": "\u63D2\u5165\u9644\u4EF6",
  "menu.table": "\u8868\u683C",
  "menu.today": "\u4ECA\u5929",
  "menu.yesterday": "\u6628\u5929",
  "menu.tomorrow": "\u660E\u5929",
  "menu.time": "\u5F53\u524D\u65F6\u95F4",
  "menu.footnote": "\u811A\u6CE8",
  "menu.comment": "\u6CE8\u91CA",
  "color.default": "\u9ED8\u8BA4",
  "color.gray": "\u7070\u8272",
  "color.brown": "\u68D5\u8272",
  "color.orange": "\u6A59\u8272",
  "color.yellow": "\u9EC4\u8272",
  "color.green": "\u7EFF\u8272",
  "color.blue": "\u84DD\u8272",
  "color.purple": "\u7D2B\u8272",
  "color.pink": "\u7C89\u8272",
  "color.red": "\u7EA2\u8272",
  "color.textDefault": "\u9ED8\u8BA4\u6587\u672C",
  "color.textGray": "\u7070\u8272\u6587\u672C",
  "color.textBrown": "\u68D5\u8272\u6587\u672C",
  "color.textOrange": "\u6A59\u8272\u6587\u672C",
  "color.textYellow": "\u9EC4\u8272\u6587\u672C",
  "color.textGreen": "\u7EFF\u8272\u6587\u672C",
  "color.textBlue": "\u84DD\u8272\u6587\u672C",
  "color.textPurple": "\u7D2B\u8272\u6587\u672C",
  "color.textPink": "\u7C89\u8272\u6587\u672C",
  "color.textRed": "\u7EA2\u8272\u6587\u672C",
  "color.bgDefault": "\u9ED8\u8BA4\u80CC\u666F",
  "color.bgGray": "\u7070\u8272\u80CC\u666F",
  "color.bgBrown": "\u68D5\u8272\u80CC\u666F",
  "color.bgOrange": "\u6A59\u8272\u80CC\u666F",
  "color.bgYellow": "\u9EC4\u8272\u80CC\u666F",
  "color.bgGreen": "\u7EFF\u8272\u80CC\u666F",
  "color.bgBlue": "\u84DD\u8272\u80CC\u666F",
  "color.bgPurple": "\u7D2B\u8272\u80CC\u666F",
  "color.bgPink": "\u7C89\u8272\u80CC\u666F",
  "color.bgRed": "\u7EA2\u8272\u80CC\u666F",
  "callout.note": "\u4FBF\u7B7E",
  "callout.info": "\u4FE1\u606F",
  "callout.todo": "\u5F85\u529E",
  "callout.tip": "\u63D0\u793A",
  "callout.success": "\u6210\u529F",
  "callout.question": "\u95EE\u9898",
  "callout.warning": "\u8B66\u544A",
  "callout.failure": "\u5931\u8D25",
  "callout.danger": "\u5371\u9669",
  "callout.bug": "\u7F3A\u9677",
  "callout.example": "\u793A\u4F8B",
  "callout.quote": "\u5F15\u7528",
  "notice.noActiveNote": "\u6CA1\u6709\u6D3B\u52A8\u7B14\u8BB0",
  "notice.linkCopied": "\u5DF2\u590D\u5236\u533A\u5757\u94FE\u63A5",
  "notice.linkCopyFailed": "\u590D\u5236\u533A\u5757\u94FE\u63A5\u5931\u8D25",
  "notice.selectImage": "\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6\u3002",
  "notice.insertImageFailed": "\u63D2\u5165\u56FE\u7247\u5931\u8D25\u3002",
  "notice.insertAttachmentFailed": "\u63D2\u5165\u9644\u4EF6\u5931\u8D25\u3002",
  "notice.createPageFailed": "\u521B\u5EFA\u9875\u9762\u5931\u8D25\u3002",
  "notice.noHeadings": "\u6B64\u7B14\u8BB0\u6CA1\u6709\u53EF\u5217\u51FA\u7684\u6807\u9898\u3002",
  "command.openInsertMenu": "\u6253\u5F00\u5757\u63D2\u5165\u83DC\u5355",
  "menu.closeMenu": "\u5173\u95ED\u83DC\u5355",
  "page.untitled": "\u672A\u547D\u540D",
  "toc.title": "\u76EE\u5F55",
  "settings.insertItems.name": "\u63D2\u5165\u83DC\u5355\u9879",
  "settings.insertItems.desc": "\u62D6\u52A8\u53EF\u6392\u5E8F\uFF0C\u53D6\u6D88\u52FE\u9009\u53EF\u9690\u85CF\u3002\u6DFB\u52A0\u6761\u76EE\u5373\u53EF\u5728\u83DC\u5355\u4E2D\u6267\u884C\u4EFB\u610F Obsidian \u547D\u4EE4\u3002",
  "settings.addCommand": "\u6DFB\u52A0\u547D\u4EE4",
  "settings.resetOrder": "\u91CD\u7F6E\u6392\u5E8F",
  "settings.commandMissing": "\u8BE5\u547D\u4EE4\u76EE\u524D\u4E0D\u53EF\u7528",
  "settings.customCommand.title": "\u81EA\u5B9A\u4E49\u63D2\u5165\u547D\u4EE4",
  "settings.customCommand.label": "\u540D\u79F0",
  "settings.customCommand.command": "\u547D\u4EE4",
  "settings.customCommand.commandDesc": "\u8F93\u5165\u4EE5\u641C\u7D22 Obsidian \u547D\u4EE4\u3002",
  "settings.customCommand.icon": "\u56FE\u6807",
  "settings.customCommand.iconDesc": 'Lucide \u56FE\u6807\u540D\u79F0\uFF0C\u4F8B\u5982 "zap" \u6216 "pencil"\u3002',
  "settings.customCommand.save": "\u4FDD\u5B58",
  "settings.customCommand.cancel": "\u53D6\u6D88",
  "settings.customCommand.boundTo": "\u6765\u81EA Obsidian \u201C{name}\u201D",
  "settings.customCommand.edit": "\u7F16\u8F91",
  "settings.customCommand.delete": "\u5220\u9664"
};
var zh_default = zh;

// src/locale/lang/zh-tw.ts
var zhTw = {
  "settings.enablePlugin.name": "\u555F\u7528\u63D2\u4EF6",
  "settings.enablePlugin.desc": "\u555F\u7528\u6216\u7981\u7528\u5340\u584A\u63D2\u4EF6\u3002",
  "settings.dragGranularity.name": "\u62D6\u66F3\u7C92\u5EA6",
  "settings.dragGranularity.desc": "\u5728\u884C\u6A21\u5F0F\u548C\u6BB5\u843D\u6A21\u5F0F\u4E4B\u9593\u5207\u63DB\u3002",
  "settings.dragGranularity.line": "\u884C\u6A21\u5F0F",
  "settings.dragGranularity.paragraph": "\u6BB5\u843D\u6A21\u5F0F",
  "settings.hoverDelay.name": "\u61F8\u505C\u986F\u793A\u5EF6\u9072",
  "settings.hoverDelay.desc": "\u986F\u793A\u53E5\u67C4\u4E4B\u524D\u7684\u5EF6\u9072\uFF08\u6BEB\u79D2\uFF09\u3002",
  "settings.hideDelay.name": "\u61F8\u505C\u96B1\u85CF\u5EF6\u9072",
  "settings.hideDelay.desc": "\u96B1\u85CF\u53E5\u67C4\u4E4B\u524D\u7684\u5EF6\u9072\uFF08\u6BEB\u79D2\uFF09\u3002",
  "settings.handleSide.name": "\u63A7\u5236\u67C4\u4F4D\u7F6E",
  "settings.handleSide.desc": "\u63A7\u5236\u67C4\u986F\u793A\u5728\u5167\u6587\u7684\u54EA\u4E00\u5074\u3002",
  "settings.handleSide.left": "\u5DE6\u5074",
  "settings.handleSide.right": "\u53F3\u5074",
  "settings.handleAlwaysVisible.name": "\u6C38\u9060\u986F\u793A\u63A7\u5236\u67C4",
  "settings.handleAlwaysVisible.desc": "\u5C07\u63A7\u5236\u67C4\u56FA\u5B9A\u5728\u6E38\u6A19\u6240\u5728\u7684\u5340\u584A\u4E0A\uFF0C\u6ED1\u9F20\u79FB\u958B\u6642\u4E5F\u4E0D\u96B1\u85CF\u3002",
  "settings.dateFormat.name": "\u65E5\u671F\u683C\u5F0F",
  "settings.dateFormat.desc": "\u4ECA\u5929/\u6628\u5929/\u660E\u5929\u7684\u65E5\u671F\u683C\u5F0F\u3002",
  "settings.timeFormat.name": "\u6642\u9593\u683C\u5F0F",
  "settings.timeFormat.desc": "\u7576\u524D\u6642\u9593\u7684\u683C\u5F0F\u3002",
  "handles.addBlock": "\u5728\u4E0B\u65B9\u6DFB\u52A0\u5340\u584A",
  "handles.dragReorder": "\u62D6\u66F3\u4EE5\u91CD\u6392",
  "handles.switchToParagraph": "\u5207\u63DB\u5230\u6BB5\u843D\u6A21\u5F0F",
  "handles.switchToLine": "\u5207\u63DB\u5230\u884C\u6A21\u5F0F",
  "handles.fold": "\u647A\u758A\u5340\u584A",
  "handles.unfold": "\u5C55\u958B\u5340\u584A",
  "fold.expand": "\u9EDE\u64CA\u5C55\u958B",
  "settings.foldHandle.name": "\u986F\u793A\u647A\u758A\u7BAD\u982D",
  "settings.foldHandle.desc": "\u63A7\u5236\u67C4\u4E0A\u7684\u7BAD\u982D\uFF0C\u53EF\u5C07\u5340\u584A\u647A\u758A\u70BA\u9996\u884C\u3002\u50C5\u5728\u6709\u5167\u5BB9\u53EF\u647A\u758A\u7684\u5340\u584A\u4E0A\u986F\u793A\u3002",
  "drag.blocks": "{n} \u500B\u5340\u584A",
  "menu.turnInto": "\u8F49\u63DB\u6210",
  "menu.insert": "\u65B0\u589E",
  "menu.color": "\u984F\u8272",
  "menu.textColor": "\u6587\u5B57\u984F\u8272",
  "menu.backgroundColor": "\u80CC\u666F\u984F\u8272",
  "menu.callout": "Callout",
  "menu.paragraph": "\u6587\u5B57",
  "menu.headings": "\u6A19\u984C",
  "menu.custom": "\u81EA\u8A02",
  "menu.h1": "\u6A19\u984C 1",
  "menu.h2": "\u6A19\u984C 2",
  "menu.h3": "\u6A19\u984C 3",
  "menu.h4": "\u6A19\u984C 4",
  "menu.h5": "\u6A19\u984C 5",
  "menu.todo": "\u5F85\u8FA6\u6E05\u55AE",
  "menu.bullet": "\u7121\u5E8F\u6E05\u55AE",
  "menu.numbered": "\u6709\u5E8F\u6E05\u55AE",
  "menu.blockquote": "\u5F15\u7528",
  "menu.code": "\u7A0B\u5F0F\u78BC\u5340\u584A",
  "menu.math": "\u6578\u5B78\u5340\u584A",
  "menu.divider": "\u5206\u5272\u7DDA",
  "menu.toc": "\u76EE\u9304",
  "menu.page": "\u9801\u9762",
  "menu.copyLink": "\u8907\u88FD\u5340\u584A\u9023\u7D50",
  "menu.delete": "\u522A\u9664",
  "menu.link": "\u5167\u90E8\u9023\u7D50",
  "menu.extLink": "\u5916\u90E8\u9023\u7D50",
  "menu.image": "\u63D2\u5165\u5716\u7247",
  "menu.attachment": "\u63D2\u5165\u9644\u4EF6",
  "menu.table": "\u8868\u683C",
  "menu.today": "\u4ECA\u5929",
  "menu.yesterday": "\u6628\u5929",
  "menu.tomorrow": "\u660E\u5929",
  "menu.time": "\u7576\u524D\u6642\u9593",
  "menu.footnote": "\u8173\u8A3B",
  "menu.comment": "\u8A3B\u89E3",
  "color.default": "\u9810\u8A2D",
  "color.gray": "\u7070\u8272",
  "color.brown": "\u68D5\u8272",
  "color.orange": "\u6A58\u8272",
  "color.yellow": "\u9EC3\u8272",
  "color.green": "\u7DA0\u8272",
  "color.blue": "\u85CD\u8272",
  "color.purple": "\u7D2B\u8272",
  "color.pink": "\u7C89\u7D05\u8272",
  "color.red": "\u7D05\u8272",
  "color.textDefault": "\u9810\u8A2D\u6587\u5B57",
  "color.textGray": "\u7070\u8272\u6587\u5B57",
  "color.textBrown": "\u68D5\u8272\u6587\u5B57",
  "color.textOrange": "\u6A58\u8272\u6587\u5B57",
  "color.textYellow": "\u9EC3\u8272\u6587\u5B57",
  "color.textGreen": "\u7DA0\u8272\u6587\u5B57",
  "color.textBlue": "\u85CD\u8272\u6587\u5B57",
  "color.textPurple": "\u7D2B\u8272\u6587\u5B57",
  "color.textPink": "\u7C89\u7D05\u8272\u6587\u5B57",
  "color.textRed": "\u7D05\u8272\u6587\u5B57",
  "color.bgDefault": "\u9810\u8A2D\u80CC\u666F",
  "color.bgGray": "\u7070\u8272\u80CC\u666F",
  "color.bgBrown": "\u68D5\u8272\u80CC\u666F",
  "color.bgOrange": "\u6A58\u8272\u80CC\u666F",
  "color.bgYellow": "\u9EC3\u8272\u80CC\u666F",
  "color.bgGreen": "\u7DA0\u8272\u80CC\u666F",
  "color.bgBlue": "\u85CD\u8272\u80CC\u666F",
  "color.bgPurple": "\u7D2B\u8272\u80CC\u666F",
  "color.bgPink": "\u7C89\u7D05\u8272\u80CC\u666F",
  "color.bgRed": "\u7D05\u8272\u80CC\u666F",
  "callout.note": "\u4FBF\u7C3D",
  "callout.info": "\u8CC7\u8A0A",
  "callout.todo": "\u5F85\u8FA6",
  "callout.tip": "\u63D0\u793A",
  "callout.success": "\u6210\u529F",
  "callout.question": "\u554F\u984C",
  "callout.warning": "\u8B66\u544A",
  "callout.failure": "\u5931\u6557",
  "callout.danger": "\u5371\u96AA",
  "callout.bug": "\u7F3A\u9677",
  "callout.example": "\u7BC4\u4F8B",
  "callout.quote": "\u5F15\u7528",
  "notice.noActiveNote": "\u6C92\u6709\u4F5C\u7528\u4E2D\u7684\u7B46\u8A18",
  "notice.linkCopied": "\u5DF2\u8907\u88FD\u5340\u584A\u9023\u7D50",
  "notice.linkCopyFailed": "\u8907\u88FD\u5340\u584A\u9023\u7D50\u5931\u6557",
  "notice.selectImage": "\u8ACB\u9078\u64C7\u5716\u7247\u6A94\u6848\u3002",
  "notice.insertImageFailed": "\u63D2\u5165\u5716\u7247\u5931\u6557\u3002",
  "notice.insertAttachmentFailed": "\u63D2\u5165\u9644\u4EF6\u5931\u6557\u3002",
  "notice.createPageFailed": "\u5EFA\u7ACB\u9801\u9762\u5931\u6557\u3002",
  "notice.noHeadings": "\u6B64\u7B46\u8A18\u6C92\u6709\u53EF\u5217\u51FA\u7684\u6A19\u984C\u3002",
  "command.openInsertMenu": "\u958B\u555F\u5340\u584A\u63D2\u5165\u9078\u55AE",
  "menu.closeMenu": "\u95DC\u9589\u9078\u55AE",
  "page.untitled": "\u672A\u547D\u540D",
  "toc.title": "\u76EE\u9304",
  "settings.insertItems.name": "\u63D2\u5165\u9078\u55AE\u9805\u76EE",
  "settings.insertItems.desc": "\u62D6\u66F3\u53EF\u6392\u5E8F\uFF0C\u53D6\u6D88\u52FE\u9078\u53EF\u96B1\u85CF\u3002\u65B0\u589E\u9805\u76EE\u5373\u53EF\u5728\u9078\u55AE\u4E2D\u57F7\u884C\u4EFB\u610F Obsidian \u6307\u4EE4\u3002",
  "settings.addCommand": "\u65B0\u589E\u6307\u4EE4",
  "settings.resetOrder": "\u91CD\u8A2D\u6392\u5E8F",
  "settings.commandMissing": "\u8A72\u6307\u4EE4\u76EE\u524D\u7121\u6CD5\u4F7F\u7528",
  "settings.customCommand.title": "\u81EA\u8A02\u63D2\u5165\u6307\u4EE4",
  "settings.customCommand.label": "\u540D\u7A31",
  "settings.customCommand.command": "\u6307\u4EE4",
  "settings.customCommand.commandDesc": "\u8F38\u5165\u4EE5\u641C\u5C0B Obsidian \u6307\u4EE4\u3002",
  "settings.customCommand.icon": "\u5716\u793A",
  "settings.customCommand.iconDesc": 'Lucide \u5716\u793A\u540D\u7A31\uFF0C\u4F8B\u5982 "zap" \u6216 "pencil"\u3002',
  "settings.customCommand.save": "\u5132\u5B58",
  "settings.customCommand.cancel": "\u53D6\u6D88",
  "settings.customCommand.boundTo": "\u4F86\u81EA Obsidian\u300C{name}\u300D",
  "settings.customCommand.edit": "\u7DE8\u8F2F",
  "settings.customCommand.delete": "\u522A\u9664"
};
var zh_tw_default = zhTw;

// src/locale/helpers.ts
var localeMap = {
  en: en_default,
  zh: zh_default,
  "zh-cn": zh_default,
  "zh-tw": zh_tw_default,
  "zh-hk": zh_tw_default
};
var getLocale = () => {
  var _a;
  const lang = (((_a = window.localStorage) == null ? void 0 : _a.getItem("language")) || document.documentElement.lang || "en").toLowerCase();
  return localeMap[lang] || localeMap[lang.split("-")[0]] || en_default;
};
function t(key) {
  const currentLocale = getLocale();
  return currentLocale[key] || en_default[key] || key;
}

// src/insertRegistry.ts
var BUILTIN_ITEMS = [
  { id: "h1", sectionKey: "headings", labelKey: "menu.h1", icon: "heading-1", keywords: ["h1", "#1", "title"] },
  { id: "h2", sectionKey: "headings", labelKey: "menu.h2", icon: "heading-2", keywords: ["h2", "#2", "title"] },
  { id: "h3", sectionKey: "headings", labelKey: "menu.h3", icon: "heading-3", keywords: ["h3", "#3", "title"] },
  { id: "h4", sectionKey: "headings", labelKey: "menu.h4", icon: "heading-4", keywords: ["h4", "#4", "title"] },
  { id: "h5", sectionKey: "headings", labelKey: "menu.h5", icon: "heading-5", keywords: ["h5", "#5", "title"] },
  // "check list" with the space is in the keywords deliberately: the matcher
  // tests the query as one substring, so a two-word query matches nothing
  // unless a keyword contains the space too.
  { id: "todo", sectionKey: "insert", labelKey: "menu.todo", icon: "check-square", keywords: ["todo", "task", "checkbox", "checklist", "check list", "- [ ]"] },
  { id: "code", sectionKey: "insert", labelKey: "menu.code", icon: "code", keywords: ["```"] },
  { id: "math", sectionKey: "insert", labelKey: "menu.math", icon: "sigma", keywords: ["latex", "$$"] },
  { id: "table", sectionKey: "insert", labelKey: "menu.table", icon: "table" },
  { id: "divider", sectionKey: "insert", labelKey: "menu.divider", icon: "minus", keywords: ["hr", "---", "rule", "separator", "line", "break"] },
  { id: "toc", sectionKey: "insert", labelKey: "menu.toc", icon: "list-ordered", keywords: ["toc", "contents", "outline", "headings", "index"] },
  { id: "callout", sectionKey: "insert", labelKey: "menu.callout", icon: "pencil", keywords: ["admonition"] },
  { id: "page", sectionKey: "inline", labelKey: "menu.page", icon: "file-plus", keywords: ["note", "subpage", "new"] },
  { id: "link", sectionKey: "inline", labelKey: "menu.link", icon: "link", keywords: ["wikilink", "[["] },
  { id: "ext-link", sectionKey: "inline", labelKey: "menu.extLink", icon: "link-2", keywords: ["url"] },
  { id: "image", sectionKey: "inline", labelKey: "menu.image", icon: "image", keywords: ["photo", "picture"] },
  { id: "attachment", sectionKey: "inline", labelKey: "menu.attachment", icon: "paperclip", keywords: ["file", "pdf", "upload"] },
  { id: "today", sectionKey: "meta", labelKey: "menu.today", icon: "calendar", keywords: ["date"] },
  { id: "yesterday", sectionKey: "meta", labelKey: "menu.yesterday", icon: "calendar-minus", keywords: ["date", "yesterday"] },
  { id: "tomorrow", sectionKey: "meta", labelKey: "menu.tomorrow", icon: "calendar-plus", keywords: ["date", "tomorrow"] },
  { id: "time", sectionKey: "meta", labelKey: "menu.time", icon: "clock" },
  { id: "footnote", sectionKey: "meta", labelKey: "menu.footnote", icon: "hash" },
  { id: "comment", sectionKey: "meta", labelKey: "menu.comment", icon: "message-square" }
];
var DEFAULT_INSERT_ORDER = BUILTIN_ITEMS.map((item) => item.id);
function resolveMenuItems(builtins, custom, order, hidden, translate) {
  var _a;
  const pool = /* @__PURE__ */ new Map();
  for (const item of builtins) {
    pool.set(item.id, {
      id: item.id,
      sectionKey: item.sectionKey,
      label: translate(item.labelKey),
      icon: item.icon,
      keywords: (_a = item.keywords) != null ? _a : []
    });
  }
  for (const item of custom) {
    pool.set(item.id, {
      id: item.id,
      sectionKey: "custom",
      label: item.label,
      icon: item.icon,
      keywords: [],
      commandId: item.commandId
    });
  }
  const hiddenSet = new Set(hidden);
  const placed = /* @__PURE__ */ new Set();
  const result = [];
  for (const id of order) {
    const item = pool.get(id);
    if (!item || placed.has(id))
      continue;
    placed.add(id);
    if (!hiddenSet.has(id))
      result.push(item);
  }
  for (const [id, item] of pool) {
    if (placed.has(id))
      continue;
    if (!hiddenSet.has(id))
      result.push(item);
  }
  return result;
}
function reorderIds(order, from, to) {
  const next = [...order];
  if (!Number.isInteger(from) || !Number.isInteger(to))
    return next;
  if (from === to)
    return next;
  if (from < 0 || from >= order.length)
    return next;
  if (to < 0 || to >= order.length)
    return next;
  const [moved] = next.splice(from, 1);
  next.splice(to - (from < to ? 1 : 0), 0, moved);
  return next;
}
function groupBySection(items) {
  const sections = [];
  for (const item of items) {
    const last = sections[sections.length - 1];
    if (last && last.sectionKey === item.sectionKey) {
      last.items.push(item);
    } else {
      sections.push({ sectionKey: item.sectionKey, items: [item] });
    }
  }
  return sections;
}
var BUILTIN_IDS = new Set(BUILTIN_ITEMS.map((item) => item.id));
function addCustomItem(layout, item) {
  return { ...layout, insertCustom: [...layout.insertCustom, item] };
}
function updateCustomItem(layout, item) {
  return {
    ...layout,
    insertCustom: layout.insertCustom.map((entry) => entry.id === item.id ? item : entry)
  };
}
function removeCustomItem(layout, id) {
  if (BUILTIN_IDS.has(id))
    return layout;
  return {
    insertCustom: layout.insertCustom.filter((entry) => entry.id !== id),
    // Leaving the id in either list would keep resolveMenuItems skipping a
    // row that no longer exists, and a stale hidden entry would suppress a
    // future custom item that happened to reuse the id.
    insertOrder: layout.insertOrder.filter((entry) => entry !== id),
    insertHidden: layout.insertHidden.filter((entry) => entry !== id)
  };
}
function setItemHidden(layout, id, hidden) {
  const without = layout.insertHidden.filter((entry) => entry !== id);
  return { ...layout, insertHidden: hidden ? [...without, id] : without };
}
function resetItemLayout(layout) {
  return { ...layout, insertOrder: [], insertHidden: [] };
}
function applyOrder(layout, order) {
  const live = /* @__PURE__ */ new Set([...BUILTIN_IDS, ...layout.insertCustom.map((entry) => entry.id)]);
  return { ...layout, insertOrder: order.filter((id) => live.has(id)) };
}
var COMMAND_PICKER_LIMIT = 200;
function matchCommands(commands, query, limit = COMMAND_PICKER_LIMIT) {
  const needle = query.trim().toLowerCase();
  const scored = [];
  for (const command of commands) {
    if (!command.name)
      continue;
    const name = command.name.toLowerCase();
    const at = needle === "" ? 0 : name.indexOf(needle);
    if (at === -1)
      continue;
    scored.push({ command, at, name });
  }
  scored.sort((a, b) => a.at - b.at || a.name.localeCompare(b.name));
  return scored.slice(0, limit).map((entry) => entry.command);
}

// src/insertCommandModal.ts
var import_obsidian2 = require("obsidian");
function listCommands(app) {
  var _a;
  const registry = (_a = app.commands) == null ? void 0 : _a.commands;
  return registry ? Object.values(registry) : [];
}
var CommandSuggest = class extends import_obsidian2.AbstractInputSuggest {
  constructor(app, inputEl, onPick) {
    super(app, inputEl);
    this.onPick = onPick;
    this.limit = COMMAND_PICKER_LIMIT;
  }
  getSuggestions(query) {
    return matchCommands(listCommands(this.app), query);
  }
  renderSuggestion(command, el) {
    el.createDiv({ cls: "ftn-command-suggest-name", text: command.name });
    el.createDiv({ cls: "ftn-command-suggest-id", text: command.id });
  }
  selectSuggestion(command) {
    this.setValue(command.name);
    this.onPick(command);
    this.close();
  }
};
var InsertCommandModal = class extends import_obsidian2.Modal {
  constructor(app, existing, onSave) {
    var _a, _b, _c, _d;
    super(app);
    this.onSave = onSave;
    this.iconPreviewEl = null;
    this.labelInputEl = null;
    this.id = (_a = existing == null ? void 0 : existing.id) != null ? _a : `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    this.label = (_b = existing == null ? void 0 : existing.label) != null ? _b : "";
    this.icon = (_c = existing == null ? void 0 : existing.icon) != null ? _c : "zap";
    this.commandId = (_d = existing == null ? void 0 : existing.commandId) != null ? _d : "";
  }
  onOpen() {
    var _a, _b;
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h2", { text: t("settings.customCommand.title") });
    new import_obsidian2.Setting(contentEl).setName(t("settings.customCommand.label")).addText((text) => {
      this.labelInputEl = text.inputEl;
      text.setValue(this.label).onChange((value) => {
        this.label = value;
      });
    });
    const commandName = (_b = (_a = listCommands(this.app).find((command) => command.id === this.commandId)) == null ? void 0 : _a.name) != null ? _b : "";
    new import_obsidian2.Setting(contentEl).setName(t("settings.customCommand.command")).setDesc(t("settings.customCommand.commandDesc")).addText((text) => {
      text.setValue(commandName);
      new CommandSuggest(this.app, text.inputEl, (command) => {
        this.commandId = command.id;
        if (!this.label.trim() && this.labelInputEl) {
          this.label = command.name;
          this.labelInputEl.value = command.name;
        }
        if (command.icon && this.icon === "zap") {
          this.icon = command.icon;
          this.renderIconPreview();
        }
      });
    });
    const iconSetting = new import_obsidian2.Setting(contentEl).setName(t("settings.customCommand.icon")).setDesc(t("settings.customCommand.iconDesc")).addText((text) => text.setValue(this.icon).onChange((value) => {
      this.icon = value;
      this.renderIconPreview();
    }));
    this.iconPreviewEl = iconSetting.controlEl.createSpan({ cls: "ftn-icon-preview" });
    this.renderIconPreview();
    new import_obsidian2.Setting(contentEl).addButton((button) => button.setButtonText(t("settings.customCommand.save")).setCta().onClick(() => {
      if (!this.label.trim() || !this.commandId)
        return;
      this.onSave({
        id: this.id,
        label: this.label.trim(),
        icon: this.icon.trim() || "zap",
        commandId: this.commandId
      });
      this.close();
    })).addButton((button) => button.setButtonText(t("settings.customCommand.cancel")).onClick(() => this.close()));
  }
  renderIconPreview() {
    if (!this.iconPreviewEl)
      return;
    this.iconPreviewEl.empty();
    (0, import_obsidian2.setIcon)(this.iconPreviewEl, this.icon.trim() || "zap");
  }
  onClose() {
    this.contentEl.empty();
  }
};

// src/nativeFileExplorerModel.ts
var trimSlashes = (path) => path.replace(/^\/+|\/+$/gu, "");
var IMAGE_EXTENSIONS = /* @__PURE__ */ new Set([
  "avif",
  "bmp",
  "gif",
  "heic",
  "heif",
  "ico",
  "jpeg",
  "jpg",
  "png",
  "svg",
  "tif",
  "tiff",
  "webp"
]);
var fileVisualKindForPath = (path, extensionHint = "") => {
  var _a;
  const fileName = (_a = path.split("/").pop()) != null ? _a : "";
  const dot = fileName.lastIndexOf(".");
  const extension = (dot > 0 ? fileName.slice(dot + 1) : extensionHint).trim().toLocaleLowerCase("en-US");
  if (extension === "md")
    return "markdown";
  if (extension === "pdf")
    return "pdf";
  if (extension === "epub")
    return "epub";
  if (IMAGE_EXTENSIONS.has(extension))
    return "image";
  if (["mp3", "wav", "m4a", "ogg", "flac", "aac", "opus", "aiff"].includes(extension))
    return "audio";
  if (["mp4", "webm", "mov", "mkv", "ogv", "avi"].includes(extension))
    return "video";
  if (extension === "canvas")
    return "canvas";
  if (["js", "ts", "jsx", "tsx", "json", "css", "html", "py", "sh", "yaml", "yml", "xml", "sql", "toml"].includes(extension))
    return "code";
  if (["zip", "7z", "rar", "tar", "gz", "bz2", "xz"].includes(extension))
    return "archive";
  return "generic";
};
var joinVaultPath = (folderPath, childName) => {
  const folder = trimSlashes(folderPath.trim());
  const child = trimSlashes(childName.trim());
  return folder.length > 0 ? `${folder}/${child}` : child;
};
var nextAvailableMarkdownPath = (folderPath, exists, baseName = localize("\u672A\u547D\u540D")) => {
  let suffix = 0;
  while (true) {
    const fileName = suffix === 0 ? `${baseName}.md` : `${baseName} ${suffix}.md`;
    const candidate = joinVaultPath(folderPath, fileName);
    if (!exists(candidate))
      return candidate;
    suffix += 1;
  }
};

// src/fileIconModel.ts
var ICON_COLORS = ["gray", "blue", "red", "green", "purple", "amber", "cyan", "orange", "pink"];
var ICON_DEFAULTS = {
  markdown: { label: localize("Markdown \u7B14\u8BB0"), icon: "keyline-file-text", color: "blue" },
  pdf: { label: localize("PDF \u6587\u6863"), icon: "keyline-file-text", color: "red" },
  epub: { label: localize("EPUB \u7535\u5B50\u4E66"), icon: "keyline-file-text", color: "amber" },
  image: { label: localize("\u56FE\u7247"), icon: "keyline-file-image", color: "green" },
  audio: { label: localize("\u97F3\u9891"), icon: "file-audio", color: "purple" },
  video: { label: localize("\u89C6\u9891"), icon: "file-video", color: "pink" },
  canvas: { label: localize("Canvas \u753B\u5E03"), icon: "layout-dashboard", color: "cyan" },
  code: { label: localize("\u4EE3\u7801\u4E0E\u914D\u7F6E"), icon: "file-code", color: "blue" },
  archive: { label: localize("\u538B\u7F29\u6587\u4EF6"), icon: "file-archive", color: "orange" },
  generic: { label: localize("\u5176\u4ED6\u6587\u4EF6"), icon: "keyline-file-text", color: "gray" },
  folder: { label: localize("\u6587\u4EF6\u5939"), icon: "keyline-folder", color: "gray" }
};
var record = (v) => v && typeof v === "object" && !Array.isArray(v) ? v : {};
function normalizeIconOverride(value) {
  const v = record(value), result = {};
  if (typeof v.icon === "string") {
    const icon = v.icon.trim().replace(/^lucide-/, "");
    if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(icon) && icon.length <= 80)
      result.icon = icon;
  }
  if (typeof v.color === "string") {
    const color = v.color.trim().toLowerCase();
    if (ICON_COLORS.includes(color) || /^#[\da-f]{6}$/.test(color))
      result.color = color;
  }
  return result;
}
function normalizeFileIconSettings(value) {
  const v = record(value);
  const types = Object.fromEntries(Object.entries(record(v.types)).filter(([key]) => Object.prototype.hasOwnProperty.call(ICON_DEFAULTS, key)).map(([key, val]) => [key, normalizeIconOverride(val)]));
  const files = Object.assign(/* @__PURE__ */ Object.create(null), Object.fromEntries(
    Object.entries(record(v.files)).filter(([key]) => key && !key.startsWith("/") && !key.split("/").some((p) => p === ".." || p === ".")).map(([key, val]) => [key, normalizeIconOverride(val)]).filter(([, val]) => Object.keys(val).length)
  ));
  return { enabled: v.enabled !== false, monochrome: v.monochrome === true, types, files };
}
function resolveFileIcon(settings, path, folder = false, extensionHint = "", expanded = false) {
  var _a, _b, _c, _d, _e;
  const kind = folder ? "folder" : fileVisualKindForPath(path, extensionHint);
  const builtin = ICON_DEFAULTS[kind], type = (_a = settings.types[kind]) != null ? _a : {};
  const file = Object.prototype.hasOwnProperty.call(settings.files, path) ? settings.files[path] : {};
  return {
    kind,
    icon: (_c = (_b = file.icon) != null ? _b : type.icon) != null ? _c : folder && expanded ? "keyline-folder-open" : builtin.icon,
    color: settings.monochrome ? "gray" : (_e = (_d = file.color) != null ? _d : type.color) != null ? _e : builtin.color,
    iconSource: file.icon ? localize("\u6587\u4EF6\u81EA\u5B9A\u4E49") : type.icon ? localize("\u7C7B\u578B\u9ED8\u8BA4") : localize("\u5185\u7F6E\u9ED8\u8BA4"),
    colorSource: settings.monochrome ? localize("\u5355\u8272\u6A21\u5F0F") : file.color ? localize("\u6587\u4EF6\u81EA\u5B9A\u4E49") : type.color ? localize("\u7C7B\u578B\u9ED8\u8BA4") : localize("\u5185\u7F6E\u9ED8\u8BA4")
  };
}
var iconColorCss = (color) => /^#[\da-f]{6}$/i.test(color) ? color : `var(--ncl-icon-${ICON_COLORS.includes(color) ? color : "gray"})`;
function moveFileIconOverrides(settings, oldPath, newPath) {
  const affected = Object.entries(settings.files).filter(([key]) => key === oldPath || key.startsWith(oldPath + "/"));
  for (const [key] of affected)
    delete settings.files[key];
  if (newPath !== null)
    for (const [key, value] of affected)
      settings.files[newPath + key.slice(oldPath.length)] = value;
  return affected.length > 0;
}

// src/themeLayout.ts
var DEFAULT_THEME_LAYOUT_SETTINGS = {
  textMaxWidth: 600,
  pageSidePadding: -1,
  editorLineHeight: 1.85,
  readingLineHeight: 1.8,
  paragraphGap: 1,
  paragraphBefore: 1,
  paragraphAfter: 1,
  firstLineIndent: 0,
  listLineHeight: 1.8,
  listItemSpacing: 0,
  listIndent: 1.8,
  listMarkerGap: 10,
  listBulletSize: 7,
  blockquoteIndent: 16,
  headingBefore: 1.8,
  headingAfter: 0.6
};
var THEME_LAYOUT_SETTING_SPECS = {
  textMaxWidth: {
    min: 320,
    max: 1600,
    step: 20,
    unit: "px",
    cssVariable: "--ncl-text-max-width"
  },
  pageSidePadding: {
    min: -1,
    max: 160,
    step: 1,
    unit: "px",
    cssVariable: "--ncl-page-side-padding"
  },
  editorLineHeight: {
    min: 1.2,
    max: 2.2,
    step: 0.05,
    unit: "",
    cssVariable: "--ncl-editor-line-height"
  },
  readingLineHeight: {
    min: 1.2,
    max: 2.2,
    step: 0.05,
    unit: "",
    cssVariable: "--ncl-reading-line-height"
  },
  paragraphGap: {
    min: 0,
    max: 1.5,
    step: 0.05,
    unit: "em",
    cssVariable: "--ncl-paragraph-gap"
  },
  paragraphBefore: {
    min: 0,
    max: 2,
    step: 0.05,
    unit: "em",
    cssVariable: "--ncl-paragraph-before"
  },
  paragraphAfter: {
    min: 0,
    max: 2,
    step: 0.05,
    unit: "em",
    cssVariable: "--ncl-paragraph-after"
  },
  firstLineIndent: {
    min: 0,
    max: 4,
    step: 0.25,
    unit: "em",
    cssVariable: "--ncl-first-line-indent"
  },
  listLineHeight: {
    min: 1.2,
    max: 2.2,
    step: 0.05,
    unit: "",
    cssVariable: "--ncl-list-line-height"
  },
  listItemSpacing: {
    min: 0,
    max: 0.8,
    step: 0.02,
    unit: "em",
    cssVariable: "--ncl-list-item-spacing"
  },
  listIndent: {
    min: 0.75,
    max: 3.5,
    step: 0.05,
    unit: "em",
    cssVariable: "--ncl-list-indent"
  },
  listMarkerGap: {
    min: 4,
    max: 18,
    step: 1,
    unit: "px",
    cssVariable: "--ncl-list-marker-gap"
  },
  listBulletSize: {
    min: 3,
    max: 8,
    step: 0.5,
    unit: "px",
    cssVariable: "--ncl-list-bullet-size"
  },
  blockquoteIndent: {
    min: 8,
    max: 32,
    step: 1,
    unit: "px",
    cssVariable: "--ncl-blockquote-indent"
  },
  headingBefore: {
    min: 0.5,
    max: 3,
    step: 0.1,
    unit: "em",
    cssVariable: "--ncl-heading-before"
  },
  headingAfter: {
    min: 0,
    max: 1.5,
    step: 0.05,
    unit: "em",
    cssVariable: "--ncl-heading-after"
  }
};
var decimalPlaces = (step) => {
  const text = String(step);
  return text.includes(".") ? text.length - text.indexOf(".") - 1 : 0;
};
var normalizeValue = (value, spec, fallback) => {
  const parsed = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(parsed))
    return fallback;
  const clamped = Math.min(spec.max, Math.max(spec.min, parsed));
  const precision = decimalPlaces(spec.step);
  const stepped = spec.min + Math.round((clamped - spec.min) / spec.step) * spec.step;
  return Number(stepped.toFixed(precision));
};
var normalizeThemeLayoutSettings = (input) => {
  const legacyKeys = [
    "editorLineHeight",
    "readingLineHeight",
    "paragraphBefore",
    "paragraphAfter",
    "firstLineIndent",
    "listIndent",
    "listMarkerGap",
    "listBulletSize",
    "blockquoteIndent",
    "headingBefore",
    "headingAfter"
  ];
  const isLegacyCompleteLayout = input !== null && input !== void 0 && legacyKeys.every((key) => Object.prototype.hasOwnProperty.call(input, key)) && !Object.prototype.hasOwnProperty.call(input, "paragraphGap") && !Object.prototype.hasOwnProperty.call(input, "listLineHeight") && !Object.prototype.hasOwnProperty.call(input, "listItemSpacing");
  const normalized = {};
  for (const key of Object.keys(THEME_LAYOUT_SETTING_SPECS)) {
    const spec = THEME_LAYOUT_SETTING_SPECS[key];
    const candidate = key === "blockquoteIndent" && isLegacyCompleteLayout ? void 0 : input == null ? void 0 : input[key];
    normalized[key] = normalizeValue(candidate, spec, DEFAULT_THEME_LAYOUT_SETTINGS[key]);
  }
  return normalized;
};
var formatThemeLayoutValue = (key, value) => {
  if (key === "pageSidePadding" && value === -1)
    return localize("\u81EA\u52A8");
  const spec = THEME_LAYOUT_SETTING_SPECS[key];
  const precision = decimalPlaces(spec.step);
  const formatted = value.toFixed(precision).replace(/\.0+$/u, "").replace(/(\.\d*?)0+$/u, "$1");
  return `${formatted}${spec.unit}`;
};
var themeLayoutCssVariables = (input) => {
  const settings = normalizeThemeLayoutSettings(input);
  const variables = {};
  for (const key of Object.keys(THEME_LAYOUT_SETTING_SPECS)) {
    variables[THEME_LAYOUT_SETTING_SPECS[key].cssVariable] = formatThemeLayoutValue(key, settings[key]);
  }
  variables["--ncl-page-side-padding"] = settings.pageSidePadding === -1 ? "initial" : `min(${settings.pageSidePadding}px, 20%)`;
  const firstLevelIndent = Math.max(0.5, settings.listIndent * 0.4);
  variables["--ncl-list-first-indent"] = `${Number(firstLevelIndent.toFixed(2))}em`;
  return variables;
};

// src/settings.ts
var DEFAULT_SETTINGS = {
  enabled: true,
  nativeFileExplorerEnhancements: true,
  workspaceSwitcher: true,
  showHoverHints: false,
  fileIcons: normalizeFileIconSettings(),
  marginalia: true,
  themeLayout: { ...DEFAULT_THEME_LAYOUT_SETTINGS },
  // Notion drags whole blocks, not single lines. A wrapped paragraph is one
  // block to the reader, so 'line' meant grabbing a paragraph moved a
  // fragment of it and left the rest behind.
  dragGranularity: "paragraph",
  // A tiny dwell prevents handles from flashing as the pointer crosses the
  // page while remaining well below a consciously perceived delay.
  hoverDelay: 90,
  // Raised from 200ms. It has to cover the pointer's pause between leaving
  // a line and arriving at the handle, which is what made the handle feel
  // like it vanished the moment attention moved to it.
  hideDelay: 260,
  handleSide: "left",
  // OFF by default: it changes the handle from a hover affordance into a
  // permanent one, which is a different editor to look at.
  handleAlwaysVisible: false,
  // OFF by default: it adds a third button to the hover handle, which is a
  // visible change to every line you point at rather than an opt-in feature.
  foldHandle: false,
  dateFormat: "YYYY-MM-DD",
  timeFormat: "HH:mm",
  // Parser-confirmed markers only. Invalid raw delimiters remain visible.
  hideSyntaxMarkers: true,
  guardSuspiciousSyntax: true,
  wikilinkInputAliases: true,
  revealSyntaxWithOption: true,
  notifyOnPaste: true,
  selectionToolbar: true,
  // The lab intentionally tests Notion-like cross-block selection. This is
  // isolated from the standalone NMG, whose safer default remains off.
  snapSelectionToBlocks: true,
  blockKeys: true,
  plusHandle: true,
  slashMenu: true,
  slashTrigger: "/",
  slashInline: true,
  // Empty rather than the built-in order: resolveMenuItems appends anything
  // an order does not name, so an empty order IS the built-in order, and
  // storing it explicitly would freeze out rows added by later versions.
  insertOrder: [],
  insertHidden: [],
  insertCustom: [],
  // OFF by default, as asked: an attachment reads as a link unless it is
  // explicitly meant to render inline.
  embedAttachments: false
};
var BlockPluginSettingTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    /** The insert-menu list, repainted on its own so display() is never needed. */
    this.insertListEl = null;
    /** The theme controls repaint independently when defaults are restored. */
    this.themeLayoutPanelEl = null;
    this.section = "interface";
    this.beforeSearch = "interface";
    this.query = "";
    this.panels = /* @__PURE__ */ new Map();
    this.navButtons = /* @__PURE__ */ new Map();
    this.contentEl = null;
    this.selectEl = null;
    this.emptyEl = null;
    this.resize = null;
    this.plugin = plugin;
  }
  display() {
    var _a;
    const { containerEl } = this;
    (_a = this.resize) == null ? void 0 : _a.disconnect();
    containerEl.empty();
    containerEl.addClass("ncl-settings");
    this.panels.clear();
    this.navButtons.clear();
    this.query = "";
    this.insertListEl = this.themeLayoutPanelEl = null;
    const header = containerEl.createDiv({ cls: "ncl-settings-header" });
    header.createEl("h2", { text: "Keyline" });
    header.createSpan({ cls: "ncl-settings-version", text: this.plugin.manifest.version });
    const search = header.createEl("input", { cls: "ncl-settings-search", attr: { type: "search", placeholder: localize("\u641C\u7D22\u8BBE\u7F6E"), "aria-label": localize("\u641C\u7D22 Keyline \u8BBE\u7F6E") } });
    const shell = containerEl.createDiv({ cls: "ncl-settings-shell" });
    const nav = shell.createEl("nav", { cls: "ncl-settings-nav", attr: { "aria-label": localize("\u8BBE\u7F6E\u5206\u7C7B") } });
    this.selectEl = containerEl.createEl("select", { cls: "dropdown ncl-settings-select", attr: { "aria-label": localize("\u8BBE\u7F6E\u5206\u7C7B") } });
    header.after(this.selectEl);
    for (const item of SETTINGS_SECTIONS) {
      const button = nav.createEl("button", { cls: "ncl-settings-tab", attr: { type: "button" } });
      const icon = button.createSpan({ cls: "ncl-settings-tab-icon", attr: { "aria-hidden": "true" } });
      (0, import_obsidian3.setIcon)(icon, item.icon);
      button.createSpan({ text: item.label });
      button.dataset.section = item.id;
      button.addEventListener("click", () => this.showSection(item.id));
      button.addEventListener("keydown", (event) => {
        var _a2, _b;
        if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key))
          return;
        event.preventDefault();
        const visible = [...this.navButtons.values()].filter((b) => !b.hidden);
        const index = visible.indexOf(button);
        const next = event.key === "Home" ? 0 : event.key === "End" ? visible.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + visible.length) % visible.length;
        (_a2 = visible[next]) == null ? void 0 : _a2.focus();
        (_b = visible[next]) == null ? void 0 : _b.click();
      });
      this.navButtons.set(item.id, button);
      this.selectEl.createEl("option", { text: item.label, value: item.id });
    }
    this.selectEl.addEventListener("change", () => this.showSection(this.selectEl.value));
    this.contentEl = shell.createDiv({ cls: "ncl-settings-content" });
    this.emptyEl = this.contentEl.createDiv({ cls: "ncl-settings-empty", text: localize("\u6CA1\u6709\u5339\u914D\u7684\u8BBE\u7F6E"), attr: { role: "status" } });
    this.emptyEl.hidden = true;
    search.addEventListener("input", () => {
      if (!this.query)
        this.beforeSearch = this.section;
      this.query = search.value.trim();
      const matches = findSettingsSections(this.query);
      for (const [id, button] of this.navButtons)
        button.hidden = !matches.includes(id);
      for (const option of Array.from(this.selectEl.options))
        option.hidden = !matches.includes(option.value);
      if (!this.query)
        this.showSection(this.beforeSearch);
      else if (matches.length)
        this.showSection(matches.includes(this.section) ? this.section : matches[0]);
      else {
        for (const panel of this.panels.values())
          panel.hidden = true;
        this.emptyEl.hidden = false;
      }
      this.selectEl.disabled = !matches.length;
    });
    search.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !search.value)
        return;
      event.preventDefault();
      event.stopPropagation();
      search.value = "";
      search.dispatchEvent(new Event("input"));
    });
    const win = containerEl.ownerDocument.defaultView;
    const updateWidth = () => {
      const narrow = containerEl.getBoundingClientRect().width < 640;
      if (containerEl.classList.contains("is-narrow") !== narrow)
        containerEl.classList.toggle("is-narrow", narrow);
    };
    this.resize = new win.ResizeObserver(updateWidth);
    this.resize.observe(containerEl);
    updateWidth();
    this.showSection(this.section);
    this.plugin.refreshInterfacePresentation(containerEl.ownerDocument);
  }
  hide() {
    var _a;
    (_a = this.resize) == null ? void 0 : _a.disconnect();
    this.resize = null;
    this.containerEl.removeClass("ncl-settings", "is-narrow");
    this.panels.clear();
    this.navButtons.clear();
    this.insertListEl = this.themeLayoutPanelEl = this.contentEl = this.emptyEl = null;
    this.selectEl = null;
  }
  showSection(id) {
    var _a, _b;
    if (!this.contentEl)
      return;
    const item = SETTINGS_SECTIONS.find((section) => section.id === id);
    this.section = id;
    this.emptyEl.hidden = true;
    let panel = this.panels.get(id);
    if (!panel) {
      panel = this.contentEl.createEl("section", { cls: "ncl-settings-panel", attr: { "aria-label": item.label } });
      panel.dataset.section = id;
      panel.createEl("h3", { cls: "ncl-settings-title", text: item.label });
      panel.createEl("p", { cls: "ncl-settings-description", text: item.description });
      this.panels.set(id, panel);
      switch (id) {
        case "interface":
          this.renderInterface(panel);
          break;
        case "typography":
          this.themeLayoutPanelEl = panel.createDiv({ cls: "ncl-theme-layout-panel" });
          this.renderThemeLayoutPanel();
          break;
        case "icons":
          this.renderIcons(panel);
          break;
        case "editing":
          this.renderEditing(panel);
          break;
        case "insert":
          this.renderInsert(panel);
          break;
        case "advanced":
          this.renderAdvanced(panel);
          break;
      }
      if (id !== "typography")
        this.groupRows(panel);
    }
    for (const [key, el] of this.panels)
      el.hidden = key !== id;
    for (const [key, button] of this.navButtons) {
      button.classList.toggle("is-active", key === id);
      if (key === id)
        button.setAttribute("aria-current", "page");
      else
        button.removeAttribute("aria-current");
    }
    this.selectEl.value = id;
    if (id === "interface") {
      const menu = panel.querySelector("[data-menu-preference]");
      if (menu)
        menu.value = readNativeMenuPreference(this.app) ? "native" : "keyline";
    }
    for (const row of Array.from(panel.querySelectorAll(".setting-item"))) {
      const match = !!this.query && matchesSettingsSearch((_a = row.textContent) != null ? _a : "", this.query);
      row.classList.toggle("is-search-match", match);
      if (match) {
        const details = row.closest("details");
        if (details)
          details.open = true;
      }
    }
    if (this.query)
      (_b = panel.querySelector(".is-search-match")) == null ? void 0 : _b.scrollIntoView({ block: "nearest" });
  }
  groupRows(container) {
    var _a;
    let items = null;
    for (const child of Array.from(container.children)) {
      const el = child;
      if (el.matches(".setting-item-heading, .ncl-theme-layout-section") && !el.querySelector("button")) {
        const group = container.ownerDocument.createElement("section");
        group.className = "ncl-preference-group";
        group.setAttribute("aria-label", (_a = el.textContent) != null ? _a : "");
        el.before(group);
        group.append(el);
        items = group.createDiv({ cls: "ncl-preference-items" });
      } else if (items)
        items.append(el);
    }
  }
  renderInterface(containerEl) {
    new import_obsidian3.Setting(containerEl).setName(localize("\u663E\u793A")).setHeading();
    new import_obsidian3.Setting(containerEl).setName(localize("\u60AC\u505C\u8BF4\u660E")).setDesc(localize("\u663E\u793A\u6309\u94AE\u4E0E\u5DE5\u5177\u7684\u8BF4\u660E\u6C14\u6CE1\u3002\u5173\u95ED\u4E0D\u5F71\u54CD\u94FE\u63A5\u9884\u89C8\u3001\u9519\u8BEF\u63D0\u9192\u548C\u786E\u8BA4\u5F39\u7A97\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.showHoverHints).onChange(async (value) => {
      this.plugin.settings.showHoverHints = value;
      await this.plugin.saveSettings();
    }));
    const native = readNativeMenuPreference(this.app);
    new import_obsidian3.Setting(containerEl).setName(localize("\u83DC\u5355")).setDesc(native === null ? localize("\u5F53\u524D\u73AF\u5883\u672A\u63D0\u4F9B\u83DC\u5355\u5207\u6362\u63A5\u53E3\u3002") : localize("\u590D\u7528 Obsidian \u7684\u83DC\u5355\u8BBE\u7F6E\uFF1BKeyline \u4F7F\u7528\u4E3B\u9898\u6837\u5F0F\uFF0C\u7CFB\u7EDF\u4F7F\u7528\u64CD\u4F5C\u7CFB\u7EDF\u6837\u5F0F\u3002")).addDropdown((dropdown) => {
      dropdown.selectEl.dataset.menuPreference = "true";
      dropdown.addOption("keyline", "Keyline").addOption("native", localize("\u7CFB\u7EDF")).setValue(native ? "native" : "keyline").setDisabled(native === null).onChange(async (value) => {
        dropdown.setDisabled(true);
        try {
          await writeNativeMenuPreference(this.app, value === "native");
        } catch (error) {
          new import_obsidian3.Notice(error instanceof Error ? error.message : localize("\u83DC\u5355\u8BBE\u7F6E\u672A\u4FDD\u5B58"));
        } finally {
          dropdown.setValue(readNativeMenuPreference(this.app) ? "native" : "keyline").setDisabled(readNativeMenuPreference(this.app) === null);
        }
      });
    });
    new import_obsidian3.Setting(containerEl).setName(localize("\u5BFC\u822A")).setHeading();
    new import_obsidian3.Setting(containerEl).setName(localize("\u5E95\u680F\u5E03\u5C40\u5207\u6362\u5668")).setDesc(localize("\u5728 Keyline \u5E95\u680F\u4E2D\u592E\u663E\u793A\u5F53\u524D\u5DE5\u4F5C\u533A\u3002\u9700\u5F00\u542F\u6838\u5FC3\u63D2\u4EF6\u300C\u5DE5\u4F5C\u533A\u300D\uFF1B\u4E0D\u81EA\u52A8\u8986\u76D6\u5DF2\u4FDD\u5B58\u5E03\u5C40\uFF0C\u4E0D\u5728\u542F\u52A8\u65F6\u91CD\u8F7D\u5E03\u5C40\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.workspaceSwitcher).onChange(async (value) => {
      this.plugin.settings.workspaceSwitcher = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("Keyline \u6587\u4EF6\u5BFC\u822A")).setDesc(localize("\u6587\u4EF6\u5939\u5E73\u65F6\u663E\u793A\u56FE\u6807\uFF0C\u60AC\u505C\u6216\u952E\u76D8\u805A\u7126\u65F6\u6062\u590D\u539F\u751F\u5C55\u5F00\u7B26\u53F7\uFF1B\u53F3\u4FA7\u5FEB\u6377\u6309\u94AE\u4ECD\u8C03\u7528 Obsidian \u7684\u539F\u751F\u6587\u4EF6\u83DC\u5355\u548C\u6587\u4EF6\u64CD\u4F5C\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.nativeFileExplorerEnhancements).onChange(async (value) => {
      this.plugin.settings.nativeFileExplorerEnhancements = value;
      await this.plugin.saveSettings();
    }));
  }
  renderIcons(containerEl) {
    new import_obsidian3.Setting(containerEl).setName(localize("\u663E\u793A")).setHeading();
    new import_obsidian3.Setting(containerEl).setName(localize("\u81EA\u52A8\u6587\u4EF6\u56FE\u6807")).setDesc(localize("Sidebar \u4E0E Tab \u5171\u7528\u6587\u4EF6\u7C7B\u578B\u56FE\u6807\u548C\u989C\u8272\u3002\u542F\u7528 Iconic \u65F6\u81EA\u52A8\u8BA9\u4F4D\uFF1B\u5173\u95ED\u6B64\u9879\u5219\u4EA4\u7ED9\u5176\u4ED6\u63D2\u4EF6\u3002\u5173\u95ED\u4E0D\u5220\u9664\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.fileIcons.enabled).onChange(async (value) => {
      this.plugin.settings.fileIcons.enabled = value;
      await this.plugin.saveFileIconSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u5355\u8272\u56FE\u6807")).setDesc(localize("\u4FDD\u7559\u4E0D\u540C\u56FE\u5F62\uFF0C\u7EDF\u4E00\u4F7F\u7528\u4E2D\u6027\u8272\u3002\u5173\u95ED\u540E\u6062\u590D\u5DF2\u8BBE\u7F6E\u7684\u7C7B\u578B\u8272\u4E0E\u81EA\u5B9A\u4E49\u989C\u8272\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.fileIcons.monochrome).onChange(async (value) => {
      this.plugin.settings.fileIcons.monochrome = value;
      await this.plugin.saveFileIconSettings();
    }));
    containerEl.createEl("p", { cls: "setting-item-description", text: localize("\u53F3\u952E\u6587\u4EF6\u3001\u6587\u4EF6\u5939\u6216 Tab \u2192 \u66F4\u6539\u56FE\u6807\u3002\u4E5F\u53EF\u5728\u547D\u4EE4\u9762\u677F\u4E2D\u66F4\u6539\u5F53\u524D\u6587\u4EF6\u56FE\u6807\u3002\u4F18\u5148\u7EA7\uFF1A\u6587\u4EF6\u81EA\u5B9A\u4E49 > \u7C7B\u578B\u9ED8\u8BA4 > \u5185\u7F6E\u9ED8\u8BA4\uFF1B\u6062\u590D\u81EA\u52A8\u4E0D\u4F1A\u4FEE\u6539\u7B14\u8BB0\u5185\u5BB9\u3002") });
    const iconTypes = containerEl.createEl("details", { cls: "ncl-icon-type-settings" });
    iconTypes.createEl("summary", { text: localize("\u8C03\u6574\u5404\u6587\u4EF6\u7C7B\u578B\u7684\u9ED8\u8BA4\u56FE\u6807\u4E0E\u989C\u8272") });
    for (const kind of Object.keys(ICON_DEFAULTS)) {
      new import_obsidian3.Setting(iconTypes).setName(ICON_DEFAULTS[kind].label).addButton((button) => button.setButtonText(localize("\u66F4\u6539\u2026")).onClick(() => this.plugin.editFileIconType(kind)));
    }
  }
  renderEditing(containerEl) {
    new import_obsidian3.Setting(containerEl).setName(localize("\u4EA4\u4E92")).setHeading();
    new import_obsidian3.Setting(containerEl).setName(t("settings.enablePlugin.name")).setDesc(t("settings.enablePlugin.desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.enabled).onChange(async (value) => {
      this.plugin.settings.enabled = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u4E66\u5199\u4FDD\u62A4")).setHeading();
    new import_obsidian3.Setting(containerEl).setName(localize("\u9690\u85CF\u5DF2\u751F\u6548\u7684 Markdown \u7B26\u53F7")).setDesc(localize("\u4EC5\u9690\u85CF Obsidian \u89E3\u6790\u5668\u5DF2\u786E\u8BA4\u7684\u5F3A\u8C03\u3001\u5220\u9664\u7EBF\u3001\u884C\u5185\u4EE3\u7801\u3001\u6807\u9898\u7B26\u53F7\u548C\u6709\u6548\u8F6C\u4E49\u53CD\u659C\u6760\uFF1B\u53EF\u7591\u6216\u65E0\u6548\u7B26\u53F7\u4F1A\u7559\u5728\u5C4F\u5E55\u4E0A\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.hideSyntaxMarkers).onChange(async (value) => {
      this.plugin.settings.hideSyntaxMarkers = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u6807\u51FA\u53EF\u7591\u7684\u6210\u5BF9\u8BED\u6CD5")).setDesc(localize("\u5BF9\u672A\u88AB\u89E3\u6790\u5668\u63A5\u53D7\u7684 **\u3001__\u3001~~ \u548C\u53CD\u5F15\u53F7\u52A0\u6CE2\u6D6A\u7EBF\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u6539\u5199\u6B63\u6587\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.guardSuspiciousSyntax).onChange(async (value) => {
      this.plugin.settings.guardSuspiciousSyntax = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("@ \u83DC\u5355\u4E0E\u4E2D\u6587\u62EC\u53F7")).setDesc(localize("\u8F93\u5165 @ \u641C\u7D22\u65E5\u671F\u3001\u65F6\u95F4\u6216\u9875\u9762\uFF1B\u9009\u62E9\u9875\u9762\u540E\u624D\u5199\u5165 [[\u94FE\u63A5]]\uFF0C\u53D6\u6D88\u4F1A\u4FDD\u7559\u539F\u6587\u3002\u90AE\u7BB1\u4E0D\u89E6\u53D1\u83DC\u5355\u3002\u2191\u2193 \u9009\u62E9\u3001Enter \u63D2\u5165\uFF1B\u672A\u9009\u62E9\u65F6 Enter \u6B63\u5E38\u6362\u884C\u3002\u3010\u3010\u4E0E\u3011\u3011\u4ECD\u7B49\u540C\u4E8E [[ \u4E0E ]]\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.wikilinkInputAliases).onChange(async (value) => {
      this.plugin.settings.wikilinkInputAliases = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u6309\u4F4F \u2325 \u663E\u793A\u6E90\u7801")).setDesc(localize("\u6309\u4F4F Option \u65F6\u4E34\u65F6\u6062\u590D Obsidian \u7684\u539F\u751F Markdown \u7B26\u53F7\u663E\u793A\uFF0C\u677E\u5F00\u5373\u8FD4\u56DE\u65E0\u7B26\u53F7\u4E66\u5199\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.revealSyntaxWithOption).onChange(async (value) => {
      this.plugin.settings.revealSyntaxWithOption = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u7C98\u8D34\u540E\u63D0\u9192")).setDesc(localize("\u7C98\u8D34\u5185\u5BB9\u5E26\u5165\u53EF\u7591\u8BED\u6CD5\u65F6\u663E\u793A\u4E00\u6761\u975E\u6A21\u6001\u63D0\u793A\uFF0C\u4E0D\u6253\u65AD\u7EE7\u7EED\u8F93\u5165\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.notifyOnPaste).onChange(async (value) => {
      this.plugin.settings.notifyOnPaste = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u589E\u5F3A\u6587\u672C\u9009\u62E9\u83DC\u5355")).setDesc(localize("\u9009\u4E2D\u6587\u672C\u65F6\u663E\u793A\u6BB5\u843D\u5C42\u7EA7\u3001\u5E38\u7528\u683C\u5F0F\u3001\u94FE\u63A5\u3001\u9AD8\u4EAE\u4E0E\u989C\u8272\uFF1B\u542F\u7528\u65F6\u66FF\u4EE3 Make.md \u7684\u7B80\u6613\u9009\u62E9\u5DE5\u5177\u6761\u3002\u5173\u95ED\u540E Make.md \u539F\u83DC\u5355\u4F1A\u81EA\u52A8\u6062\u590D\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.selectionToolbar).onChange(async (value) => {
      this.plugin.settings.selectionToolbar = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u5757\u7F16\u8F91")).setHeading();
    new import_obsidian3.Setting(containerEl).setName(t("settings.dragGranularity.name")).setDesc(t("settings.dragGranularity.desc")).addDropdown((dropdown) => dropdown.addOption("line", t("settings.dragGranularity.line")).addOption("paragraph", t("settings.dragGranularity.paragraph")).setValue(this.plugin.settings.dragGranularity).onChange(async (value) => {
      this.plugin.settings.dragGranularity = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(t("settings.hoverDelay.name")).setDesc(t("settings.hoverDelay.desc")).addSlider((slider) => slider.setLimits(0, 500, 50).setValue(this.plugin.settings.hoverDelay).onChange(async (value) => {
      this.plugin.settings.hoverDelay = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(t("settings.hideDelay.name")).setDesc(t("settings.hideDelay.desc")).addSlider((slider) => slider.setLimits(0, 1e3, 50).setValue(this.plugin.settings.hideDelay).onChange(async (value) => {
      this.plugin.settings.hideDelay = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(t("settings.handleSide.name")).setDesc(t("settings.handleSide.desc")).addDropdown((dropdown) => dropdown.addOption("left", t("settings.handleSide.left")).addOption("right", t("settings.handleSide.right")).setValue(this.plugin.settings.handleSide).onChange(async (value) => {
      this.plugin.settings.handleSide = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(t("settings.handleAlwaysVisible.name")).setDesc(t("settings.handleAlwaysVisible.desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.handleAlwaysVisible).onChange(async (value) => {
      this.plugin.settings.handleAlwaysVisible = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(t("settings.foldHandle.name")).setDesc(t("settings.foldHandle.desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.foldHandle).onChange(async (value) => {
      this.plugin.settings.foldHandle = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u6574\u5757\u9009\u62E9")).setDesc(localize("\u9F20\u6807\u8DE8\u5757\u9009\u62E9\u65F6\u6269\u5C55\u4E3A\u5B8C\u6574\u5757\uFF0C\u8F93\u5165\u548C\u9000\u683C\u4E5F\u4F5C\u7528\u4E8E\u6574\u5757\uFF1B\u4E0D\u6539\u53D8 Shift\uFF0B\u65B9\u5411\u952E\u7684\u7CBE\u786E\u9009\u62E9\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.snapSelectionToBlocks).onChange(async (value) => {
      this.plugin.settings.snapSelectionToBlocks = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u5757\u7EA7\u5FEB\u6377\u952E")).setDesc(localize("\u2318A \u5148\u9009\u5F53\u524D\u5757\uFF0C\u518D\u9009\u5168\u6587\uFF1B\u5757\u9996\u9000\u683C\u4F9D\u6B21\u9000\u7F29\u8FDB\u3001\u79FB\u9664\u5217\u8868\u6216\u6807\u9898\u6807\u8BB0\uFF0C\u518D\u5408\u5E76\u4E0A\u5757\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.blockKeys).onChange(async (value) => {
      this.plugin.settings.blockKeys = value;
      await this.plugin.saveSettings();
    }));
  }
  renderInsert(containerEl) {
    new import_obsidian3.Setting(containerEl).setName(localize("\u89E6\u53D1")).setHeading();
    new import_obsidian3.Setting(containerEl).setName(localize("\u52A0\u53F7\u6309\u94AE")).setDesc(localize("\u5728\u5757\u62D6\u52A8\u624B\u67C4\u65C1\u663E\u793A\u63D2\u5165\u6309\u94AE\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.plusHandle).onChange(async (value) => {
      this.plugin.settings.plusHandle = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u8F93\u5165\u89E6\u53D1")).setDesc(localize("\u8F93\u5165\u89E6\u53D1\u5B57\u7B26\u6253\u5F00\u63D2\u5165\u83DC\u5355\uFF0C\u7EE7\u7EED\u8F93\u5165\u53EF\u7B5B\u9009\u9879\u76EE\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.slashMenu).onChange(async (value) => {
      this.plugin.settings.slashMenu = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u89E6\u53D1\u5B57\u7B26")).setDesc(localize("\u5355\u4E2A\u5B57\u7B26\u3002\u8BBE\u4E3A / \u65F6\u517C\u5BB9\u4E2D\u6587\u8F93\u5165\u6CD5\u7684\u300C\u3001\u300D\uFF1B\u7EC4\u5408\u952E\u53EF\u5728 Obsidian \u5FEB\u6377\u952E\u4E2D\u8BBE\u7F6E\u3002")).addText((text) => text.setPlaceholder("/").setValue(this.plugin.settings.slashTrigger).onChange(async (value) => {
      this.plugin.settings.slashTrigger = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u884C\u5185\u89E6\u53D1")).setDesc(localize("\u5141\u8BB8\u5728\u884C\u5185\u7A7A\u683C\u540E\u89E6\u53D1\uFF1B\u5173\u95ED\u540E\u53EA\u5728\u7A7A\u5757\u89E6\u53D1\u3002\u4E0D\u6539\u53D8\u7F51\u5740\u3001\u65E5\u671F\u548C\u5355\u8BCD\u4E2D\u7684\u659C\u6760\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.slashInline).onChange(async (value) => {
      this.plugin.settings.slashInline = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(localize("\u5D4C\u5165\u9644\u4EF6")).setDesc(localize("\u5173\u95ED\u65F6\u63D2\u5165\u94FE\u63A5\uFF1B\u5F00\u542F\u65F6\u76F4\u63A5\u663E\u793A\u9644\u4EF6\u5185\u5BB9\u3002\u4FDD\u5B58\u4F4D\u7F6E\u4ECD\u7531\u300C\u6587\u4EF6\u4E0E\u94FE\u63A5\u300D\u8BBE\u7F6E\u51B3\u5B9A\u3002")).addToggle((toggle) => toggle.setValue(this.plugin.settings.embedAttachments).onChange(async (value) => {
      this.plugin.settings.embedAttachments = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName(t("settings.insertItems.name")).setDesc(t("settings.insertItems.desc")).setHeading();
    this.renderInsertItemList(containerEl);
  }
  renderAdvanced(containerEl) {
    new import_obsidian3.Setting(containerEl).setName(localize("\u683C\u5F0F")).setHeading();
    for (const [key, name, placeholder] of [["dateFormat", localize("\u65E5\u671F\u683C\u5F0F"), "YYYY-MM-DD"], ["timeFormat", localize("\u65F6\u95F4\u683C\u5F0F"), "HH:mm"]]) {
      new import_obsidian3.Setting(containerEl).setName(name).setDesc(localize`用于插入${key === "dateFormat" ? localize("\u65E5\u671F") : localize("\u65F6\u95F4")}。`).addText((text) => text.setPlaceholder(placeholder).setValue(this.plugin.settings[key]).onChange(async (value) => {
        this.plugin.settings[key] = value;
        await this.plugin.saveSettings();
      }));
    }
    new import_obsidian3.Setting(containerEl).setName(localize("\u517C\u5BB9")).setHeading();
    for (const [name, description] of [
      ["Iconic", localize("\u542F\u7528\u65F6\u81EA\u52A8\u8BA9\u51FA\u56FE\u6807\u63A7\u5236\u6743\uFF0CKeyline \u7684\u81EA\u5B9A\u4E49\u56FE\u6807\u6570\u636E\u4FDD\u7559\u3002")],
      ["Make.md", localize("\u539F\u751F\u6587\u4EF6\u6811\u5355\u72EC\u8BC6\u522B\uFF1B\u9009\u62E9\u5DE5\u5177\u6761\u5173\u95ED\u540E\uFF0C\u6062\u590D Make.md \u7684\u5DE5\u5177\u6761\u3002")],
      ["Bucket", localize("\u5206\u7EC4\u3001\u8DEF\u5F84\u4E0E\u6392\u5E8F\u4ECD\u7531 Bucket \u7BA1\u7406\uFF1BKeyline \u53EA\u63D0\u4F9B\u914D\u5957\u6837\u5F0F\u3002")],
      [localize("\u6570\u636E\u5B89\u5168"), localize("\u6392\u7248\u4E0E\u754C\u9762\u8BBE\u7F6E\u4E0D\u6539\u5199\u7B14\u8BB0\u3002\u83DC\u5355\u64CD\u4F5C\u3001\u5DE5\u4F5C\u533A\u4FDD\u5B58\u7EE7\u7EED\u4F7F\u7528\u539F\u6709\u529F\u80FD\u3002")]
    ])
      new import_obsidian3.Setting(containerEl).setName(name).setDesc(description);
  }
  renderThemeLayoutPanel() {
    const panelEl = this.themeLayoutPanelEl;
    if (!panelEl)
      return;
    panelEl.empty();
    new import_obsidian3.Setting(panelEl).setName(localize("\u5373\u65F6\u751F\u6548")).setDesc(localize("\u53C2\u6570\u81EA\u52A8\u4FDD\u5B58\uFF1B\u65E0\u9700 Style Settings\u3002")).setHeading().addButton((button) => button.setButtonText(localize("\u6062\u590D\u6392\u7248\u9ED8\u8BA4")).setTooltip(localize("\u53EA\u91CD\u7F6E\u672C\u9762\u677F\u7684\u6392\u7248\u53C2\u6570")).onClick(async () => {
      this.plugin.settings.themeLayout = { ...DEFAULT_THEME_LAYOUT_SETTINGS };
      await this.plugin.saveThemeLayoutSettingsNow();
      this.renderThemeLayoutPanel();
    }));
    const previewEl = panelEl.createEl("details", {
      cls: "ncl-theme-layout-preview"
    });
    previewEl.createEl("summary", { cls: "ncl-theme-layout-preview-label", text: localize("\u9884\u89C8") });
    const previewViewportEl = previewEl.createDiv({ cls: "ncl-theme-layout-preview-canvas" });
    const previewCanvasEl = previewViewportEl.createDiv({ cls: "ncl-theme-layout-preview-content" });
    previewCanvasEl.createDiv({ cls: "ncl-theme-layout-preview-mode", text: localize("\u7F16\u8F91\u89C6\u56FE") });
    previewCanvasEl.createDiv({ cls: "ncl-theme-layout-preview-heading", text: localize("\u793A\u4F8B\u6807\u9898") });
    const paragraphEl = previewCanvasEl.createEl("p");
    paragraphEl.appendText(localize("\u8FD9\u662F\u6B63\u6587\u7B2C\u4E00\u884C\uFF0C\u7528\u6765\u89C2\u5BDF\u884C\u9AD8\u3001\u6BB5\u8DDD\u548C\u9996\u884C\u7F29\u8FDB\u3002"));
    paragraphEl.createEl("br");
    paragraphEl.appendText(localize("\u7B2C\u4E8C\u884C\u4F1A\u968F\u7740\u7F16\u8F91\u89C6\u56FE\u884C\u9AD8\u4E00\u8D77\u53D8\u5316\u3002"));
    previewCanvasEl.createEl("p", { text: localize("\u8FD9\u662F\u7B2C\u4E8C\u4E2A\u6BB5\u843D\uFF0C\u7528\u6765\u5206\u8FA8\u6BB5\u524D\u8DDD\u4E0E\u6BB5\u540E\u8DDD\u3002") });
    const listEl = previewCanvasEl.createEl("ul", { cls: "ncl-theme-layout-preview-list" });
    const firstListItem = listEl.createEl("li", { text: localize("\u5217\u8868\u5706\u70B9\u4E0E\u6B63\u6587\u95F4\u8DDD") });
    const nestedListEl = firstListItem.createEl("ul");
    nestedListEl.createEl("li", { text: localize("\u7B2C\u4E8C\u5C42\u7F29\u8FDB\u5BBD\u5EA6") });
    const quoteEl = previewCanvasEl.createEl("blockquote");
    quoteEl.createDiv({ text: localize("\u5F15\u7528\u7B2C\u4E00\u884C") });
    quoteEl.createDiv({ text: localize("\u5F15\u7528\u7B2C\u4E8C\u884C\u4E0E\u4E0A\u4E00\u884C\u4FDD\u6301\u5BF9\u9F50") });
    const readingSampleEl = previewCanvasEl.createDiv({ cls: "ncl-theme-layout-reading-sample" });
    readingSampleEl.createDiv({ cls: "ncl-theme-layout-preview-mode", text: localize("\u9605\u8BFB\u89C6\u56FE\u884C\u9AD8") });
    const readingParagraphEl = readingSampleEl.createEl("p");
    readingParagraphEl.appendText(localize("\u9605\u8BFB\u89C6\u56FE\u7B2C\u4E00\u884C\u3002"));
    readingParagraphEl.createEl("br");
    readingParagraphEl.appendText(localize("\u9605\u8BFB\u89C6\u56FE\u7B2C\u4E8C\u884C\u3002"));
    panelEl.createEl("h3", { cls: "ncl-theme-layout-section", text: localize("\u9875\u9762") });
    this.addThemeLayoutSlider(
      panelEl,
      "textMaxWidth",
      localize("\u6B63\u6587\u6700\u5927\u5BBD\u5EA6"),
      localize("\u9650\u5236\u7F16\u8F91\u4E0E\u9605\u8BFB\u89C6\u56FE\u7684\u6700\u5927\u5BBD\u5EA6\uFF1B\u9700\u5F00\u542F\u300C\u7F29\u51CF\u680F\u5BBD\u300D\u3002\u7A84\u7A97\u53E3\u81EA\u52A8\u6536\u62E2\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "pageSidePadding",
      localize("\u5DE6\u53F3\u7559\u767D"),
      localize("\u6700\u5DE6\u7AEF\u4E3A\u81EA\u52A8\u7559\u767D\uFF1B\u624B\u52A8\u503C\u5728\u7A84\u7A97\u53E3\u4E2D\u4E0D\u8D85\u8FC7\u6BCF\u4FA7 20%\u3002")
    );
    panelEl.createEl("h3", { cls: "ncl-theme-layout-section", text: localize("\u6B63\u6587") });
    this.addThemeLayoutSlider(
      panelEl,
      "editorLineHeight",
      localize("\u7F16\u8F91\u89C6\u56FE\u884C\u9AD8"),
      localize("\u63A7\u5236 Live Preview / Source mode \u6B63\u6587\u884C\u9AD8\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "readingLineHeight",
      localize("\u9605\u8BFB\u89C6\u56FE\u884C\u9AD8"),
      localize("\u63A7\u5236 Reading View \u6B63\u6587\u884C\u9AD8\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "paragraphGap",
      localize("\u6B63\u6587\u6362\u884C\uFF0F\u6BB5\u843D\u95F4\u8DDD"),
      localize("\u63A7\u5236\u76F8\u90BB\u666E\u901A\u6B63\u6587\u6E90\u884C\uFF08\u6309 Enter \u6362\u884C\uFF09\u4E4B\u95F4\u7684\u7559\u767D\uFF1B\u5207\u6362\u4E3A\u6807\u9898\u3001\u5217\u8868\u6216\u5F15\u7528\u7B49\u65B0\u5757\u65F6\uFF0C\u7531\u8BE5\u5757\u7684\u6BB5\u524D\uFF0F\u6BB5\u540E\u8DDD\u63A5\u7BA1\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "paragraphBefore",
      localize("\u6BB5\u524D\u8DDD"),
      localize("\u63A7\u5236\u666E\u901A\u6B63\u6587\u53CA Quote \u7B49\u72EC\u7ACB\u6587\u672C\u5757\u4E0A\u65B9\u7684\u7559\u767D\uFF1B\u4E0E\u4E0A\u4E00\u5757\u7684\u6BB5\u540E\u8DDD\u76F8\u9047\u65F6\u6309\u8F83\u5927\u503C\u6298\u53E0\uFF0C\u4E0D\u4F1A\u53E0\u6210\u4E00\u4E2A\u7A7A\u884C\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "paragraphAfter",
      localize("\u6BB5\u540E\u8DDD"),
      localize("\u63A7\u5236\u666E\u901A\u6B63\u6587\u53CA Quote \u7B49\u72EC\u7ACB\u6587\u672C\u5757\u4E0B\u65B9\u7684\u7559\u767D\uFF1B\u4E0E\u4E0B\u4E00\u5757\u7684\u6BB5\u524D\u8DDD\u76F8\u9047\u65F6\u6309\u8F83\u5927\u503C\u6298\u53E0\uFF0C\u4E0D\u4F1A\u91CD\u590D\u7D2F\u52A0\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "firstLineIndent",
      localize("\u9996\u884C\u7F29\u8FDB"),
      localize("\u4EC5\u7528\u4E8E\u666E\u901A\u6B63\u6587\u6BB5\u843D\uFF0C\u4E0D\u7F29\u8FDB\u6807\u9898\u3001\u5217\u8868\u3001\u5F15\u7528\u6216\u4EE3\u7801\u5757\u3002")
    );
    panelEl.createEl("h3", { cls: "ncl-theme-layout-section", text: localize("\u5217\u8868") });
    this.addThemeLayoutSlider(
      panelEl,
      "listLineHeight",
      localize("\u5217\u8868\u884C\u9AD8"),
      localize("\u63A7\u5236\u5217\u8868\u6587\u5B57\u672C\u8EAB\u7684\u884C\u9AD8\uFF1B\u4E00\u9879\u6587\u5B57\u6362\u884C\u65F6\u5C24\u5176\u660E\u663E\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "listItemSpacing",
      localize("\u5217\u8868\u9879\u95F4\u8DDD"),
      localize("\u63A7\u5236\u4E24\u4E2A\u72EC\u7ACB\u7684\u5706\u70B9\u3001\u6570\u5B57\u6216 Todo \u9879\u76EE\u4E4B\u95F4\u989D\u5916\u589E\u52A0\u7684\u5782\u76F4\u7559\u767D\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "listIndent",
      localize("\u5217\u8868\u5C42\u7EA7\u7F29\u8FDB"),
      localize("\u7B2C\u4E00\u5C42\u4F1A\u968F\u4E4B\u5C0F\u5E45\u79FB\u52A8\uFF0C\u7B2C\u4E8C\u5C42\u8D77\u4F7F\u7528\u5B8C\u6574\u6570\u503C\uFF1B\u9002\u7528\u4E8E\u6709\u5E8F\u3001\u65E0\u5E8F\u53CA\u4EFB\u52A1\u5217\u8868\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "listMarkerGap",
      localize("\u5217\u8868\u7B26\u53F7\u4E0E\u6B63\u6587\u95F4\u8DDD"),
      localize("\u63A7\u5236 Live Preview\u3001Reading View \u548C\u8BBE\u7F6E\u9884\u89C8\u4E2D\u5706\u70B9\u3001\u6570\u5B57\u6216 Todo \u590D\u9009\u6846\u4E0E\u6B63\u6587\u7684\u7559\u767D\u3002\u7F16\u8F91\u89C6\u56FE\u53EA\u6539\u53D8\u771F\u5B9E Markdown \u5206\u9694\u7A7A\u683C\u7684\u5B57\u5BBD\uFF0C\u4E0D\u66FF\u6362\u7B26\u53F7\u6216\u5149\u6807\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "listBulletSize",
      localize("\u65E0\u5E8F\u5217\u8868\u5706\u70B9\u5927\u5C0F"),
      localize("\u63A7\u5236\u65E0\u5E8F\u5217\u8868\u5B9E\u5FC3\u5706\u70B9\u7684\u76F4\u5F84\u3002")
    );
    panelEl.createEl("h3", { cls: "ncl-theme-layout-section", text: localize("\u5F15\u7528\u4E0E\u6807\u9898") });
    this.addThemeLayoutSlider(
      panelEl,
      "blockquoteIndent",
      localize("\u5F15\u7528\u7F29\u8FDB"),
      localize("\u63A7\u5236\u5F15\u7528\u7EBF\u4E0E\u6B63\u6587\u4E4B\u95F4\u7684\u6C34\u5E73\u7559\u767D\uFF1BFigma \u539F\u7A3F\u4E3A 16px\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "headingBefore",
      localize("\u6807\u9898\u6BB5\u524D\u8DDD"),
      localize("\u63A7\u5236\u5404\u7EA7\u6807\u9898\u4E0A\u65B9\u7684\u547C\u5438\u7A7A\u95F4\u3002")
    );
    this.addThemeLayoutSlider(
      panelEl,
      "headingAfter",
      localize("\u6807\u9898\u6BB5\u540E\u8DDD"),
      localize("\u63A7\u5236\u6807\u9898\u4E0E\u4E0B\u4E00\u6BB5\u6B63\u6587\u4E4B\u95F4\u7684\u8DDD\u79BB\u3002")
    );
    this.groupRows(panelEl);
  }
  addThemeLayoutSlider(containerEl, key, name, description) {
    const spec = THEME_LAYOUT_SETTING_SPECS[key];
    new import_obsidian3.Setting(containerEl).setName(name).setDesc(description).addSlider((slider) => {
      slider.setLimits(spec.min, spec.max, spec.step).setValue(this.plugin.settings.themeLayout[key]).setInstant(true).onChange((value) => {
        this.plugin.settings.themeLayout = normalizeThemeLayoutSettings({
          ...this.plugin.settings.themeLayout,
          [key]: value
        });
        slider.sliderEl.setAttribute("aria-valuetext", formatThemeLayoutValue(key, this.plugin.settings.themeLayout[key]));
        this.plugin.queueThemeLayoutSettingsSave();
      });
      slider.sliderEl.setAttribute("aria-label", name);
      slider.sliderEl.setAttribute("aria-valuetext", formatThemeLayoutValue(key, this.plugin.settings.themeLayout[key]));
      const displayCapable = slider;
      if (typeof displayCapable.setDisplayFormat === "function") {
        displayCapable.setDisplayFormat((value) => formatThemeLayoutValue(key, value));
      } else {
        const valueEl = containerEl.ownerDocument.createElement("span");
        valueEl.className = "ncl-setting-value";
        const updateValue = () => {
          valueEl.textContent = formatThemeLayoutValue(key, Number(slider.sliderEl.value));
        };
        slider.sliderEl.before(valueEl);
        updateValue();
        slider.sliderEl.addEventListener("input", updateValue);
      }
    });
  }
  /**
   * The insert menu's rows, reorderable and individually switchable.
   *
   * Order is stored as a full id list rather than as a sparse set of moves:
   * resolveMenuItems appends anything the list does not name, so a partial
   * list still works, but writing the whole list keeps what is stored and
   * what is shown identical.
   */
  renderInsertItemList(containerEl) {
    this.insertListEl = containerEl.createDiv({ cls: "ftn-insert-item-list" });
    this.refreshInsertList();
    new import_obsidian3.Setting(containerEl).addButton((button) => button.setButtonText(t("settings.addCommand")).onClick(() => {
      new InsertCommandModal(this.app, null, (item) => {
        void this.applyLayout(addCustomItem(this.plugin.settings, item));
      }).open();
    })).addButton((button) => button.setButtonText(t("settings.resetOrder")).onClick(() => {
      void this.applyLayout(resetItemLayout(this.plugin.settings));
    }));
  }
  /**
   * Writes a layout back and repaints the list.
   *
   * Never calls display(). PluginSettingTab.display() begins by emptying the
   * whole tab, so using it to reflect a one-row change threw away every other
   * setting on the page and scrolled the user back to the top — on every add,
   * edit, delete, reorder and reset. Only the list needs to change, so only
   * the list is rebuilt.
   */
  async applyLayout(next) {
    this.plugin.settings.insertOrder = next.insertOrder;
    this.plugin.settings.insertHidden = next.insertHidden;
    this.plugin.settings.insertCustom = next.insertCustom;
    await this.plugin.saveSettings();
    this.refreshInsertList();
  }
  /** Every Obsidian command by id, for naming a custom row's binding. */
  commandsById() {
    var _a, _b;
    return (_b = (_a = this.app.commands) == null ? void 0 : _a.commands) != null ? _b : {};
  }
  refreshInsertList() {
    const listEl = this.insertListEl;
    if (!listEl)
      return;
    const settings = this.plugin.settings;
    const scrollTop = listEl.scrollTop;
    listEl.empty();
    const items = resolveMenuItems(BUILTIN_ITEMS, settings.insertCustom, settings.insertOrder, [], (key) => t(key));
    const order = items.map((item) => item.id);
    const commands = this.commandsById();
    items.forEach((item, index) => {
      var _a;
      const row = listEl.createDiv({ cls: "ftn-insert-item-row", attr: { draggable: "true" } });
      row.dataset.index = String(index);
      (0, import_obsidian3.setIcon)(row.createSpan({ cls: "ftn-insert-item-grip" }), "grip-vertical");
      (0, import_obsidian3.setIcon)(row.createSpan({ cls: "ftn-insert-item-icon" }), item.icon);
      const custom = settings.insertCustom.find((entry) => entry.id === item.id);
      const textEl = row.createDiv({ cls: "ftn-insert-item-text" });
      textEl.createDiv({ cls: "ftn-insert-item-label", text: item.label });
      if (custom) {
        const bound = commands[custom.commandId];
        if (bound) {
          textEl.createDiv({
            cls: "ftn-insert-item-source",
            text: t("settings.customCommand.boundTo").replace("{name}", (_a = bound.name) != null ? _a : custom.commandId)
          });
        } else {
          textEl.createDiv({ cls: "ftn-insert-item-source is-missing", text: t("settings.commandMissing") });
        }
      }
      const controls = row.createDiv({ cls: "ftn-insert-item-controls" });
      const toggle = controls.createEl("input", { attr: { type: "checkbox" } });
      toggle.checked = !settings.insertHidden.includes(item.id);
      toggle.addEventListener("change", () => {
        const next = setItemHidden(this.plugin.settings, item.id, !toggle.checked);
        this.plugin.settings.insertHidden = next.insertHidden;
        void this.plugin.saveSettings();
      });
      if (custom) {
        const editBtn = controls.createDiv({ cls: "ftn-insert-item-button", attr: { "aria-label": t("settings.customCommand.edit") } });
        (0, import_obsidian3.setIcon)(editBtn, "pencil");
        editBtn.addEventListener("click", () => {
          new InsertCommandModal(this.app, custom, (updated) => {
            void this.applyLayout(updateCustomItem(this.plugin.settings, updated));
          }).open();
        });
        const deleteBtn = controls.createDiv({ cls: "ftn-insert-item-button is-danger", attr: { "aria-label": t("settings.customCommand.delete") } });
        (0, import_obsidian3.setIcon)(deleteBtn, "trash-2");
        deleteBtn.addEventListener("click", () => {
          void this.applyLayout(removeCustomItem(this.plugin.settings, custom.id));
        });
      }
      row.addEventListener("dragstart", (event) => {
        var _a2;
        (_a2 = event.dataTransfer) == null ? void 0 : _a2.setData("text/plain", String(index));
        row.addClass("is-dragging");
      });
      row.addEventListener("dragend", () => row.removeClass("is-dragging"));
      row.addEventListener("dragover", (event) => {
        event.preventDefault();
        row.addClass("is-drop-target");
      });
      row.addEventListener("dragleave", () => row.removeClass("is-drop-target"));
      row.addEventListener("drop", (event) => {
        var _a2;
        event.preventDefault();
        row.removeClass("is-drop-target");
        const from = Number((_a2 = event.dataTransfer) == null ? void 0 : _a2.getData("text/plain"));
        if (from === index)
          return;
        void this.applyLayout(applyOrder(this.plugin.settings, reorderIds(order, from, index)));
      });
    });
    listEl.scrollTop = scrollTop;
  }
};

// src/blockHandles.ts
var import_view2 = require("@codemirror/view");
var import_obsidian7 = require("obsidian");

// src/history.ts
var import_commands = require("@codemirror/commands");
function dispatchBlockEdit(view, spec) {
  view.dispatch({
    ...spec,
    annotations: [
      import_commands.isolateHistory.of("full"),
      ...toArray(spec.annotations)
    ]
  });
}
function toArray(value) {
  if (value === void 0)
    return [];
  return Array.isArray(value) ? value : [value];
}

// src/notionActionMenu.ts
var import_obsidian5 = require("obsidian");
var import_state = require("@codemirror/state");

// src/blockTransform.ts
var import_obsidian4 = require("obsidian");

// src/insertPlan.ts
function planInsert(input) {
  var _a, _b;
  const { lineFrom, lineTo, lineText, insertText, remove, extra = [], needsBlankLine, previousLineHasContent } = input;
  const cursorOffset = (_a = input.cursorOffset) != null ? _a : insertText.length;
  const defaultAt = remove && !input.asBlock ? remove.from : lineTo;
  let at = (_b = input.at) != null ? _b : defaultAt;
  if (remove && at >= remove.from && at < remove.to)
    at = remove.to;
  const remaining = remove ? lineText.slice(0, remove.from - lineFrom) + lineText.slice(remove.to - lineFrom) : lineText;
  const needsNewLine = input.asBlock && remaining.trim().length > 0;
  let prefix = "";
  if (needsNewLine) {
    prefix = needsBlankLine ? "\n\n" : "\n";
  } else if (needsBlankLine && previousLineHasContent) {
    prefix = "\n";
  }
  const changes = [];
  if (remove && remove.to > remove.from)
    changes.push({ from: remove.from, to: remove.to });
  changes.push({ from: at, insert: prefix + insertText });
  changes.push(...extra);
  const removedBefore = remove && remove.to <= at ? remove.to - remove.from : 0;
  const anchor = at - removedBefore + prefix.length + cursorOffset;
  return { changes, anchor };
}

// src/attachmentLink.ts
function encodeLinkPath(path) {
  return encodeURI(path).replace(/\(/g, "%28").replace(/\)/g, "%29");
}
function linkDisplayName(path) {
  var _a;
  const name = (_a = path.split("/").pop()) != null ? _a : path;
  const dot = name.lastIndexOf(".");
  return dot > 0 ? name.slice(0, dot) : name;
}
function toMarkdownLink(generated, path, embed) {
  var _a;
  const source = generated.trim();
  const wiki = /^!?\[\[([^\]|]+)(?:\|([^\]]*))?\]\]$/.exec(source);
  let link;
  if (wiki) {
    const target = wiki[1];
    const alias = ((_a = wiki[2]) == null ? void 0 : _a.trim()) || linkDisplayName(target);
    link = `[${alias}](${encodeLinkPath(target)})`;
  } else {
    link = source.replace(/^!/, "");
    link = link.replace(/^\[\]\(/, `[${linkDisplayName(path)}](`);
  }
  return (embed ? "!" : "") + link;
}

// src/tableOfContents.ts
var HEADING = /^ {0,3}(#{1,6})[ \t]+(.*?)[ \t]*#*[ \t]*$/;
var FENCE = /^[ \t]*(```|~~~)/;
function collectHeadings(doc, skipLine = 0) {
  const headings = [];
  let openFence = null;
  let n = 0;
  for (const text of doc.iterLines()) {
    n++;
    const fence = FENCE.exec(text);
    if (fence) {
      if (openFence === null)
        openFence = fence[1];
      else if (fence[1] === openFence)
        openFence = null;
      continue;
    }
    if (openFence !== null)
      continue;
    if (n === skipLine)
      continue;
    const match = HEADING.exec(text);
    if (!match)
      continue;
    const label = match[2].trim();
    if (label.length === 0)
      continue;
    headings.push({ level: match[1].length, text: label, line: n });
  }
  return headings;
}
function headingAnchor(text) {
  return text.replace(/[[\]#|^]/g, "").replace(/\s+/g, " ").trim();
}
function tableOfContents(headings, options = {}) {
  var _a, _b;
  const indent = (_a = options.indent) != null ? _a : "	";
  const linkable = headings.map((heading) => ({ level: heading.level, anchor: headingAnchor(heading.text) })).filter((heading) => heading.anchor.length > 0);
  if (linkable.length === 0)
    return "";
  const levels = [...new Set(linkable.map((heading) => heading.level))].sort((a, b) => a - b);
  const depthOf = new Map(levels.map((level, index) => [level, index]));
  const rows = linkable.map((heading) => {
    var _a2;
    const depth = (_a2 = depthOf.get(heading.level)) != null ? _a2 : 0;
    return `${indent.repeat(depth)}- [[#${heading.anchor}|${heading.anchor}]]`;
  });
  const title = (_b = options.title) == null ? void 0 : _b.trim();
  return title ? [`**${title}**`, ...rows].join("\n") : rows.join("\n");
}
function quotePrefix(lineText) {
  var _a, _b;
  return (_b = (_a = /^[ \t]*(?:>[ \t]?)+/.exec(lineText)) == null ? void 0 : _a[0]) != null ? _b : "";
}
function prefixLines(text, prefix, skipFirst = false) {
  if (prefix.length === 0)
    return text;
  return text.split("\n").map((line, index) => skipFirst && index === 0 ? line : prefix + line).join("\n");
}

// src/blockTransform.ts
var IMAGE_EXTENSIONS2 = /* @__PURE__ */ new Set(["avif", "bmp", "gif", "jpeg", "jpg", "png", "svg", "webp"]);
var now = () => (0, import_obsidian4.moment)();
function stripPrefix(lineText) {
  return lineText.replace(/^#{1,6} /, "").replace(/^[-*+] \[[ x]\] /, "").replace(/^[-*+] /, "").replace(/^\d+\. /, "").replace(/^> \[![^\]]+\][+-]?\n?> ?/, "").replace(/^> /, "").replace(/^%%(.*)%%$/, "$1").trim();
}
async function insertImageFiles(plugin, view, lineNo, files, remove) {
  const imageFiles = files.filter(isImageFile);
  if (imageFiles.length === 0) {
    new import_obsidian4.Notice(t("notice.selectImage"));
    return;
  }
  try {
    const links = await saveAttachments(plugin, imageFiles, (link) => `!${link}`);
    insertTextAtLineEnd(view, lineNo, links.join("\n"), true, remove);
  } catch (e) {
    new import_obsidian4.Notice(t("notice.insertImageFailed"));
  }
}
async function insertAttachmentFiles(plugin, view, lineNo, files, remove) {
  if (files.length === 0)
    return;
  try {
    const embed = plugin.settings.embedAttachments;
    const links = await saveAttachments(
      plugin,
      files,
      (link, path) => toMarkdownLink(link, path, embed)
    );
    insertTextAtLineEnd(view, lineNo, links.join("\n"), true, remove);
  } catch (e) {
    new import_obsidian4.Notice(t("notice.insertAttachmentFailed"));
  }
}
async function insertNewPage(plugin, view, lineNo, remove) {
  var _a, _b, _c;
  const active = plugin.app.workspace.getActiveFile();
  const sourcePath2 = (_a = active == null ? void 0 : active.path) != null ? _a : "";
  const folder = (_c = (_b = active == null ? void 0 : active.parent) == null ? void 0 : _b.path) != null ? _c : "";
  try {
    const file = await plugin.app.vault.create(
      availableNotePath(plugin, folder, t("page.untitled")),
      ""
    );
    insertTextAtLineEnd(view, lineNo, plugin.app.fileManager.generateMarkdownLink(file, sourcePath2), false, remove);
    await plugin.app.workspace.getLeaf(false).openFile(file);
  } catch (e) {
    new import_obsidian4.Notice(t("notice.createPageFailed"));
  }
}
function availableNotePath(plugin, folder, base) {
  const prefix = folder && folder !== "/" ? `${folder}/` : "";
  for (let n = 0; n < 1e3; n++) {
    const path = `${prefix}${n === 0 ? base : `${base} ${n}`}.md`;
    if (!plugin.app.vault.getAbstractFileByPath(path))
      return path;
  }
  throw new Error("no available note name");
}
function insertTableOfContents(view, lineNo, remove) {
  const line = view.state.doc.line(lineNo);
  const body = tableOfContents(collectHeadings(view.state.doc, lineNo), {
    title: t("toc.title")
  });
  if (body.length === 0) {
    insertTextAtLineEnd(view, lineNo, "", false, remove);
    new import_obsidian4.Notice(t("notice.noHeadings"));
    return;
  }
  const remaining = remove ? line.text.slice(0, remove.from - line.from) + line.text.slice(remove.to - line.from) : line.text;
  const prefix = quotePrefix(line.text);
  const onNewLine = remaining.slice(prefix.length).trim().length > 0;
  insertTextAtLineEnd(view, lineNo, prefixLines(body, prefix, !onNewLine), onNewLine, remove);
}
async function saveAttachments(plugin, files, format) {
  var _a, _b;
  const sourcePath2 = (_b = (_a = plugin.app.workspace.getActiveFile()) == null ? void 0 : _a.path) != null ? _b : "";
  const links = [];
  for (const file of files) {
    const safeName = sanitizeAttachmentName(file.name);
    const targetPath = await plugin.app.fileManager.getAvailablePathForAttachment(safeName, sourcePath2);
    const savedFile = await plugin.app.vault.createBinary(targetPath, await file.arrayBuffer());
    const generated = plugin.app.fileManager.generateMarkdownLink(savedFile, sourcePath2);
    links.push(format(generated, savedFile.path));
  }
  return links;
}
function insertTextAtLineEnd(view, lineNo, insertText, insertAsBlock, remove) {
  const line = view.state.doc.line(lineNo);
  const plan = planInsert({
    lineFrom: line.from,
    lineTo: line.to,
    lineText: line.text,
    insertText,
    asBlock: insertAsBlock,
    remove
  });
  dispatchBlockEdit(view, {
    changes: plan.changes,
    selection: { anchor: plan.anchor },
    scrollIntoView: true,
    userEvent: "insert.block"
  });
}
function isImageFile(file) {
  const ext = getFileExtension(file.name);
  return IMAGE_EXTENSIONS2.has(ext);
}
function sanitizeAttachmentName(name) {
  const cleaned = name.replace(/[\\/:*?"<>|]/g, "-").replace(/[\u0000-\u001f\u007f]/g, "-").replace(/^\.+/, "").trim();
  return cleaned || "attachment";
}
function getFileExtension(name) {
  const index = name.lastIndexOf(".");
  if (index < 0)
    return "";
  return name.slice(index + 1).toLowerCase();
}
function transformLine(view, lineNo, targetType) {
  const line = view.state.doc.line(lineNo);
  const newText = transformedLineText(line.text, targetType);
  dispatchBlockEdit(view, {
    changes: {
      from: line.from,
      to: line.to,
      insert: newText
    },
    userEvent: "input.block-transform"
  });
}
function transformedLineText(lineText, targetType) {
  const content = stripPrefix(lineText);
  if (targetType.startsWith("callout-")) {
    const type = targetType.replace("callout-", "");
    return `> [!${type}]
> ${content}`;
  }
  switch (targetType) {
    case "h1":
      return "# " + content;
    case "h2":
      return "## " + content;
    case "h3":
      return "### " + content;
    case "h4":
      return "#### " + content;
    case "h5":
      return "##### " + content;
    case "bullet":
    case "toggle":
      return "- " + content;
    case "numbered":
      return "1. " + content;
    case "todo":
      return "- [ ] " + content;
    case "blockquote":
      return "> " + content;
    case "paragraph":
      return content;
    case "code":
      return "```\n" + content + "\n```";
    case "math":
      return "$$\n" + content + "\n$$";
    case "divider":
      return "---";
    default:
      return content;
  }
}
function insertBlock(plugin, view, lineNo, targetType, remove) {
  var _a;
  const line = view.state.doc.line(lineNo);
  const settings = plugin.settings;
  let insertText = "";
  let cursorOffset = 0;
  let isMetadata = false;
  let customPos = null;
  const extraChanges = [];
  if (targetType.startsWith("callout-")) {
    const type = targetType.replace("callout-", "");
    insertText = `> [!${type}]
> `;
    cursorOffset = insertText.length;
  } else {
    switch (targetType) {
      case "h1":
        insertText = "# ";
        break;
      case "h2":
        insertText = "## ";
        break;
      case "h3":
        insertText = "### ";
        break;
      case "h4":
        insertText = "#### ";
        break;
      case "h5":
        insertText = "##### ";
        break;
      case "todo":
        insertText = "- [ ] ";
        break;
      case "toggle":
      case "bullet":
        insertText = "- ";
        break;
      case "numbered":
        insertText = "1. ";
        break;
      case "blockquote":
        insertText = "> ";
        break;
      case "paragraph":
        insertText = "";
        break;
      case "code":
        insertText = "```\n\n```";
        cursorOffset = 4;
        break;
      case "math":
        insertText = "$$\n\n$$";
        cursorOffset = 3;
        break;
      case "divider":
        insertText = "---\n";
        break;
      case "link":
        insertText = "[[]]";
        cursorOffset = 2;
        break;
      case "ext-link":
        insertText = "[]()";
        cursorOffset = 1;
        break;
      case "embed":
        insertText = "![[]]";
        cursorOffset = 3;
        break;
      case "tag":
        insertText = "#";
        cursorOffset = 1;
        break;
      case "comment":
        insertText = "%%  %%";
        cursorOffset = 3;
        break;
      case "today":
        insertText = now().format(settings.dateFormat);
        break;
      case "yesterday":
        insertText = now().subtract(1, "days").format(settings.dateFormat);
        break;
      case "tomorrow":
        insertText = now().add(1, "days").format(settings.dateFormat);
        break;
      case "time":
        insertText = now().format(settings.timeFormat);
        break;
      case "table": {
        insertText = "|  |  |  |\n| --- | --- | --- |\n|  |  |  |\n|  |  |  |";
        cursorOffset = 2;
        break;
      }
      case "frontmatter": {
        isMetadata = true;
        const firstLine = view.state.doc.line(1);
        if (firstLine.text === "---") {
          return;
        }
        insertText = "---\n\n---\n";
        customPos = 0;
        cursorOffset = 4;
        break;
      }
      case "footnote": {
        const footnoteId = Math.floor(Math.random() * 1e3);
        insertText = `[^${footnoteId}]`;
        extraChanges.push({
          from: view.state.doc.length,
          insert: `

[^${footnoteId}]: `
        });
        break;
      }
      default:
        insertText = "";
        break;
    }
  }
  const isNewLine = !isMetadata && !["link", "ext-link", "embed", "tag", "comment", "today", "yesterday", "tomorrow", "time"].includes(targetType);
  const needsBlankLine = targetType === "table";
  const previousLineHasContent = needsBlankLine && lineNo > 1 && view.state.doc.line(lineNo - 1).text.trim().length > 0;
  const plan = planInsert({
    lineFrom: line.from,
    lineTo: line.to,
    lineText: line.text,
    insertText,
    cursorOffset: cursorOffset || insertText.length,
    asBlock: isNewLine,
    at: customPos != null ? customPos : void 0,
    remove,
    extra: extraChanges,
    needsBlankLine,
    previousLineHasContent
  });
  dispatchBlockEdit(view, {
    changes: plan.changes,
    selection: { anchor: plan.anchor },
    scrollIntoView: true,
    userEvent: "insert.block"
  });
  if (targetType === "table") {
    const win = (_a = view.dom.ownerDocument.defaultView) != null ? _a : activeWindow;
    win.requestAnimationFrame(() => {
      if (plan.anchor > view.state.doc.length)
        return;
      view.dispatch({ selection: { anchor: plan.anchor }, scrollIntoView: true });
    });
  }
}

// src/menuPosition.ts
var PADDING = 8;
var GAP = 6;
var MAX_HEIGHT = 300;
var MIN_HEIGHT = 120;
function placeMenu(input) {
  var _a;
  const spaceBelow = input.viewportHeight - PADDING - input.anchorY;
  const spaceAbove = input.avoidTop - GAP - PADDING;
  const placeBelow = input.menuHeight <= spaceBelow || spaceBelow >= spaceAbove;
  const maxHeight = Math.min(
    (_a = input.maxHeight) != null ? _a : MAX_HEIGHT,
    Math.max(MIN_HEIGHT, placeBelow ? spaceBelow : spaceAbove)
  );
  const height = Math.min(input.menuHeight, maxHeight);
  const top = placeBelow ? input.anchorY : Math.max(PADDING, input.avoidTop - GAP - height);
  let left = input.anchorX;
  if (left + input.menuWidth > input.viewportWidth - PADDING) {
    left = Math.max(PADDING, input.viewportWidth - input.menuWidth - PADDING);
  }
  return { top, left, maxHeight };
}
function placeSubmenu(input) {
  let left = input.parentRight + GAP;
  if (left + input.menuWidth > input.viewportWidth - PADDING) {
    left = Math.max(PADDING, input.parentLeft - input.menuWidth - GAP);
  }
  let top = input.parentTop;
  if (top + input.menuHeight > input.viewportHeight - PADDING) {
    top = Math.max(PADDING, input.viewportHeight - input.menuHeight - PADDING);
  }
  return { top, left };
}

// src/colorWrap.ts
function splitMarkdownLine(text) {
  var _a, _b;
  const blockIdMatch = text.match(/(\s\^[A-Za-z0-9-]+)$/);
  const suffix = (_a = blockIdMatch == null ? void 0 : blockIdMatch[1]) != null ? _a : "";
  const body = suffix ? text.slice(0, -suffix.length) : text;
  const prefixMatch = body.match(/^(#{1,6}\s+|[-*+]\s+\[[ xX]\]\s+|[-*+]\s+|\d+\.\s+|>\s+)/);
  const prefix = (_b = prefixMatch == null ? void 0 : prefixMatch[1]) != null ? _b : "";
  return {
    prefix,
    content: body.slice(prefix.length).trim(),
    suffix
  };
}
function unwrap(content) {
  return content.replace(/^<span style="[^"]*">(.*)<\/span>$/u, "$1").replace(/^<mark style="[^"]*">(.*)<\/mark>$/u, "$1");
}
function planColorWrap(lineText, tagName, style) {
  const parts = splitMarkdownLine(lineText);
  const content = unwrap(parts.content);
  if (!tagName) {
    return {
      text: `${parts.prefix}${content}${parts.suffix}`,
      caretOffset: parts.prefix.length + content.length
    };
  }
  const openTag = `<${tagName} style="${style}">`;
  return {
    text: `${parts.prefix}${openTag}${content}</${tagName}>${parts.suffix}`,
    caretOffset: parts.prefix.length + openTag.length + content.length
  };
}

// src/selectionFormatting.ts
var OWN_OPEN_AT_END = /<(span|mark) data-nmg-color="[a-z-]+" style="[^"]*">$/u;
function surroundingOwnWrapper(documentText, from, to) {
  const open = documentText.slice(0, from).match(OWN_OPEN_AT_END);
  if (!open || open[1] !== "span" && open[1] !== "mark")
    return null;
  const close = `</${open[1]}>`;
  if (!documentText.startsWith(close, to))
    return null;
  return {
    from: from - open[0].length,
    to: to + close.length,
    tagName: open[1]
  };
}
function planInlineColor(documentText, from, to, color) {
  var _a, _b;
  if (to <= from)
    return null;
  const selectedText = documentText.slice(from, to);
  const wrapper = surroundingOwnWrapper(documentText, from, to);
  const changeFrom = (_a = wrapper == null ? void 0 : wrapper.from) != null ? _a : from;
  const changeTo = (_b = wrapper == null ? void 0 : wrapper.to) != null ? _b : to;
  if (color === null) {
    if (!wrapper)
      return null;
    return {
      from: changeFrom,
      to: changeTo,
      insert: selectedText,
      selectionFrom: changeFrom,
      selectionTo: changeFrom + selectedText.length
    };
  }
  const openTag = `<${color.tagName} data-nmg-color="${color.id}" style="${color.style}">`;
  const closeTag = `</${color.tagName}>`;
  return {
    from: changeFrom,
    to: changeTo,
    insert: `${openTag}${selectedText}${closeTag}`,
    selectionFrom: changeFrom + openTag.length,
    selectionTo: changeFrom + openTag.length + selectedText.length
  };
}

// src/notionActionMenu.ts
var TEXT_COLORS = [
  { id: "default", label: localize("\u9ED8\u8BA4\u6587\u672C"), value: "", className: "is-default" },
  { id: "gray", label: localize("\u7070\u8272\u6587\u672C"), value: "var(--text-muted)", className: "is-gray" },
  { id: "brown", label: localize("\u68D5\u8272\u6587\u672C"), value: "var(--color-orange)", className: "is-brown" },
  { id: "orange", label: localize("\u6A59\u8272\u6587\u672C"), value: "var(--color-orange)", className: "is-orange" },
  { id: "yellow", label: localize("\u9EC4\u8272\u6587\u672C"), value: "var(--color-yellow)", className: "is-yellow" },
  { id: "green", label: localize("\u7EFF\u8272\u6587\u672C"), value: "var(--color-green)", className: "is-green" },
  { id: "blue", label: localize("\u84DD\u8272\u6587\u672C"), value: "var(--color-blue)", className: "is-blue" },
  { id: "purple", label: localize("\u7D2B\u8272\u6587\u672C"), value: "var(--color-purple)", className: "is-purple" },
  { id: "pink", label: localize("\u7C89\u8272\u6587\u672C"), value: "var(--color-pink)", className: "is-pink" },
  { id: "red", label: localize("\u7EA2\u8272\u6587\u672C"), value: "var(--color-red)", className: "is-red" }
];
var BACKGROUND_COLORS = [
  { id: "default", label: localize("\u9ED8\u8BA4\u80CC\u666F"), value: "", className: "is-default" },
  { id: "gray", label: localize("\u7070\u8272\u80CC\u666F"), value: "rgba(var(--mono-rgb-100), 0.08)", className: "is-gray" },
  { id: "brown", label: localize("\u68D5\u8272\u80CC\u666F"), value: "rgba(var(--color-orange-rgb), 0.16)", className: "is-brown" },
  { id: "orange", label: localize("\u6A59\u8272\u80CC\u666F"), value: "rgba(var(--color-orange-rgb), 0.16)", className: "is-orange" },
  { id: "yellow", label: localize("\u9EC4\u8272\u80CC\u666F"), value: "rgba(var(--color-yellow-rgb), 0.18)", className: "is-yellow" },
  { id: "green", label: localize("\u7EFF\u8272\u80CC\u666F"), value: "rgba(var(--color-green-rgb), 0.16)", className: "is-green" },
  { id: "blue", label: localize("\u84DD\u8272\u80CC\u666F"), value: "rgba(var(--color-blue-rgb), 0.16)", className: "is-blue" },
  { id: "purple", label: localize("\u7D2B\u8272\u80CC\u666F"), value: "rgba(var(--color-purple-rgb), 0.16)", className: "is-purple" },
  { id: "pink", label: localize("\u7C89\u8272\u80CC\u666F"), value: "rgba(var(--color-pink-rgb), 0.16)", className: "is-pink" },
  { id: "red", label: localize("\u7EA2\u8272\u80CC\u666F"), value: "rgba(var(--color-red-rgb), 0.16)", className: "is-red" }
];
var CALLOUT_OPTIONS = [
  { type: "note", label: "note" },
  { type: "info", label: "info" },
  { type: "todo", label: "todo" },
  { type: "tip", label: "tip" },
  { type: "success", label: "success" },
  { type: "question", label: "question" },
  { type: "warning", label: "warning" },
  { type: "failure", label: "failure" },
  { type: "danger", label: "danger" },
  { type: "bug", label: "bug" },
  { type: "example", label: "example" },
  { type: "quote", label: "quote" }
];
var CALLOUT_ICONS = {
  note: "pencil",
  abstract: "clipboard-list",
  summary: "clipboard-list",
  tldr: "clipboard-list",
  info: "info",
  todo: "check-circle",
  tip: "flame",
  hint: "flame",
  important: "flame",
  success: "check",
  check: "check",
  done: "check",
  question: "help-circle",
  help: "help-circle",
  faq: "help-circle",
  warning: "alert-triangle",
  caution: "alert-triangle",
  attention: "alert-triangle",
  failure: "x-circle",
  fail: "x-circle",
  missing: "x-circle",
  danger: "zap",
  error: "zap",
  bug: "bug",
  example: "list",
  quote: "quote",
  cite: "quote"
};
var OPEN_MENUS = /* @__PURE__ */ new Set();
function showNotionBlockActionMenu(plugin, view, lineNo, pos, options = {}) {
  closeNotionBlockActionMenus();
  const menu = new NotionBlockActionMenu(plugin, view, lineNo, pos, options);
  OPEN_MENUS.add(menu);
  menu.open();
}
function closeNotionBlockActionMenus() {
  OPEN_MENUS.forEach((menu) => menu.close());
  OPEN_MENUS.clear();
}
var NotionBlockActionMenu = class {
  constructor(plugin, view, lineNo, pos, options) {
    this.rootEl = null;
    this.submenuEl = null;
    this.listEl = null;
    this.activeIndex = 0;
    this.visibleItems = [];
    this.surfaceLease = null;
    this.closed = false;
    this.handlePointerDown = (event) => this.onPointerDown(event);
    this.handleKeyDown = (event) => this.onKeyDown(event);
    var _a;
    this.plugin = plugin;
    this.view = view;
    this.lineNo = lineNo;
    this.pos = pos;
    this.options = options;
    this.ownerDocument = view.dom.ownerDocument;
    this.ownerWindow = (_a = this.ownerDocument.defaultView) != null ? _a : activeWindow;
  }
  open() {
    this.surfaceLease = this.plugin.surfaceCoordinator.claim(
      this.ownerDocument,
      "action-menu",
      (reason) => this.close(reason),
      {
        dismissOnViewportChange: true,
        containsEventTarget: (target) => this.containsEventTarget(target)
      }
    );
    this.rootEl = this.ownerDocument.body.createDiv({ cls: "wk-nb-action-menu" });
    this.rootEl.setAttribute("role", "menu");
    this.rootEl.tabIndex = -1;
    this.rootEl.setCssStyles({ left: `${this.pos.x}px`, top: `${this.pos.y}px` });
    this.listEl = this.rootEl.createDiv({ cls: "wk-nb-action-menu-list" });
    this.renderList();
    this.reposition();
    if (this.options.initialPage) {
      this.renderFloatingSubmenu(this.options.initialPage);
    }
    this.rootEl.focus();
    this.ownerDocument.addEventListener("pointerdown", this.handlePointerDown, true);
    this.ownerDocument.addEventListener("keydown", this.handleKeyDown, true);
  }
  close(reason = "programmatic") {
    var _a, _b;
    if (this.closed)
      return;
    this.closed = true;
    (_a = this.surfaceLease) == null ? void 0 : _a.release();
    this.surfaceLease = null;
    this.ownerDocument.removeEventListener("pointerdown", this.handlePointerDown, true);
    this.ownerDocument.removeEventListener("keydown", this.handleKeyDown, true);
    this.closeFloatingSubmenu();
    (_b = this.rootEl) == null ? void 0 : _b.remove();
    this.rootEl = null;
    OPEN_MENUS.delete(this);
    if (reason === "escape" && !this.view.hasFocus)
      this.view.focus();
  }
  containsEventTarget(target) {
    var _a, _b;
    const node = target;
    if (!node || typeof node.nodeType !== "number")
      return false;
    return Boolean(((_a = this.rootEl) == null ? void 0 : _a.contains(node)) || ((_b = this.submenuEl) == null ? void 0 : _b.contains(node)));
  }
  renderList() {
    if (!this.listEl)
      return;
    this.listEl.empty();
    const transformItems = this.getTurnIntoItems();
    const colorItems = this.getColorEntryItems();
    const blockItems = this.getBlockActionItems();
    this.visibleItems = [...transformItems, ...colorItems, ...blockItems];
    this.renderSection(t("menu.turnInto"), transformItems);
    this.renderSeparator();
    this.renderSection("", colorItems);
    this.renderSeparator();
    this.renderSection("", blockItems);
    this.reposition();
  }
  getTurnIntoItems() {
    return [
      { id: "paragraph", label: t("menu.paragraph"), icon: "text", action: () => this.runTransform("paragraph") },
      // Lucide names are kebab-case; "heading1" resolved to nothing and
      // these rows rendered with a blank icon slot.
      { id: "h1", label: t("menu.h1"), icon: "heading-1", action: () => this.runTransform("h1") },
      { id: "h2", label: t("menu.h2"), icon: "heading-2", action: () => this.runTransform("h2") },
      { id: "h3", label: t("menu.h3"), icon: "heading-3", action: () => this.runTransform("h3") },
      { id: "h4", label: t("menu.h4"), icon: "heading-4", action: () => this.runTransform("h4") },
      { id: "h5", label: t("menu.h5"), icon: "heading-5", action: () => this.runTransform("h5") },
      { id: "todo", label: t("menu.todo"), icon: "check-square", action: () => this.runTransform("todo") },
      { id: "bullet", label: t("menu.bullet"), icon: "list", action: () => this.runTransform("bullet") },
      { id: "numbered", label: t("menu.numbered"), icon: "list-ordered", action: () => this.runTransform("numbered") },
      { id: "blockquote", label: t("menu.blockquote"), icon: "quote", action: () => this.runTransform("blockquote") },
      { id: "code", label: t("menu.code"), icon: "code", action: () => this.runTransform("code") },
      { id: "math", label: t("menu.math"), icon: "sigma", action: () => this.runTransform("math") },
      { id: "divider", label: t("menu.divider"), icon: "minus", action: () => this.runTransform("divider") },
      { id: "callout", label: t("menu.callout"), icon: this.getCurrentCalloutIcon(), page: "callout" }
    ];
  }
  getColorEntryItems() {
    return [
      { id: "color", label: t("menu.color"), icon: "paint-roller", page: "color" }
    ];
  }
  getBlockActionItems() {
    return [
      { id: "copy-link", label: t("menu.copyLink"), icon: "link", shortcut: "\u2318\u2303L", action: () => this.copyBlockLink() },
      { id: "delete", label: t("menu.delete"), icon: "trash-2", shortcut: "Del", action: () => this.deleteLine() }
    ];
  }
  getTextColorItems() {
    return TEXT_COLORS.map((color) => ({
      id: `text-${color.id}`,
      label: t(`color.text${color.id.charAt(0).toUpperCase() + color.id.slice(1)}`),
      icon: "letter-text",
      action: () => this.applyTextColor(color)
    }));
  }
  getBackgroundColorItems() {
    return BACKGROUND_COLORS.map((color) => ({
      id: `bg-${color.id}`,
      label: t(`color.bg${color.id.charAt(0).toUpperCase() + color.id.slice(1)}`),
      icon: "paint-bucket",
      action: () => this.applyBackgroundColor(color)
    }));
  }
  getCalloutItems() {
    return CALLOUT_OPTIONS.map((option) => ({
      id: `callout-${option.type}`,
      label: t(`callout.${option.type}`),
      icon: this.getCalloutIcon(option.type),
      action: () => this.runTransform(`callout-${option.type}`)
    }));
  }
  renderSection(title, items, colorOptions) {
    if (!this.listEl || items.length === 0)
      return;
    if (title) {
      this.listEl.createDiv({ cls: "wk-nb-action-menu-section", text: title });
    }
    items.forEach((item) => this.renderItem(item, colorOptions == null ? void 0 : colorOptions.find((color) => item.id.endsWith(color.id))));
  }
  renderSeparator() {
    var _a;
    (_a = this.listEl) == null ? void 0 : _a.createDiv({ cls: "wk-nb-action-menu-separator" });
  }
  renderItem(item, color) {
    if (!this.listEl)
      return;
    const index = this.visibleItems.indexOf(item);
    const row = this.listEl.createDiv({
      cls: `wk-nb-action-menu-row${index === this.activeIndex ? " is-active" : ""}`,
      attr: { role: "menuitem" }
    });
    const iconWrap = row.createSpan({ cls: "wk-nb-action-menu-icon" });
    if (color) {
      iconWrap.addClass("wk-nb-action-menu-color-icon", color.className);
      iconWrap.setText(item.id.startsWith("text-") ? "A" : "");
    } else {
      (0, import_obsidian5.setIcon)(iconWrap, item.icon);
    }
    row.createSpan({ cls: "wk-nb-action-menu-label", text: item.label });
    if (item.shortcut) {
      row.createSpan({ cls: "wk-nb-action-menu-shortcut", text: item.shortcut });
    }
    if (item.page) {
      (0, import_obsidian5.setIcon)(row.createSpan({ cls: "wk-nb-action-menu-chevron" }), "chevron-right");
    }
    row.addEventListener("mouseenter", () => {
      this.activeIndex = Math.max(0, index);
      this.refreshActiveRows();
      this.syncFloatingSubmenuForItem(item);
    });
    row.addEventListener("click", () => {
      void this.activateItem(item);
    });
  }
  renderFloatingSubmenu(page) {
    var _a;
    if (!this.rootEl)
      return;
    (_a = this.submenuEl) == null ? void 0 : _a.remove();
    this.submenuEl = this.ownerDocument.body.createDiv({ cls: `wk-nb-action-menu wk-nb-action-submenu is-${page}` });
    this.submenuEl.setAttribute("role", "menu");
    if (page === "color") {
      this.renderFloatingSection(this.submenuEl, t("menu.textColor"), this.getTextColorItems(), TEXT_COLORS);
      this.submenuEl.createDiv({ cls: "wk-nb-action-menu-separator" });
      this.renderFloatingSection(this.submenuEl, t("menu.backgroundColor"), this.getBackgroundColorItems(), BACKGROUND_COLORS);
    } else {
      this.renderFloatingSection(this.submenuEl, t("menu.callout"), this.getCalloutItems());
    }
    this.positionFloatingSubmenu();
  }
  closeFloatingSubmenu() {
    var _a;
    (_a = this.submenuEl) == null ? void 0 : _a.remove();
    this.submenuEl = null;
  }
  syncFloatingSubmenuForItem(item) {
    if (item == null ? void 0 : item.page) {
      this.renderFloatingSubmenu(item.page);
      return;
    }
    this.closeFloatingSubmenu();
  }
  renderFloatingSection(container, title, items, colors) {
    container.createDiv({ cls: "wk-nb-action-menu-section", text: title });
    items.forEach((item) => {
      const color = colors == null ? void 0 : colors.find((option) => item.id.endsWith(option.id));
      const row = container.createDiv({ cls: "wk-nb-action-menu-row", attr: { role: "menuitem" } });
      const iconWrap = row.createSpan({ cls: "wk-nb-action-menu-icon" });
      if (color) {
        iconWrap.addClass("wk-nb-action-menu-color-icon", color.className);
        iconWrap.setText(item.id.startsWith("text-") ? "A" : "");
      } else {
        (0, import_obsidian5.setIcon)(iconWrap, item.icon);
      }
      row.createSpan({ cls: "wk-nb-action-menu-label", text: item.label });
      row.addEventListener("click", () => {
        void this.activateItem(item);
      });
    });
  }
  refreshActiveRows() {
    var _a;
    if (!this.listEl)
      return;
    const rows = Array.from(this.listEl.querySelectorAll(".wk-nb-action-menu-row"));
    rows.forEach((row, index) => {
      row.toggleClass("is-active", index === this.activeIndex);
    });
    (_a = rows[this.activeIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
  }
  async activateItem(item) {
    if (item.page) {
      this.renderFloatingSubmenu(item.page);
      return;
    }
    if (item.action) {
      await item.action();
      this.close();
    }
  }
  onPointerDown(event) {
    var _a, _b;
    if ((_a = this.rootEl) == null ? void 0 : _a.contains(event.target))
      return;
    if ((_b = this.submenuEl) == null ? void 0 : _b.contains(event.target))
      return;
    this.close("outside");
  }
  onKeyDown(event) {
    if (!this.rootEl)
      return;
    if (event.key === "Escape") {
      event.preventDefault();
      this.close("escape");
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      const length = Math.max(this.visibleItems.length, 1);
      this.activeIndex = (this.activeIndex + delta + length) % length;
      this.refreshActiveRows();
      this.syncFloatingSubmenuForItem(this.visibleItems[this.activeIndex]);
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      const item = this.visibleItems[this.activeIndex];
      if (item)
        void this.activateItem(item);
    }
  }
  runTransform(type) {
    transformLine(this.view, this.lineNo, type);
  }
  getCurrentCalloutIcon() {
    const line = this.view.state.doc.line(this.lineNo);
    const match = line.text.match(/^>\s*\[!([^\]\s|+-]+)/);
    return this.getCalloutIcon(match == null ? void 0 : match[1]);
  }
  getCalloutIcon(type) {
    var _a;
    if (!type)
      return CALLOUT_ICONS.note;
    return (_a = CALLOUT_ICONS[type.toLowerCase()]) != null ? _a : CALLOUT_ICONS.note;
  }
  deleteLine() {
    const line = this.view.state.doc.line(this.lineNo);
    const from = line.number === 1 ? line.from : line.from - 1;
    const to = line.number === 1 && this.view.state.doc.lines > 1 ? line.to + 1 : line.to;
    dispatchBlockEdit(this.view, {
      changes: { from, to, insert: "" },
      scrollIntoView: true,
      userEvent: "delete.block"
    });
  }
  async copyBlockLink() {
    var _a;
    const file = this.plugin.app.workspace.getActiveFile();
    if (!file) {
      new import_obsidian5.Notice(t("notice.noActiveNote"));
      return;
    }
    const line = this.view.state.doc.line(this.lineNo);
    const existingId = (_a = line.text.match(/\s\^([A-Za-z0-9-]+)$/)) == null ? void 0 : _a[1];
    const blockId = existingId != null ? existingId : `nb-${Date.now().toString(36)}`;
    if (!existingId) {
      dispatchBlockEdit(this.view, {
        changes: { from: line.to, insert: ` ^${blockId}` },
        userEvent: "input.block-id"
      });
    }
    const link = `[[${file.basename}#^${blockId}]]`;
    try {
      await this.ownerWindow.navigator.clipboard.writeText(link);
      new import_obsidian5.Notice(t("notice.linkCopied"));
    } catch (e) {
      new import_obsidian5.Notice(t("notice.linkCopyFailed"));
    }
  }
  applyTextColor(color) {
    if (this.applySelectionColor(color.value ? {
      id: `text-${color.id}`,
      tagName: "span",
      style: `color: ${color.value};`
    } : null))
      return;
    this.wrapLineContent(color.value ? "span" : "", color.value ? `color: ${color.value};` : "");
  }
  applyBackgroundColor(color) {
    if (this.applySelectionColor(color.value ? {
      id: `bg-${color.id}`,
      tagName: "mark",
      style: `background-color: ${color.value}; color: inherit;`
    } : null))
      return;
    this.wrapLineContent(color.value ? "mark" : "", color.value ? `background-color: ${color.value}; color: inherit;` : "");
  }
  /**
   * Reuses this menu's complete colour palette while adapting its write
   * target to a selected-text entry point. Multi-line selections use the
   * original block-colour planner per line because an inline HTML element
   * cannot safely span Markdown paragraphs.
   */
  applySelectionColor(color) {
    const selection = this.configuredSelection();
    if (!selection)
      return false;
    const documentText = this.view.state.doc.toString();
    if (documentText.slice(selection.from, selection.to).includes("\n")) {
      this.wrapSelectedLines(color);
      return true;
    }
    const plan = planInlineColor(
      documentText,
      selection.from,
      selection.to,
      color
    );
    if (!plan) {
      if (color === null)
        new import_obsidian5.Notice(localize("\u9009\u4E2D\u6587\u5B57\u5916\u5C42\u6CA1\u6709\u672C\u63D2\u4EF6\u6DFB\u52A0\u7684\u989C\u8272\u3002"));
      return true;
    }
    dispatchBlockEdit(this.view, {
      changes: { from: plan.from, to: plan.to, insert: plan.insert },
      selection: import_state.EditorSelection.range(plan.selectionFrom, plan.selectionTo),
      scrollIntoView: true,
      userEvent: "input.selection-color"
    });
    this.view.focus();
    return true;
  }
  wrapSelectedLines(color) {
    var _a, _b;
    const selection = this.configuredSelection();
    if (!selection)
      return;
    const state = this.view.state;
    const startLine = state.doc.lineAt(selection.from).number;
    const lineAtEnd = state.doc.lineAt(selection.to);
    const endPos = selection.to > selection.from && lineAtEnd.from === selection.to ? selection.to - 1 : selection.to;
    const endLine = state.doc.lineAt(Math.max(selection.from, endPos)).number;
    const changes = [];
    for (let lineNo = startLine; lineNo <= endLine; lineNo += 1) {
      const line = state.doc.line(lineNo);
      const plan = planColorWrap(
        line.text,
        (_a = color == null ? void 0 : color.tagName) != null ? _a : "",
        (_b = color == null ? void 0 : color.style) != null ? _b : ""
      );
      changes.push({ from: line.from, to: line.to, insert: plan.text });
    }
    dispatchBlockEdit(this.view, {
      changes,
      scrollIntoView: true,
      userEvent: "input.selection-block-color"
    });
    this.view.focus();
  }
  configuredSelection() {
    const configured = this.options.selection;
    if (!configured)
      return null;
    const length = this.view.state.doc.length;
    const from = Math.min(Math.max(0, configured.from), length);
    const to = Math.min(Math.max(from, configured.to), length);
    return to > from ? { from, to } : null;
  }
  wrapLineContent(tagName, style) {
    const line = this.view.state.doc.line(this.lineNo);
    const plan = planColorWrap(line.text, tagName, style);
    dispatchBlockEdit(this.view, {
      changes: { from: line.from, to: line.to, insert: plan.text },
      selection: { anchor: line.from + plan.caretOffset },
      scrollIntoView: true,
      userEvent: "input.block-color"
    });
    this.view.focus();
  }
  reposition() {
    var _a, _b;
    if (!this.rootEl)
      return;
    this.rootEl.setCssStyles({ maxHeight: "" });
    const rect = this.rootEl.getBoundingClientRect();
    const placement = placeMenu({
      anchorX: this.pos.x,
      anchorY: this.pos.y,
      avoidTop: (_b = (_a = this.options.avoid) == null ? void 0 : _a.top) != null ? _b : this.pos.y,
      menuWidth: rect.width,
      menuHeight: rect.height,
      viewportWidth: this.ownerWindow.innerWidth,
      viewportHeight: this.ownerWindow.innerHeight
    });
    this.rootEl.setCssStyles({
      maxHeight: `${placement.maxHeight}px`,
      left: `${placement.left}px`,
      top: `${placement.top}px`
    });
    this.positionFloatingSubmenu();
  }
  positionFloatingSubmenu() {
    if (!this.rootEl || !this.submenuEl)
      return;
    const rootRect = this.rootEl.getBoundingClientRect();
    const submenuRect = this.submenuEl.getBoundingClientRect();
    const placement = placeSubmenu({
      parentLeft: rootRect.left,
      parentRight: rootRect.right,
      parentTop: rootRect.top,
      menuWidth: submenuRect.width,
      menuHeight: submenuRect.height,
      viewportWidth: this.ownerWindow.innerWidth,
      viewportHeight: this.ownerWindow.innerHeight
    });
    this.submenuEl.setCssStyles({ left: `${placement.left}px`, top: `${placement.top}px` });
  }
};

// src/notionInsertMenu.ts
var import_obsidian6 = require("obsidian");

// src/slashTrigger.ts
function isSlashTriggerPosition(textBeforeTrigger, allowInline = false) {
  if (stripMarkers(textBeforeTrigger).trim().length === 0)
    return true;
  if (!allowInline)
    return false;
  return /\s$/.test(textBeforeTrigger);
}
var MARKER = /^[ \t]*(?:>[ \t]*|(?:[-*+]|\d+[.)])[ \t]+(?:\[[ xX]\][ \t]+)?)/;
function stripMarkers(text) {
  let out = text;
  for (; ; ) {
    const next = out.replace(MARKER, "");
    if (next === out)
      return out;
    out = next;
  }
}
function readSlashQuery(lineText, triggerCol, caretCol, trigger) {
  if (caretCol <= triggerCol)
    return null;
  if (lineText.slice(triggerCol, triggerCol + trigger.length) !== trigger)
    return null;
  return lineText.slice(triggerCol + trigger.length, caretCol);
}
function matchesQuery(query, label, keywords = []) {
  const q = query.trim().toLowerCase();
  if (q.length === 0)
    return true;
  return [label, ...keywords].some((candidate) => candidate.toLowerCase().includes(q));
}
function normaliseTrigger(raw) {
  var _a;
  const trimmed = (raw != null ? raw : "").trim();
  if (trimmed.length === 0)
    return null;
  return (_a = Array.from(trimmed)[0]) != null ? _a : null;
}
function triggerCharacters(raw) {
  const primary = normaliseTrigger(raw);
  if (!primary)
    return [];
  if (primary === "/")
    return ["/", "\u3001"];
  if (primary === "\u3001")
    return ["\u3001", "/"];
  return [primary];
}

// src/notionInsertMenu.ts
var CALLOUT_OPTIONS2 = [
  { type: "note", label: "note" },
  { type: "info", label: "info" },
  { type: "todo", label: "todo" },
  { type: "tip", label: "tip" },
  { type: "success", label: "success" },
  { type: "question", label: "question" },
  { type: "warning", label: "warning" },
  { type: "failure", label: "failure" },
  { type: "danger", label: "danger" },
  { type: "bug", label: "bug" },
  { type: "example", label: "example" },
  { type: "quote", label: "quote" }
];
var CALLOUT_ICONS2 = {
  note: "pencil",
  abstract: "clipboard-list",
  summary: "clipboard-list",
  tldr: "clipboard-list",
  info: "info",
  todo: "check-circle",
  tip: "flame",
  hint: "flame",
  important: "flame",
  success: "check",
  check: "check",
  done: "check",
  question: "help-circle",
  help: "help-circle",
  faq: "help-circle",
  warning: "alert-triangle",
  caution: "alert-triangle",
  attention: "alert-triangle",
  failure: "x-circle",
  fail: "x-circle",
  missing: "x-circle",
  danger: "zap",
  error: "zap",
  bug: "bug",
  example: "list",
  quote: "quote",
  cite: "quote"
};
var OPEN_INSERT_MENUS = /* @__PURE__ */ new Set();
function showNotionBlockInsertMenu(plugin, view, lineNo, pos, options = {}) {
  closeNotionBlockInsertMenus();
  const menu = new NotionBlockInsertMenu(plugin, view, lineNo, pos, options);
  OPEN_INSERT_MENUS.add(menu);
  menu.open();
  return menu;
}
function closeNotionBlockInsertMenus() {
  OPEN_INSERT_MENUS.forEach((menu) => menu.close());
  OPEN_INSERT_MENUS.clear();
}
var NotionBlockInsertMenu = class {
  constructor(plugin, view, lineNo, pos, options) {
    this.rootEl = null;
    this.submenuEl = null;
    this.listEl = null;
    this.activeIndex = 0;
    this.query = "";
    this.visibleItems = [];
    this.surfaceLease = null;
    this.closed = false;
    this.handlePointerDown = (event) => this.onPointerDown(event);
    this.handleKeyDown = (event) => this.onKeyDown(event);
    var _a;
    this.plugin = plugin;
    this.view = view;
    this.lineNo = lineNo;
    this.pos = pos;
    this.options = options;
    this.ownerDocument = view.dom.ownerDocument;
    this.ownerWindow = (_a = this.ownerDocument.defaultView) != null ? _a : activeWindow;
  }
  open() {
    this.surfaceLease = this.plugin.surfaceCoordinator.claim(
      this.ownerDocument,
      "insert-menu",
      (reason) => this.close(reason),
      {
        dismissOnViewportChange: true,
        containsEventTarget: (target) => this.containsEventTarget(target)
      }
    );
    this.rootEl = this.ownerDocument.body.createDiv({ cls: "wk-nb-action-menu wk-nb-insert-menu" });
    this.rootEl.setAttribute("role", "menu");
    this.rootEl.tabIndex = -1;
    this.rootEl.setCssStyles({ left: `${this.pos.x}px`, top: `${this.pos.y}px` });
    this.listEl = this.rootEl.createDiv({ cls: "wk-nb-action-menu-list" });
    this.renderList();
    this.reposition();
    if (this.options.keepEditorFocus) {
      this.rootEl.addEventListener("mousedown", (event) => event.preventDefault());
    } else {
      this.rootEl.focus();
    }
    this.ownerDocument.addEventListener("pointerdown", this.handlePointerDown, true);
    this.ownerDocument.addEventListener("keydown", this.handleKeyDown, true);
  }
  close(reason = "programmatic") {
    var _a, _b, _c, _d;
    if (this.closed)
      return;
    this.closed = true;
    (_a = this.surfaceLease) == null ? void 0 : _a.release();
    this.surfaceLease = null;
    this.ownerDocument.removeEventListener("pointerdown", this.handlePointerDown, true);
    this.ownerDocument.removeEventListener("keydown", this.handleKeyDown, true);
    this.closeFloatingSubmenu();
    (_b = this.rootEl) == null ? void 0 : _b.remove();
    this.rootEl = null;
    OPEN_INSERT_MENUS.delete(this);
    (_d = (_c = this.options).onClose) == null ? void 0 : _d.call(_c);
    if (reason === "escape" && !this.view.hasFocus)
      this.view.focus();
  }
  containsEventTarget(target) {
    var _a, _b;
    const node = target;
    if (!node || typeof node.nodeType !== "number")
      return false;
    return Boolean(((_a = this.rootEl) == null ? void 0 : _a.contains(node)) || ((_b = this.submenuEl) == null ? void 0 : _b.contains(node)));
  }
  setQuery(query) {
    if (query === this.query)
      return this.visibleItems.length > 0;
    this.query = query;
    this.activeIndex = 0;
    this.closeFloatingSubmenu();
    this.renderList();
    return this.visibleItems.length > 0;
  }
  renderList() {
    if (!this.listEl)
      return;
    this.listEl.empty();
    const sections = this.getSections().map((section) => ({
      title: section.title,
      items: section.items.filter((item) => matchesQuery(this.query, item.label, item.keywords))
    })).filter((section) => section.items.length > 0);
    this.visibleItems = sections.flatMap((section) => section.items);
    sections.forEach((section, index) => {
      if (index > 0)
        this.renderSeparator();
      this.renderSection(section.title, section.items);
    });
    this.reposition();
  }
  /** The section heading for a run of rows, or "" where the menu shows none. */
  sectionTitle(key) {
    if (key === "headings")
      return t("menu.headings");
    if (key === "insert")
      return t("menu.insert");
    if (key === "custom")
      return t("menu.custom");
    return "";
  }
  /** Turns a registry row into a menu row, attaching its behaviour. */
  toInsertItem(resolved) {
    if (resolved.commandId) {
      const commandId = resolved.commandId;
      return {
        id: resolved.id,
        label: resolved.label,
        icon: resolved.icon,
        keywords: resolved.keywords,
        action: () => this.runCommand(commandId)
      };
    }
    if (resolved.id === "callout") {
      return {
        id: resolved.id,
        label: resolved.label,
        icon: this.getCalloutIcon("note"),
        keywords: resolved.keywords,
        page: "callout"
      };
    }
    return {
      id: resolved.id,
      label: resolved.label,
      icon: resolved.icon,
      keywords: resolved.keywords,
      action: this.builtinAction(resolved.id)
    };
  }
  builtinAction(id) {
    if (id === "toc")
      return () => this.insertTableOfContents();
    if (id === "page")
      return () => this.createPage();
    if (id === "image")
      return () => this.openImagePicker();
    if (id === "attachment")
      return () => this.openAttachmentPicker();
    return () => this.insert(id);
  }
  getSections() {
    const isFiltering = this.query.trim().length > 0;
    const settings = this.plugin.settings;
    const resolved = resolveMenuItems(
      BUILTIN_ITEMS,
      settings.insertCustom,
      settings.insertOrder,
      // The submenu parent is redundant while filtering, because the flat
      // callout rows below carry every type it would have opened.
      isFiltering ? [...settings.insertHidden, "callout"] : settings.insertHidden,
      t
    );
    const sections = groupBySection(resolved).map((section) => ({
      title: this.sectionTitle(section.sectionKey),
      items: section.items.map((item) => this.toInsertItem(item))
    }));
    sections.push(
      { title: isFiltering ? t("menu.callout") : "", items: isFiltering ? this.getCalloutItems() : [] },
      { title: "", items: this.getDismissItems() }
    );
    return sections;
  }
  /**
   * Runs a user-bound Obsidian command.
   *
   * The menu closes and the typed `/query` is removed first, so the command
   * acts on a document with no trigger text left in it. The removal and the
   * command are two undo steps rather than one: the command dispatches its
   * own transaction and there is no way to reach inside it. Undoing twice
   * after a custom row is the accepted cost of binding arbitrary commands.
   *
   * app.commands is not in Obsidian's public types, hence the narrow cast.
   */
  runCommand(commandId) {
    const remove = this.removeRange();
    this.close();
    if (remove) {
      this.view.dispatch({ changes: { from: remove.from, to: remove.to, insert: "" } });
    }
    const commands = this.plugin.app.commands;
    if (!(commands == null ? void 0 : commands.executeCommandById(commandId))) {
      new import_obsidian6.Notice(t("settings.commandMissing"));
    }
    return true;
  }
  /**
   * "Close menu" — leaves the typed trigger in the note as literal text.
   *
   * Escape already does this, but only if you know it does. Offered only
   * when a trigger character was actually typed: opened from the "+" handle
   * there is no "/" sitting in the document to keep, so the row would close
   * a menu and do nothing else.
   */
  getDismissItems() {
    if (this.options.replaceFrom === void 0)
      return [];
    return [{
      id: "close",
      label: t("menu.closeMenu"),
      icon: "x",
      keywords: ["escape", "esc", "dismiss", "cancel", "text", "literal"],
      // Neither inserts nor removes: everything typed stays exactly
      // where it is, which is the whole point of the row.
      action: () => void 0
    }];
  }
  renderSection(title, items) {
    if (!this.listEl || items.length === 0)
      return;
    if (title) {
      this.listEl.createDiv({ cls: "wk-nb-action-menu-section", text: title });
    }
    items.forEach((item) => this.renderItem(item));
  }
  renderSeparator() {
    var _a;
    (_a = this.listEl) == null ? void 0 : _a.createDiv({ cls: "wk-nb-action-menu-separator" });
  }
  renderItem(item) {
    if (!this.listEl)
      return;
    const index = this.visibleItems.indexOf(item);
    const row = this.listEl.createDiv({
      cls: `wk-nb-action-menu-row${index === this.activeIndex ? " is-active" : ""}`,
      attr: { role: "menuitem" }
    });
    (0, import_obsidian6.setIcon)(row.createSpan({ cls: "wk-nb-action-menu-icon" }), item.icon);
    row.createSpan({ cls: "wk-nb-action-menu-label", text: item.label });
    if (item.page) {
      (0, import_obsidian6.setIcon)(row.createSpan({ cls: "wk-nb-action-menu-chevron" }), "chevron-right");
    }
    row.addEventListener("mouseenter", () => {
      this.activeIndex = Math.max(0, index);
      this.refreshActiveRows();
      this.syncFloatingSubmenuForItem(item);
    });
    row.addEventListener("click", () => {
      this.activateItem(item);
    });
  }
  renderFloatingSubmenu(page) {
    var _a;
    if (!this.rootEl)
      return;
    (_a = this.submenuEl) == null ? void 0 : _a.remove();
    this.submenuEl = this.ownerDocument.body.createDiv({ cls: `wk-nb-action-menu wk-nb-action-submenu is-${page}` });
    this.submenuEl.setAttribute("role", "menu");
    if (this.options.keepEditorFocus) {
      this.submenuEl.addEventListener("mousedown", (event) => event.preventDefault());
    }
    this.renderFloatingSection(this.submenuEl, t("menu.callout"), this.getCalloutItems(false));
    this.positionFloatingSubmenu();
  }
  getCalloutItems(prefixed = true) {
    return CALLOUT_OPTIONS2.map((option) => ({
      id: `callout-${option.type}`,
      // In the flat list both words are in the label so the query can
      // arrive from either direction: "callout" lists them all, "bug"
      // finds the one. Inside the submenu the heading already says
      // "Callout", so repeating it on every row is just noise.
      label: prefixed ? `${t("menu.callout")}: ${t(`callout.${option.type}`)}` : t(`callout.${option.type}`),
      icon: this.getCalloutIcon(option.type),
      keywords: [option.type, "admonition"],
      action: () => this.insert(`callout-${option.type}`)
    }));
  }
  renderFloatingSection(container, title, items) {
    container.createDiv({ cls: "wk-nb-action-menu-section", text: title });
    items.forEach((item) => {
      const row = container.createDiv({ cls: "wk-nb-action-menu-row", attr: { role: "menuitem" } });
      (0, import_obsidian6.setIcon)(row.createSpan({ cls: "wk-nb-action-menu-icon" }), item.icon);
      row.createSpan({ cls: "wk-nb-action-menu-label", text: item.label });
      row.addEventListener("click", () => {
        this.activateItem(item);
      });
    });
  }
  closeFloatingSubmenu() {
    var _a;
    (_a = this.submenuEl) == null ? void 0 : _a.remove();
    this.submenuEl = null;
  }
  syncFloatingSubmenuForItem(item) {
    if (item == null ? void 0 : item.page) {
      this.renderFloatingSubmenu(item.page);
      return;
    }
    this.closeFloatingSubmenu();
  }
  refreshActiveRows() {
    var _a;
    if (!this.listEl)
      return;
    const rows = Array.from(this.listEl.querySelectorAll(".wk-nb-action-menu-row"));
    rows.forEach((row, index) => {
      row.toggleClass("is-active", index === this.activeIndex);
    });
    (_a = rows[this.activeIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
  }
  activateItem(item) {
    var _a;
    if (item.page) {
      this.renderFloatingSubmenu(item.page);
      return;
    }
    const keepOpen = (_a = item.action) == null ? void 0 : _a.call(item);
    if (keepOpen !== true)
      this.close();
  }
  /**
   * The `/query` to delete alongside the insert.
   *
   * Read at activation time rather than when the menu opened, because the
   * user carries on typing while it is up and the caret has moved since.
   */
  removeRange() {
    const from = this.options.replaceFrom;
    if (from === void 0)
      return void 0;
    const to = this.view.state.selection.main.head;
    if (to <= from)
      return void 0;
    return { from, to };
  }
  insert(type) {
    insertBlock(this.plugin, this.view, this.lineNo, type, this.removeRange());
  }
  insertTableOfContents() {
    insertTableOfContents(this.view, this.lineNo, this.removeRange());
  }
  /**
   * The query range is read here, synchronously, and passed in.
   *
   * Creating the note is async, so the menu has already closed by the time
   * the link is written — reading the range inside insertNewPage would read
   * it from a menu that no longer exists.
   */
  createPage() {
    void insertNewPage(this.plugin, this.view, this.lineNo, this.removeRange());
  }
  openImagePicker() {
    return this.openFilePicker(
      ".avif,.bmp,.gif,.jpeg,.jpg,.png,.svg,.webp,image/avif,image/bmp,image/gif,image/jpeg,image/png,image/svg+xml,image/webp",
      (files, remove) => insertImageFiles(this.plugin, this.view, this.lineNo, files, remove)
    );
  }
  openAttachmentPicker() {
    return this.openFilePicker(
      "",
      (files, remove) => insertAttachmentFiles(this.plugin, this.view, this.lineNo, files, remove)
    );
  }
  openFilePicker(accept, handle) {
    const remove = this.removeRange();
    const input = this.ownerDocument.body.createEl("input", {
      attr: {
        type: "file",
        multiple: "true",
        ...accept ? { accept } : {}
      }
    });
    input.addClass("wk-nb-hidden-file-input");
    const cleanup = () => {
      input.remove();
      this.close();
    };
    input.addEventListener("change", () => {
      var _a;
      const files = Array.from((_a = input.files) != null ? _a : []);
      void handle(files, remove).finally(cleanup);
    }, { once: true });
    input.addEventListener("cancel", cleanup, { once: true });
    input.click();
    return true;
  }
  getCalloutIcon(type) {
    var _a;
    if (!type)
      return CALLOUT_ICONS2.note;
    return (_a = CALLOUT_ICONS2[type.toLowerCase()]) != null ? _a : CALLOUT_ICONS2.note;
  }
  onPointerDown(event) {
    var _a, _b;
    if ((_a = this.rootEl) == null ? void 0 : _a.contains(event.target))
      return;
    if ((_b = this.submenuEl) == null ? void 0 : _b.contains(event.target))
      return;
    this.close("outside");
  }
  onKeyDown(event) {
    if (!this.rootEl)
      return;
    const consume = () => {
      event.preventDefault();
      event.stopPropagation();
    };
    if (event.key === "Escape") {
      consume();
      this.close("escape");
      return;
    }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      consume();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      const length = Math.max(this.visibleItems.length, 1);
      this.activeIndex = (this.activeIndex + delta + length) % length;
      this.refreshActiveRows();
      this.syncFloatingSubmenuForItem(this.visibleItems[this.activeIndex]);
      return;
    }
    if (event.key === "Enter" || event.key === "Tab") {
      const item = this.visibleItems[this.activeIndex];
      if (!item)
        return;
      consume();
      this.activateItem(item);
    }
  }
  /**
   * Places the menu below the anchor, or above it when it will not fit.
   *
   * Never between the two. The old behaviour was to slide the menu up until
   * it fit on screen, which put it straight over the line being typed — the
   * query kept filtering, but the user could not see what they were typing.
   * Flipping keeps the caret visible, and the height is capped to whichever
   * side was chosen so the list scrolls rather than overflowing back over it.
   */
  reposition() {
    var _a, _b;
    if (!this.rootEl)
      return;
    this.rootEl.setCssStyles({ maxHeight: "" });
    const rect = this.rootEl.getBoundingClientRect();
    const placement = placeMenu({
      anchorX: this.pos.x,
      anchorY: this.pos.y,
      avoidTop: (_b = (_a = this.options.avoid) == null ? void 0 : _a.top) != null ? _b : this.pos.y,
      menuWidth: rect.width,
      menuHeight: rect.height,
      viewportWidth: this.ownerWindow.innerWidth,
      viewportHeight: this.ownerWindow.innerHeight
    });
    this.rootEl.setCssStyles({
      maxHeight: `${placement.maxHeight}px`,
      left: `${placement.left}px`,
      top: `${placement.top}px`
    });
    this.positionFloatingSubmenu();
  }
  positionFloatingSubmenu() {
    if (!this.rootEl || !this.submenuEl)
      return;
    const rootRect = this.rootEl.getBoundingClientRect();
    const submenuRect = this.submenuEl.getBoundingClientRect();
    const placement = placeSubmenu({
      parentLeft: rootRect.left,
      parentRight: rootRect.right,
      parentTop: rootRect.top,
      menuWidth: submenuRect.width,
      menuHeight: submenuRect.height,
      viewportWidth: this.ownerWindow.innerWidth,
      viewportHeight: this.ownerWindow.innerHeight
    });
    this.submenuEl.setCssStyles({ left: `${placement.left}px`, top: `${placement.top}px` });
  }
};

// src/dragRange.ts
var TAB_WIDTH = 4;
function indentWidth(text) {
  let width = 0;
  for (const ch of text) {
    if (ch === " ")
      width += 1;
    else if (ch === "	")
      width += TAB_WIDTH;
    else
      break;
  }
  return width;
}
function indentString(text) {
  var _a, _b;
  return (_b = (_a = /^[ \t]*/.exec(text)) == null ? void 0 : _a[0]) != null ? _b : "";
}
function isBlank(text) {
  return text.trim() === "";
}
function isBlockStart(text) {
  return /^[ \t]*([-*+]|\d+[.)])[ \t]/.test(text) || // list item or task
  /^[ \t]*#{1,6}[ \t]/.test(text) || // heading
  /^[ \t]*>/.test(text) || // blockquote
  /^[ \t]*(```|~~~|\$\$)/.test(text);
}
function findBlockStart(doc, lineNo) {
  let start = lineNo;
  while (start > 1) {
    const current = doc.line(start);
    if (isBlockStart(current.text))
      break;
    const previous = doc.line(start - 1);
    if (isBlank(previous.text))
      break;
    if (indentWidth(current.text) <= indentWidth(previous.text))
      break;
    start--;
  }
  return start;
}
function findBlockEnd(doc, start) {
  const baseIndent = indentWidth(doc.line(start).text);
  let end = start;
  while (end < doc.lines) {
    const next = doc.line(end + 1);
    if (isBlank(next.text))
      break;
    if (indentWidth(next.text) <= baseIndent)
      break;
    end++;
  }
  return end;
}
function trimBlankEdges(doc, first, last) {
  while (first < last && isBlank(doc.line(first).text))
    first++;
  while (last > first && isBlank(doc.line(last).text))
    last--;
  return [first, last];
}
function toRange(doc, first, last) {
  return {
    from: doc.line(first).from,
    to: doc.line(last).to,
    firstLine: first,
    lastLine: last,
    indent: indentWidth(doc.line(first).text)
  };
}
function resolveDragRange(doc, lineNo, granularity, selection) {
  if (selection) {
    for (const range of selection.ranges) {
      if (range.empty)
        continue;
      const first = doc.lineAt(range.from).number;
      const last = doc.lineAt(range.to).number;
      if (first === last)
        continue;
      if (lineNo >= first && lineNo <= last) {
        const [f, l] = trimBlankEdges(doc, first, last);
        return toRange(doc, f, l);
      }
    }
  }
  if (granularity === "paragraph" && !isBlank(doc.line(lineNo).text)) {
    const start = findBlockStart(doc, lineNo);
    const end = findBlockEnd(doc, start);
    return toRange(doc, start, end);
  }
  return toRange(doc, lineNo, lineNo);
}
function isListItem(text) {
  return /^[ \t]*([-*+]|\d+[.)])[ \t]/.test(text);
}
function detectIndentUnit(doc, fallback = 4) {
  let smallest = Infinity;
  const limit = Math.min(doc.lines, 500);
  for (let n = 1; n <= limit; n++) {
    const width = indentWidth(doc.line(n).text);
    if (width > 0 && width < smallest)
      smallest = width;
  }
  return smallest === Infinity ? fallback : smallest;
}
function allowedIndents(doc, dropLineNo, unit) {
  let prev = null;
  for (let n = Math.min(dropLineNo - 1, doc.lines); n >= 1; n--) {
    const text = doc.line(n).text;
    if (!isBlank(text)) {
      prev = text;
      break;
    }
  }
  if (prev === null)
    return [0];
  const prevIndent = indentWidth(prev);
  if (!isListItem(prev) && prevIndent === 0)
    return [0];
  const deepest = prevIndent + (isListItem(prev) ? unit : 0);
  const levels = [];
  for (let i = 0; i <= deepest; i += unit)
    levels.push(i);
  return levels.length > 0 ? levels : [0];
}
function pickIndent(allowed, desired) {
  return allowed.reduce(
    (best, candidate) => Math.abs(candidate - desired) < Math.abs(best - desired) ? candidate : best,
    allowed[0]
  );
}
function reindentBlock(text, fromIndent, toIndent) {
  const delta = toIndent - fromIndent;
  if (delta === 0)
    return text;
  return text.split("\n").map((line) => {
    if (isBlank(line))
      return "";
    const current = indentWidth(line);
    const body = line.slice(indentString(line).length);
    return " ".repeat(Math.max(0, current + delta)) + body;
  }).join("\n");
}
var GHOST_TEXT_LIMIT = 50;
function countBlocks(doc, firstLine, lastLine) {
  let count = 0;
  let n = firstLine;
  while (n <= lastLine) {
    if (isBlank(doc.line(n).text)) {
      n++;
      continue;
    }
    const end = findBlockEnd(doc, findBlockStart(doc, n));
    count++;
    n = Math.max(end, n) + 1;
  }
  return count;
}
function describeDragGhost(text, blockCount, blocksLabel) {
  if (blockCount > 1)
    return blocksLabel.replace("{n}", String(blockCount));
  const flat = text.trim();
  return flat.length > GHOST_TEXT_LIMIT ? `${flat.slice(0, GHOST_TEXT_LIMIT)}...` : flat;
}

// src/frameScheduler.ts
var FrameScheduler = class {
  constructor(win) {
    this.win = win;
    this.frame = null;
    this.pending = null;
  }
  /** Runs `task` at the next paint, replacing any task not yet run. */
  schedule(task) {
    this.pending = task;
    if (this.frame !== null)
      return;
    this.frame = this.win.requestAnimationFrame(() => {
      this.frame = null;
      const task2 = this.pending;
      this.pending = null;
      task2 == null ? void 0 : task2();
    });
  }
  /**
   * Drops any pending task and cancels the frame.
   *
   * Callers must do this on teardown: a queued callback closes over the view,
   * so letting it fire after destroy() would touch a detached editor.
   */
  cancel() {
    if (this.frame !== null) {
      this.win.cancelAnimationFrame(this.frame);
      this.frame = null;
    }
    this.pending = null;
  }
};

// src/planMove.ts
function planBlockMove(doc, source, toLineNo, targetIndent) {
  const text = reindentBlock(source.text, source.indent, targetIndent);
  if (toLineNo >= source.firstLine && toLineNo <= source.lastLine + 1)
    return [];
  const atDocEnd = source.to >= doc.length;
  const cutFrom = atDocEnd ? Math.max(0, source.from - 1) : source.from;
  const cutTo = atDocEnd ? doc.length : Math.min(source.to + 1, doc.length);
  if (toLineNo > doc.lines) {
    return [
      { from: doc.length, insert: "\n" + text },
      { from: cutFrom, to: cutTo }
    ];
  }
  const toLine = doc.line(toLineNo);
  return [
    { from: toLine.from, insert: text + "\n" },
    { from: cutFrom, to: cutTo }
  ];
}

// src/blockFold.ts
var import_view = require("@codemirror/view");
var import_state2 = require("@codemirror/state");

// src/foldRange.ts
function headingLevel(text) {
  const match = /^[ \t]*(#{1,6})[ \t]/.exec(text);
  return match ? match[1].length : 0;
}
function foldableRange(doc, lineNo) {
  if (lineNo < 1 || lineNo > doc.lines)
    return null;
  const line = doc.line(lineNo);
  if (isBlank(line.text))
    return null;
  const level = headingLevel(line.text);
  if (level > 0)
    return headingSection(doc, lineNo, level);
  const start = findBlockStart(doc, lineNo);
  const end = findBlockEnd(doc, start);
  return end > start ? { headLine: start, lastLine: end } : null;
}
function headingSection(doc, lineNo, level) {
  let last = lineNo;
  for (let n = lineNo + 1; n <= doc.lines; n++) {
    const next = headingLevel(doc.line(n).text);
    if (next > 0 && next <= level)
      break;
    last = n;
  }
  while (last > lineNo && isBlank(doc.line(last).text))
    last--;
  return last > lineNo ? { headLine: lineNo, lastLine: last } : null;
}

// src/blockFold.ts
var foldBlockEffect = import_state2.StateEffect.define();
var unfoldBlockEffect = import_state2.StateEffect.define();
var FoldEllipsisWidget = class extends import_view.WidgetType {
  toDOM(view) {
    const el = document.createElement("span");
    el.className = "ftn-fold-ellipsis";
    el.textContent = "\u2026";
    el.setAttribute("aria-label", t("fold.expand"));
    el.addEventListener("mousedown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const pos = view.posAtDOM(el);
      view.dispatch({ effects: unfoldBlockEffect.of({ from: pos }) });
    });
    return el;
  }
  // Every ellipsis is identical, so CodeMirror may reuse the DOM freely.
  eq() {
    return true;
  }
  // The widget handles its own mousedown; without this CodeMirror would
  // swallow the event before the listener above ever ran.
  ignoreEvent() {
    return false;
  }
};
var foldMark = import_view.Decoration.replace({ widget: new FoldEllipsisWidget() });
var foldField = import_state2.StateField.define({
  create: () => import_view.Decoration.none,
  update(folds, tr) {
    folds = folds.map(tr.changes);
    for (const effect of tr.effects) {
      if (effect.is(foldBlockEffect)) {
        folds = folds.update({
          add: [foldMark.range(effect.value.from, effect.value.to)]
        });
      }
      if (effect.is(unfoldBlockEffect)) {
        const target = effect.value.from;
        folds = folds.update({ filter: (from) => from !== target });
      }
    }
    if (tr.docChanged) {
      const doomed = [];
      tr.changes.iterChangedRanges((_fromA, _toA, fromB, toB) => {
        folds.between(fromB, toB, (from) => {
          doomed.push(from);
        });
      });
      if (doomed.length > 0) {
        folds = folds.update({ filter: (from) => !doomed.includes(from) });
      }
    }
    return folds.update({ filter: (from, to) => to > from });
  },
  provide: (field) => import_view.EditorView.decorations.from(field)
});
function foldAt(folds, from) {
  let found = null;
  folds.between(from, from, (start, end) => {
    if (start === from) {
      found = { from: start, to: end };
      return false;
    }
  });
  return found;
}
function foldOffsetsAtLine(view, lineNo) {
  const range = foldableRange(view.state.doc, lineNo);
  if (!range)
    return null;
  return {
    from: view.state.doc.line(range.headLine).to,
    to: view.state.doc.line(range.lastLine).to
  };
}
function isFoldActiveAt(view, from) {
  const folds = view.state.field(foldField, false);
  return !!folds && foldAt(folds, from) !== null;
}
function foldHidingLineEnd(view, lineNo) {
  const folds = view.state.field(foldField, false);
  if (!folds)
    return null;
  const doc = view.state.doc;
  if (lineNo < 1 || lineNo > doc.lines)
    return null;
  const from = doc.line(lineNo).from;
  let last = null;
  folds.between(from, from, (foldFrom, foldTo) => {
    if (foldFrom < from && from <= foldTo) {
      last = doc.lineAt(foldTo).number;
      return false;
    }
  });
  return last;
}
function toggleFoldAtLine(view, lineNo) {
  const folds = view.state.field(foldField, false);
  if (!folds)
    return false;
  const offsets = foldOffsetsAtLine(view, lineNo);
  if (!offsets)
    return false;
  const existing = foldAt(folds, offsets.from);
  view.dispatch({
    effects: existing ? unfoldBlockEffect.of({ from: existing.from }) : foldBlockEffect.of(offsets)
  });
  return true;
}
function blockFoldExtension() {
  return [foldField];
}

// src/dragDrop.ts
var DragManager = class {
  constructor(plugin, view) {
    this.plugin = plugin;
    this.view = view;
    this.ghostEl = null;
    this.indicatorEl = null;
    this.isDragging = false;
    this.startBlock = null;
    this.currentTargetLine = null;
    /** Indent the block will adopt on drop, chosen by horizontal drag position. */
    this.currentTargetIndent = 0;
    /** Indent levels legal at the current drop point. One entry = no choice. */
    this.currentAllowedIndents = [0];
    /** Line the cached indents were computed for; null means they are stale. */
    this.indentsForLine = null;
    this.indentUnit = 4;
    this.metrics = null;
    this.surfaceLease = null;
    this.onViewportChange = () => {
      this.metrics = null;
    };
    this.onKeyDown = (event) => {
      if (!this.isDragging || event.key !== "Escape")
        return;
      event.preventDefault();
      event.stopPropagation();
      this.stopDrag(false);
    };
    /**
     * Records where the pointer is and defers the work to the next frame.
     *
     * A mouse reports movement several times per painted frame, and every extra
     * report used to repeat the full measure-and-position pass. Only the newest
     * position matters, so keeping it and running once per frame drops the work
     * to what the screen can actually show.
     */
    this.onMouseMove = (event) => {
      if (!this.isDragging)
        return;
      const x = event.clientX;
      const y = event.clientY;
      this.scheduler.schedule(() => this.processMove(x, y));
    };
    this.onMouseUp = (event) => {
      if (this.isDragging) {
        this.scheduler.cancel();
        this.processMove(event.clientX, event.clientY);
      }
      this.stopDrag(true);
    };
    var _a;
    this.ownerDocument = view.dom.ownerDocument;
    this.ownerWindow = (_a = this.ownerDocument.defaultView) != null ? _a : activeWindow;
    this.scheduler = new FrameScheduler(this.ownerWindow);
  }
  startDrag(lineNo, event, onDragEnd) {
    var _a;
    if (this.isDragging)
      return;
    this.onDragEnd = onDragEnd;
    this.isDragging = true;
    this.surfaceLease = this.plugin.surfaceCoordinator.claim(
      this.ownerDocument,
      "drag",
      () => this.stopDrag(false)
    );
    this.metrics = null;
    this.indentsForLine = null;
    const doc = this.view.state.doc;
    const range = resolveDragRange(
      doc,
      lineNo,
      this.plugin.settings.dragGranularity,
      this.view.state.selection
    );
    (_a = this.ownerWindow.getSelection()) == null ? void 0 : _a.removeAllRanges();
    const fromPos = range.from;
    const toPos = range.to;
    const text = doc.sliceString(fromPos, toPos);
    this.startBlock = {
      from: fromPos,
      to: toPos,
      text,
      indent: range.indent,
      firstLine: range.firstLine,
      lastLine: range.lastLine
    };
    this.indentUnit = detectIndentUnit(doc);
    this.ghostEl = this.ownerDocument.body.createDiv({
      cls: "block-drag-ghost",
      text: describeDragGhost(
        text,
        countBlocks(doc, range.firstLine, range.lastLine),
        t("drag.blocks")
      )
    });
    this.updateGhostPosition(event.clientX, event.clientY);
    this.indicatorEl = this.ownerDocument.body.createDiv({
      cls: "block-drag-indicator"
    });
    this.ownerDocument.addEventListener("mousemove", this.onMouseMove);
    this.ownerDocument.addEventListener("mouseup", this.onMouseUp);
    this.ownerDocument.addEventListener("keydown", this.onKeyDown, true);
    this.view.scrollDOM.addEventListener("scroll", this.onViewportChange, { passive: true });
    this.ownerWindow.addEventListener("resize", this.onViewportChange);
    this.ownerDocument.body.addClass("is-dragging-block");
  }
  /**
   * Tears down a drag in progress without applying it.
   *
   * The mousemove and mouseup listeners live on the document, so a view torn
   * down mid-drag — closing the pane, disabling the plugin — would otherwise
   * leave them attached to a view that no longer exists.
   */
  destroy() {
    this.startBlock = null;
    this.currentTargetLine = null;
    this.stopDrag(false);
  }
  stopDrag(commit) {
    var _a, _b;
    if (!this.isDragging)
      return;
    this.scheduler.cancel();
    if (commit && this.startBlock !== null && this.currentTargetLine !== null) {
      this.moveBlock(this.startBlock, this.currentTargetLine);
    }
    this.isDragging = false;
    this.startBlock = null;
    this.currentTargetLine = null;
    this.indentsForLine = null;
    this.metrics = null;
    if (this.ghostEl) {
      this.ghostEl.remove();
      this.ghostEl = null;
    }
    if (this.indicatorEl) {
      this.indicatorEl.remove();
      this.indicatorEl = null;
    }
    this.ownerDocument.removeEventListener("mousemove", this.onMouseMove);
    this.ownerDocument.removeEventListener("mouseup", this.onMouseUp);
    this.ownerDocument.removeEventListener("keydown", this.onKeyDown, true);
    this.view.scrollDOM.removeEventListener("scroll", this.onViewportChange);
    this.ownerWindow.removeEventListener("resize", this.onViewportChange);
    this.ownerDocument.body.removeClass("is-dragging-block");
    (_a = this.surfaceLease) == null ? void 0 : _a.release();
    this.surfaceLease = null;
    (_b = this.onDragEnd) == null ? void 0 : _b.call(this);
    this.onDragEnd = void 0;
  }
  readMetrics() {
    if (this.metrics)
      return this.metrics;
    const contentRect = this.view.contentDOM.getBoundingClientRect();
    this.metrics = {
      contentLeft: contentRect.left,
      contentWidth: this.view.contentDOM.clientWidth,
      columnPx: this.view.defaultCharacterWidth || 8
    };
    return this.metrics;
  }
  /**
   * One frame of drag feedback: measure everything, then paint everything.
   *
   * The ordering is the point. Positioning the ghost is a style write, and a
   * write invalidates layout — so the posAtCoords and coordsAtPos probes that
   * used to follow it each forced the browser to recompute layout before it
   * could answer. Taking every measurement first means at most one layout pass
   * per frame instead of one per probe.
   */
  processMove(mouseX, mouseY) {
    if (!this.isDragging)
      return;
    const m = this.readMetrics();
    const pos = this.view.posAtCoords({ x: mouseX, y: mouseY });
    let paint = null;
    if (pos !== null) {
      try {
        const line = this.view.state.doc.lineAt(pos);
        const coords = this.view.coordsAtPos(line.from);
        const endCoords = coords ? this.view.coordsAtPos(line.to) : null;
        if (coords) {
          let top = coords.top;
          let targetLine = line.number;
          if (endCoords) {
            const lineBottom = endCoords.bottom;
            const midPoint = coords.top + (lineBottom - coords.top) / 2;
            if (mouseY > midPoint) {
              top = lineBottom;
              targetLine = line.number + 1;
            }
          }
          const hiddenUntil = foldHidingLineEnd(this.view, targetLine);
          if (hiddenUntil !== null)
            targetLine = hiddenUntil + 1;
          this.currentTargetLine = targetLine;
          if (this.indentsForLine !== targetLine) {
            this.currentAllowedIndents = allowedIndents(
              this.view.state.doc,
              targetLine,
              this.indentUnit
            );
            this.indentsForLine = targetLine;
          }
          const desired = Math.max(0, Math.round((mouseX - m.contentLeft) / m.columnPx));
          this.currentTargetIndent = pickIndent(this.currentAllowedIndents, desired);
          const offsetPx = this.currentTargetIndent * m.columnPx;
          paint = {
            top,
            left: coords.left + offsetPx,
            width: Math.max(40, m.contentWidth - offsetPx),
            hasChoice: this.currentAllowedIndents.length > 1
          };
        }
      } catch (e) {
      }
    }
    this.updateGhostPosition(mouseX, mouseY);
    if (paint && this.indicatorEl) {
      this.indicatorEl.toggleClass("is-indent-selectable", paint.hasChoice);
      this.indicatorEl.setCssStyles({
        top: `${paint.top}px`,
        left: `${paint.left}px`,
        width: `${paint.width}px`,
        display: "block"
      });
    }
  }
  updateGhostPosition(x, y) {
    if (this.ghostEl) {
      this.ghostEl.setCssStyles({
        left: `${x + 10}px`,
        top: `${y + 10}px`
      });
    }
  }
  moveBlock(startBlock, toLineNo) {
    const changes = planBlockMove(
      this.view.state.doc,
      startBlock,
      toLineNo,
      this.currentTargetIndent
    );
    if (changes.length === 0)
      return;
    dispatchBlockEdit(this.view, {
      changes,
      scrollIntoView: true,
      userEvent: "move.block"
    });
  }
};

// src/handleZone.ts
var HANDLE_EDGE_GAP = 4;
var HANDLE_TEXT_GAP = 4;
var HANDLE_SIDE_SLACK = 160;
var OPPOSITE_SIDE_SLACK = 20;
function isInsideHandleZone(m, x, y, side) {
  if (y < 0 || y > m.viewHeight)
    return false;
  const leftSlack = side === "left" ? HANDLE_SIDE_SLACK : OPPOSITE_SIDE_SLACK;
  const rightSlack = side === "right" ? HANDLE_SIDE_SLACK : OPPOSITE_SIDE_SLACK;
  return x >= -leftSlack && x <= m.viewWidth + rightSlack;
}
function planHandlePlacement(m, preferredSide, buttonCount, buttonSize = 28, gap = 2) {
  var _a, _b, _c;
  if (m.contentWidth <= 0 || buttonCount < 1)
    return null;
  const start = ((_a = m.visibleLeft) != null ? _a : 0) + HANDLE_EDGE_GAP;
  const end = ((_b = m.visibleLeft) != null ? _b : 0) + ((_c = m.visibleWidth) != null ? _c : m.viewWidth) - HANDLE_EDGE_GAP;
  const other = preferredSide === "left" ? "right" : "left";
  for (const side of [preferredSide, other]) {
    for (const size of [buttonSize, Math.min(buttonSize, 20)]) {
      const width = buttonCount * size + Math.max(0, buttonCount - 1) * gap;
      const left = side === "left" ? m.contentOffsetLeft - HANDLE_TEXT_GAP - width : m.contentOffsetLeft + m.contentWidth + HANDLE_TEXT_GAP;
      if (left >= start && left + width <= end)
        return { left, side, buttonSize: size, width };
    }
  }
  return null;
}

// src/blockHandles.ts
var blockHandlesExtension = (plugin) => import_view2.ViewPlugin.fromClass(class {
  constructor(view) {
    this.handleEl = null;
    this.addButton = null;
    this.foldButton = null;
    this.dragButton = null;
    this.hoveredLine = null;
    this.hideTimeout = null;
    this.dragManager = null;
    this.isMouseOverHandle = false;
    /**
     * Viewport-space Y span of the hovered line, including its wrapped rows.
     *
     * Most pointer moves stay inside the line they are already on. Without this
     * every one of them ran a posAtCoords probe purely to rediscover a line
     * number that had not changed. Held in viewport coordinates so it can be
     * compared against clientY directly, which means scrolling invalidates it.
     */
    this.hoveredBand = null;
    this.metrics = null;
    /** Last value written to the "+" button, so an unchanged setting writes nothing. */
    this.plusHandleShown = null;
    /** Last fold state written to the chevron, so an unchanged state writes nothing. */
    this.foldShown = null;
    /**
     * Bumped on every document change, as a cache key for anything derived
     * from the document. Cheaper than remembering the doc itself, and enough:
     * a walk's answer can only go stale when the text under it moves.
     */
    this.docGeneration = 0;
    /**
     * What a fold on the hovered line would cover, and what that was measured
     * against.
     *
     * WHY IT IS WORTH CACHING
     * foldOffsetsAtLine walks the document — for a heading, forward to the
     * next heading at the same depth or shallower, which under a lone `# H1`
     * is every remaining line of the note. updatePosition needs the answer on
     * every reposition, and in always-visible mode that is once per keystroke.
     * The answer depends only on the line and the text, so a fold being opened
     * or closed does not invalidate it — only which fold is *active* changes,
     * and that is a range lookup rather than a walk.
     */
    this.foldOffsetsCache = null;
    /** Last side written to the wrapper, so an unchanged setting writes nothing. */
    this.sideShown = null;
    /**
     * Last observed value of `handleAlwaysVisible`, so `update()` can detect
     * the true -> false transition and hide a handle that has nothing left
     * pinning it on screen.
     */
    this.alwaysVisibleShown = null;
    this.onScroll = () => this.invalidateMetrics();
    this.onResize = () => this.invalidateMetrics();
    /**
     * Pointer tracking, bound to the scroller rather than the content.
     *
     * WHY NOT ViewPlugin's eventHandlers
     * CodeMirror attaches a plugin's eventHandlers to `view.contentDOM`
     * (ensureHandlers, @codemirror/view). The gutter the handle sits in is
     * outside that element, so the moment the pointer crossed out of the text
     * toward the handle, contentDOM fired `mouseleave` and then went silent:
     * no further mousemove arrived while the pointer was in the gutter.
     *
     * That made the hover zone decorative. isInsideHandleZone could only ever
     * be asked about points inside the content, which are inside the zone by
     * construction, so widening it changed nothing — the handle still started
     * hiding as soon as you reached for it, and only the handle's own
     * mouseenter could call it back. The scroller contains the content, the
     * gutter and the handle, so binding here is what lets the zone do its job.
     */
    this.onPointerMove = (event) => this.handleMouseMove(this.view, event);
    this.onPointerLeave = () => this.handleMouseLeave();
    var _a;
    this.view = view;
    this.ownerWindow = (_a = view.dom.ownerDocument.defaultView) != null ? _a : activeWindow;
    this.scheduler = new FrameScheduler(this.ownerWindow);
    this.scrollEl = view.scrollDOM;
    this.createHandle(view);
    this.alwaysVisibleShown = plugin.settings.handleAlwaysVisible;
    if (plugin.settings.handleAlwaysVisible) {
      this.followCaret(view);
    }
    view.scrollDOM.addEventListener("scroll", this.onScroll, { passive: true });
    this.ownerWindow.addEventListener("resize", this.onResize);
    view.scrollDOM.addEventListener("mousemove", this.onPointerMove, { passive: true });
    view.scrollDOM.addEventListener("mouseleave", this.onPointerLeave);
  }
  createHandle(view) {
    this.handleEl = view.scrollDOM.createDiv();
    this.handleEl.className = "block-handle-wrap is-hidden";
    this.addButton = this.handleEl.createDiv({
      cls: "block-handle-button add-button",
      attr: { "aria-label": t("handles.addBlock") }
    });
    (0, import_obsidian7.setIcon)(this.addButton, "plus");
    this.foldButton = this.handleEl.createDiv({
      cls: "block-handle-button fold-button",
      attr: { "aria-label": t("handles.fold") }
    });
    (0, import_obsidian7.setIcon)(this.foldButton, "chevron-down");
    this.foldButton.onclick = (e) => {
      if (this.hoveredLine === null)
        return;
      e.stopPropagation();
      if (this.hideTimeout) {
        this.ownerWindow.clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
      toggleFoldAtLine(view, this.hoveredLine);
    };
    this.dragButton = this.handleEl.createDiv({
      cls: "block-handle-button drag-button",
      attr: { "aria-label": t("handles.dragReorder") }
    });
    (0, import_obsidian7.setIcon)(this.dragButton, "grip-vertical");
    this.handleEl.addEventListener("mouseenter", () => {
      this.isMouseOverHandle = true;
      if (this.hideTimeout) {
        this.ownerWindow.clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    });
    this.handleEl.addEventListener("mouseleave", () => {
      this.isMouseOverHandle = false;
      this.handleMouseLeave();
    });
    let dragTimeout = null;
    let isDragging = false;
    this.dragButton.onmousedown = (e) => {
      if (this.hoveredLine === null)
        return;
      if (this.hideTimeout) {
        this.ownerWindow.clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
      e.preventDefault();
      e.stopPropagation();
      isDragging = false;
      dragTimeout = this.ownerWindow.setTimeout(() => {
        isDragging = true;
        if (!this.dragManager) {
          this.dragManager = new DragManager(plugin, view);
        }
        this.dragManager.startDrag(this.hoveredLine, e, () => {
          this.hoveredLine = null;
          this.hoveredBand = null;
          this.isMouseOverHandle = false;
        });
      }, 150);
    };
    this.dragButton.onmouseup = (_e) => {
      if (dragTimeout !== null)
        this.ownerWindow.clearTimeout(dragTimeout);
      if (!isDragging && this.hoveredLine !== null) {
        const rect = this.dragButton.getBoundingClientRect();
        closeNotionBlockInsertMenus();
        showNotionBlockActionMenu(
          plugin,
          view,
          this.hoveredLine,
          { x: rect.left, y: rect.bottom },
          { avoid: { top: rect.top, bottom: rect.bottom } }
        );
      }
    };
    this.dragButton.onclick = (e) => e.stopPropagation();
    this.dragButton.oncontextmenu = (e) => {
      const menu = new import_obsidian7.Menu();
      const lease = plugin.surfaceCoordinator.claim(
        view.dom.ownerDocument,
        "native-menu",
        () => menu.hide()
      );
      menu.onHide(() => lease.release());
      menu.addItem((item) => {
        item.setTitle(plugin.settings.dragGranularity === "line" ? t("handles.switchToParagraph") : t("handles.switchToLine")).setIcon("layers").onClick(async () => {
          plugin.settings.dragGranularity = plugin.settings.dragGranularity === "line" ? "paragraph" : "line";
          await plugin.saveSettings();
        });
      });
      menu.showAtMouseEvent(e);
      e.preventDefault();
      e.stopPropagation();
    };
    this.addButton.onclick = (e) => {
      if (this.hoveredLine === null)
        return;
      if (this.hideTimeout) {
        this.ownerWindow.clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
      e.stopPropagation();
      const rect = this.addButton.getBoundingClientRect();
      const pos = { x: rect.left, y: rect.bottom };
      closeNotionBlockActionMenus();
      showNotionBlockInsertMenu(plugin, view, this.hoveredLine, pos, {
        avoid: { top: rect.top, bottom: rect.bottom }
      });
    };
  }
  /** Drops cached geometry so the next read takes it afresh. */
  invalidateMetrics() {
    this.metrics = null;
    this.hoveredBand = null;
  }
  /**
   * Cached editor geometry, measured only when the cache is cold.
   *
   * Every read is taken in one uninterrupted run. Interleaving a style write
   * would force a separate layout pass for each read that followed it.
   */
  readMetrics(view) {
    if (this.metrics)
      return this.metrics;
    const viewRect = view.dom.getBoundingClientRect();
    const contentRect = view.contentDOM.getBoundingClientRect();
    const scrollerRect = view.scrollDOM.getBoundingClientRect();
    this.metrics = {
      viewTop: viewRect.top,
      viewLeft: viewRect.left,
      viewWidth: viewRect.width,
      viewHeight: viewRect.height,
      contentLeft: contentRect.left,
      contentWidth: contentRect.width,
      // offsetLeft is relative to .cm-sizer in Obsidian, whereas the
      // handle is a child of scrollDOM. Both must use the same origin.
      contentOffsetLeft: contentRect.left - scrollerRect.left - view.scrollDOM.clientLeft + view.scrollDOM.scrollLeft,
      visibleLeft: view.scrollDOM.scrollLeft,
      visibleWidth: view.scrollDOM.clientWidth,
      scrollerTop: scrollerRect.top,
      scrollTop: view.scrollDOM.scrollTop
    };
    return this.metrics;
  }
  update(update) {
    if (update.docChanged)
      this.docGeneration++;
    const movedUnderUs = update.docChanged || update.viewportChanged || update.geometryChanged;
    if (movedUnderUs)
      this.invalidateMetrics();
    if (this.alwaysVisibleShown && !plugin.settings.handleAlwaysVisible) {
      this.hideHandle();
    }
    this.alwaysVisibleShown = plugin.settings.handleAlwaysVisible;
    const followsCaret = plugin.settings.handleAlwaysVisible && (update.selectionSet || update.docChanged || this.hoveredLine === null);
    const foldToggled = update.transactions.some(
      (tr) => tr.effects.some((e) => e.is(foldBlockEffect) || e.is(unfoldBlockEffect))
    );
    if (followsCaret) {
      this.followCaret(update.view);
      return;
    }
    if ((movedUnderUs || foldToggled) && this.hoveredLine !== null) {
      this.updatePosition(update.view);
    }
  }
  /**
   * What a fold on `lineNo` would cover, recomputed only when it can differ.
   *
   * See foldOffsetsCache: this stands in front of a document walk that
   * updatePosition would otherwise run on every reposition.
   */
  foldOffsetsFor(view, lineNo) {
    const cached = this.foldOffsetsCache;
    if (cached && cached.line === lineNo && cached.generation === this.docGeneration) {
      return cached.offsets;
    }
    const offsets = foldOffsetsAtLine(view, lineNo);
    this.foldOffsetsCache = { line: lineNo, generation: this.docGeneration, offsets };
    return offsets;
  }
  /**
   * Repositions the handle over the hovered line.
   *
   * Returns whether it actually wrote a transform. Callers that unhide the
   * handle before repositioning it (followCaret) need to know: unhiding
   * unconditionally would leave a positionless handle parked at the
   * wrapper's default top:0/left:0 whenever coordsAtPos can't yet resolve
   * the line, which happens if this fires before the view's first layout.
   */
  updatePosition(view) {
    var _a, _b;
    if (this.hoveredLine === null || !this.handleEl)
      return false;
    try {
      const line = view.state.doc.line(this.hoveredLine);
      const coords = view.coordsAtPos(line.from);
      if (!coords)
        return false;
      const endCoords = view.coordsAtPos(line.to);
      const m = this.readMetrics(view);
      const foldOffsets = plugin.settings.foldHandle ? this.foldOffsetsFor(view, this.hoveredLine) : null;
      const foldState = !foldOffsets ? "none" : isFoldActiveAt(view, foldOffsets.from) ? "folded" : "unfolded";
      const style = this.ownerWindow.getComputedStyle(this.handleEl);
      const placement = planHandlePlacement(
        m,
        plugin.settings.handleSide,
        1 + Number(plugin.settings.plusHandle) + Number(foldState !== "none"),
        Number.parseFloat(style.getPropertyValue("--ncl-control-hit-size")) || 28,
        Number.parseFloat(style.columnGap) || 0
      );
      if (!placement) {
        this.handleEl.classList.add("is-hidden");
        return false;
      }
      let top = coords.top - m.scrollerTop + m.scrollTop;
      const lineHeight = coords.bottom - coords.top;
      top += (lineHeight - placement.buttonSize) / 2;
      this.hoveredBand = { top: coords.top, bottom: (endCoords != null ? endCoords : coords).bottom };
      if (this.plusHandleShown !== plugin.settings.plusHandle) {
        this.plusHandleShown = plugin.settings.plusHandle;
        (_a = this.addButton) == null ? void 0 : _a.toggle(plugin.settings.plusHandle);
      }
      if (this.sideShown !== placement.side) {
        this.sideShown = placement.side;
        this.handleEl.classList.toggle("is-right", this.sideShown === "right");
      }
      if (this.foldShown !== foldState) {
        this.foldShown = foldState;
        (_b = this.foldButton) == null ? void 0 : _b.toggle(foldState !== "none");
        if (this.foldButton && foldState !== "none") {
          (0, import_obsidian7.setIcon)(this.foldButton, foldState === "folded" ? "chevron-right" : "chevron-down");
          this.foldButton.setAttribute(
            "aria-label",
            foldState === "folded" ? t("handles.unfold") : t("handles.fold")
          );
        }
      }
      this.handleEl.style.setProperty("--ncl-handle-hit-size", `${placement.buttonSize}px`);
      this.handleEl.setCssStyles({ transform: `translate3d(${placement.left}px, ${Math.round(top)}px, 0)` });
      return true;
    } catch (e) {
      this.hideHandle();
      return false;
    }
  }
  /**
   * Queues a pointer move for the next frame.
   *
   * Only the coordinates and the hit-test result are kept, not the event: the
   * hit test walks the DOM tree rather than measuring it, so it is cheap to do
   * now and would be wrong to defer — by the next frame the pointer may have
   * left the element the event was actually about.
   */
  handleMouseMove(view, event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    const overHandle = !!event.target.closest(".block-handle-wrap");
    this.scheduler.schedule(() => this.processMouseMove(view, clientX, clientY, overHandle));
  }
  processMouseMove(view, clientX, clientY, overHandle) {
    var _a;
    if (!this.handleEl)
      return;
    const m = this.readMetrics(view);
    const x = clientX - m.viewLeft;
    const y = clientY - m.viewTop;
    if (!isInsideHandleZone(m, x, y, (_a = this.sideShown) != null ? _a : plugin.settings.handleSide)) {
      this.handleMouseLeave();
      return;
    }
    if (overHandle) {
      if (this.hideTimeout) {
        this.ownerWindow.clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
      if (this.handleEl.classList.contains("is-hidden")) {
        if (this.hoveredLine === null) {
          const pos2 = view.posAtCoords({ x: m.contentLeft + 5, y: clientY });
          if (pos2 !== null) {
            try {
              this.hoveredLine = view.state.doc.lineAt(pos2).number;
            } catch (e) {
            }
          }
        }
        if (this.updatePosition(view)) {
          this.handleEl.classList.remove("is-hidden");
        }
      }
      return;
    }
    const isHidden = this.handleEl.classList.contains("is-hidden");
    if (!isHidden && this.hoveredLine !== null && this.hoveredBand !== null && clientY >= this.hoveredBand.top && clientY < this.hoveredBand.bottom) {
      if (this.hideTimeout) {
        this.ownerWindow.clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
      return;
    }
    const pos = view.posAtCoords({ x: m.contentLeft + 5, y: clientY });
    if (pos === null)
      return;
    try {
      const line = view.state.doc.lineAt(pos);
      if (this.hoveredLine !== line.number || isHidden) {
        this.hoveredLine = line.number;
        if (this.updatePosition(view)) {
          this.handleEl.classList.remove("is-hidden");
        }
      }
      if (this.hideTimeout) {
        this.ownerWindow.clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    } catch (e) {
    }
  }
  handleMouseLeave() {
    if (plugin.settings.handleAlwaysVisible)
      return;
    this.scheduler.cancel();
    if (this.hideTimeout)
      this.ownerWindow.clearTimeout(this.hideTimeout);
    this.hideTimeout = this.ownerWindow.setTimeout(() => {
      var _a, _b;
      if (this.isMouseOverHandle || ((_a = this.handleEl) == null ? void 0 : _a.matches(":hover"))) {
        return;
      }
      this.hoveredLine = null;
      this.hoveredBand = null;
      (_b = this.handleEl) == null ? void 0 : _b.classList.add("is-hidden");
    }, plugin.settings.hideDelay);
  }
  /**
   * Parks the handle on the caret's block.
   *
   * Only used in always-visible mode. Hover still moves the handle there,
   * so this is what puts it somewhere sensible when the pointer is nowhere
   * near the editor: on the block being edited.
   */
  followCaret(view) {
    if (!this.handleEl)
      return;
    try {
      const line = view.state.doc.lineAt(view.state.selection.main.head);
      this.hoveredLine = line.number;
      if (this.updatePosition(view)) {
        this.handleEl.classList.remove("is-hidden");
      }
    } catch (e) {
    }
  }
  hideHandle() {
    this.hoveredLine = null;
    this.hoveredBand = null;
    if (this.handleEl) {
      this.handleEl.classList.add("is-hidden");
    }
    if (this.hideTimeout) {
      this.ownerWindow.clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  destroy() {
    var _a;
    closeNotionBlockActionMenus();
    closeNotionBlockInsertMenus();
    this.scheduler.cancel();
    if (this.hideTimeout) {
      this.ownerWindow.clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    this.scrollEl.removeEventListener("scroll", this.onScroll);
    this.scrollEl.removeEventListener("mousemove", this.onPointerMove);
    this.scrollEl.removeEventListener("mouseleave", this.onPointerLeave);
    this.ownerWindow.removeEventListener("resize", this.onResize);
    (_a = this.dragManager) == null ? void 0 : _a.destroy();
    this.dragManager = null;
    if (this.handleEl) {
      this.handleEl.remove();
    }
  }
});

// src/hideSyntax.ts
var import_language = require("@codemirror/language");
var import_view3 = require("@codemirror/view");
var import_obsidian8 = require("obsidian");

// src/syntaxAnalysis.ts
var cmLanguage = __toESM(require("@codemirror/language"));
var obsidianTokenClassNodeProp = cmLanguage.tokenClassNodeProp;
var GUARDED_MARKER = /(?:\*{2,}|_{2,}|~{2,}|`+)/g;
function markdownMarkerKind(metadata, parentMetadata = null) {
  var _a;
  const lower = metadata.toLowerCase();
  const nodeName = metadata.split(/\s+/, 1)[0];
  const parent = (_a = parentMetadata == null ? void 0 : parentMetadata.split(/\s+/, 1)[0].toLowerCase()) != null ? _a : "";
  if (nodeName === "EmphasisMark") {
    return parent === "emphasis" || parent === "strongemphasis" ? "emphasis" : null;
  }
  if (nodeName === "StrikethroughMark") {
    return parent === "strikethrough" ? "strikethrough" : null;
  }
  if (nodeName === "HighlightMark")
    return parent === "highlight" ? "highlight" : null;
  if (nodeName === "CodeMark")
    return parent === "inlinecode" ? "code" : null;
  if (nodeName === "HeaderMark")
    return parent.startsWith("atxheading") ? "heading" : null;
  if (lower.includes("formatting-strong") || lower.includes("formatting-em")) {
    return "emphasis";
  }
  if (lower.includes("formatting-strikethrough"))
    return "strikethrough";
  if (lower.includes("formatting-highlight"))
    return "highlight";
  if (lower.includes("formatting-code") && !lower.includes("codeblock"))
    return "code";
  if (lower.includes("formatting-header") || lower.includes("formatting-heading")) {
    return "heading";
  }
  return null;
}
function isIgnoredContext(metadata) {
  const lower = metadata.toLowerCase();
  return metadata === "HorizontalRule" || metadata === "FencedCode" || metadata === "CodeBlock" || metadata === "InlineCode" || metadata === "HTMLTag" || metadata === "HTMLBlock" || metadata === "URL" || isEscapeContext(metadata) || lower.split(/\s+/).includes("hr") || lower.includes("hmd-codeblock") || lower.includes("code-block") || lower.includes("inline-code") || lower.includes("link") || lower.includes("url") || lower.includes("frontmatter") || lower.includes("comment") || lower.includes("math");
}
function isEscapeContext(metadata) {
  const tokens = metadata.toLowerCase().split(/\s+/);
  return tokens.includes("escape") || tokens.includes("formatting-escape") || tokens.includes("hmd-escape");
}
function mergeRanges(ranges) {
  const sorted = ranges.filter((range) => range.to > range.from).map((range) => ({ from: range.from, to: range.to })).sort((a, b) => a.from - b.from || a.to - b.to);
  const merged = [];
  for (const range of sorted) {
    const previous = merged[merged.length - 1];
    if (!previous || range.from > previous.to) {
      merged.push(range);
    } else if (range.to > previous.to) {
      previous.to = range.to;
    }
  }
  return merged;
}
function collectMarkdownSyntax(tree, text) {
  const hidden = [];
  const recognized = [];
  const ignored = [];
  const ownColorTags = [];
  const cursor = tree.cursor();
  const visit = (parentMetadata) => {
    var _a, _b;
    const name = cursor.name;
    const tokenClasses = obsidianTokenClassNodeProp ? (_a = cursor.type.prop(obsidianTokenClassNodeProp)) != null ? _a : "" : "";
    const metadata = tokenClasses ? `${name} ${tokenClasses}` : name;
    const range = { from: cursor.from, to: cursor.to };
    const markerKind = markdownMarkerKind(metadata, parentMetadata);
    const source = (_b = text == null ? void 0 : text.slice(range.from, range.to)) != null ? _b : "";
    const escapedBackslash = isEscapeContext(metadata) && source.startsWith("\\") ? { from: range.from, to: Math.min(range.from + 1, range.to) } : null;
    if (markerKind && markerKind !== "heading")
      recognized.push(range);
    if (markerKind)
      hidden.push(range);
    if (escapedBackslash)
      hidden.push(escapedBackslash);
    if (isIgnoredContext(metadata))
      ignored.push(range);
    if (name === "HTMLTag" && source) {
      const open = source.match(/^<(span|mark)\s+data-nmg-color="[a-z-]+"\s+style="[^"]*">$/u);
      if (open && (open[1] === "span" || open[1] === "mark")) {
        ownColorTags.push({ tagName: open[1], range });
      } else {
        const close = source.match(/^<\/(span|mark)>$/u);
        if (close && (close[1] === "span" || close[1] === "mark")) {
          for (let index = ownColorTags.length - 1; index >= 0; index -= 1) {
            const candidate = ownColorTags[index];
            if (candidate.tagName !== close[1])
              continue;
            hidden.push(candidate.range, range);
            ownColorTags.splice(index, 1);
            break;
          }
        }
      }
    }
    if (cursor.firstChild()) {
      do {
        visit(metadata);
      } while (cursor.nextSibling());
      cursor.parent();
    }
  };
  visit(null);
  return {
    hidden: mergeRanges(hidden),
    recognized: mergeRanges(recognized),
    ignored: mergeRanges(ignored)
  };
}
function rangeIsCovered(range, safeRanges) {
  for (const safe of safeRanges) {
    if (safe.from > range.from)
      return false;
    if (safe.from <= range.from && safe.to >= range.to)
      return true;
  }
  return false;
}
function rangeIntersectsAny(range, filters) {
  return filters.some((filter) => range.from < filter.to && range.to > filter.from);
}
function messageFor(marker) {
  if (marker.startsWith("`")) {
    return localize("\u8FD9\u4E2A\u53CD\u5F15\u53F7\u6CA1\u6709\u88AB Markdown \u89E3\u6790\u4E3A\u6709\u6548\u7684\u884C\u5185\u4EE3\u7801\u6216\u4EE3\u7801\u56F4\u680F");
  }
  if (marker.startsWith("~")) {
    return localize("\u8FD9\u4E2A\u5220\u9664\u7EBF\u7B26\u53F7\u6CA1\u6709\u88AB Markdown \u89E3\u6790\u4E3A\u6709\u6548\u914D\u5BF9");
  }
  return localize("\u8FD9\u4E2A\u5F3A\u8C03\u7B26\u53F7\u6CA1\u6709\u88AB Markdown \u89E3\u6790\u4E3A\u6709\u6548\u914D\u5BF9\uFF0C\u53EF\u80FD\u4F1A\u4E0E\u66F4\u8FDC\u5904\u7684\u7B26\u53F7\u4E32\u8054");
}
function findSuspiciousMarkers(text, summary, searchRanges) {
  const safeRanges = mergeRanges([...summary.recognized, ...summary.ignored]);
  const warnings = [];
  GUARDED_MARKER.lastIndex = 0;
  let match;
  while ((match = GUARDED_MARKER.exec(text)) !== null) {
    const range = { from: match.index, to: match.index + match[0].length };
    if (searchRanges && !rangeIntersectsAny(range, searchRanges))
      continue;
    if (rangeIsCovered(range, safeRanges))
      continue;
    warnings.push({
      ...range,
      marker: match[0],
      message: messageFor(match[0])
    });
  }
  return warnings;
}
function nextSuspiciousMarker(warnings, position) {
  var _a;
  if (warnings.length === 0)
    return null;
  return (_a = warnings.find((warning) => warning.from > position)) != null ? _a : warnings[0];
}

// src/hideSyntax.ts
var hiddenMarker = import_view3.Decoration.replace({});
var intersects = (left, right) => left.from < right.to && left.to > right.from;
var EMPTY_PRESENTATION = {
  decorations: import_view3.Decoration.none,
  atomic: import_view3.Decoration.none,
  warnings: []
};
function buildPresentation(view, plugin) {
  if (!plugin.settings.enabled)
    return EMPTY_PRESENTATION;
  const parsedThrough = Math.max(...view.visibleRanges.map((range) => range.to));
  const tree = (0, import_language.ensureSyntaxTree)(view.state, parsedThrough, 50);
  if (!tree)
    return EMPTY_PRESENTATION;
  const documentText = view.state.doc.toString();
  const summary = collectMarkdownSyntax(tree, documentText);
  const visible = view.visibleRanges.map(({ from, to }) => ({ from, to }));
  const hidden = plugin.settings.hideSyntaxMarkers && !plugin.syntaxRevealActive ? summary.hidden.filter((range) => visible.some((part) => intersects(range, part))) : [];
  const warnings = plugin.settings.guardSuspiciousSyntax ? findSuspiciousMarkers(documentText, summary, visible) : [];
  const decorationRanges = [];
  const atomicRanges = [];
  for (const range of hidden) {
    decorationRanges.push(hiddenMarker.range(range.from, range.to));
    atomicRanges.push(hiddenMarker.range(range.from, range.to));
  }
  for (const warning of warnings) {
    decorationRanges.push(import_view3.Decoration.mark({
      class: "nmg-suspicious-marker",
      attributes: {
        title: warning.message,
        "aria-label": warning.message
      }
    }).range(warning.from, warning.to));
  }
  return {
    decorations: import_view3.Decoration.set(decorationRanges, true),
    atomic: import_view3.Decoration.set(atomicRanges, true),
    warnings
  };
}
function findAllSuspiciousMarkers(state) {
  const tree = (0, import_language.ensureSyntaxTree)(state, state.doc.length, 300);
  if (!tree)
    return null;
  const documentText = state.doc.toString();
  const summary = collectMarkdownSyntax(tree, documentText);
  return findSuspiciousMarkers(documentText, summary);
}
function hideSyntaxExtension(plugin) {
  const presentationPlugin = import_view3.ViewPlugin.fromClass(
    class {
      constructor(view) {
        const presentation = buildPresentation(view, plugin);
        this.decorations = presentation.decorations;
        this.atomic = presentation.atomic;
        this.generation = plugin.syntaxPresentationGeneration;
      }
      update(update) {
        const generationChanged = this.generation !== plugin.syntaxPresentationGeneration;
        const shouldRebuild = generationChanged || update.docChanged || update.viewportChanged || update.selectionSet || update.transactions.length > 0;
        if (!shouldRebuild)
          return;
        const presentation = buildPresentation(update.view, plugin);
        this.decorations = presentation.decorations;
        this.atomic = presentation.atomic;
        this.generation = plugin.syntaxPresentationGeneration;
        const pasted = update.transactions.some(
          (transaction) => transaction.isUserEvent("input.paste")
        );
        const pastedRanges = [];
        if (pasted) {
          update.changes.iterChanges((_fromA, _toA, fromB, toB, inserted) => {
            if (inserted.length > 0)
              pastedRanges.push({ from: fromB, to: toB });
          });
        }
        const pastedWarnings = presentation.warnings.filter(
          (warning) => pastedRanges.some((range) => intersects(warning, range))
        );
        if (plugin.settings.notifyOnPaste && pastedWarnings.length > 0) {
          new import_obsidian8.Notice(
            localize`粘贴内容中检测到 ${pastedWarnings.length} 个可疑 Markdown 符号；已保留并标出。`
          );
        }
      }
    },
    { decorations: (value) => value.decorations }
  );
  return [
    presentationPlugin,
    import_view3.EditorView.atomicRanges.of(
      (view) => {
        var _a, _b;
        return (_b = (_a = view.plugin(presentationPlugin)) == null ? void 0 : _a.atomic) != null ? _b : import_view3.Decoration.none;
      }
    )
  ];
}

// src/blockSelection.ts
var import_view4 = require("@codemirror/view");
var import_state3 = require("@codemirror/state");
var blockSelected = import_view4.Decoration.line({ class: "ftn-block-selected" });
function selectedLines(doc, ranges) {
  const lines = /* @__PURE__ */ new Set();
  for (const range of ranges) {
    if (range.empty)
      continue;
    const first = doc.lineAt(range.from).number;
    const last = doc.lineAt(range.to).number;
    if (first === last)
      continue;
    for (let n = first; n <= last; n++)
      lines.add(n);
  }
  return [...lines].sort((a, b) => a - b);
}
function snapRangeToBlocks(doc, range) {
  if (range.empty)
    return range;
  const first = doc.lineAt(range.from);
  const last = doc.lineAt(range.to);
  if (first.number === last.number)
    return range;
  return range.anchor <= range.head ? import_state3.EditorSelection.range(first.from, last.to) : import_state3.EditorSelection.range(last.to, first.from);
}
function buildDecorations(view) {
  const builder = new import_state3.RangeSetBuilder();
  const doc = view.state.doc;
  for (const n of selectedLines(doc, view.state.selection.ranges)) {
    const line = doc.line(n);
    builder.add(line.from, line.from, blockSelected);
  }
  return builder.finish();
}
function blockSelectionExtension(plugin) {
  return [
    import_view4.ViewPlugin.fromClass(
      class {
        constructor(view) {
          this.decorations = buildDecorations(view);
        }
        update(update) {
          if (update.docChanged || update.viewportChanged || update.selectionSet) {
            this.decorations = buildDecorations(update.view);
          }
          const active = this.decorations.size > 0;
          update.view.dom.classList.toggle("ftn-has-block-selection", active);
        }
      },
      { decorations: (value) => value.decorations }
    ),
    import_view4.EditorView.domEventHandlers({
      mousedown(event, view) {
        if (event.button !== 0)
          return false;
        view.dom.dataset.ftnDragging = "1";
        return false;
      },
      mouseup(_event, view) {
        const wasDragging = view.dom.dataset.ftnDragging === "1";
        delete view.dom.dataset.ftnDragging;
        if (!wasDragging || !plugin.settings.snapSelectionToBlocks)
          return false;
        const doc = view.state.doc;
        const snapped = view.state.selection.ranges.map((r) => snapRangeToBlocks(doc, r));
        const changed = snapped.some(
          (r, i) => r.from !== view.state.selection.ranges[i].from || r.to !== view.state.selection.ranges[i].to
        );
        if (!changed)
          return false;
        view.dispatch({
          selection: import_state3.EditorSelection.create(snapped, view.state.selection.mainIndex),
          // Selection-only, so it must not create an undo entry.
          scrollIntoView: false
        });
        return false;
      }
    })
  ];
}

// src/blockKeymap.ts
var import_state4 = require("@codemirror/state");
var import_view5 = require("@codemirror/view");

// src/codeFence.ts
var FENCE2 = /^\s*(```|~~~)/;
function findCodeFence(doc, lineNo) {
  let openChar = null;
  let openLine = 0;
  let n = 0;
  for (const text of doc.iterLines()) {
    n++;
    const match = FENCE2.exec(text);
    if (n <= lineNo) {
      if (match) {
        if (openChar === null) {
          openChar = match[1];
          openLine = n;
        } else if (match[1] === openChar) {
          if (n === lineNo)
            return { openLine, closeLine: n };
          openChar = null;
          openLine = 0;
        }
      }
      if (n === lineNo && openChar === null)
        return null;
      continue;
    }
    if (match && match[1] === openChar)
      return { openLine, closeLine: n };
  }
  return openChar === null ? null : { openLine, closeLine: null };
}
function isInsideCodeFence(doc, lineNo) {
  const fence = findCodeFence(doc, lineNo);
  return fence !== null && lineNo > fence.openLine;
}
function codeFenceContent(doc, lineNo) {
  const fence = findCodeFence(doc, lineNo);
  if (!fence)
    return null;
  const first = fence.openLine + 1;
  const last = fence.closeLine === null ? doc.lines : fence.closeLine - 1;
  if (last < first)
    return null;
  return { from: doc.line(first).from, to: doc.line(last).to };
}

// src/blockCommands.ts
var MARKER2 = /^(#{1,6} |[-*+] \[[ xX]\] |[-*+] |\d+[.)] |> ?)/;
function blockMarker(textAfterIndent) {
  var _a, _b;
  return (_b = (_a = MARKER2.exec(textAfterIndent)) == null ? void 0 : _a[1]) != null ? _b : "";
}
function planSelectAll(doc, range) {
  const whole = { from: 0, to: doc.length };
  if (range.from === 0 && range.to === doc.length)
    return null;
  const block = blockAround(doc, doc.lineAt(range.head).number);
  if (!block || block.to <= block.from)
    return whole;
  if (range.empty)
    return block;
  const insideBlock = range.from >= block.from && range.to <= block.to;
  const isWholeBlock = range.from === block.from && range.to === block.to;
  if (insideBlock && !isWholeBlock)
    return block;
  return whole;
}
function blockAround(doc, lineNo) {
  const fence = findCodeFence(doc, lineNo);
  if (fence) {
    return codeFenceContent(doc, lineNo);
  }
  const block = resolveDragRange(doc, lineNo, "paragraph");
  return { from: block.from, to: block.to };
}
function planBackspace(doc, pos, unit) {
  const line = doc.lineAt(pos);
  const indent = indentString(line.text);
  const indentEnd = line.from + indent.length;
  const marker = blockMarker(line.text.slice(indent.length));
  const contentStart = indentEnd + marker.length;
  if (pos > contentStart)
    return null;
  if (isInsideCodeFence(doc, line.number))
    return null;
  if (indent.length > 0) {
    const trailingSpaces = indent.length - indent.replace(/ +$/, "").length;
    const removed = indent.endsWith("	") ? 1 : Math.min(unit, trailingSpaces);
    if (removed <= 0)
      return null;
    return {
      changes: [{ from: indentEnd - removed, to: indentEnd }],
      anchor: Math.max(line.from, pos - removed)
    };
  }
  if (marker.length > 0) {
    return { changes: [{ from: line.from, to: contentStart }], anchor: line.from };
  }
  if (pos !== line.from)
    return null;
  if (line.number === 1)
    return null;
  let prev = line.number - 1;
  while (prev >= 1 && isBlank(doc.line(prev).text))
    prev--;
  if (prev < 1)
    return null;
  if (prev === line.number - 1)
    return null;
  const target = doc.line(prev).to;
  return { changes: [{ from: target, to: line.from }], anchor: target };
}

// src/blockKeymap.ts
var blockKeymapExtension = (plugin) => import_state4.Prec.highest(
  import_view5.keymap.of([
    {
      key: "Mod-a",
      run: (view) => {
        if (!isEnabled(plugin))
          return false;
        const { state } = view;
        if (state.selection.ranges.length !== 1)
          return false;
        const plan = planSelectAll(state.doc, state.selection.main);
        if (!plan)
          return false;
        view.dispatch({
          selection: import_state4.EditorSelection.single(plan.from, plan.to),
          userEvent: "select.block"
        });
        return true;
      }
    },
    {
      key: "Backspace",
      run: (view) => {
        if (!isEnabled(plugin))
          return false;
        const { state } = view;
        if (state.selection.ranges.length !== 1)
          return false;
        const range = state.selection.main;
        if (!range.empty)
          return false;
        const plan = planBackspace(state.doc, range.head, detectIndentUnit(state.doc));
        if (!plan)
          return false;
        view.dispatch({
          changes: plan.changes,
          selection: import_state4.EditorSelection.cursor(plan.anchor),
          scrollIntoView: true,
          userEvent: "delete.backward"
        });
        return true;
      }
    }
  ])
);
function isEnabled(plugin) {
  return plugin.settings.enabled && plugin.settings.blockKeys;
}

// src/slashMenu.ts
var import_view6 = require("@codemirror/view");
var slashMenuExtension = (plugin) => import_view6.ViewPlugin.fromClass(
  class {
    constructor(view) {
      this.menu = null;
      this.triggerPos = null;
      this.activeTrigger = null;
      this.pendingOpen = null;
      var _a;
      this.ownerWindow = (_a = view.dom.ownerDocument.defaultView) != null ? _a : activeWindow;
    }
    update(update) {
      if (this.menu) {
        this.syncOrClose(update);
        return;
      }
      if (!update.docChanged)
        return;
      if (!plugin.settings.enabled || !plugin.settings.slashMenu)
        return;
      const triggers = triggerCharacters(plugin.settings.slashTrigger);
      if (triggers.length === 0)
        return;
      if (!update.transactions.some((tr) => tr.isUserEvent("input.type")))
        return;
      const { state } = update;
      if (state.selection.ranges.length !== 1 || !state.selection.main.empty)
        return;
      const head = state.selection.main.head;
      const line = state.doc.lineAt(head);
      const col = head - line.from;
      const trigger = triggers.find(
        (candidate) => col >= candidate.length && line.text.slice(col - candidate.length, col) === candidate
      );
      if (!trigger)
        return;
      const before = line.text.slice(0, col - trigger.length);
      if (!isSlashTriggerPosition(before, plugin.settings.slashInline))
        return;
      if (isInsideCodeFence(state.doc, line.number))
        return;
      this.scheduleOpen(update.view, head - trigger.length, trigger);
    }
    /**
     * Opens on the next tick rather than inside the update.
     *
     * Positioning the menu needs coordsAtPos, and CodeMirror forbids
     * reading layout while an update is in flight — it throws rather
     * than returning a stale measurement.
     */
    scheduleOpen(view, triggerPos, trigger) {
      this.triggerPos = triggerPos;
      this.activeTrigger = trigger;
      this.pendingOpen = this.ownerWindow.setTimeout(() => {
        this.pendingOpen = null;
        if (this.triggerPos !== triggerPos || this.menu)
          return;
        const coords = view.coordsAtPos(triggerPos);
        if (!coords) {
          this.triggerPos = null;
          return;
        }
        closeNotionBlockActionMenus();
        const line = view.state.doc.lineAt(triggerPos);
        this.menu = showNotionBlockInsertMenu(
          plugin,
          view,
          line.number,
          { x: coords.left, y: coords.bottom + 6 },
          {
            avoid: { top: coords.top, bottom: coords.bottom },
            replaceFrom: triggerPos,
            keepEditorFocus: true,
            onClose: () => {
              this.menu = null;
              this.triggerPos = null;
              this.activeTrigger = null;
            }
          }
        );
      }, 0);
    }
    syncOrClose(update) {
      if (!update.docChanged && !update.selectionSet)
        return;
      const menu = this.menu;
      const triggerPos = this.triggerPos;
      const trigger = this.activeTrigger;
      if (!menu || triggerPos === null || !trigger)
        return;
      const { state } = update;
      if (triggerPos >= state.doc.length + 1) {
        menu.close();
        return;
      }
      const line = state.doc.lineAt(triggerPos);
      const head = state.selection.main.head;
      if (head < line.from || head > line.to) {
        menu.close();
        return;
      }
      const query = readSlashQuery(
        line.text,
        triggerPos - line.from,
        head - line.from,
        trigger
      );
      if (query === null) {
        menu.close();
        return;
      }
      if (!menu.setQuery(query))
        menu.close();
    }
    destroy() {
      var _a;
      if (this.pendingOpen !== null)
        this.ownerWindow.clearTimeout(this.pendingOpen);
      (_a = this.menu) == null ? void 0 : _a.close();
      this.activeTrigger = null;
    }
  }
);

// src/selectionToolbar.ts
var import_state5 = require("@codemirror/state");
var import_view7 = require("@codemirror/view");
var import_obsidian9 = require("obsidian");

// src/marginaliaBridge.ts
function marginaliaProvider(plugin) {
  var _a, _b;
  const provider = (_b = (_a = plugin.app.plugins) == null ? void 0 : _a.plugins) == null ? void 0 : _b["keyline-marginalia"];
  return (provider == null ? void 0 : provider.apiVersion) === 1 && provider.active && typeof provider.availability === "function" && typeof provider.insertFromView === "function" ? provider : null;
}

// src/selectionToolbar.ts
var dismissSelectionToolbar = import_state5.StateEffect.define();
var TOOLBAR_ACTIONS = [
  { label: localize("\u7C97\u4F53"), icon: "bold", commandId: "editor:toggle-bold" },
  { label: localize("\u659C\u4F53"), icon: "italic", commandId: "editor:toggle-italics" },
  { label: localize("\u5220\u9664\u7EBF"), icon: "strikethrough", commandId: "editor:toggle-strikethrough" },
  { label: localize("\u884C\u5185\u4EE3\u7801"), icon: "code", commandId: "editor:toggle-code" },
  { label: localize("\u94FE\u63A5"), icon: "link", commandId: "editor:insert-link" },
  { label: localize("\u9AD8\u4EAE"), icon: "highlighter", commandId: "editor:toggle-highlight" }
];
var documentReplacementCount = /* @__PURE__ */ new WeakMap();
var TOOLBAR_THEME_TOKENS = [
  ["--nmg-toolbar-bg", ["--ncl-surface-bg", "--background-primary"], "Canvas"],
  ["--nmg-toolbar-border", ["--ncl-surface-border", "--background-modifier-border"], "ButtonBorder"],
  ["--nmg-toolbar-shadow", ["--ncl-toolbar-shadow", "--shadow-s"], "none"],
  ["--nmg-toolbar-text", ["--text-normal"], "CanvasText"],
  ["--nmg-toolbar-muted", ["--text-muted"], "CanvasText"],
  ["--nmg-toolbar-faint", ["--text-faint", "--text-muted"], "GrayText"],
  ["--nmg-toolbar-hover", ["--background-modifier-hover"], "transparent"],
  ["--nmg-toolbar-active", ["--background-modifier-active-hover"], "transparent"],
  ["--nmg-toolbar-accent", ["--interactive-accent"], "Highlight"]
];
function snapshotToolbarTheme(source, toolbar) {
  const ownerWindow = source.ownerDocument.defaultView;
  if (!ownerWindow)
    return;
  const computed = ownerWindow.getComputedStyle(source);
  for (const [targetName, sourceNames, fallback] of TOOLBAR_THEME_TOKENS) {
    let value = "";
    for (const sourceName of sourceNames) {
      const candidate = computed.getPropertyValue(sourceName).trim();
      if (candidate && !candidate.includes("var(")) {
        value = candidate;
        break;
      }
    }
    toolbar.style.setProperty(targetName, value || fallback);
  }
}
function addReplacementClass(doc) {
  var _a;
  const next = ((_a = documentReplacementCount.get(doc)) != null ? _a : 0) + 1;
  documentReplacementCount.set(doc, next);
  doc.body.classList.add("nmg-selection-toolbar-enabled");
}
function removeReplacementClass(doc) {
  var _a;
  const next = Math.max(0, ((_a = documentReplacementCount.get(doc)) != null ? _a : 1) - 1);
  if (next === 0) {
    documentReplacementCount.delete(doc);
    doc.body.classList.remove("nmg-selection-toolbar-enabled");
  } else {
    documentReplacementCount.set(doc, next);
  }
}
function styleLabel(lineText) {
  if (/^#####\s/u.test(lineText))
    return localize("\u6807\u9898 5");
  if (/^####\s/u.test(lineText))
    return localize("\u6807\u9898 4");
  if (/^###\s/u.test(lineText))
    return localize("\u6807\u9898 3");
  if (/^##\s/u.test(lineText))
    return localize("\u6807\u9898 2");
  if (/^#\s/u.test(lineText))
    return localize("\u6807\u9898 1");
  if (/^[-*+]\s+\[[ xX]\]\s+/u.test(lineText))
    return localize("\u5F85\u529E");
  if (/^[-*+]\s+/u.test(lineText))
    return localize("\u9879\u76EE\u7B26\u53F7\u5217\u8868");
  if (/^\d+\.\s+/u.test(lineText))
    return localize("\u7F16\u53F7\u5217\u8868");
  if (/^>\s+\[!/u.test(lineText))
    return "Callout";
  if (/^>\s+/u.test(lineText))
    return localize("\u5F15\u7528");
  if (/^```/u.test(lineText))
    return localize("\u4EE3\u7801\u5757");
  if (/^\$\$/u.test(lineText))
    return localize("\u516C\u5F0F\u5757");
  return localize("\u6B63\u6587");
}
function toolbarIsEnabled(plugin) {
  return plugin.settings.enabled && plugin.settings.selectionToolbar;
}
function selectedToolbarRange(state, enabled) {
  if (!enabled || state.selection.ranges.length !== 1)
    return null;
  const selection = state.selection.main;
  return selection.empty ? null : { from: selection.from, to: selection.to };
}
function makeTooltip(plugin, state) {
  const range = selectedToolbarRange(state, toolbarIsEnabled(plugin));
  if (!range)
    return null;
  return {
    pos: range.from,
    end: range.to,
    above: true,
    strictSide: false,
    arrow: false,
    create: (view) => new SelectionToolbarTooltip(plugin, view)
  };
}
var SelectionToolbarTooltip = class {
  constructor(plugin, view) {
    this.offset = { x: 0, y: 6 };
    this.noteButtons = [];
    this.onMarginaliaChanged = () => this.refreshLabel();
    var _a, _b;
    this.plugin = plugin;
    this.view = view;
    const ownerDocument = view.dom.ownerDocument;
    this.dom = ownerDocument.createElement("div");
    this.dom.className = "nmg-selection-toolbar";
    const themeSource = (_a = view.dom.closest(".theme-dark, .theme-light")) != null ? _a : ownerDocument.body;
    snapshotToolbarTheme(themeSource, this.dom);
    this.dom.setAttribute("role", "toolbar");
    this.dom.setAttribute("aria-label", localize("\u6587\u672C\u683C\u5F0F"));
    this.dom.addEventListener("pointerdown", (event) => {
      if (event.button === 0)
        event.preventDefault();
      event.stopPropagation();
    });
    this.dom.addEventListener("keydown", (event) => {
      const buttons = Array.from(this.dom.querySelectorAll("button:not(:disabled)"));
      const at = buttons.indexOf(ownerDocument.activeElement);
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        view.focus();
        view.dispatch({ effects: dismissSelectionToolbar.of(null) });
        return;
      }
      if (at < 0 || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
        return;
      event.preventDefault();
      event.stopPropagation();
      const next = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : (at + (event.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].focus();
      buttons[next].scrollIntoView({ block: "nearest", inline: "nearest" });
    });
    this.styleButton = this.createTextButton(localize("\u6B63\u6587"), localize("\u6BB5\u843D\u4E0E\u5757\u7C7B\u578B"), (button) => {
      this.openActionMenu(button);
    });
    this.styleButton.classList.add("nmg-selection-toolbar-style");
    this.appendSeparator();
    for (const action of TOOLBAR_ACTIONS) {
      this.createIconButton(action.icon, action.label, () => {
        this.executeCoreCommand(action.commandId, action.label);
      });
    }
    this.appendSeparator();
    for (const [kind, icon, label] of [
      ["sidenote", "text-quote", localize("\u63D2\u5165\u65C1\u6CE8\uFF08\u7F16\u53F7\uFF09")],
      ["marginnote", "panel-right", localize("\u63D2\u5165\u8FB9\u6CE8\uFF08\u65E0\u7F16\u53F7\uFF09")]
    ]) {
      const button = this.createIconButton(icon, label, () => this.insertMargin(kind));
      button.dataset.marginKind = kind;
      this.noteButtons.push(button);
    }
    this.appendSeparator();
    this.createIconButton("palette", localize("\u6587\u5B57\u4E0E\u80CC\u666F\u989C\u8272"), (button) => {
      this.openActionMenu(button, "color");
    });
    this.createIconButton("ellipsis", localize("\u66F4\u591A\u5757\u64CD\u4F5C"), (button) => {
      this.openActionMenu(button);
    });
    this.refreshLabel();
    (_b = ownerDocument.defaultView) == null ? void 0 : _b.addEventListener("keyline-marginalia-settings", this.onMarginaliaChanged);
  }
  destroy() {
    var _a;
    (_a = this.dom.ownerDocument.defaultView) == null ? void 0 : _a.removeEventListener("keyline-marginalia-settings", this.onMarginaliaChanged);
  }
  update(update) {
    if (update.docChanged || update.selectionSet)
      this.refreshLabel();
  }
  refreshLabel() {
    var _a;
    const selection = this.view.state.selection.main;
    const label = styleLabel(this.view.state.doc.lineAt(selection.from).text);
    (_a = this.styleButton.querySelector(".nmg-selection-toolbar-label")) == null ? void 0 : _a.setText(label);
    const provider = marginaliaProvider(this.plugin);
    const reason = provider ? provider.availability(this.view) : localize("\u8BF7\u542F\u7528\u72EC\u7ACB\u63D2\u4EF6 Keyline Marginalia\u3002");
    for (const button of this.noteButtons) {
      button.disabled = !!reason;
      button.title = reason || button.getAttribute("aria-label") || "";
    }
  }
  insertMargin(kind) {
    var _a;
    (_a = marginaliaProvider(this.plugin)) == null ? void 0 : _a.insertFromView(this.view, kind);
  }
  createTextButton(text, label, action) {
    const button = this.view.dom.ownerDocument.createElement("button");
    button.type = "button";
    button.className = "nmg-selection-toolbar-button nmg-selection-toolbar-text-button";
    button.title = label;
    button.setAttribute("aria-label", label);
    const textEl = this.view.dom.ownerDocument.createElement("span");
    textEl.className = "nmg-selection-toolbar-label";
    textEl.textContent = text;
    button.appendChild(textEl);
    const chevron = this.view.dom.ownerDocument.createElement("span");
    chevron.className = "nmg-selection-toolbar-chevron";
    (0, import_obsidian9.setIcon)(chevron, "chevron-down");
    button.appendChild(chevron);
    this.bindButton(button, () => action(button));
    this.dom.appendChild(button);
    return button;
  }
  createIconButton(icon, label, action) {
    const button = this.view.dom.ownerDocument.createElement("button");
    button.type = "button";
    button.className = "nmg-selection-toolbar-button nmg-selection-toolbar-icon-button";
    button.title = label;
    button.setAttribute("aria-label", label);
    (0, import_obsidian9.setIcon)(button, icon);
    this.bindButton(button, () => action(button));
    this.dom.appendChild(button);
    return button;
  }
  bindButton(button, action) {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      action();
    });
  }
  appendSeparator() {
    const separator = this.view.dom.ownerDocument.createElement("span");
    separator.className = "nmg-selection-toolbar-separator";
    separator.setAttribute("aria-hidden", "true");
    this.dom.appendChild(separator);
  }
  executeCoreCommand(commandId, label) {
    this.view.focus();
    const commands = this.plugin.app.commands;
    if (!(commands == null ? void 0 : commands.executeCommandById(commandId))) {
      new import_obsidian9.Notice(localize`Obsidian 未提供“${label}”命令。`);
    }
  }
  openActionMenu(button, initialPage) {
    const selection = this.view.state.selection.main;
    if (selection.empty)
      return;
    const rect = button.getBoundingClientRect();
    showNotionBlockActionMenu(
      this.plugin,
      this.view,
      this.view.state.doc.lineAt(selection.from).number,
      { x: rect.left, y: rect.bottom + 4 },
      {
        avoid: { top: rect.top, bottom: rect.bottom },
        selection: { from: selection.from, to: selection.to },
        initialPage
      }
    );
  }
};
function selectionToolbarExtension(plugin) {
  const tooltipField = import_state5.StateField.define({
    create: (state) => makeTooltip(plugin, state),
    update: (current, transaction) => {
      var _a;
      if (transaction.effects.some((effect) => effect.is(dismissSelectionToolbar)))
        return null;
      const event = (_a = transaction.annotation(import_state5.Transaction.userEvent)) != null ? _a : "";
      if (/^(?:input\.margin\.(?:sidenote|marginnote)|keyline-marginalia\.insert-(?:sidenote|marginnote))$/.test(event))
        return null;
      const range = selectedToolbarRange(transaction.state, toolbarIsEnabled(plugin));
      if (!range)
        return null;
      if (!current && !transaction.selection && !transaction.docChanged)
        return null;
      if ((current == null ? void 0 : current.pos) === range.from && current.end === range.to)
        return current;
      return makeTooltip(plugin, transaction.state);
    },
    provide: (field) => import_view7.showTooltip.from(field, (value) => value)
  });
  const replacementClass = import_view7.ViewPlugin.fromClass(class {
    constructor(view) {
      this.replacementRegistered = false;
      this.ownerDocument = view.dom.ownerDocument;
      this.sync();
    }
    update() {
      this.sync();
    }
    destroy() {
      if (this.replacementRegistered)
        removeReplacementClass(this.ownerDocument);
    }
    sync() {
      const enabled = toolbarIsEnabled(plugin);
      if (enabled === this.replacementRegistered)
        return;
      this.replacementRegistered = enabled;
      if (enabled)
        addReplacementClass(this.ownerDocument);
      else
        removeReplacementClass(this.ownerDocument);
    }
  });
  return [tooltipField, replacementClass];
}

// src/surfaceCoordinator.ts
var SURFACE_KINDS = ["insert-menu", "action-menu", "native-menu", "drag"];
var FloatingSurfaceCoordinator = class {
  constructor() {
    this.activeByDocument = /* @__PURE__ */ new Map();
  }
  claim(doc, kind, close, options = {}) {
    this.close(doc, "replaced");
    const token = Symbol(kind);
    const active = { token, kind, close };
    this.activeByDocument.set(doc, active);
    active.cleanup = this.bindViewportLifecycle(doc, token, options);
    this.syncBodyState(doc);
    const coordinator = this;
    return {
      kind,
      get active() {
        return coordinator.isActive(doc, token);
      },
      release: () => this.release(doc, token),
      close: (reason = "programmatic") => this.closeToken(doc, token, reason)
    };
  }
  activeKind(doc) {
    var _a, _b;
    return (_b = (_a = this.activeByDocument.get(doc)) == null ? void 0 : _a.kind) != null ? _b : null;
  }
  close(doc, reason = "programmatic") {
    var _a;
    const current = this.activeByDocument.get(doc);
    if (!current)
      return;
    this.activeByDocument.delete(doc);
    (_a = current.cleanup) == null ? void 0 : _a.call(current);
    this.syncBodyState(doc);
    current.close(reason);
  }
  closeAll(reason = "unload") {
    for (const doc of Array.from(this.activeByDocument.keys())) {
      this.close(doc, reason);
    }
  }
  isActive(doc, token) {
    var _a;
    return ((_a = this.activeByDocument.get(doc)) == null ? void 0 : _a.token) === token;
  }
  release(doc, token) {
    var _a;
    const current = this.activeByDocument.get(doc);
    if ((current == null ? void 0 : current.token) !== token)
      return;
    this.activeByDocument.delete(doc);
    (_a = current.cleanup) == null ? void 0 : _a.call(current);
    this.syncBodyState(doc);
  }
  closeToken(doc, token, reason) {
    if (!this.isActive(doc, token))
      return;
    this.close(doc, reason);
  }
  bindViewportLifecycle(doc, token, options) {
    var _a;
    if (!options.dismissOnViewportChange)
      return void 0;
    const onScroll = (event) => {
      var _a2;
      if ((_a2 = options.containsEventTarget) == null ? void 0 : _a2.call(options, event.target))
        return;
      this.closeToken(doc, token, "viewport");
    };
    const onResize = () => this.closeToken(doc, token, "viewport");
    doc.addEventListener("scroll", onScroll, true);
    (_a = doc.defaultView) == null ? void 0 : _a.addEventListener("resize", onResize);
    return () => {
      var _a2;
      doc.removeEventListener("scroll", onScroll, true);
      (_a2 = doc.defaultView) == null ? void 0 : _a2.removeEventListener("resize", onResize);
    };
  }
  syncBodyState(doc) {
    const active = this.activeByDocument.get(doc);
    doc.body.classList.toggle("ncl-exclusive-surface-open", Boolean(active));
    for (const kind of SURFACE_KINDS) {
      doc.body.classList.toggle(`ncl-surface-${kind}`, (active == null ? void 0 : active.kind) === kind);
    }
  }
};

// src/nativeFileExplorer.ts
var import_obsidian11 = require("obsidian");

// src/fileIconManager.ts
var import_obsidian10 = require("obsidian");

// src/fileIconAssets.ts
var KEYLINE_IDENTITY_ASSETS = {
  "keyline-folder": { path: "M3 3L9.5 3C9.7652 3 10.0196 3.1054 10.2071 3.2929L12.4142 5.5L21 5.5C21.5523 5.5 22 5.9477 22 6.5L22 20C22 20.5523 21.5523 21 21 21L3 21C2.4477 21 2 20.5523 2 20L2 4C2 3.4477 2.4477 3 3 3Z", paint: "fill" },
  "keyline-folder-open": { path: "M5.5528 15.8944L8 11L22 11L19.0753 20L2 20L2 4L8 4L10 6L19 6L19 12", paint: "stroke" },
  "keyline-file-text": { path: "M14 1C14.2652 1 14.5196 1.1054 14.7071 1.2929L20.7071 7.2929C20.8946 7.4804 21 7.7348 21 8L21 22C21 22.5523 20.5523 23 20 23L4 23C3.4477 23 3 22.5523 3 22L3 2C3 1.4477 3.4477 1 4 1L14 1ZM7 18L17 18L17 16L7 16L7 18ZM7 14L13 14L13 12L7 12L7 14ZM15 8L20 8L14 2L14 7C14 7.5523 14.4477 8 15 8Z", paint: "fill" },
  "keyline-file-image": { path: "M14 1C14.2652 1 14.5196 1.1054 14.7071 1.2929L20.7071 7.2929C20.8946 7.4804 21 7.7348 21 8L21 22C21 22.5523 20.5523 23 20 23L4 23C3.4477 23 3 22.5523 3 22L3 2C3 1.4477 3.4477 1 4 1L14 1ZM15 8L20 8L14 2L14 7C14 7.5523 14.4477 8 15 8ZM5 17L9.4903 12.5097C9.7947 12.2053 10.2596 12.1299 10.6446 12.3224L19 16.5L19 20C19 20.5523 18.5523 21 18 21L6 21C5.4477 21 5 20.5523 5 20L5 17ZM10.5 7C10.5 6.1716 9.8284 5.5 9 5.5C8.1716 5.5 7.5 6.1716 7.5 7C7.5 7.8284 8.1716 8.5 9 8.5C9.8284 8.5 10.5 7.8284 10.5 7Z", paint: "fill" }
};
var getKeylineIdentityAsset = (id) => Object.prototype.hasOwnProperty.call(KEYLINE_IDENTITY_ASSETS, id) ? KEYLINE_IDENTITY_ASSETS[id] : void 0;

// src/fileIconManager.ts
function createIdentityGlyph(doc, icon) {
  var _a, _b;
  const asset = getKeylineIdentityAsset(icon);
  const source = asset ? null : (_a = (0, import_obsidian10.getIcon)(`lucide-${icon}`)) != null ? _a : (0, import_obsidian10.getIcon)("lucide-file");
  const svg = source ? doc.importNode(source, true) : doc.createElementNS("http://www.w3.org/2000/svg", "svg");
  if (asset) {
    svg.setAttribute("viewBox", "0 0 24 24");
    const path = doc.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", asset.path);
    svg.append(path);
  }
  svg.classList.add("ncl-file-identity-glyph");
  svg.dataset.nclIcon = icon;
  svg.dataset.nclIconPaint = (_b = asset == null ? void 0 : asset.paint) != null ? _b : "stroke";
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  return svg;
}
function paintIdentity(slot, appearance) {
  const existing = slot.querySelector(":scope > .ncl-file-identity-glyph");
  if (!existing || existing.dataset.nclIcon !== appearance.icon) {
    existing == null ? void 0 : existing.remove();
    slot.append(createIdentityGlyph(slot.ownerDocument, appearance.icon));
  }
  const color = iconColorCss(appearance.color);
  if (slot.style.getPropertyValue("--ncl-identity-color") !== color)
    slot.style.setProperty("--ncl-identity-color", color);
  if (!slot.classList.contains("ncl-icon-managed"))
    slot.classList.add("ncl-icon-managed");
}
function clearIdentity(slot) {
  var _a;
  (_a = slot.querySelector(":scope > .ncl-file-identity-glyph")) == null ? void 0 : _a.remove();
  slot.classList.remove("ncl-icon-managed");
  slot.style.removeProperty("--ncl-identity-color");
}
var hasExternalIcon = (element) => element.matches(".iconic-icon, .iconic-sidekick") || !!element.querySelector(".iconic-icon, .iconic-sidekick");
function paintFileSelectionColor(row, appearance) {
  const color = iconColorCss(appearance.color);
  if (row.style.getPropertyValue("--ncl-file-selection-color") !== color) {
    row.style.setProperty("--ncl-file-selection-color", color);
  }
}
function clearFileSelectionColor(row) {
  if (row.style.getPropertyValue("--ncl-file-selection-color"))
    row.style.removeProperty("--ncl-file-selection-color");
}
function tabFilePath(leaf) {
  var _a, _b;
  const file = leaf.view.file;
  if ((file == null ? void 0 : file.path) && !leaf.isDeferred)
    return file.path;
  const state = (_a = leaf.getViewState) == null ? void 0 : _a.call(leaf);
  if (!state || ["empty", "search", "graph", "backlink", "outline", "bucket-sidebar-view"].includes(state.type))
    return null;
  return typeof ((_b = state.state) == null ? void 0 : _b.file) === "string" && state.state.file ? state.state.file : null;
}
var FileIconManager = class {
  constructor(app, settings) {
    this.app = app;
    this.settings = settings;
    this.active = false;
    this.frame = null;
    this.slots = /* @__PURE__ */ new Set();
    this.fileRows = /* @__PURE__ */ new Set();
    this.observers = /* @__PURE__ */ new Map();
    this.discovery = /* @__PURE__ */ new Map();
  }
  ownsIcons() {
    var _a;
    const plugins = this.app.plugins;
    return this.settings().enabled && !((_a = plugins == null ? void 0 : plugins.enabledPlugins) == null ? void 0 : _a.has("iconic"));
  }
  resolve(path, folder = false, extension = "", expanded = false) {
    return resolveFileIcon(this.settings(), path, folder, extension, expanded);
  }
  start() {
    this.active = true;
    this.observeDiscovery(document);
    this.refresh();
  }
  stop() {
    this.active = false;
    if (this.frame !== null)
      window.cancelAnimationFrame(this.frame);
    this.frame = null;
    for (const observer of this.observers.values())
      observer.disconnect();
    this.observers.clear();
    for (const observer of this.discovery.values())
      observer.disconnect();
    this.discovery.clear();
    for (const slot of this.slots)
      clearIdentity(slot);
    this.slots.clear();
    for (const row of this.fileRows)
      clearFileSelectionColor(row);
    this.fileRows.clear();
  }
  schedule() {
    if (!this.active || this.frame !== null)
      return;
    this.frame = window.requestAnimationFrame(() => {
      this.frame = null;
      this.refresh();
    });
  }
  /** A sidebar may finish restoring after onLayoutReady, before there is a
   * contentEl to observe. Discover new view roots without requiring a tab
   * click. Ignore row/glyph churn and editor text to avoid a repaint loop. */
  observeDiscovery(doc) {
    if (this.discovery.has(doc) || !doc.body)
      return;
    const win = doc.defaultView;
    if (!win)
      return;
    const selector = ".bucket-sidebar-root, .workspace-leaf-content, .workspace-tab-header";
    const observer = new win.MutationObserver((records) => {
      if (records.some((record2) => Array.from(record2.addedNodes).concat(Array.from(record2.removedNodes)).some((node) => node instanceof win.Element && (node.matches(selector) || node.querySelector(selector)))))
        this.schedule();
    });
    observer.observe(doc.body, { childList: true, subtree: true });
    this.discovery.set(doc, observer);
  }
  observe(root) {
    var _a;
    if (this.observers.has(root))
      return;
    const Observer = (_a = root.ownerDocument.defaultView) == null ? void 0 : _a.MutationObserver;
    if (!Observer)
      return;
    const observer = new Observer(() => this.schedule());
    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-type", "class", "data-bucket-path", "data-bucket-kind", "aria-expanded"]
    });
    this.observers.set(root, observer);
  }
  refresh() {
    if (!this.active)
      return;
    const roots = /* @__PURE__ */ new Set(), painted = /* @__PURE__ */ new Set();
    const fileRows = /* @__PURE__ */ new Set();
    const documents = /* @__PURE__ */ new Set([document]);
    this.app.workspace.iterateAllLeaves((leaf) => {
      var _a, _b, _c;
      const doc = (_a = leaf.view.containerEl) == null ? void 0 : _a.ownerDocument;
      if (doc) {
        documents.add(doc);
        this.observeDiscovery(doc);
      }
      const content = leaf.view.contentEl;
      if (((_c = (_b = leaf.view).getViewType) == null ? void 0 : _c.call(_b)) === "bucket-sidebar-view" && (content == null ? void 0 : content.isConnected)) {
        roots.add(content);
        this.observe(content);
        content.querySelectorAll(".bucket-entry-row[data-bucket-path][data-bucket-kind]").forEach((row) => {
          var _a2;
          const path2 = row.dataset.bucketPath;
          const kind = row.dataset.bucketKind;
          const slot2 = row.querySelector(":scope > .bucket-entry-icon");
          if (!path2 || !slot2 || !["file", "folder"].includes(kind != null ? kind : "") || !this.ownsIcons() || hasExternalIcon(row))
            return;
          const expanded = ((_a2 = row.querySelector(":scope > .bucket-disclosure")) == null ? void 0 : _a2.getAttribute("aria-expanded")) === "true";
          const appearance = this.resolve(path2, kind === "folder", "", expanded);
          paintIdentity(slot2, appearance);
          if (kind === "file") {
            paintFileSelectionColor(row, appearance);
            fileRows.add(row);
          }
          painted.add(slot2);
        });
      }
      const header = leaf.tabHeaderEl;
      if (!(header == null ? void 0 : header.isConnected) || !header.closest(".mod-root"))
        return;
      roots.add(header);
      this.observe(header);
      const slot = header.querySelector(".workspace-tab-header-inner-icon");
      const path = tabFilePath(leaf);
      if (!slot || !path || !this.ownsIcons() || hasExternalIcon(header))
        return;
      paintIdentity(slot, this.resolve(path));
      painted.add(slot);
    });
    for (const slot of this.slots)
      if (!painted.has(slot))
        clearIdentity(slot);
    this.slots = painted;
    for (const row of this.fileRows)
      if (!fileRows.has(row))
        clearFileSelectionColor(row);
    this.fileRows = fileRows;
    for (const [root, observer] of this.observers)
      if (!roots.has(root)) {
        observer.disconnect();
        this.observers.delete(root);
      }
    for (const [doc, observer] of this.discovery)
      if (!documents.has(doc)) {
        observer.disconnect();
        this.discovery.delete(doc);
      }
  }
};

// src/nativeFileExplorer.ts
var FILE_KIND_ROW_CLASSES = {
  markdown: "ncl-native-file-row-kind-markdown",
  pdf: "ncl-native-file-row-kind-pdf",
  epub: "ncl-native-file-row-kind-epub",
  image: "ncl-native-file-row-kind-image",
  audio: "ncl-native-file-row-kind-audio",
  video: "ncl-native-file-row-kind-video",
  canvas: "ncl-native-file-row-kind-canvas",
  code: "ncl-native-file-row-kind-code",
  archive: "ncl-native-file-row-kind-archive",
  generic: "ncl-native-file-row-kind-generic"
};
var NativeFileExplorerEnhancer = class {
  constructor(app, icons = { ownsIcons: () => true, resolve: (path, folder, extension, expanded) => resolveFileIcon(normalizeFileIconSettings(), path, folder, extension, expanded) }) {
    this.app = app;
    this.icons = icons;
    this.active = false;
    this.observers = /* @__PURE__ */ new Map();
    this.rows = /* @__PURE__ */ new Map();
    this.foldersCreating = /* @__PURE__ */ new Set();
    this.refreshFrame = null;
  }
  start() {
    if (this.active)
      return;
    this.active = true;
    this.refresh();
  }
  stop() {
    this.active = false;
    if (this.refreshFrame !== null) {
      window.cancelAnimationFrame(this.refreshFrame);
      this.refreshFrame = null;
    }
    for (const observer of this.observers.values())
      observer.disconnect();
    this.observers.clear();
    for (const managed of this.rows.values())
      managed.cleanup();
    this.rows.clear();
  }
  refresh() {
    if (!this.active)
      return;
    const roots = /* @__PURE__ */ new Set();
    this.app.workspace.iterateAllLeaves((leaf) => {
      var _a, _b;
      if (((_b = (_a = leaf.view).getViewType) == null ? void 0 : _b.call(_a)) !== "file-explorer")
        return;
      const root = leaf.view.containerEl;
      if (root == null ? void 0 : root.isConnected)
        roots.add(root);
    });
    for (const [root, observer] of Array.from(this.observers.entries())) {
      if (roots.has(root))
        continue;
      observer.disconnect();
      this.observers.delete(root);
    }
    for (const [row, managed] of Array.from(this.rows.entries())) {
      if (roots.has(managed.root) && managed.root.contains(row))
        continue;
      managed.cleanup();
      this.rows.delete(row);
    }
    for (const root of roots) {
      this.observeRoot(root);
    }
  }
  observeRoot(root) {
    var _a;
    if (this.observers.has(root)) {
      this.decorateRows(root);
      return;
    }
    const Observer = (_a = root.ownerDocument.defaultView) == null ? void 0 : _a.MutationObserver;
    if (!Observer)
      return;
    const observer = new Observer(() => this.scheduleRefresh());
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-path"],
      childList: true,
      subtree: true
    });
    this.observers.set(root, observer);
    this.decorateRows(root);
  }
  scheduleRefresh() {
    if (!this.active || this.refreshFrame !== null)
      return;
    this.refreshFrame = window.requestAnimationFrame(() => {
      this.refreshFrame = null;
      if (this.active)
        this.refresh();
    });
  }
  decorateRows(root) {
    const candidates = root.querySelectorAll(".nav-folder-title, .nav-file-title");
    for (const row of Array.from(candidates)) {
      const existing = this.rows.get(row);
      if (existing) {
        existing.refresh();
        continue;
      }
      const path = row.dataset.path;
      if (!path)
        continue;
      const isFolder = row.classList.contains("nav-folder-title");
      const actions = this.createActions(row, path, isFolder);
      row.append(actions);
      row.classList.add("ncl-native-row-enhanced");
      let folderIndicator = null;
      let fileIcon = null;
      const refresh = () => {
        if (isFolder) {
          if (!this.icons.ownsIcons() || hasExternalIcon(row)) {
            folderIndicator == null ? void 0 : folderIndicator.cleanup();
            folderIndicator = null;
            return;
          }
          if (folderIndicator && row.contains(folderIndicator.indicator)) {
            folderIndicator.refresh();
            return;
          }
          folderIndicator == null ? void 0 : folderIndicator.cleanup();
          folderIndicator = this.decorateFolderIndicator(row);
          return;
        }
        if (fileIcon) {
          fileIcon.refresh();
          return;
        }
        fileIcon = this.decorateFileIcon(row);
      };
      refresh();
      const cleanup = () => {
        folderIndicator == null ? void 0 : folderIndicator.cleanup();
        fileIcon == null ? void 0 : fileIcon.cleanup();
        actions.remove();
        row.classList.remove("ncl-native-row-enhanced");
      };
      this.rows.set(row, { row, root, cleanup, refresh });
    }
  }
  createActions(row, path, isFolder) {
    const doc = row.ownerDocument;
    const actions = doc.createElement("div");
    actions.className = "ncl-native-row-actions";
    actions.setAttribute("role", "group");
    actions.setAttribute("aria-label", localize`${path} 的快捷操作`);
    if (isFolder) {
      const addButton = this.createActionButton(doc, "plus", localize`在 ${path} 中新建笔记`);
      addButton.classList.add("ncl-native-row-add");
      addButton.addEventListener("click", (event) => {
        var _a;
        event.preventDefault();
        event.stopPropagation();
        void this.createNoteInFolder((_a = row.dataset.path) != null ? _a : path, row);
      });
      actions.append(addButton);
    }
    const moreButton = this.createActionButton(doc, "more-horizontal", localize`${path} 的更多操作`);
    moreButton.classList.add("ncl-native-row-more");
    moreButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.openNativeContextMenu(row, moreButton);
    });
    actions.append(moreButton);
    return actions;
  }
  createActionButton(doc, icon, label) {
    const button = doc.createElement("button");
    button.type = "button";
    button.className = "clickable-icon ncl-native-row-action";
    button.setAttribute("aria-label", label);
    button.setAttribute("data-tooltip-position", "top");
    (0, import_obsidian11.setIcon)(button, icon);
    const stopRowInteraction = (event) => event.stopPropagation();
    button.addEventListener("pointerdown", stopRowInteraction);
    button.addEventListener("mousedown", stopRowInteraction);
    return button;
  }
  createFileIconSlot(doc, kind) {
    const iconSlot = doc.createElement("span");
    iconSlot.className = `tree-item-icon ncl-native-file-icon ncl-native-file-kind-${kind}`;
    iconSlot.dataset.fileKind = kind;
    iconSlot.setAttribute("aria-hidden", "true");
    return iconSlot;
  }
  decorateFileIcon(row) {
    if (!row.querySelector(":scope > .nav-file-title-content"))
      return null;
    let iconSlot = row.querySelector(":scope > .ncl-native-file-icon");
    let activeKind = null;
    const clearRowKind = () => {
      for (const className of Object.values(FILE_KIND_ROW_CLASSES))
        row.classList.remove(className);
      activeKind = null;
    };
    const kindForRow = () => {
      var _a, _b, _c, _d, _e;
      const path = (_c = (_b = row.dataset.path) != null ? _b : (_a = row.closest("[data-path]")) == null ? void 0 : _a.dataset.path) != null ? _c : "";
      const extension = (_e = (_d = row.querySelector(".nav-file-tag")) == null ? void 0 : _d.textContent) == null ? void 0 : _e.trim();
      return fileVisualKindForPath(path, extension != null ? extension : "");
    };
    const setRowKind = (kind) => {
      if (activeKind === kind && row.classList.contains(FILE_KIND_ROW_CLASSES[kind]))
        return;
      clearRowKind();
      row.classList.add(FILE_KIND_ROW_CLASSES[kind]);
      activeKind = kind;
    };
    const removeIcon = () => {
      iconSlot == null ? void 0 : iconSlot.remove();
      iconSlot = null;
      clearFileSelectionColor(row);
    };
    const refresh = () => {
      var _a, _b, _c;
      if (!this.icons.ownsIcons() || row.querySelector(":scope > .iconic-sidekick, :scope > .tree-item-icon.iconic-icon")) {
        removeIcon();
        clearRowKind();
        return;
      }
      const kind = kindForRow();
      setRowKind(kind);
      const appearance = this.icons.resolve((_a = row.dataset.path) != null ? _a : "", false, (_c = (_b = row.querySelector(".nav-file-tag")) == null ? void 0 : _b.textContent) == null ? void 0 : _c.trim());
      if (iconSlot && row.contains(iconSlot) && iconSlot.dataset.fileKind === kind) {
        paintIdentity(iconSlot, appearance);
        paintFileSelectionColor(row, appearance);
        return;
      }
      removeIcon();
      const content = row.querySelector(":scope > .nav-file-title-content");
      if (!content)
        return;
      iconSlot = this.createFileIconSlot(row.ownerDocument, kind);
      paintIdentity(iconSlot, appearance);
      row.insertBefore(iconSlot, content);
      paintFileSelectionColor(row, appearance);
    };
    refresh();
    return {
      refresh,
      cleanup: () => {
        removeIcon();
        clearRowKind();
      }
    };
  }
  findFolderIndicator(row) {
    return row.querySelector(
      ":scope > .tree-item-icon.collapse-icon, :scope > .nav-folder-collapse-indicator"
    );
  }
  decorateFolderIndicator(row) {
    if (row.querySelector(".iconic-sidekick, .tree-item-icon.iconic-icon"))
      return null;
    const indicator = this.findFolderIndicator(row);
    if (!indicator)
      return null;
    const originalNodes = Array.from(indicator.childNodes, (node) => node.cloneNode(true));
    let mode = null;
    const restoreNativeDisclosure = () => {
      var _a;
      const owned = indicator.querySelector(".ncl-file-identity-glyph, .ncl-notion-disclosure-triangle");
      clearIdentity(indicator);
      if (!owned || hasExternalIcon(row)) {
        (_a = indicator.querySelector(".ncl-notion-disclosure-triangle")) == null ? void 0 : _a.remove();
      } else if (originalNodes.length > 0) {
        indicator.replaceChildren(...originalNodes.map((node) => node.cloneNode(true)));
      } else {
        (0, import_obsidian11.setIcon)(indicator, "right-triangle");
      }
      indicator.classList.remove("ncl-native-folder-icon-idle", "ncl-native-folder-disclosure");
      mode = null;
    };
    const showFolderIcon = () => {
      var _a;
      const expanded = !this.folderIsCollapsed(row);
      const nextMode = expanded ? "folder-open" : "folder-closed";
      if (mode !== nextMode)
        indicator.replaceChildren();
      paintIdentity(indicator, this.icons.resolve((_a = row.dataset.path) != null ? _a : "", true, "", expanded));
      if (!indicator.classList.contains("ncl-native-folder-icon-idle")) {
        indicator.classList.add("ncl-native-folder-icon-idle");
      }
      if (indicator.classList.contains("ncl-native-folder-disclosure")) {
        indicator.classList.remove("ncl-native-folder-disclosure");
      }
      mode = nextMode;
    };
    const showNotionDisclosure = () => {
      if (mode === "disclosure" && indicator.querySelector(":scope > .ncl-notion-disclosure-triangle"))
        return;
      clearIdentity(indicator);
      const svg = row.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.classList.add("ncl-notion-disclosure-triangle");
      svg.setAttribute("viewBox", "0 0 10 10");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      const path = row.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M2 1.25L8 5L2 8.75Z");
      svg.append(path);
      indicator.replaceChildren(svg);
      indicator.classList.remove("ncl-native-folder-icon-idle");
      indicator.classList.add("ncl-native-folder-disclosure");
      mode = "disclosure";
    };
    const hasKeyboardFocus = () => row.contains(row.ownerDocument.activeElement);
    const revealDisclosure = () => showNotionDisclosure();
    const restoreIdleIfAppropriate = () => {
      if (!row.matches(":hover") && !hasKeyboardFocus())
        showFolderIcon();
    };
    const refresh = () => {
      if (row.matches(":hover") || hasKeyboardFocus())
        revealDisclosure();
      else
        showFolderIcon();
    };
    const onPointerEnter = () => revealDisclosure();
    const onPointerLeave = () => restoreIdleIfAppropriate();
    const onFocusIn = () => revealDisclosure();
    const onFocusOut = () => queueMicrotask(restoreIdleIfAppropriate);
    row.addEventListener("pointerenter", onPointerEnter);
    row.addEventListener("pointerleave", onPointerLeave);
    row.addEventListener("focusin", onFocusIn);
    row.addEventListener("focusout", onFocusOut);
    refresh();
    return {
      indicator,
      refresh,
      cleanup: () => {
        row.removeEventListener("pointerenter", onPointerEnter);
        row.removeEventListener("pointerleave", onPointerLeave);
        row.removeEventListener("focusin", onFocusIn);
        row.removeEventListener("focusout", onFocusOut);
        restoreNativeDisclosure();
      }
    };
  }
  openNativeContextMenu(row, anchor) {
    var _a;
    const rect = anchor.getBoundingClientRect();
    const ownerWindow = (_a = row.ownerDocument.defaultView) != null ? _a : window;
    row.dispatchEvent(new ownerWindow.MouseEvent("contextmenu", {
      bubbles: true,
      cancelable: true,
      view: ownerWindow,
      button: 2,
      clientX: rect.right,
      clientY: rect.bottom
    }));
  }
  async createNoteInFolder(folderPath, folderRow) {
    if (this.foldersCreating.has(folderPath))
      return;
    const folder = this.app.vault.getAbstractFileByPath(folderPath);
    if (!(folder instanceof import_obsidian11.TFolder)) {
      new import_obsidian11.Notice(localize("\u8FD9\u4E2A\u6587\u4EF6\u5939\u5DF2\u4E0D\u5B58\u5728\uFF0C\u8BF7\u5237\u65B0\u6587\u4EF6\u5217\u8868\u540E\u518D\u8BD5\u3002"));
      return;
    }
    this.foldersCreating.add(folderPath);
    try {
      await this.ensureFolderExpanded(folderRow);
      const path = nextAvailableMarkdownPath(
        folder.path,
        (candidate) => this.app.vault.getAbstractFileByPath(candidate) !== null
      );
      const file = await this.app.vault.create(path, "");
      const leaf = this.app.workspace.getLeaf(false);
      await leaf.openFile(file);
      await this.revealNewFileRow(folderRow, file.path);
      this.focusInlineTitle(leaf);
    } catch (error) {
      console.error("[Keyline] Failed to create a note from the File Explorer row", error);
      new import_obsidian11.Notice(localize("\u65B0\u5EFA\u7B14\u8BB0\u5931\u8D25\uFF1B\u539F\u6587\u4EF6\u6CA1\u6709\u88AB\u6539\u52A8\u3002"));
    } finally {
      this.foldersCreating.delete(folderPath);
    }
  }
  folderIsCollapsed(folderRow) {
    const folder = folderRow.closest(".nav-folder");
    const indicator = this.findFolderIndicator(folderRow);
    return (folder == null ? void 0 : folder.classList.contains("is-collapsed")) === true || (indicator == null ? void 0 : indicator.classList.contains("is-collapsed")) === true;
  }
  async ensureFolderExpanded(folderRow) {
    var _a;
    if (!this.folderIsCollapsed(folderRow))
      return;
    const indicator = this.findFolderIndicator(folderRow);
    if (!indicator)
      return;
    indicator.click();
    await this.nextFrame(folderRow.ownerDocument);
    if (!this.folderIsCollapsed(folderRow))
      return;
    const ownerWindow = (_a = folderRow.ownerDocument.defaultView) != null ? _a : window;
    folderRow.dispatchEvent(new ownerWindow.MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: ownerWindow,
      button: 0
    }));
    await this.nextFrame(folderRow.ownerDocument);
  }
  async revealNewFileRow(folderRow, path) {
    var _a, _b, _c;
    const root = (_a = folderRow.closest('.workspace-leaf-content[data-type="file-explorer"]')) != null ? _a : folderRow.ownerDocument.body;
    let fileRow = null;
    for (let frame = 0; frame < 60 && !fileRow; frame += 1) {
      fileRow = (_b = Array.from(root.querySelectorAll(".nav-file-title")).find((candidate) => candidate.dataset.path === path)) != null ? _b : null;
      if (!fileRow)
        await this.nextFrame(folderRow.ownerDocument);
    }
    if (!fileRow)
      return;
    fileRow.scrollIntoView({ behavior: "auto", block: "nearest", inline: "nearest" });
    if (!fileRow.classList.contains("is-active")) {
      const ownerWindow = (_c = fileRow.ownerDocument.defaultView) != null ? _c : window;
      fileRow.dispatchEvent(new ownerWindow.MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: ownerWindow,
        button: 0
      }));
    }
  }
  nextFrame(doc) {
    var _a;
    const ownerWindow = (_a = doc.defaultView) != null ? _a : window;
    return new Promise((resolve) => ownerWindow.requestAnimationFrame(() => resolve()));
  }
  focusInlineTitle(leaf) {
    var _a;
    const doc = leaf.view.containerEl.ownerDocument;
    const ownerWindow = (_a = doc.defaultView) != null ? _a : window;
    ownerWindow.requestAnimationFrame(() => ownerWindow.requestAnimationFrame(() => {
      const title = leaf.view.containerEl.querySelector(".inline-title");
      if (!title)
        return;
      title.focus();
      const selection = doc.getSelection();
      if (!selection)
        return;
      const range = doc.createRange();
      range.selectNodeContents(title);
      selection.removeAllRanges();
      selection.addRange(range);
    }));
  }
};

// src/wikilinkInput.ts
var import_language2 = require("@codemirror/language");
var import_state6 = require("@codemirror/state");
var import_view8 = require("@codemirror/view");

// src/wikilinkInputModel.ts
function isWikilinkMentionBoundary(before) {
  var _a;
  if (before.length === 0)
    return true;
  const characters = Array.from(before);
  const previous = (_a = characters[characters.length - 1]) != null ? _a : "";
  return !/[\p{Script=Latin}\p{N}_./:+!#$%&'*=?^`{|}~@\\-]/u.test(previous);
}
function planWikilinkAliasInput(documentText, from, to, text) {
  if (from < 0 || to < from || to > documentText.length || text.length === 0)
    return null;
  const normalized = text.replace(/【【/gu, "[[").replace(/】】/gu, "]]");
  if (normalized !== text) {
    return {
      from,
      to,
      insert: normalized,
      anchor: from + normalized.length,
      kind: "fullwidth-batch"
    };
  }
  if (from === to && from > 0 && text === "\u3010" && documentText.slice(from - 1, from) === "\u3010") {
    return { from: from - 1, to, insert: "[[", anchor: from + 1, kind: "fullwidth-open" };
  }
  if (from === to && from > 0 && text === "\u3011" && documentText.slice(from - 1, from) === "\u3011") {
    return { from: from - 1, to, insert: "]]", anchor: from + 1, kind: "fullwidth-close" };
  }
  return null;
}

// src/wikilinkInput.ts
var PROTECTED_CONTEXT = /(?:code|url|link|frontmatter|html|math|comment)/iu;
function isProtectedMarkdownContext(view, position) {
  const line = view.state.doc.lineAt(position);
  if (isInsideCodeFence(view.state.doc, line.number))
    return true;
  let node = (0, import_language2.syntaxTree)(view.state).resolveInner(position, -1);
  while (node) {
    if (node.from < position && position < node.to && PROTECTED_CONTEXT.test(node.name))
      return true;
    node = node.parent;
  }
  return false;
}
var wikilinkInputExtension = (plugin) => import_state6.Prec.highest(import_view8.EditorView.inputHandler.of((view, from, to, text, insert) => {
  if (!plugin.settings.enabled || !plugin.settings.wikilinkInputAliases)
    return false;
  if (view.state.selection.ranges.length !== 1)
    return false;
  const defaultTransaction = insert();
  const userEvent = defaultTransaction.annotation(import_state6.Transaction.userEvent);
  if (!(userEvent == null ? void 0 : userEvent.startsWith("input.type")))
    return false;
  if (isProtectedMarkdownContext(view, from))
    return false;
  const plan = planWikilinkAliasInput(view.state.doc.toString(), from, to, text);
  if (!plan)
    return false;
  view.dispatch({
    changes: { from: plan.from, to: plan.to, insert: plan.insert },
    selection: { anchor: plan.anchor },
    scrollIntoView: true,
    userEvent
  });
  return true;
}));

// src/mentionMenu.ts
var import_language3 = require("@codemirror/language");
var import_view9 = require("@codemirror/view");
var import_obsidian12 = require("obsidian");

// src/mentionModel.ts
var MENTION_DATES = [
  { id: "today", label: localize("\u4ECA\u5929"), keywords: "today \u4ECA\u65E5 \u65E5\u671F date" },
  { id: "tomorrow", label: localize("\u660E\u5929"), keywords: "tomorrow \u660E\u65E5 \u65E5\u671F date" },
  { id: "yesterday", label: localize("\u6628\u5929"), keywords: "yesterday \u6628\u65E5 \u65E5\u671F date" },
  { id: "time", label: localize("\u5F53\u524D\u65F6\u95F4"), keywords: "now time \u73B0\u5728 \u6B64\u523B \u65F6\u95F4" }
];
function isMentionTextBoundary(before) {
  if (!isWikilinkMentionBoundary(before))
    return false;
  let code = 0, brackets = 0, destination = 0, math = false, html = false;
  for (let i = 0; i < before.length; i++) {
    const c = before[i];
    if (c === "\\") {
      i++;
      continue;
    }
    if (c === "`") {
      let count = 1;
      while (before[i + 1] === "`") {
        count++;
        i++;
      }
      if (!code)
        code = count;
      else if (code === count)
        code = 0;
      continue;
    }
    if (code)
      continue;
    if (c === "[")
      brackets++;
    if (c === "]")
      brackets = Math.max(0, brackets - 1);
    if (c === "(" && (destination || before[i - 1] === "]"))
      destination++;
    if (c === ")")
      destination = Math.max(0, destination - 1);
    if (c === "$")
      math = !math;
    if (c === "<")
      html = true;
    if (c === ">")
      html = false;
  }
  return !code && !brackets && !destination && !math && !html;
}
function readMentionSession(text, from, head) {
  if (from < 0 || head <= from || head > text.length || text[from] !== "@")
    return null;
  const query = text.slice(from + 1, head);
  if (query.length > 120 || /[\r\n@\[\]]/u.test(query))
    return null;
  return { from, to: head, query };
}
function mentionMatches(query, ...values) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/u);
  const haystack = values.join(" ").toLocaleLowerCase();
  return terms.every((term) => haystack.includes(term));
}
function findMentionPages(pages, query, limit = 12) {
  const q = query.trim().toLocaleLowerCase();
  const score = (page) => page.basename.toLocaleLowerCase() === q ? 0 : page.basename.toLocaleLowerCase().startsWith(q) ? 1 : 2;
  return pages.filter((page) => mentionMatches(query, page.path)).sort((a, b) => (q ? score(a) - score(b) : 0) || b.modified - a.modified || a.path.localeCompare(b.path)).slice(0, limit);
}
function mentionWikilink(linktext) {
  return linktext && !/[\[\]|#^\r\n]/u.test(linktext) ? `[[${linktext}]]` : null;
}

// src/mentionMenu.ts
var menuId = 0;
function sourcePath(state) {
  var _a, _b, _c;
  return (_c = import_obsidian12.editorInfoField && ((_b = (_a = state.field(import_obsidian12.editorInfoField, false)) == null ? void 0 : _a.file) == null ? void 0 : _b.path)) != null ? _c : "";
}
function protectedContext(view, from) {
  var _a, _b, _c, _d;
  if (isProtectedMarkdownContext(view, from))
    return true;
  const doc = view.state.doc, line = doc.lineAt(from);
  if (!isMentionTextBoundary(line.text.slice(0, from - line.from)))
    return true;
  let scanFrom = 0;
  if (doc.line(1).text.replace(/^\uFEFF/u, "") === "---") {
    let closed = false;
    for (let n = 2; n <= line.number; n++) {
      if (/^(---|\.\.\.)\s*$/u.test(doc.line(n).text)) {
        closed = true;
        scanFrom = doc.line(n).to;
        break;
      }
    }
    if (!closed)
      return true;
  }
  const pieces = [];
  (0, import_language3.syntaxTree)(view.state).iterate({ from: scanFrom, to: from, enter(node) {
    if (!/(?:code|html|link|frontmatter)/iu.test(node.name))
      return;
    if (node.from > scanFrom)
      pieces.push(doc.sliceString(scanFrom, Math.min(node.from, from)));
    scanFrom = Math.max(scanFrom, Math.min(node.to, from));
    return false;
  } });
  pieces.push(doc.sliceString(scanFrom, from));
  const before = pieces.join("").replace(/\\./gu, "");
  if (((_b = (_a = before.match(/%%/gu)) == null ? void 0 : _a.length) != null ? _b : 0) % 2 || ((_d = (_c = before.match(/\$\$/gu)) == null ? void 0 : _c.length) != null ? _d : 0) % 2)
    return true;
  return false;
}
function dateText(id, plugin) {
  const value = (0, import_obsidian12.moment)();
  if (id === "tomorrow")
    value.add(1, "days");
  if (id === "yesterday")
    value.add(-1, "days");
  return value.format(id === "time" ? plugin.settings.timeFormat : plugin.settings.dateFormat);
}
var mentionMenuExtension = (plugin) => import_view9.ViewPlugin.fromClass(class {
  constructor(view) {
    this.view = view;
    this.session = null;
    this.root = null;
    this.list = null;
    this.lease = null;
    this.pages = [];
    this.choices = [];
    this.active = -1;
    this.renderedQuery = "";
    this.pending = null;
    this.composing = false;
    this.id = `ncl-mention-${++menuId}`;
    this.originalAria = /* @__PURE__ */ new Map();
    this.onPointer = (event) => {
      var _a;
      if (!((_a = this.root) == null ? void 0 : _a.contains(event.target)))
        this.close();
    };
    this.onBlur = () => this.close();
    this.onCompositionStart = () => {
      this.composing = true;
      this.active = -1;
      this.syncActive();
    };
    this.onCompositionEnd = () => {
      this.composing = false;
    };
    this.onKey = (event) => {
      if (!this.root || this.composing || this.view.composing || event.isComposing || event.keyCode === 229)
        return;
      if (!this.view.hasFocus) {
        this.close();
        return;
      }
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.close();
        return;
      }
      if (event.altKey || event.metaKey || event.ctrlKey)
        return;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        if (!this.choices.length)
          return;
        event.preventDefault();
        event.stopImmediatePropagation();
        this.active = this.active < 0 ? event.key === "ArrowDown" ? 0 : this.choices.length - 1 : (this.active + (event.key === "ArrowDown" ? 1 : -1) + this.choices.length) % this.choices.length;
        this.syncActive();
      } else if (event.key === "Enter" && this.active >= 0) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.activate(this.active);
      } else if (["Enter", "Tab", "ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
        this.close();
      }
    };
    this.doc = view.dom.ownerDocument;
    this.win = this.doc.defaultView;
    view.contentDOM.addEventListener("compositionstart", this.onCompositionStart);
    view.contentDOM.addEventListener("compositionend", this.onCompositionEnd);
  }
  update(update) {
    if (!plugin.settings.enabled || !plugin.settings.wikilinkInputAliases || update.state.readOnly || !update.state.facet(import_view9.EditorView.editable) || !update.view.hasFocus) {
      this.close();
      return;
    }
    if (this.session) {
      if (sourcePath(update.startState) !== sourcePath(update.state) || update.state.selection.ranges.length !== 1 || !update.state.selection.main.empty) {
        this.close();
        return;
      }
      for (const tr2 of update.transactions) {
        if (!tr2.docChanged)
          continue;
        let safe = tr2.isUserEvent("input.type") || tr2.isUserEvent("delete.backward");
        tr2.changes.iterChanges((a, b) => {
          if (a <= this.session.from || b > this.session.to)
            safe = false;
        });
        if (!safe) {
          this.close();
          return;
        }
      }
      const next = readMentionSession(update.state.doc.toString(), this.session.from, update.state.selection.main.head);
      if (!next || update.selectionSet && !update.docChanged && next.to !== this.session.to) {
        this.close();
        return;
      }
      if (next.query !== this.session.query) {
        this.session = next;
        this.active = -1;
        this.schedule();
      }
      return;
    }
    if (!update.docChanged || update.state.selection.ranges.length !== 1 || !update.state.selection.main.empty)
      return;
    if (update.transactions.length !== 1)
      return;
    const tr = update.transactions[0];
    if (!tr.isUserEvent("input.type") || !tr.startState.selection.main.empty)
      return;
    let insertedAt = -1, count = 0;
    tr.changes.iterChanges((a, b, c, d, text) => {
      count++;
      if (a === b && text.toString() === "@" && d === update.state.selection.main.head)
        insertedAt = c;
    });
    if (count !== 1 || insertedAt < 0 || protectedContext(update.view, insertedAt))
      return;
    this.session = { from: insertedAt, to: insertedAt + 1, query: "" };
    this.pages = plugin.app.vault.getMarkdownFiles().map((file) => ({ path: file.path, basename: file.basename, modified: file.stat.mtime }));
    this.schedule();
  }
  schedule() {
    if (this.pending !== null)
      return;
    this.pending = this.win.setTimeout(() => {
      this.pending = null;
      if (!this.session || !this.view.hasFocus) {
        this.close();
        return;
      }
      if (!this.root)
        this.open();
      this.render();
    }, 0);
  }
  open() {
    this.lease = plugin.surfaceCoordinator.claim(this.doc, "insert-menu", () => this.close(), {
      dismissOnViewportChange: true,
      containsEventTarget: (target) => {
        var _a;
        return Boolean(target && ((_a = this.root) == null ? void 0 : _a.contains(target)));
      }
    });
    this.root = this.doc.createElement("div");
    this.root.className = "wk-nb-action-menu ncl-mention-menu";
    this.list = this.doc.createElement("div");
    this.list.className = "wk-nb-action-menu-list";
    this.list.id = this.id;
    this.list.setAttribute("role", "listbox");
    this.list.setAttribute("aria-label", localize("\u63D2\u5165\u65E5\u671F\u6216\u94FE\u63A5\u5230\u9875\u9762"));
    this.root.append(this.list);
    const hint = this.doc.createElement("div");
    hint.className = "ncl-mention-hint";
    hint.textContent = localize("\u2191\u2193 \u9009\u62E9 \xB7 Enter \u63D2\u5165 \xB7 Esc \u4FDD\u7559\u539F\u6587");
    this.root.append(hint);
    this.root.addEventListener("mousedown", (event) => event.preventDefault());
    this.doc.body.append(this.root);
    for (const name of ["aria-controls", "aria-expanded", "aria-autocomplete", "aria-activedescendant"])
      this.originalAria.set(name, this.view.contentDOM.getAttribute(name));
    this.view.contentDOM.setAttribute("aria-controls", this.id);
    this.view.contentDOM.setAttribute("aria-expanded", "true");
    this.view.contentDOM.setAttribute("aria-autocomplete", "list");
    this.doc.addEventListener("keydown", this.onKey, true);
    this.doc.addEventListener("pointerdown", this.onPointer, true);
    this.view.contentDOM.addEventListener("blur", this.onBlur);
    this.win.addEventListener("blur", this.onBlur);
  }
  render() {
    if (!this.root || !this.list || !this.session)
      return;
    this.list.replaceChildren();
    this.choices = [];
    const query = this.session.query;
    this.renderedQuery = query;
    const dates = MENTION_DATES.filter((item) => mentionMatches(query, item.label, item.keywords, dateText(item.id, plugin))).map((item) => ({ date: item.id, label: item.label, detail: dateText(item.id, plugin), icon: item.id === "time" ? "clock" : "calendar" }));
    const pages = findMentionPages(this.pages, query).map((page) => ({ path: page.path, label: page.basename, detail: page.path.includes("/") ? page.path.slice(0, page.path.lastIndexOf("/")) : localize("\u6839\u76EE\u5F55"), icon: "file-text" }));
    this.group(localize("\u65E5\u671F"), dates);
    this.group(localize("\u94FE\u63A5\u5230\u9875\u9762"), pages);
    if (!this.choices.length) {
      const empty = this.doc.createElement("div");
      empty.className = "ncl-mention-empty";
      empty.textContent = localize("\u6CA1\u6709\u5339\u914D\u9879\uFF0C\u7EE7\u7EED\u8F93\u5165\u4F1A\u4FDD\u7559\u539F\u6587");
      empty.setAttribute("role", "status");
      this.list.append(empty);
    }
    this.syncActive();
    const coords = this.view.coordsAtPos(this.session.to);
    if (!coords) {
      this.close();
      return;
    }
    const height = this.list.scrollHeight + 38;
    const pos = placeMenu({
      anchorX: coords.left,
      anchorY: coords.bottom + 6,
      avoidTop: coords.top,
      menuWidth: this.root.getBoundingClientRect().width,
      menuHeight: height,
      viewportWidth: this.win.innerWidth,
      viewportHeight: this.win.innerHeight,
      maxHeight: 400
    });
    Object.assign(this.root.style, { left: `${Math.max(8, pos.left)}px`, top: `${pos.top}px`, maxHeight: `${Math.min(pos.maxHeight, this.win.innerHeight - 16)}px` });
  }
  group(title, items) {
    if (!this.list || !items.length)
      return;
    const group = this.doc.createElement("div");
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", title);
    const heading = this.doc.createElement("div");
    heading.className = "wk-nb-action-menu-section";
    heading.textContent = title;
    heading.setAttribute("aria-hidden", "true");
    group.append(heading);
    for (const item of items) {
      const index = this.choices.length;
      this.choices.push(item);
      const row = this.doc.createElement("div");
      row.className = "wk-nb-action-menu-row ncl-mention-row";
      row.id = `${this.id}-${index}`;
      row.dataset.index = String(index);
      row.setAttribute("role", "option");
      const icon = this.doc.createElement("span");
      icon.className = "wk-nb-action-menu-icon";
      icon.setAttribute("aria-hidden", "true");
      (0, import_obsidian12.setIcon)(icon, item.icon);
      const label = this.doc.createElement("span");
      label.className = "ncl-mention-label";
      label.textContent = item.label;
      const detail = this.doc.createElement("span");
      detail.className = "ncl-mention-detail";
      detail.textContent = item.detail;
      row.classList.toggle("is-date", "date" in item);
      row.append(icon, label, detail);
      row.addEventListener("pointermove", () => {
        if (!this.composing && this.active !== index) {
          this.active = index;
          this.syncActive(false);
        }
      });
      row.addEventListener("click", () => this.activate(index));
      group.append(row);
    }
    this.list.append(group);
  }
  syncActive(scroll = true) {
    var _a;
    (_a = this.list) == null ? void 0 : _a.querySelectorAll('[role="option"]').forEach((row, index) => {
      row.classList.toggle("is-active", index === this.active);
      row.setAttribute("aria-selected", String(index === this.active));
      if (scroll && index === this.active)
        row.scrollIntoView({ block: "nearest" });
    });
    if (this.active >= 0)
      this.view.contentDOM.setAttribute("aria-activedescendant", `${this.id}-${this.active}`);
    else
      this.view.contentDOM.removeAttribute("aria-activedescendant");
  }
  activate(index) {
    if (this.composing || this.view.composing || !plugin.settings.enabled || !plugin.settings.wikilinkInputAliases || this.view.state.readOnly || !this.view.state.facet(import_view9.EditorView.editable))
      return;
    const session = this.session, choice = this.choices[index], state = this.view.state;
    if (!session || !choice || !this.view.hasFocus || state.selection.ranges.length !== 1 || !state.selection.main.empty) {
      this.close();
      return;
    }
    if (session.query !== this.renderedQuery)
      return;
    const current = readMentionSession(state.doc.toString(), session.from, state.selection.main.head);
    if (!current || current.query !== session.query || current.to !== session.to) {
      this.close();
      return;
    }
    let insert;
    if ("date" in choice)
      insert = dateText(choice.date, plugin);
    else {
      const file = plugin.app.vault.getAbstractFileByPath(choice.path);
      if (!(file instanceof import_obsidian12.TFile) || file.extension !== "md") {
        this.close();
        new import_obsidian12.Notice(localize("\u9875\u9762\u5DF2\u79FB\u52A8\u6216\u5220\u9664\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165 @ \u641C\u7D22\u3002"));
        return;
      }
      const source = sourcePath(state);
      insert = mentionWikilink(source ? plugin.app.metadataCache.fileToLinktext(file, source, true) : file.path.replace(/\.md$/iu, ""));
      if (!insert) {
        this.close();
        new import_obsidian12.Notice(localize("\u6587\u4EF6\u540D\u542B\u5185\u90E8\u94FE\u63A5\u4FDD\u7559\u5B57\u7B26\uFF0C\u8BF7\u7528 Obsidian \u539F\u751F\u94FE\u63A5\u547D\u4EE4\u63D2\u5165\u3002\u539F\u6587\u5DF2\u4FDD\u7559\u3002"));
        return;
      }
    }
    this.close();
    dispatchBlockEdit(this.view, { changes: { from: session.from, to: session.to, insert }, selection: { anchor: session.from + insert.length }, userEvent: "input.mention", scrollIntoView: true });
  }
  close() {
    var _a, _b;
    if (this.pending !== null)
      this.win.clearTimeout(this.pending);
    this.pending = null;
    this.session = null;
    this.pages = [];
    this.choices = [];
    this.active = -1;
    (_a = this.lease) == null ? void 0 : _a.release();
    this.lease = null;
    (_b = this.root) == null ? void 0 : _b.remove();
    this.root = null;
    this.list = null;
    this.doc.removeEventListener("keydown", this.onKey, true);
    this.doc.removeEventListener("pointerdown", this.onPointer, true);
    this.view.contentDOM.removeEventListener("blur", this.onBlur);
    this.win.removeEventListener("blur", this.onBlur);
    for (const [name, value] of this.originalAria) {
      if (value === null)
        this.view.contentDOM.removeAttribute(name);
      else
        this.view.contentDOM.setAttribute(name, value);
    }
    this.originalAria.clear();
  }
  destroy() {
    this.close();
    this.view.contentDOM.removeEventListener("compositionstart", this.onCompositionStart);
    this.view.contentDOM.removeEventListener("compositionend", this.onCompositionEnd);
  }
});

// src/styledBlocks.ts
var import_view10 = require("@codemirror/view");
var import_obsidian13 = require("obsidian");

// src/styledBlockModel.ts
var sourceLines = (text) => {
  const lines = text.split("\n");
  let from = 0;
  return lines.map((line, index) => {
    const result = {
      number: index + 1,
      from,
      to: from + line.length,
      text: line
    };
    from = result.to + 1;
    return result;
  });
};
var quoteLine = (line) => {
  const match = /^(\s*)>([ \t]*)(.*)$/u.exec(line.text);
  if (!match || match[3].startsWith(">"))
    return null;
  const markerFrom = line.from + match[1].length;
  const padding = match[2];
  const hiddenPadding = !padding.includes("	") && padding.length <= 3 ? padding.length : Math.min(1, padding.length);
  const markerTo = markerFrom + 1 + hiddenPadding;
  return {
    ...line,
    markerFrom,
    markerTo,
    contentFrom: markerTo,
    content: line.text.slice(markerTo - line.from)
  };
};
var calloutHeader = (line) => {
  const match = /^\[!([A-Za-z0-9_-]+)\]([+-]?)([ \t]*)(.*)$/u.exec(line.content);
  if (!match)
    return null;
  const markerText = `[!${match[1]}]${match[2]}${match[3]}`;
  return {
    type: match[1].toLocaleLowerCase("en-US"),
    from: line.contentFrom,
    to: line.contentFrom + markerText.length,
    hasExplicitTitle: match[4].trim().length > 0
  };
};
var planStyledBlocks = (text) => {
  const parsed = sourceLines(text).map(quoteLine);
  const result = [];
  for (let index = 0; index < parsed.length; ) {
    const first = parsed[index];
    if (!first) {
      index += 1;
      continue;
    }
    const header = calloutHeader(first);
    const kind = header ? "callout" : "quote";
    let end = index + 1;
    while (end < parsed.length && parsed[end]) {
      if (!header && calloutHeader(parsed[end]))
        break;
      end += 1;
    }
    for (let cursor = index; cursor < end; cursor += 1) {
      const line = parsed[cursor];
      const isFirst = cursor === index;
      const plan = {
        kind,
        lineNumber: line.number,
        lineFrom: line.from,
        lineTo: line.to,
        markerFrom: line.markerFrom,
        markerTo: line.markerTo,
        isFirst,
        isLast: cursor === end - 1
      };
      if (header) {
        plan.calloutType = header.type;
        if (isFirst) {
          plan.headerFrom = header.from;
          plan.headerTo = header.to;
          plan.hasExplicitTitle = header.hasExplicitTitle;
        }
      }
      result.push(plan);
    }
    index = end;
  }
  return result;
};

// src/styledBlocks.ts
var CALLOUT_ICONS3 = {
  note: "pencil",
  abstract: "clipboard-list",
  summary: "clipboard-list",
  tldr: "clipboard-list",
  info: "info",
  todo: "check-circle",
  tip: "flame",
  hint: "flame",
  important: "flame",
  success: "check",
  check: "check",
  done: "check",
  question: "help-circle",
  help: "help-circle",
  faq: "help-circle",
  warning: "alert-triangle",
  caution: "alert-triangle",
  attention: "alert-triangle",
  failure: "x-circle",
  fail: "x-circle",
  missing: "x-circle",
  danger: "zap",
  error: "zap",
  bug: "bug",
  example: "list",
  quote: "quote",
  cite: "quote"
};
var titleForType = (type) => {
  const translated = t(`callout.${type}`);
  if (translated !== `callout.${type}`)
    return translated;
  return type.length > 0 ? `${type[0].toLocaleUpperCase()}${type.slice(1)}` : "Callout";
};
var CalloutHeaderWidget = class extends import_view10.WidgetType {
  constructor(type, showDefaultTitle) {
    super();
    this.type = type;
    this.showDefaultTitle = showDefaultTitle;
  }
  eq(other) {
    return this.type === other.type && this.showDefaultTitle === other.showDefaultTitle;
  }
  toDOM(view) {
    var _a;
    const doc = view.dom.ownerDocument;
    const widget = doc.createElement("span");
    widget.className = "ncl-styled-callout-header";
    widget.dataset.callout = this.type;
    const icon = doc.createElement("span");
    icon.className = "ncl-styled-callout-header-icon";
    icon.setAttribute("aria-hidden", "true");
    (0, import_obsidian13.setIcon)(icon, (_a = CALLOUT_ICONS3[this.type]) != null ? _a : "pencil");
    widget.append(icon);
    if (this.showDefaultTitle) {
      const label = doc.createElement("span");
      label.className = "ncl-styled-callout-header-label";
      label.textContent = titleForType(this.type);
      widget.append(label);
    } else {
      widget.setAttribute("aria-hidden", "true");
    }
    return widget;
  }
};
var EMPTY_PRESENTATION2 = {
  decorations: import_view10.Decoration.none,
  atomic: import_view10.Decoration.none
};
var lineIsVisible = (view, line) => view.visibleRanges.some(({ from, to }) => line.lineFrom <= to && line.lineTo >= from);
var buildPresentation2 = (view, plugin) => {
  if (!plugin.settings.enabled || !plugin.settings.hideSyntaxMarkers || plugin.syntaxRevealActive || !view.state.field(import_obsidian13.editorLivePreviewField, false)) {
    return EMPTY_PRESENTATION2;
  }
  const decorations = [];
  const atomic = [];
  for (const line of planStyledBlocks(view.state.doc.toString())) {
    if (!lineIsVisible(view, line))
      continue;
    const classes = [
      line.kind === "callout" ? "ncl-styled-callout-line" : "ncl-styled-quote-line",
      line.isFirst ? "is-first" : "",
      line.isLast ? "is-last" : ""
    ].filter(Boolean).join(" ");
    const attributes = {};
    if (line.calloutType)
      attributes["data-ncl-callout"] = line.calloutType;
    decorations.push(import_view10.Decoration.line({ class: classes, attributes }).range(line.lineFrom));
    const quoteMarker = import_view10.Decoration.replace({});
    decorations.push(quoteMarker.range(line.markerFrom, line.markerTo));
    atomic.push(quoteMarker.range(line.markerFrom, line.markerTo));
    if (line.kind === "callout" && line.isFirst && line.calloutType && line.headerFrom !== void 0 && line.headerTo !== void 0 && line.headerTo > line.headerFrom) {
      const calloutMarker = import_view10.Decoration.replace({
        widget: new CalloutHeaderWidget(line.calloutType, !line.hasExplicitTitle)
      });
      decorations.push(calloutMarker.range(line.headerFrom, line.headerTo));
      atomic.push(calloutMarker.range(line.headerFrom, line.headerTo));
    }
  }
  return {
    decorations: import_view10.Decoration.set(decorations, true),
    atomic: import_view10.Decoration.set(atomic, true)
  };
};
function styledBlocksExtension(plugin) {
  const presentationPlugin = import_view10.ViewPlugin.fromClass(
    class {
      constructor(view) {
        const presentation = buildPresentation2(view, plugin);
        this.decorations = presentation.decorations;
        this.atomic = presentation.atomic;
        this.generation = plugin.syntaxPresentationGeneration;
      }
      update(update) {
        const generationChanged = this.generation !== plugin.syntaxPresentationGeneration;
        const livePreviewChanged = update.startState.field(import_obsidian13.editorLivePreviewField, false) !== update.state.field(import_obsidian13.editorLivePreviewField, false);
        if (!generationChanged && !livePreviewChanged && !update.docChanged && !update.viewportChanged)
          return;
        const presentation = buildPresentation2(update.view, plugin);
        this.decorations = presentation.decorations;
        this.atomic = presentation.atomic;
        this.generation = plugin.syntaxPresentationGeneration;
      }
    },
    { decorations: (value) => value.decorations }
  );
  return [
    presentationPlugin,
    import_view10.EditorView.atomicRanges.of(
      (view) => {
        var _a, _b;
        return (_b = (_a = view.plugin(presentationPlugin)) == null ? void 0 : _a.atomic) != null ? _b : import_view10.Decoration.none;
      }
    )
  ];
}

// src/editorLayout.ts
var import_state7 = require("@codemirror/state");
var import_view11 = require("@codemirror/view");

// src/editorLayoutModel.ts
var sourceLines2 = (text) => {
  const lines = text.split("\n");
  let from = 0;
  return lines.map((line, index) => {
    const result = {
      number: index + 1,
      from,
      to: from + line.length,
      text: line
    };
    from = result.to + 1;
    return result;
  });
};
var ATX_HEADING = /^ {0,3}#{1,6}(?:[ \t]+|$)/u;
var SETEXT_UNDERLINE = /^ {0,3}(?:=+|-{3,})[ \t]*$/u;
var LIST_MARKER = /^ {0,3}(?:[-+*]|\d{1,9}[.)])[ \t]+/u;
var AMBIGUOUS_HYPHEN_BLOCK = /^ {0,3}-{1,2}[ \t]*$/u;
var THEMATIC_BREAK = /^ {0,3}(?:(?:\*[ \t]*){3,}|(?:-[ \t]*){3,}|(?:_[ \t]*){3,})$/u;
var FENCE3 = /^ {0,3}(`{3,}|~{3,})/u;
var LINK_DEFINITION = /^ {0,3}\[(?:\^)?[^\]]+\]:/u;
var TABLE_ROW = /^\s*\|.*\|\s*$/u;
var TABLE_SEPARATOR = /^\s*\|?\s*:?-{3,}:?(?:\s*\|\s*:?-{3,}:?)+\s*\|?\s*$/u;
var classifySourceLines = (text) => {
  var _a, _b;
  const lines = sourceLines2(text);
  const setextUnderlines = /* @__PURE__ */ new Set();
  const styledLines = new Map(
    planStyledBlocks(text).map((line) => [line.lineNumber, line])
  );
  const kinds = lines.map(
    (line) => line.text.trim().length === 0 ? "blank" : "paragraph"
  );
  if (((_a = lines[0]) == null ? void 0 : _a.text.trim()) === "---") {
    kinds[0] = "structural";
    for (let index = 1; index < lines.length; index += 1) {
      kinds[index] = "structural";
      if (/^(?:---|\.\.\.)\s*$/u.test(lines[index].text))
        break;
    }
  }
  let fenceCharacter = null;
  let fenceLength = 0;
  for (let index = 0; index < lines.length; index += 1) {
    if (kinds[index] === "structural")
      continue;
    const value = lines[index].text;
    if (fenceCharacter !== null) {
      kinds[index] = "structural";
      const close = FENCE3.exec(value);
      if (close && close[1][0] === fenceCharacter && close[1].length >= fenceLength) {
        fenceCharacter = null;
        fenceLength = 0;
      }
      continue;
    }
    const open = FENCE3.exec(value);
    if (open) {
      kinds[index] = "structural";
      fenceCharacter = open[1][0];
      fenceLength = open[1].length;
      continue;
    }
    if (kinds[index] === "blank")
      continue;
    if (ATX_HEADING.test(value)) {
      kinds[index] = "heading";
      continue;
    }
    if (/^ {0,3}>/u.test(value)) {
      const styledLine = styledLines.get(index + 1);
      kinds[index] = (_b = styledLine == null ? void 0 : styledLine.kind) != null ? _b : "structural";
      continue;
    }
    if (/^\s/u.test(value) || LIST_MARKER.test(value) || AMBIGUOUS_HYPHEN_BLOCK.test(value) || THEMATIC_BREAK.test(value) || LINK_DEFINITION.test(value) || TABLE_ROW.test(value) || TABLE_SEPARATOR.test(value) || /^ {0,3}(?:\$\$|<\/?[A-Za-z!])/u.test(value)) {
      kinds[index] = "structural";
    }
  }
  for (let index = 1; index < lines.length; index += 1) {
    if (SETEXT_UNDERLINE.test(lines[index].text) && kinds[index - 1] === "paragraph" && lines[index - 1].text.trim().length > 0) {
      kinds[index - 1] = "heading";
      kinds[index] = "heading";
      setextUnderlines.add(index);
    }
  }
  return lines.map((line, index) => {
    var _a2, _b2;
    const kind = kinds[index] === "blank" ? "paragraph" : kinds[index];
    if (kind === "quote" || kind === "callout") {
      const styledLine = styledLines.get(line.number);
      return {
        ...line,
        kind,
        isFirst: (_a2 = styledLine == null ? void 0 : styledLine.isFirst) != null ? _a2 : true,
        isLast: (_b2 = styledLine == null ? void 0 : styledLine.isLast) != null ? _b2 : true
      };
    }
    if (kind === "heading") {
      return {
        ...line,
        kind,
        isFirst: !setextUnderlines.has(index),
        isLast: !setextUnderlines.has(index + 1)
      };
    }
    return { ...line, kind, isFirst: true, isLast: true };
  });
};
var editorLinesFrom = (lines) => lines.filter(
  (line) => line.kind === "paragraph" || line.kind === "heading"
).map((line) => ({
  kind: line.kind,
  lineNumber: line.number,
  lineFrom: line.from,
  lineTo: line.to,
  isFirst: line.isFirst,
  isLast: line.isLast
}));
var beforeEdge = (kind) => {
  if (kind === "heading")
    return "heading-before";
  if (kind === "paragraph" || kind === "quote" || kind === "callout") {
    return "paragraph-before";
  }
  return void 0;
};
var afterEdge = (kind) => {
  if (kind === "heading")
    return "heading-after";
  if (kind === "paragraph" || kind === "quote" || kind === "callout") {
    return "paragraph-after";
  }
  return void 0;
};
var editorGapsFrom = (lines) => {
  if (lines.length === 0)
    return [];
  const result = [];
  const firstBefore = beforeEdge(lines[0].kind);
  if (firstBefore && lines[0].isFirst) {
    result.push({ at: lines[0].from, side: -1, before: firstBefore });
  }
  for (let index = 1; index < lines.length; index += 1) {
    const previous = lines[index - 1];
    const current = lines[index];
    if (previous.kind === "paragraph" && current.kind === "paragraph") {
      result.push({ at: current.from, side: -1, direct: "paragraph-gap" });
      continue;
    }
    if (previous.kind === "quote" && current.kind === "quote" && !previous.isLast && !current.isFirst) {
      result.push({ at: current.from, side: -1, direct: "quote-line" });
      continue;
    }
    if (!previous.isLast && !current.isFirst && previous.kind === current.kind)
      continue;
    const after = previous.isLast ? afterEdge(previous.kind) : void 0;
    const before = current.isFirst ? beforeEdge(current.kind) : void 0;
    if (after || before) {
      result.push({ at: current.from, side: -1, after, before });
    }
  }
  const last = lines[lines.length - 1];
  const lastAfter = afterEdge(last.kind);
  if (lastAfter && last.isLast) {
    result.push({ at: last.to, side: 1, after: lastAfter });
  }
  return result;
};
var planEditorLayoutPresentation = (text) => {
  const lines = classifySourceLines(text);
  return {
    lines: editorLinesFrom(lines),
    gaps: editorGapsFrom(lines)
  };
};

// src/editorLayout.ts
var gapClasses = (gap) => [
  "ncl-editor-block-gap",
  gap.direct ? `is-${gap.direct}` : "",
  gap.before ? `is-${gap.before}` : "",
  gap.after ? `is-${gap.after}` : ""
].filter(Boolean).join(" ");
var EditorBlockGapWidget = class extends import_view11.WidgetType {
  constructor(classes) {
    super();
    this.classes = classes;
  }
  eq(other) {
    return this.classes === other.classes;
  }
  toDOM(view) {
    const element = view.dom.ownerDocument.createElement("div");
    element.className = this.classes;
    element.setAttribute("aria-hidden", "true");
    element.setAttribute("role", "presentation");
    return element;
  }
};
var buildDecorations2 = (state) => {
  const text = state.doc.toString();
  const ranges = [];
  const plan = planEditorLayoutPresentation(text);
  for (const line of plan.lines) {
    const classes = [
      line.kind === "paragraph" ? "ncl-editor-paragraph-line" : "ncl-editor-heading-line",
      line.isFirst ? "is-first" : "",
      line.isLast ? "is-last" : ""
    ].filter(Boolean).join(" ");
    ranges.push(import_view11.Decoration.line({ class: classes }).range(line.lineFrom));
  }
  for (const gap of plan.gaps) {
    ranges.push(import_view11.Decoration.widget({
      widget: new EditorBlockGapWidget(gapClasses(gap)),
      block: true,
      side: gap.side
    }).range(gap.at));
  }
  return import_view11.Decoration.set(ranges, true);
};
var editorLayoutField = import_state7.StateField.define({
  create: (state) => buildDecorations2(state),
  update: (decorations, transaction) => transaction.docChanged ? buildDecorations2(transaction.state) : decorations,
  provide: (field) => import_view11.EditorView.decorations.from(field)
});
var editorLayoutExtension = () => editorLayoutField;

// src/listSeparator.ts
var import_language4 = require("@codemirror/language");
var cmLanguage2 = __toESM(require("@codemirror/language"));
var import_view12 = require("@codemirror/view");
var import_obsidian14 = require("obsidian");

// src/listSeparatorModel.ts
function isEditableListSyntaxMetadata(metadata) {
  const tokens = new Set(metadata.toLowerCase().split(/\s+/u).filter(Boolean));
  return tokens.has("listitem") || tokens.has("bulletlist") || tokens.has("orderedlist") || tokens.has("formatting-list") || tokens.has("formatting-list-ul") || tokens.has("formatting-list-ol");
}
var isSeparator = (value) => value === " " || value === "	";
var isListMarker = (value) => /^[-+*]$/u.test(value) || /^\d{1,9}[.)]$/u.test(value);
function findEditableListMarkerRange(lineText, lineFrom) {
  const match = /^((?: {0,3}>[ \t]?)*[ \t]*)([-+*]|\d{1,9}[.)])(?=[ \t])/u.exec(lineText);
  if (!match)
    return null;
  const localFrom = match[1].length;
  return {
    markerFrom: lineFrom + localFrom,
    markerTo: lineFrom + localFrom + match[2].length
  };
}
function planEditableListSeparator(lineText, lineFrom, markerFrom, markerTo) {
  const localFrom = markerFrom - lineFrom;
  const localTo = markerTo - lineFrom;
  if (localFrom < 0 || localTo <= localFrom || localTo > lineText.length || !isListMarker(lineText.slice(localFrom, localTo)) || !isSeparator(lineText[localTo]))
    return null;
  const afterMarkerSeparator = localTo + 1;
  const task = /^\[[ xX]\](?=[ \t]|$)/u.exec(lineText.slice(afterMarkerSeparator));
  if (task) {
    const afterTask = afterMarkerSeparator + task[0].length;
    if (!isSeparator(lineText[afterTask]))
      return null;
    return {
      from: lineFrom + afterTask,
      to: lineFrom + afterTask + 1,
      kind: "task"
    };
  }
  return {
    from: markerTo,
    to: markerTo + 1,
    kind: "marker"
  };
}

// src/listSeparator.ts
var markerSeparator = import_view12.Decoration.mark({
  class: "ncl-editor-list-separator is-marker"
});
var taskSeparator = import_view12.Decoration.mark({
  class: "ncl-editor-list-separator is-task"
});
var obsidianTokenClassNodeProp2 = cmLanguage2.tokenClassNodeProp;
var EMPTY_PRESENTATION3 = {
  decorations: import_view12.Decoration.none,
  parseReady: true
};
var buildDecorations3 = (view, plugin) => {
  var _a;
  if (!plugin.settings.enabled || !view.state.field(import_obsidian14.editorLivePreviewField, false)) {
    return EMPTY_PRESENTATION3;
  }
  const parsedThrough = Math.max(...view.visibleRanges.map(({ to }) => to));
  const tree = (0, import_language4.ensureSyntaxTree)(view.state, parsedThrough, 50);
  if (!tree)
    return { decorations: import_view12.Decoration.none, parseReady: false };
  const ranges = [];
  const seenLines = /* @__PURE__ */ new Set();
  for (const visible of view.visibleRanges) {
    const firstLine = view.state.doc.lineAt(visible.from).number;
    const lastLine = view.state.doc.lineAt(visible.to).number;
    for (let lineNumber = firstLine; lineNumber <= lastLine; lineNumber += 1) {
      if (seenLines.has(lineNumber))
        continue;
      seenLines.add(lineNumber);
      const line = view.state.doc.line(lineNumber);
      const marker = findEditableListMarkerRange(line.text, line.from);
      if (!marker)
        continue;
      let node = tree.resolveInner(marker.markerFrom, 1);
      let isList = false;
      for (; node; node = node.parent) {
        const tokenClasses = obsidianTokenClassNodeProp2 ? (_a = node.type.prop(obsidianTokenClassNodeProp2)) != null ? _a : "" : "";
        if (isEditableListSyntaxMetadata(`${node.name} ${tokenClasses}`)) {
          isList = true;
          break;
        }
      }
      if (!isList)
        continue;
      const plan = planEditableListSeparator(
        line.text,
        line.from,
        marker.markerFrom,
        marker.markerTo
      );
      if (!plan)
        continue;
      ranges.push((plan.kind === "task" ? taskSeparator : markerSeparator).range(plan.from, plan.to));
    }
  }
  return {
    decorations: import_view12.Decoration.set(ranges, true),
    parseReady: true
  };
};
var editableListSeparatorExtension = (plugin) => import_view12.ViewPlugin.fromClass(
  class {
    constructor(view) {
      const presentation = buildDecorations3(view, plugin);
      this.decorations = presentation.decorations;
      this.parseReady = presentation.parseReady;
    }
    update(update) {
      const livePreviewChanged = update.startState.field(import_obsidian14.editorLivePreviewField, false) !== update.state.field(import_obsidian14.editorLivePreviewField, false);
      if (this.parseReady && !livePreviewChanged && !update.docChanged && !update.viewportChanged)
        return;
      const presentation = buildDecorations3(update.view, plugin);
      this.decorations = presentation.decorations;
      this.parseReady = presentation.parseReady;
    }
  },
  { decorations: (value) => value.decorations }
);

// src/shellControls.ts
var import_obsidian16 = require("obsidian");

// src/statusBarPresentation.ts
var import_obsidian15 = require("obsidian");
var symbols = {
  "\u{1F310}": "globe",
  "\u{1F4F2}": "smartphone",
  "\u23F9": "square",
  "\u{1F4A4}": "pause",
  "\u{1F300}": "refresh-cw",
  "\u26A1": "zap",
  "\u{1F4E6}": "package",
  "\u23F3": "hourglass",
  "\u{1F6EB}": "upload",
  "\u{1F4EC}": "inbox",
  "\u26A0": "triangle-alert",
  "\u26D4": "circle-alert",
  "\u2191": "arrow-up",
  "\u2193": "arrow-down"
};
var tokenPattern = /🌐|📲|⏹\uFE0F?|💤|🌀|⚡\uFE0F?|📦|⏳|🛫|📬|⚠\uFE0F?|⛔\uFE0F?|↑|↓/gu;
var StatusBarPresentation = class {
  constructor(doc) {
    this.doc = doc;
    this.observer = null;
    this.frame = null;
    this.items = /* @__PURE__ */ new Set();
  }
  get win() {
    return this.doc.defaultView;
  }
  start() {
    if (this.observer)
      return;
    this.observer = new this.win.MutationObserver((records) => {
      if (records.some((r) => {
        var _a;
        return ((_a = r.target instanceof this.win.Element ? r.target : r.target.parentElement) == null ? void 0 : _a.closest(".status-bar")) || Array.from(r.addedNodes).some((n) => n instanceof this.win.Element && (n.matches(".status-bar, .syncstatusbar") || n.querySelector(".status-bar, .syncstatusbar")));
      }))
        this.schedule();
    });
    this.refresh();
  }
  schedule() {
    if (this.frame !== null)
      return;
    this.frame = this.win.requestAnimationFrame(() => {
      this.frame = null;
      this.refresh();
    });
  }
  release(item) {
    var _a, _b;
    for (const token of Array.from(item.querySelectorAll(".ncl-status-token"))) {
      token.replaceWith(this.doc.createTextNode((_b = (_a = token.querySelector(".ncl-status-source")) == null ? void 0 : _a.textContent) != null ? _b : ""));
    }
    for (const content of Array.from(item.querySelectorAll(".ncl-status-content"))) {
      content.replaceWith(...Array.from(content.childNodes));
    }
    item.classList.remove("ncl-sync-known", "ncl-sync-attention");
  }
  refresh() {
    var _a;
    if (!this.observer)
      return;
    this.observer.disconnect();
    for (const item of this.items)
      this.release(item);
    this.items.clear();
    for (const item of Array.from(this.doc.querySelectorAll(".status-bar > .syncstatusbar"))) {
      if (Array.from(item.childNodes).some((n) => n.nodeType !== 3))
        continue;
      const text = (_a = item.textContent) != null ? _a : "";
      if (!text.includes("Sync:"))
        continue;
      const plain = text.replace(tokenPattern, "");
      const routine = /^[\s\d:().]*Sync:[\s\d:().LIVE]*$/.test(plain) && /Sync:\s*(?:⏹\uFE0F?|💤|🌀|⚡\uFE0F?|📦)/u.test(text);
      item.classList.add(routine ? "ncl-sync-known" : "ncl-sync-attention");
      this.items.add(item);
      const fragment = this.doc.createDocumentFragment();
      let offset = 0;
      for (const match of text.matchAll(tokenPattern)) {
        const index = match.index, raw = match[0];
        const icon = (0, import_obsidian15.getIcon)(symbols[raw.replace(/\uFE0F/g, "")]);
        if (!icon)
          continue;
        fragment.append(this.doc.createTextNode(text.slice(offset, index)));
        const token = this.doc.createElement("span");
        token.className = "ncl-status-token";
        if (/⚠|⛔/u.test(raw))
          token.classList.add("is-warning");
        const source = this.doc.createElement("span");
        source.className = "ncl-status-source";
        source.textContent = raw;
        icon.setAttribute("aria-hidden", "true");
        token.append(source, icon);
        fragment.append(token);
        offset = index + raw.length;
      }
      fragment.append(this.doc.createTextNode(text.slice(offset)));
      const content = this.doc.createElement("span");
      content.className = "ncl-status-content";
      content.append(fragment);
      item.replaceChildren(content);
    }
    this.observer.observe(this.doc.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["class"]
    });
  }
  stop() {
    var _a;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
    this.observer = null;
    if (this.frame !== null)
      this.win.cancelAnimationFrame(this.frame);
    this.frame = null;
    for (const item of this.items)
      this.release(item);
    this.items.clear();
  }
};

// src/shellControls.ts
var ShellControls = class {
  constructor(doc) {
    this.doc = doc;
    this.active = false;
    this.frame = null;
    this.observer = null;
    this.resize = null;
    this.profile = null;
    this.space = null;
    this.workspace = null;
    this.ribbon = null;
    this.dock = null;
    this.glyph = null;
    this.restore = [];
    this.schedule = () => {
      if (!this.active || this.frame !== null)
        return;
      this.frame = this.win.requestAnimationFrame(() => {
        this.frame = null;
        this.refresh();
      });
    };
    this.status = new StatusBarPresentation(doc);
  }
  get win() {
    return this.doc.defaultView;
  }
  start() {
    if (this.active)
      return;
    this.active = true;
    this.observer = new this.win.MutationObserver((records) => {
      const shell = ".workspace, .workspace-ribbon.mod-left, .mod-left-split, .workspace-sidedock-vault-profile";
      if (records.some((record2) => record2.type === "attributes" ? [this.doc.body, this.workspace, this.dock, this.ribbon].includes(record2.target) : [...Array.from(record2.addedNodes), ...Array.from(record2.removedNodes)].some((node) => node instanceof this.win.Element && (node.matches(shell) || node.querySelector(shell)))))
        this.schedule();
    });
    this.observer.observe(this.doc.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["class"]
    });
    this.resize = new this.win.ResizeObserver(this.schedule);
    this.win.addEventListener("resize", this.schedule);
    this.refresh();
  }
  stop() {
    var _a, _b;
    this.active = false;
    if (this.frame !== null)
      this.win.cancelAnimationFrame(this.frame);
    this.frame = null;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
    this.observer = null;
    (_b = this.resize) == null ? void 0 : _b.disconnect();
    this.resize = null;
    this.win.removeEventListener("resize", this.schedule);
    this.release();
    this.status.stop();
  }
  attribute(el, name, value) {
    const before = el.getAttribute(name);
    if (value === null)
      el.removeAttribute(name);
    else
      el.setAttribute(name, value);
    this.restore.push(() => before === null ? el.removeAttribute(name) : el.setAttribute(name, before));
  }
  accessible(el, label) {
    this.attribute(el, "aria-label", label);
    this.attribute(el, "title", null);
    this.attribute(el, "data-tooltip-position", "top");
    if (el.tagName === "BUTTON")
      return;
    this.attribute(el, "role", "button");
    this.attribute(el, "tabindex", "0");
    const key = (event) => {
      if (event.key !== "Enter" && event.key !== " ")
        return;
      event.preventDefault();
      const r = el.getBoundingClientRect();
      el.dispatchEvent(new this.win.MouseEvent("click", {
        bubbles: true,
        clientX: r.left + r.width / 2,
        clientY: r.top + r.height / 2
      }));
    };
    el.addEventListener("keydown", key);
    this.restore.push(() => el.removeEventListener("keydown", key));
  }
  release() {
    var _a, _b, _c, _d, _e, _f, _g;
    (_a = this.resize) == null ? void 0 : _a.disconnect();
    for (const restore of this.restore.reverse())
      restore();
    this.restore = [];
    (_b = this.glyph) == null ? void 0 : _b.remove();
    this.glyph = null;
    if (this.profile) {
      if ((_c = this.space) == null ? void 0 : _c.isConnected)
        this.space.replaceWith(this.profile);
      else
        this.profile.remove();
    }
    (_d = this.space) == null ? void 0 : _d.remove();
    this.space = null;
    this.profile = null;
    (_e = this.workspace) == null ? void 0 : _e.classList.remove("ncl-shell-managed");
    (_f = this.ribbon) == null ? void 0 : _f.classList.remove("ncl-shell-ribbon");
    (_g = this.ribbon) == null ? void 0 : _g.style.removeProperty("--ncl-shell-footer-height");
    this.workspace = this.ribbon = this.dock = null;
  }
  refresh() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (!this.active)
      return;
    const enabled = !this.doc.body.classList.contains("is-mobile") && this.win.getComputedStyle(this.doc.body).getPropertyValue("--ncl-shell-controls").trim() === "1";
    if (enabled)
      this.status.start();
    else
      this.status.stop();
    const workspace = this.doc.querySelector(".workspace");
    const dock = workspace == null ? void 0 : workspace.querySelector(":scope > .mod-left-split");
    const ribbon = workspace == null ? void 0 : workspace.querySelector(":scope > .workspace-ribbon.mod-left");
    if (!enabled || !workspace || !dock || !ribbon) {
      this.release();
      return;
    }
    const candidate = dock.querySelector(".workspace-sidedock-vault-profile");
    if (this.profile && (!this.profile.isConnected || !((_a = this.space) == null ? void 0 : _a.isConnected) || workspace !== this.workspace || dock !== this.dock || ribbon !== this.ribbon || candidate))
      this.release();
    if (!this.profile) {
      const profile2 = candidate != null ? candidate : dock.querySelector(".workspace-sidedock-vault-profile");
      const switcher = profile2 == null ? void 0 : profile2.querySelector(".workspace-drawer-vault-switcher");
      const settings = (_b = profile2 == null ? void 0 : profile2.querySelector(".workspace-drawer-vault-actions .lucide-settings")) == null ? void 0 : _b.closest(".clickable-icon");
      if (!profile2 || !switcher || !settings)
        return;
      this.workspace = workspace;
      this.dock = dock;
      this.ribbon = ribbon;
      this.profile = profile2;
      this.space = this.doc.createElement("div");
      this.space.className = "ncl-shell-footer-space";
      profile2.before(this.space);
      this.attribute(profile2, "class", profile2.className + " ncl-shell-profile");
      this.attribute(profile2, "style", (_c = profile2.getAttribute("style")) != null ? _c : "");
      this.attribute(settings, "class", settings.className + " ncl-shell-settings");
      const help = Array.from(profile2.querySelectorAll(".workspace-drawer-vault-actions .clickable-icon")).filter((el) => el !== settings);
      for (const el of help)
        this.attribute(el, "class", el.className + " ncl-shell-secondary");
      this.accessible(switcher, localize`切换 Vault：${(_e = (_d = switcher.querySelector(".workspace-drawer-vault-name")) == null ? void 0 : _d.textContent) != null ? _e : ""}`);
      const quietHover = (event) => {
        if (!profile2.classList.contains("is-compact"))
          event.stopImmediatePropagation();
      };
      switcher.addEventListener("mouseover", quietHover, true);
      this.restore.push(() => switcher.removeEventListener("mouseover", quietHover, true));
      this.accessible(settings, localize("\u8BBE\u7F6E"));
      for (const el of help)
        this.accessible(el, localize("\u5E2E\u52A9"));
      this.glyph = this.doc.createElement("span");
      this.glyph.className = "ncl-shell-vault-icon";
      this.glyph.setAttribute("aria-hidden", "true");
      (0, import_obsidian16.setIcon)(this.glyph, "vault");
      switcher.prepend(this.glyph);
      workspace.append(profile2);
      workspace.classList.add("ncl-shell-managed");
      ribbon.classList.add("ncl-shell-ribbon");
      (_f = this.resize) == null ? void 0 : _f.observe(workspace);
      (_g = this.resize) == null ? void 0 : _g.observe(dock);
      (_h = this.resize) == null ? void 0 : _h.observe(ribbon);
      (_i = this.resize) == null ? void 0 : _i.observe(profile2);
    }
    const open = workspace.classList.contains("is-left-sidedock-open");
    const wr = workspace.getBoundingClientRect(), dr = dock.getBoundingClientRect(), rr = ribbon.getBoundingClientRect();
    const ribbonVisible = rr.width > 0 && this.win.getComputedStyle(ribbon).display !== "none";
    const profile = this.profile;
    if (profile.classList.contains("is-compact") === open)
      profile.classList.toggle("is-compact", !open);
    profile.style.display = !open && !ribbonVisible ? "none" : "";
    const left = open ? (ribbonVisible ? rr.left : dr.left) + 8 : rr.left;
    const width = open ? dr.right - 8 - left : rr.width + 8;
    profile.style.left = `${left - wr.left}px`;
    profile.style.width = `${Math.max(0, width)}px`;
    const height = profile.getBoundingClientRect().height;
    this.space.style.height = `${open ? height : 0}px`;
    ribbon.style.setProperty("--ncl-shell-footer-height", `${height}px`);
  }
};

// src/hintPresentation.ts
var HintPresentation = class {
  constructor(doc) {
    this.doc = doc;
    this.active = false;
    this.borrowed = null;
    this.deduplicate = (event) => {
      var _a;
      const target = event.target;
      if (!(target == null ? void 0 : target.closest))
        return;
      const button = target.closest(".bucket-sidebar-root button[aria-label], .ncl-settings button[aria-label]");
      if (button === ((_a = this.borrowed) == null ? void 0 : _a.el))
        return;
      this.restore();
      const title = button == null ? void 0 : button.getAttribute("title");
      if (button && title && title === button.getAttribute("aria-label")) {
        this.borrowed = { el: button, title };
        button.removeAttribute("title");
      }
    };
    this.leave = (event) => {
      if (this.borrowed && !(event.relatedTarget && this.borrowed.el.contains(event.relatedTarget)))
        this.restore();
    };
  }
  refresh(showHints) {
    const win = this.doc.defaultView;
    const enabled = !!win && win.getComputedStyle(this.doc.body).getPropertyValue("--ncl-shell-controls").trim() === "1";
    const quiet = enabled && !showHints;
    if (this.doc.body.classList.contains("ncl-quiet-hints") !== quiet)
      this.doc.body.classList.toggle("ncl-quiet-hints", quiet);
    if (enabled === this.active)
      return;
    this.active = enabled;
    if (enabled) {
      this.doc.addEventListener("mouseover", this.deduplicate, true);
      this.doc.addEventListener("mouseout", this.leave, true);
    } else
      this.detach();
  }
  restore() {
    const item = this.borrowed;
    this.borrowed = null;
    if (item && !item.el.hasAttribute("title"))
      item.el.setAttribute("title", item.title);
  }
  detach() {
    this.doc.removeEventListener("mouseover", this.deduplicate, true);
    this.doc.removeEventListener("mouseout", this.leave, true);
    this.restore();
  }
  stop() {
    this.active = false;
    this.detach();
    this.doc.body.classList.remove("ncl-quiet-hints");
  }
};

// src/workspaceSwitcher.ts
var import_obsidian18 = require("obsidian");

// src/workspaceMenu.ts
var import_obsidian17 = require("obsidian");

// src/workspaceMenuPosition.ts
function workspaceMenuPosition(input) {
  const edge = 8, gap = 6;
  const width = Math.max(0, Math.min(264, input.right - input.left - edge * 2));
  const bottomEdge = Math.max(input.top + edge, Math.min(input.anchorTop - gap, input.bottom - edge));
  return {
    left: Math.max(input.left + edge, Math.min(input.anchorX - width / 2, input.right - edge - width)),
    bottom: input.viewportHeight - bottomEdge,
    width,
    maxHeight: Math.max(0, Math.min(360, bottomEdge - input.top - edge))
  };
}

// src/workspaceMenu.ts
var sequence = 0;
var WorkspaceMenu = class {
  constructor(doc, anchor, coordinator, onClose) {
    this.doc = doc;
    this.anchor = anchor;
    this.coordinator = coordinator;
    this.onClose = onClose;
    this.root = null;
    this.rows = [];
    this.lease = null;
    this.keydown = (event) => {
      var _a, _b;
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        this.close();
        return;
      }
      if (event.key === "Tab") {
        this.close();
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key))
        return;
      event.preventDefault();
      event.stopPropagation();
      let index = this.rows.indexOf(this.doc.activeElement);
      if (event.key === "Home")
        index = 0;
      else if (event.key === "End")
        index = this.rows.length - 1;
      else
        index = (index + (event.key === "ArrowDown" ? 1 : -1) + this.rows.length) % this.rows.length;
      (_a = this.rows[index]) == null ? void 0 : _a.focus({ preventScroll: true });
      (_b = this.rows[index]) == null ? void 0 : _b.scrollIntoView({ block: "nearest" });
    };
    this.outside = (event) => {
      var _a, _b;
      if (!(event.target instanceof this.win.Node) || ((_a = this.root) == null ? void 0 : _a.contains(event.target)) || ((_b = this.anchor) == null ? void 0 : _b.contains(event.target)))
        return;
      this.close(false);
    };
    this.blur = () => this.close(false);
  }
  get win() {
    return this.doc.defaultView;
  }
  open(entries) {
    var _a, _b, _c, _d, _e;
    const root = this.root = this.doc.createElement("div");
    root.className = "ncl-workspace-menu";
    root.id = `ncl-workspace-menu-${++sequence}`;
    root.setAttribute("role", "menu");
    root.setAttribute("aria-label", localize("\u5DE5\u4F5C\u533A\u5E03\u5C40"));
    let initial = 0;
    for (const entry of entries) {
      if ("separator" in entry) {
        const separator = this.doc.createElement("div");
        separator.className = "ncl-workspace-menu-separator";
        separator.setAttribute("role", "separator");
        root.append(separator);
        continue;
      }
      const row = this.doc.createElement("button");
      row.type = "button";
      row.tabIndex = -1;
      row.className = "ncl-workspace-menu-item";
      row.setAttribute("role", entry.checked === void 0 ? "menuitem" : "menuitemradio");
      if (entry.checked !== void 0)
        row.setAttribute("aria-checked", String(entry.checked));
      if (entry.checked)
        initial = this.rows.length;
      const icon = this.doc.createElement("span");
      icon.className = "ncl-workspace-menu-icon";
      icon.setAttribute("aria-hidden", "true");
      if (entry.icon || entry.checked)
        (0, import_obsidian17.setIcon)(icon, (_a = entry.icon) != null ? _a : "check");
      const label = this.doc.createElement("span");
      label.className = "ncl-workspace-menu-title";
      label.textContent = entry.title;
      row.append(icon, label);
      root.append(row);
      this.rows.push(row);
      row.onclick = () => {
        this.close();
        entry.action();
      };
      row.onpointermove = () => {
        if (this.doc.activeElement !== row)
          row.focus({ preventScroll: true });
      };
    }
    root.addEventListener("keydown", this.keydown);
    this.lease = this.coordinator.claim(this.doc, "action-menu", (reason) => this.close(reason === "escape" || reason === "viewport"), {
      dismissOnViewportChange: true,
      containsEventTarget: (target) => {
        var _a2;
        return target instanceof this.win.Node && !!((_a2 = this.root) == null ? void 0 : _a2.contains(target));
      }
    });
    this.doc.body.append(root);
    this.reposition();
    (_b = this.anchor) == null ? void 0 : _b.setAttribute("aria-controls", root.id);
    (_c = this.anchor) == null ? void 0 : _c.setAttribute("aria-expanded", "true");
    this.doc.addEventListener("pointerdown", this.outside, true);
    this.win.addEventListener("blur", this.blur);
    (_d = this.rows[initial]) == null ? void 0 : _d.focus({ preventScroll: true });
    (_e = this.rows[initial]) == null ? void 0 : _e.scrollIntoView({ block: "nearest" });
  }
  reposition() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    if (!this.root)
      return;
    const win = this.win, app = (_a = this.doc.querySelector(".app-container")) == null ? void 0 : _a.getBoundingClientRect();
    const anchor = (_b = this.anchor) == null ? void 0 : _b.getBoundingClientRect();
    const bar = (_d = (_c = this.anchor) == null ? void 0 : _c.closest(".status-bar")) == null ? void 0 : _d.getBoundingClientRect();
    const placement = workspaceMenuPosition({
      left: Math.max(0, (_e = app == null ? void 0 : app.left) != null ? _e : 0),
      right: Math.min(win.innerWidth, (_f = app == null ? void 0 : app.right) != null ? _f : win.innerWidth),
      top: Math.max(0, (_g = app == null ? void 0 : app.top) != null ? _g : 0),
      bottom: Math.min(win.innerHeight, (_h = app == null ? void 0 : app.bottom) != null ? _h : win.innerHeight),
      anchorX: anchor ? (anchor.left + anchor.right) / 2 : win.innerWidth / 2,
      anchorTop: (_j = (_i = bar == null ? void 0 : bar.top) != null ? _i : anchor == null ? void 0 : anchor.top) != null ? _j : win.innerHeight - 28,
      viewportHeight: win.innerHeight
    });
    for (const [property, value] of Object.entries(placement)) {
      const css = property === "maxHeight" ? "max-height" : property;
      if (this.root.style.getPropertyValue(css) !== `${value}px`)
        this.root.style.setProperty(css, `${value}px`);
    }
  }
  close(restoreFocus = true) {
    var _a, _b, _c, _d;
    if (!this.root)
      return;
    this.root.remove();
    this.root = null;
    this.rows = [];
    this.doc.removeEventListener("pointerdown", this.outside, true);
    this.win.removeEventListener("blur", this.blur);
    (_a = this.lease) == null ? void 0 : _a.release();
    this.lease = null;
    (_b = this.anchor) == null ? void 0 : _b.setAttribute("aria-expanded", "false");
    (_c = this.anchor) == null ? void 0 : _c.removeAttribute("aria-controls");
    if (restoreFocus && ((_d = this.anchor) == null ? void 0 : _d.isConnected) && !this.anchor.disabled)
      this.anchor.focus({ preventScroll: true });
    this.onClose();
  }
};

// src/workspaceLayouts.ts
var hasWorkspace = (core, name) => Object.prototype.hasOwnProperty.call(core.workspaces, name);
function cloneLayout(value) {
  if (!value || typeof value !== "object" || Array.isArray(value) || !value.main || typeof value.main !== "object") {
    throw new Error(localize("\u5E03\u5C40\u6570\u636E\u4E0D\u5B8C\u6574\uFF0C\u672A\u6267\u884C\u5207\u6362\u3002"));
  }
  return JSON.parse(JSON.stringify(value));
}
function readRecovery(text) {
  const value = JSON.parse(text);
  if (value.version !== 1 || typeof value.active !== "string" || typeof value.savedAt !== "string" || !Number.isFinite(Date.parse(value.savedAt))) {
    throw new Error(localize("\u6062\u590D\u5907\u4EFD\u683C\u5F0F\u672A\u77E5\uFF0C\u5DF2\u4FDD\u7559\u539F\u6587\u4EF6\u3002"));
  }
  return { ...value, layout: cloneLayout(value.layout) };
}
function alternatingRecoveryStore(adapter, directory) {
  const paths = [0, 1].map((i) => `${directory}/workspace-recovery-${i}.json`);
  const readSlots = () => Promise.all(paths.map(async (path) => {
    try {
      if (!await adapter.exists(path))
        return { value: null, error: null };
      return { value: readRecovery(await adapter.read(path)), error: null };
    } catch (error) {
      return { value: null, error };
    }
  }));
  return {
    async read() {
      var _a;
      const slots = await readSlots();
      const values = slots.map((s) => s.value).filter((s) => !!s);
      if (!values.length && slots.some((s) => s.error))
        throw new Error(localize("\u6062\u590D\u5907\u4EFD\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u539F\u6587\u4EF6\u5DF2\u4FDD\u7559\u3002"));
      return (_a = values.sort((a, b) => b.savedAt.localeCompare(a.savedAt))[0]) != null ? _a : null;
    },
    async write(value) {
      const slots = await readSlots();
      if (slots.every((s) => s.error))
        throw new Error(localize("\u6062\u590D\u5907\u4EFD\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u672A\u6267\u884C\u5207\u6362\u3002"));
      const index = !slots[0].value ? 0 : !slots[1].value ? 1 : slots[0].value.savedAt <= slots[1].value.savedAt ? 0 : 1;
      const newest = Math.max(0, ...slots.map((s) => s.value ? Date.parse(s.value.savedAt) : 0));
      const text = JSON.stringify({ ...value, savedAt: new Date(Math.max(Date.now(), newest + 1)).toISOString() });
      await adapter.write(paths[index], text);
      if (await adapter.read(paths[index]) !== text)
        throw new Error(localize("\u5207\u6362\u524D\u5907\u4EFD\u6821\u9A8C\u5931\u8D25\uFF0C\u672A\u6267\u884C\u5207\u6362\u3002"));
    }
  };
}
function validateWorkspaceName(value) {
  const name = value.trim();
  if (!name)
    return localize("\u8BF7\u8F93\u5165\u5E03\u5C40\u540D\u79F0\u3002");
  if (/[\u0000-\u001f\u007f]/.test(name) || name === "prototype" || Object.getOwnPropertyNames(Object.prototype).includes(name)) {
    return localize("\u6B64\u5E03\u5C40\u540D\u79F0\u4E0D\u53EF\u7528\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002");
  }
  return null;
}
var WorkspaceLayouts = class {
  constructor(host, store) {
    this.host = host;
    this.store = store;
    this.busy = false;
    this.stopped = false;
  }
  stop() {
    this.stopped = true;
  }
  core() {
    if (this.stopped)
      throw new Error(localize("Keyline \u5E03\u5C40\u5207\u6362\u5DF2\u5173\u95ED\u3002"));
    if (this.host.conflict())
      throw new Error(localize("\u8BF7\u5148\u505C\u7528 Workspaces Plus / Workspace++\uFF0C\u907F\u514D\u4E24\u5957\u5E03\u5C40\u7BA1\u7406\u540C\u65F6\u63A5\u7BA1\u3002\u539F\u5E03\u5C40\u65E0\u9700\u5220\u9664\u3002"));
    const core = this.host.core();
    if (!core)
      throw new Error(localize("\u8BF7\u5728\u300C\u8BBE\u7F6E \u2192 \u6838\u5FC3\u63D2\u4EF6\u300D\u4E2D\u5F00\u542F\u300C\u5DE5\u4F5C\u533A\u300D\u3002"));
    return core;
  }
  async exclusively(action) {
    if (this.busy)
      throw new Error(localize("\u5E03\u5C40\u64CD\u4F5C\u8FDB\u884C\u4E2D\uFF0C\u8BF7\u7A0D\u5019\u3002"));
    this.busy = true;
    try {
      return await action();
    } finally {
      this.busy = false;
    }
  }
  async recovery() {
    return this.store.read();
  }
  async prepareManagement() {
    return this.exclusively(async () => {
      const core = this.core();
      await this.store.write(this.snapshot(core));
      if (this.core() !== core)
        throw new Error(localize("\u5DE5\u4F5C\u533A\u72B6\u6001\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5\u3002"));
      return core;
    });
  }
  async switchTo(name) {
    return this.exclusively(async () => {
      const core = this.core();
      if (!hasWorkspace(core, name))
        throw new Error(localize("\u6B64\u5E03\u5C40\u5DF2\u4E0D\u5B58\u5728\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002"));
      const source = core.workspaces[name];
      await this.apply(core, cloneLayout(source), name, () => {
        if (!hasWorkspace(core, name) || core.workspaces[name] !== source)
          throw new Error(localize("\u6240\u9009\u5E03\u5C40\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u3002"));
      });
    });
  }
  async restore() {
    return this.exclusively(async () => {
      const core = this.core(), recovery = await this.store.read();
      if (!recovery)
        throw new Error(localize("\u8FD8\u6CA1\u6709\u53EF\u6062\u590D\u7684\u5207\u6362\u524D\u5E03\u5C40\u3002"));
      await this.apply(core, recovery.layout, hasWorkspace(core, recovery.active) ? recovery.active : "");
    });
  }
  snapshot(core) {
    return {
      version: 1,
      savedAt: new Date().toISOString(),
      active: core.activeWorkspace || "",
      layout: cloneLayout(this.host.getLayout())
    };
  }
  async apply(core, layout, active, validate) {
    const before = this.snapshot(core);
    await this.store.write(before);
    if (this.core() !== core)
      throw new Error(localize("\u5DE5\u4F5C\u533A\u72B6\u6001\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5\u3002"));
    validate == null ? void 0 : validate();
    try {
      await this.host.changeLayout(cloneLayout(layout));
      core.activeWorkspace = active;
      await core.saveData();
    } catch (cause) {
      try {
        await this.host.changeLayout(cloneLayout(before.layout));
        core.activeWorkspace = before.active;
        await core.saveData();
      } catch (e) {
        throw new Error(localize("\u5E03\u5C40\u5207\u6362\u672A\u5B8C\u6210\uFF1B\u5207\u6362\u524D\u5907\u4EFD\u5DF2\u4FDD\u7559\uFF0C\u8BF7\u901A\u8FC7\u300C\u6062\u590D\u5207\u6362\u524D\u5E03\u5C40\u300D\u91CD\u8BD5\u3002"));
      }
      throw new Error(localize("\u5E03\u5C40\u5207\u6362\u672A\u5B8C\u6210\uFF0C\u5DF2\u6062\u590D\u5207\u6362\u524D\u7684\u5E03\u5C40\u3002"));
    }
  }
  async save(value, overwrite) {
    return this.exclusively(async () => {
      const core = this.core(), name = value.trim(), invalid = validateWorkspaceName(value);
      if (invalid)
        throw new Error(invalid);
      const exists = hasWorkspace(core, name);
      if (exists && !overwrite)
        throw new Error(localize("\u5DF2\u5B58\u5728\u540C\u540D\u5E03\u5C40\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002"));
      if (overwrite && (!exists || name !== core.activeWorkspace))
        throw new Error(localize("\u5F53\u524D\u5E03\u5C40\u5DF2\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u4FDD\u5B58\u3002"));
      const previous = core.workspaces[name], previousActive = core.activeWorkspace;
      const next = cloneLayout(this.host.getLayout());
      next.mtime = new Date().toISOString();
      core.workspaces[name] = next;
      core.activeWorkspace = name;
      try {
        await core.saveData();
      } catch (cause) {
        if (exists)
          core.workspaces[name] = previous;
        else
          delete core.workspaces[name];
        core.activeWorkspace = previousActive;
        throw new Error(localize("\u5E03\u5C40\u672A\u80FD\u4FDD\u5B58\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E\u76EE\u5F55\u7684\u5199\u5165\u6743\u9650\u540E\u91CD\u8BD5\u3002"));
      }
    });
  }
};
function workspaceSlot(width, left, right, wrapped) {
  const available = Math.floor(2 * Math.min(width / 2 - left - 12, right - width / 2 - 12));
  if (wrapped || available < 32)
    return { width: Math.min(180, Math.max(32, width - 24)), separateRow: true, iconOnly: width < 100 };
  return { width: Math.min(180, available), separateRow: false, iconOnly: available < 80 };
}

// src/workspaceSwitcher.ts
function coreWorkspaces(app) {
  var _a, _b, _c;
  const entry = (_b = (_a = app.internalPlugins) == null ? void 0 : _a.getPluginById) == null ? void 0 : _b.call(_a, "workspaces");
  const core = entry == null ? void 0 : entry.instance;
  if (!core || (entry == null ? void 0 : entry.enabled) === false || (entry == null ? void 0 : entry._loaded) === false || ((_c = core.plugin) == null ? void 0 : _c._loaded) === false || !core.workspaces || typeof core.workspaces !== "object" || Array.isArray(core.workspaces) || typeof core.saveData !== "function")
    return null;
  return core;
}
function workspaceRecoveryStore(app, directory) {
  return alternatingRecoveryStore(app.vault.adapter, directory);
}
var WorkspaceNameModal = class extends import_obsidian18.Modal {
  constructor(app, save) {
    super(app);
    this.save = save;
  }
  onOpen() {
    var _a;
    this.titleEl.textContent = localize("\u53E6\u5B58\u4E3A\u65B0\u5E03\u5C40");
    this.modalEl.classList.add("ncl-workspace-name-modal");
    const doc = this.contentEl.ownerDocument, form = doc.createElement("form");
    const input = doc.createElement("input");
    input.type = "text";
    input.placeholder = localize("\u4F8B\u5982\uFF1A\u9605\u8BFB\u3001\u5199\u4F5C");
    input.setAttribute("aria-label", localize("\u5E03\u5C40\u540D\u79F0"));
    const error = doc.createElement("p");
    error.className = "ncl-workspace-error";
    error.setAttribute("role", "alert");
    error.hidden = true;
    const actions = doc.createElement("div");
    actions.className = "ncl-workspace-dialog-actions";
    const cancel = doc.createElement("button");
    cancel.type = "button";
    cancel.textContent = localize("\u53D6\u6D88");
    cancel.onclick = () => this.close();
    const submit = doc.createElement("button");
    submit.type = "submit";
    submit.textContent = localize("\u4FDD\u5B58");
    submit.className = "mod-cta";
    let pending = false;
    form.onsubmit = async (e) => {
      e.preventDefault();
      if (pending)
        return;
      pending = true;
      submit.disabled = input.disabled = cancel.disabled = true;
      error.hidden = true;
      try {
        await this.save(input.value);
        this.close();
      } catch (cause) {
        error.textContent = errorMessage(cause);
        error.hidden = false;
      } finally {
        pending = false;
        submit.disabled = input.disabled = cancel.disabled = false;
        if (input.isConnected)
          input.focus();
      }
    };
    actions.append(cancel, submit);
    form.append(input, error, actions);
    this.contentEl.replaceChildren(form);
    (_a = doc.defaultView) == null ? void 0 : _a.setTimeout(() => {
      if (input.isConnected)
        input.focus();
    }, 0);
  }
  onClose() {
    this.contentEl.replaceChildren();
  }
};
var errorMessage = (cause) => cause instanceof Error ? cause.message : localize("\u5E03\u5C40\u64CD\u4F5C\u672A\u5B8C\u6210\uFF0C\u8BF7\u91CD\u8BD5\u3002");
var WorkspaceSwitcher = class {
  constructor(app, doc, store, coordinator, enabled, createItem) {
    this.app = app;
    this.doc = doc;
    this.coordinator = coordinator;
    this.enabled = enabled;
    this.createItem = createItem;
    this.item = null;
    this.button = null;
    this.label = null;
    this.bar = null;
    this.menu = null;
    this.modal = null;
    this.observer = null;
    this.resize = null;
    this.observed = /* @__PURE__ */ new Set();
    this.frame = null;
    this.active = false;
    this.schedule = () => {
      if (!this.active || this.frame !== null)
        return;
      this.frame = this.win.requestAnimationFrame(() => {
        this.frame = null;
        this.refresh();
      });
    };
    this.layouts = new WorkspaceLayouts({
      core: () => coreWorkspaces(app),
      conflict: () => ["workspaces-plus", "workspace-plus-plus"].some((id) => {
        var _a, _b;
        return (_b = (_a = app.plugins) == null ? void 0 : _a.enabledPlugins) == null ? void 0 : _b.has(id);
      }),
      getLayout: () => app.workspace.getLayout(),
      changeLayout: (layout) => app.workspace.changeLayout(layout)
    }, store);
  }
  get win() {
    return this.doc.defaultView;
  }
  start() {
    if (this.active)
      return;
    this.active = true;
    this.observer = new this.win.MutationObserver((records) => {
      if (records.some((r) => {
        var _a;
        if (((_a = this.item) == null ? void 0 : _a.contains(r.target)) || r.target === this.item)
          return false;
        const parent = r.target instanceof this.win.Element ? r.target : r.target.parentElement;
        return (parent == null ? void 0 : parent.closest(".status-bar")) || [...Array.from(r.addedNodes), ...Array.from(r.removedNodes)].some((n) => n instanceof this.win.Element && (n.matches(".status-bar") || n.querySelector(".status-bar")));
      }))
        this.schedule();
    });
    this.observer.observe(this.doc.body, { childList: true, subtree: true, characterData: true });
    this.resize = new this.win.ResizeObserver(this.schedule);
    this.win.addEventListener("resize", this.schedule);
    this.win.addEventListener("focus", this.schedule);
    this.refresh();
  }
  release() {
    var _a, _b, _c, _d;
    (_a = this.menu) == null ? void 0 : _a.close(false);
    this.menu = null;
    (_b = this.resize) == null ? void 0 : _b.disconnect();
    this.observed.clear();
    (_c = this.bar) == null ? void 0 : _c.classList.remove("ncl-workspace-bar");
    this.bar = null;
    (_d = this.item) == null ? void 0 : _d.remove();
    this.item = null;
    this.button = null;
    this.label = null;
  }
  stop() {
    var _a, _b, _c;
    this.active = false;
    this.layouts.stop();
    (_a = this.observer) == null ? void 0 : _a.disconnect();
    this.observer = null;
    (_b = this.resize) == null ? void 0 : _b.disconnect();
    this.resize = null;
    this.win.removeEventListener("resize", this.schedule);
    this.win.removeEventListener("focus", this.schedule);
    if (this.frame !== null)
      this.win.cancelAnimationFrame(this.frame);
    this.frame = null;
    (_c = this.modal) == null ? void 0 : _c.close();
    this.modal = null;
    this.release();
  }
  refresh() {
    var _a, _b;
    if (!this.active)
      return;
    const visible = this.enabled() && !this.doc.body.classList.contains("is-mobile") && this.win.getComputedStyle(this.doc.body).getPropertyValue("--ncl-workspace-controls").trim() === "1";
    const bar = this.doc.querySelector(".app-container > .status-bar");
    if (!visible || !bar) {
      this.release();
      return;
    }
    if (this.bar !== bar || !((_a = this.item) == null ? void 0 : _a.isConnected)) {
      this.release();
      this.bar = bar;
      this.item = this.createItem();
      this.item.classList.add("ncl-workspace-switcher");
      this.button = this.doc.createElement("button");
      this.button.type = "button";
      this.button.className = "ncl-workspace-button";
      this.button.setAttribute("aria-haspopup", "menu");
      this.button.setAttribute("aria-expanded", "false");
      const icon = this.doc.createElement("span");
      icon.setAttribute("aria-hidden", "true");
      (0, import_obsidian18.setIcon)(icon, "panels-top-left");
      this.label = this.doc.createElement("span");
      this.label.className = "ncl-workspace-label";
      const arrow = this.doc.createElement("span");
      arrow.className = "ncl-workspace-arrow";
      arrow.setAttribute("aria-hidden", "true");
      (0, import_obsidian18.setIcon)(arrow, "chevron-up");
      this.button.append(icon, this.label, arrow);
      this.item.append(this.button);
      this.button.onclick = () => this.menu ? this.menu.close() : this.openMenu();
      this.button.onkeydown = (e) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
          this.openMenu();
        }
      };
      bar.classList.add("ncl-workspace-bar");
    }
    const core = coreWorkspaces(this.app);
    const name = (core == null ? void 0 : core.activeWorkspace) && hasWorkspace(core, core.activeWorkspace) ? core.activeWorkspace : localize("\u5E03\u5C40");
    if (this.label.textContent !== name)
      this.label.textContent = name;
    const aria = localize`切换工作区布局：${name}`;
    if (this.button.getAttribute("aria-label") !== aria)
      this.button.setAttribute("aria-label", aria);
    this.button.disabled = this.layouts.busy;
    this.position();
    (_b = this.menu) == null ? void 0 : _b.reposition();
  }
  position() {
    var _a, _b;
    const bar = this.bar, item = this.item, bounds = bar.getBoundingClientRect();
    let left = 0, right = bounds.width, top = null, wrapped = false;
    const observed = /* @__PURE__ */ new Set([bar]);
    for (const sibling of Array.from(bar.children)) {
      if (sibling === item || !(sibling instanceof this.win.HTMLElement))
        continue;
      observed.add(sibling);
      const r = sibling.getBoundingClientRect();
      if (!r.width || !r.height || this.win.getComputedStyle(sibling).display === "none")
        continue;
      if (top === null)
        top = r.top;
      if (Math.abs(r.top - top) > 3)
        wrapped = true;
      if (sibling.matches(".syncstatusbar"))
        left = Math.max(left, r.right - bounds.left);
      else
        right = Math.min(right, r.left - bounds.left);
    }
    for (const node of this.observed)
      if (!observed.has(node))
        (_a = this.resize) == null ? void 0 : _a.unobserve(node);
    for (const node of observed)
      if (!this.observed.has(node))
        (_b = this.resize) == null ? void 0 : _b.observe(node);
    this.observed = observed;
    const slot = workspaceSlot(bounds.width, left, right, wrapped);
    for (const [cls, state] of [["is-separate-row", slot.separateRow], ["is-icon-only", slot.iconOnly]]) {
      if (item.classList.contains(cls) !== state)
        item.classList.toggle(cls, state);
    }
    const value = `${slot.width}px`;
    if (item.style.getPropertyValue("--ncl-workspace-width") !== value)
      item.style.setProperty("--ncl-workspace-width", value);
  }
  async run(action, success) {
    try {
      const promise = action();
      this.refresh();
      await promise;
      if (success)
        new import_obsidian18.Notice(success);
    } catch (cause) {
      new import_obsidian18.Notice(errorMessage(cause));
    } finally {
      this.refresh();
    }
  }
  saveCurrent() {
    let core;
    try {
      core = this.layouts.core();
    } catch (cause) {
      new import_obsidian18.Notice(errorMessage(cause));
      return;
    }
    if (!core.activeWorkspace || !hasWorkspace(core, core.activeWorkspace)) {
      this.saveAs();
      return;
    }
    void this.run(() => this.layouts.save(core.activeWorkspace, true), localize("\u5F53\u524D\u5E03\u5C40\u5DF2\u4FDD\u5B58"));
  }
  saveAs() {
    var _a;
    try {
      this.layouts.core();
    } catch (cause) {
      new import_obsidian18.Notice(errorMessage(cause));
      return;
    }
    (_a = this.modal) == null ? void 0 : _a.close();
    this.modal = new WorkspaceNameModal(this.app, async (name) => {
      await this.layouts.save(name, false);
      this.refresh();
      new import_obsidian18.Notice(localize("\u65B0\u5E03\u5C40\u5DF2\u4FDD\u5B58"));
    });
    this.modal.open();
  }
  restore() {
    void this.run(() => this.layouts.restore(), localize("\u5DF2\u6062\u590D\u5207\u6362\u524D\u7684\u5E03\u5C40"));
  }
  manage() {
    void this.run(async () => {
      var _a;
      const core = await this.layouts.prepareManagement();
      (_a = core.onOpenModal) == null ? void 0 : _a.call(core);
    });
  }
  openMenu() {
    var _a;
    if (this.layouts.busy)
      return;
    (_a = this.menu) == null ? void 0 : _a.close(false);
    this.refresh();
    const entries = [];
    let core = null;
    try {
      core = this.layouts.core();
    } catch (cause) {
      entries.push({ title: errorMessage(cause), icon: "info", action: () => new import_obsidian18.Notice(errorMessage(cause)) });
    }
    if (core) {
      const current = core;
      for (const name of Object.keys(current.workspaces)) {
        entries.push({
          title: name,
          checked: name === current.activeWorkspace,
          action: () => {
            void this.run(() => this.layouts.switchTo(name));
          }
        });
      }
      if (Object.keys(current.workspaces).length)
        entries.push({ separator: true });
      entries.push({ title: localize("\u4FDD\u5B58\u5F53\u524D\u5E03\u5C40"), icon: "save", action: () => this.saveCurrent() });
      entries.push({ title: localize("\u53E6\u5B58\u4E3A\u65B0\u5E03\u5C40\u2026"), icon: "plus", action: () => this.saveAs() });
      entries.push({ title: localize("\u6062\u590D\u5207\u6362\u524D\u5E03\u5C40"), icon: "undo-2", action: () => this.restore() });
      if (typeof current.onOpenModal === "function") {
        entries.push({ title: localize("\u539F\u751F\u5DE5\u4F5C\u533A\u7BA1\u7406\u2026"), icon: "settings", action: () => this.manage() });
      }
    }
    const menu = new WorkspaceMenu(this.doc, this.button, this.coordinator, () => {
      if (this.menu === menu)
        this.menu = null;
    });
    this.menu = menu;
    menu.open(entries);
  }
};

// src/fileIconModal.ts
var import_obsidian19 = require("obsidian");
var COLOR_LABELS = [localize("\u7070\u8272"), localize("\u84DD\u8272"), localize("\u7EA2\u8272"), localize("\u7EFF\u8272"), localize("\u7D2B\u8272"), localize("\u7425\u73C0"), localize("\u9752\u8272"), localize("\u6A59\u8272"), localize("\u7C89\u8272")];
var SEARCH_WORDS = { "\u6587\u4EF6": "file", "\u6587\u6863": "file", "\u7B14\u8BB0": "notebook", "\u56FE\u7247": "image", "\u97F3\u4E50": "music", "\u97F3\u9891": "audio", "\u89C6\u9891": "video", "\u6587\u4EF6\u5939": "folder", "\u4E66": "book", "\u661F": "star", "\u5DE5\u4F5C": "briefcase", "\u65E5\u5386": "calendar", "\u4EE3\u7801": "code", "\u6536\u85CF": "bookmark", "\u9879\u76EE": "folder" };
var FileIconModal = class extends import_obsidian19.Modal {
  constructor(app, options) {
    super(app);
    this.options = options;
    this.pending = false;
    this.draft = { ...options.initial };
    this.iconIds = [...Object.keys(KEYLINE_IDENTITY_ASSETS), ...Array.from(new Set((0, import_obsidian19.getIconIds)().map((id) => id.replace(/^lucide-/, "")))).sort()];
  }
  onOpen() {
    var _a, _b, _c;
    this.modalEl.classList.add("ncl-icon-modal");
    this.titleEl.textContent = localize("\u66F4\u6539\u56FE\u6807");
    const root = this.contentEl;
    root.replaceChildren();
    const caption = root.createEl("p", { cls: "ncl-icon-caption", text: this.options.title });
    caption.title = this.options.title;
    const row = root.createDiv({ cls: "ncl-icon-preview" });
    this.preview = row.createSpan();
    this.summary = row.createSpan();
    this.summary.setAttribute("aria-live", "polite");
    this.automatic = root.createEl("button", { text: localize("\u56FE\u6807\u8DDF\u968F\u81EA\u52A8\u89C4\u5219") });
    this.automatic.type = "button";
    this.automatic.onclick = () => {
      delete this.draft.icon;
      this.updatePreview();
      this.updateSelection();
    };
    const search = root.createEl("input", { type: "search", placeholder: localize("\u641C\u7D22\u56FE\u6807\uFF1A\u6587\u4EF6\u3001\u65E5\u5386\u3001star\u2026") });
    search.className = "ncl-icon-search";
    search.setAttribute("aria-label", localize("\u641C\u7D22\u56FE\u6807"));
    search.oninput = () => this.renderGrid(search.value);
    this.grid = root.createDiv({ cls: "ncl-icon-grid" });
    this.grid.setAttribute("role", "group");
    this.grid.setAttribute("aria-label", localize("\u53EF\u9009\u56FE\u6807"));
    this.count = root.createDiv({ cls: "ncl-icon-caption" });
    this.count.setAttribute("aria-live", "polite");
    this.renderGrid("");
    const colorRow = root.createEl("label", { cls: "ncl-icon-color-row" });
    colorRow.createSpan({ text: localize("\u989C\u8272") });
    this.colorSelect = colorRow.createEl("select");
    this.colorSelect.setAttribute("aria-label", localize("\u56FE\u6807\u989C\u8272"));
    this.colorSelect.createEl("option", { value: "", text: localize("\u8DDF\u968F\u81EA\u52A8\u89C4\u5219") });
    ICON_COLORS.forEach((color, i) => this.colorSelect.createEl("option", { value: color, text: COLOR_LABELS[i] }));
    this.colorSelect.createEl("option", { value: "custom", text: localize("\u81EA\u5B9A\u4E49\u989C\u8272\u2026") });
    this.customColor = root.createEl("input", { type: "color" });
    this.customColor.setAttribute("aria-label", localize("\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272"));
    this.customColor.value = ((_a = this.draft.color) == null ? void 0 : _a.startsWith("#")) ? this.draft.color : "#527bb3";
    this.colorSelect.value = ((_b = this.draft.color) == null ? void 0 : _b.startsWith("#")) ? "custom" : (_c = this.draft.color) != null ? _c : "";
    this.customColor.hidden = this.colorSelect.value !== "custom";
    this.colorSelect.onchange = () => {
      const value = this.colorSelect.value;
      if (!value)
        delete this.draft.color;
      else
        this.draft.color = value === "custom" ? this.customColor.value : value;
      this.customColor.hidden = value !== "custom";
      this.updatePreview();
    };
    this.customColor.oninput = () => {
      this.draft.color = this.customColor.value;
      this.updatePreview();
    };
    root.createEl("p", { cls: "ncl-icon-caption", text: this.options.monochrome ? localize("\u5F53\u524D\u4F7F\u7528\u5355\u8272\u6A21\u5F0F\u3002\u989C\u8272\u9009\u62E9\u4F1A\u4FDD\u5B58\uFF0C\u5173\u95ED\u5355\u8272\u6A21\u5F0F\u540E\u751F\u6548\u3002") : localize("\u9884\u8BBE\u989C\u8272\u9002\u914D\u6D45\u8272\u4E0E\u6DF1\u8272\u4E3B\u9898\u3002\u81EA\u5B9A\u4E49\u989C\u8272\u8BF7\u5206\u522B\u68C0\u67E5\u4E24\u79CD\u6A21\u5F0F\u4E0B\u7684\u53EF\u8BFB\u6027\u3002") });
    const actions = root.createDiv({ cls: "ncl-icon-actions" });
    const reset = actions.createEl("button", { text: localize("\u6062\u590D\u81EA\u52A8") });
    reset.onclick = () => {
      this.draft = {};
      this.colorSelect.value = "";
      this.customColor.hidden = true;
      this.updatePreview();
      this.updateSelection();
    };
    const cancel = actions.createEl("button", { text: localize("\u53D6\u6D88") });
    cancel.onclick = () => this.close();
    const save = actions.createEl("button", { text: localize("\u4FDD\u5B58"), cls: "mod-cta" });
    save.onclick = async () => {
      if (this.pending)
        return;
      this.pending = true;
      save.disabled = true;
      try {
        await this.options.save(normalizeIconOverride(this.draft));
        this.close();
      } catch (error) {
        console.error("[Keyline] Icon settings save failed", error);
        new import_obsidian19.Notice(localize("\u56FE\u6807\u8BBE\u7F6E\u672A\u4FDD\u5B58\uFF0C\u8BF7\u91CD\u8BD5\u3002"));
      } finally {
        this.pending = false;
        save.disabled = false;
      }
    };
    this.updatePreview();
    search.focus();
  }
  updatePreview() {
    var _a, _b;
    const value = {
      ...this.options.base,
      icon: (_a = this.draft.icon) != null ? _a : this.options.base.icon,
      color: this.options.monochrome ? "gray" : (_b = this.draft.color) != null ? _b : this.options.base.color
    };
    paintIdentity(this.preview, value);
    this.summary.textContent = `${value.icon} \xB7 ${this.draft.icon ? localize("\u81EA\u5B9A\u4E49\u56FE\u6807") : localize("\u81EA\u52A8\u56FE\u6807")} / ${this.draft.color ? localize("\u81EA\u5B9A\u4E49\u989C\u8272") : localize("\u81EA\u52A8\u989C\u8272")}`;
    this.automatic.setAttribute("aria-pressed", String(!this.draft.icon));
  }
  updateSelection() {
    for (const button of Array.from(this.grid.querySelectorAll("button"))) {
      button.setAttribute("aria-pressed", String(button.dataset.icon === this.draft.icon));
    }
  }
  renderGrid(query) {
    var _a;
    const normalized = query.trim().toLowerCase();
    const term = (_a = SEARCH_WORDS[normalized]) != null ? _a : normalized;
    const matches = this.iconIds.filter((id) => id.includes(term));
    this.grid.replaceChildren();
    for (const icon of matches.slice(0, 64)) {
      const button = this.grid.createEl("button");
      button.type = "button";
      button.title = icon;
      button.dataset.icon = icon;
      button.setAttribute("aria-label", icon);
      button.tabIndex = this.grid.children.length === 1 ? 0 : -1;
      paintIdentity(button, { ...this.options.base, icon, color: "gray" });
      button.onclick = () => {
        this.grid.querySelectorAll("button").forEach((b) => b.tabIndex = b === button ? 0 : -1);
        this.draft.icon = icon;
        this.updatePreview();
        this.updateSelection();
      };
      button.onkeydown = (event) => {
        var _a2;
        const buttons = Array.from(this.grid.querySelectorAll("button"));
        const columns = Math.max(1, getComputedStyle(this.grid).gridTemplateColumns.split(/\s+/).length);
        const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : event.key === "ArrowDown" ? columns : event.key === "ArrowUp" ? -columns : 0;
        if (!step && event.key !== "Home" && event.key !== "End")
          return;
        event.preventDefault();
        const index = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : Math.min(buttons.length - 1, Math.max(0, buttons.indexOf(button) + step));
        buttons.forEach((b, i) => b.tabIndex = i === index ? 0 : -1);
        (_a2 = buttons[index]) == null ? void 0 : _a2.focus();
      };
    }
    this.count.textContent = matches.length ? localize`显示 ${Math.min(64, matches.length)} / ${matches.length} 个图标${matches.length > 64 ? localize("\uFF0C\u53EF\u7EE7\u7EED\u8F93\u5165\u5173\u952E\u8BCD\u7F29\u5C0F\u8303\u56F4") : ""}` : localize("\u6CA1\u6709\u5339\u914D\u7684\u56FE\u6807\uFF0C\u8BF7\u6362\u4E2A\u5173\u952E\u8BCD\u3002");
    this.updateSelection();
  }
  onClose() {
    this.contentEl.replaceChildren();
  }
};

// src/main.ts
var NotionBlock = class extends import_obsidian20.Plugin {
  constructor() {
    super(...arguments);
    this.surfaceCoordinator = new FloatingSurfaceCoordinator();
    this.syntaxPresentationGeneration = 0;
    this.optionRevealActive = false;
    this.manualRevealActive = false;
    this.nativeFileExplorer = null;
    this.fileIcons = null;
    this.shellControls = null;
    this.workspaceSwitcher = null;
    this.hintPresentations = /* @__PURE__ */ new Map();
    this.styledDocuments = /* @__PURE__ */ new Set();
    this.themeLayoutSaveTimer = null;
    this.themeLayoutMeasureFrame = null;
  }
  get syntaxRevealActive() {
    return this.optionRevealActive || this.manualRevealActive;
  }
  async onload() {
    var _a;
    await this.loadSettings();
    this.applyThemeLayoutSettings();
    this.refreshInterfacePresentation();
    this.fileIcons = new FileIconManager(this.app, () => this.settings.fileIcons);
    this.nativeFileExplorer = new NativeFileExplorerEnhancer(this.app, this.fileIcons);
    this.shellControls = new ShellControls(document);
    this.workspaceSwitcher = new WorkspaceSwitcher(
      this.app,
      document,
      workspaceRecoveryStore(this.app, (_a = this.manifest.dir) != null ? _a : `${this.app.vault.configDir}/plugins/${this.manifest.id}`),
      this.surfaceCoordinator,
      () => this.settings.workspaceSwitcher,
      () => this.addStatusBarItem()
    );
    this.app.workspace.onLayoutReady(() => {
      var _a2, _b, _c;
      (_a2 = this.fileIcons) == null ? void 0 : _a2.start();
      this.syncNativeFileExplorer();
      (_b = this.shellControls) == null ? void 0 : _b.start();
      (_c = this.workspaceSwitcher) == null ? void 0 : _c.start();
    });
    this.registerEvent(this.app.workspace.on("css-change", () => {
      var _a2, _b;
      (_a2 = this.shellControls) == null ? void 0 : _a2.refresh();
      (_b = this.workspaceSwitcher) == null ? void 0 : _b.refresh();
      this.refreshInterfacePresentation();
    }));
    this.registerEvent(this.app.workspace.on("layout-change", () => {
      var _a2, _b, _c, _d;
      this.applyThemeLayoutSettings();
      (_a2 = this.nativeFileExplorer) == null ? void 0 : _a2.refresh();
      (_b = this.fileIcons) == null ? void 0 : _b.refresh();
      (_c = this.shellControls) == null ? void 0 : _c.refresh();
      (_d = this.workspaceSwitcher) == null ? void 0 : _d.refresh();
      this.refreshInterfacePresentation();
    }));
    this.registerEvent(this.app.workspace.on("file-open", () => this.refreshFileIcons()));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.refreshFileIcons()));
    this.registerEvent(this.app.vault.on("rename", (file, oldPath) => {
      if (moveFileIconOverrides(this.settings.fileIcons, oldPath, file.path))
        void this.saveFileIconSettings();
      else
        this.refreshFileIcons();
    }));
    this.registerEvent(this.app.vault.on("delete", (file) => {
      if (moveFileIconOverrides(this.settings.fileIcons, file.path, null))
        void this.saveFileIconSettings();
      else
        this.refreshFileIcons();
    }));
    this.registerEvent(this.app.workspace.on("file-menu", (menu, file, _source, leaf) => {
      var _a2, _b;
      if ((_a2 = this.fileIcons) == null ? void 0 : _a2.ownsIcons()) {
        menu.addItem((item) => item.setTitle(localize("\u66F4\u6539\u56FE\u6807\u2026")).setIcon("palette").onClick(() => this.editFileIcon(file)));
      }
      const ownerDocument = (_b = leaf == null ? void 0 : leaf.view.containerEl.ownerDocument) != null ? _b : document;
      const lease = this.surfaceCoordinator.claim(
        ownerDocument,
        "native-menu",
        () => menu.hide()
      );
      menu.onHide(() => lease.release());
    }));
    this.registerEditorExtension([
      blockHandlesExtension(this),
      hideSyntaxExtension(this),
      editorLayoutExtension(),
      editableListSeparatorExtension(this),
      styledBlocksExtension(this),
      selectionToolbarExtension(this),
      blockSelectionExtension(this),
      blockKeymapExtension(this),
      slashMenuExtension(this),
      wikilinkInputExtension(this),
      mentionMenuExtension(this),
      blockFoldExtension()
    ]);
    this.addCommand({
      id: "switch-workspace-layout",
      name: localize("\u5207\u6362\u5DE5\u4F5C\u533A\u5E03\u5C40"),
      callback: () => {
        var _a2;
        return (_a2 = this.workspaceSwitcher) == null ? void 0 : _a2.openMenu();
      }
    });
    this.addCommand({
      id: "save-workspace-layout",
      name: localize("\u4FDD\u5B58\u5F53\u524D\u5DE5\u4F5C\u533A\u5E03\u5C40"),
      callback: () => {
        var _a2;
        return (_a2 = this.workspaceSwitcher) == null ? void 0 : _a2.saveCurrent();
      }
    });
    this.addCommand({
      id: "save-workspace-layout-as",
      name: localize("\u53E6\u5B58\u4E3A\u65B0\u5DE5\u4F5C\u533A\u5E03\u5C40"),
      callback: () => {
        var _a2;
        return (_a2 = this.workspaceSwitcher) == null ? void 0 : _a2.saveAs();
      }
    });
    this.addCommand({
      id: "restore-workspace-layout",
      name: localize("\u6062\u590D\u5207\u6362\u524D\u5DE5\u4F5C\u533A\u5E03\u5C40"),
      callback: () => {
        var _a2;
        return (_a2 = this.workspaceSwitcher) == null ? void 0 : _a2.restore();
      }
    });
    this.addCommand({
      id: "change-current-file-icon",
      name: localize("\u66F4\u6539\u5F53\u524D\u6587\u4EF6\u56FE\u6807"),
      checkCallback: (checking) => {
        var _a2;
        const file = this.app.workspace.getActiveFile();
        if (!file || !((_a2 = this.fileIcons) == null ? void 0 : _a2.ownsIcons()))
          return false;
        if (!checking)
          this.editFileIcon(file);
        return true;
      }
    });
    this.addCommand({
      id: "open-insert-menu",
      name: t("command.openInsertMenu"),
      editorCallback: (editor) => this.openInsertMenuAtCursor(editor)
    });
    this.addCommand({
      id: "toggle-markdown-source-markers",
      name: localize("\u5207\u6362 Markdown \u6E90\u7801\u7B26\u53F7\u663E\u793A"),
      editorCallback: () => {
        this.manualRevealActive = !this.manualRevealActive;
        this.refreshSyntaxPresentation();
        new import_obsidian20.Notice(this.manualRevealActive ? localize("\u5DF2\u663E\u793A Markdown \u6E90\u7801\u7B26\u53F7") : localize("\u5DF2\u6062\u590D\u9690\u85CF\u751F\u6548\u7684 Markdown \u7B26\u53F7"));
      }
    });
    this.addCommand({
      id: "go-to-next-suspicious-markdown-marker",
      name: localize("\u8DF3\u8F6C\u5230\u4E0B\u4E00\u4E2A\u53EF\u7591 Markdown \u7B26\u53F7"),
      editorCallback: (editor) => this.goToNextSuspiciousMarker(editor)
    });
    this.registerDomEvent(document, "keydown", (event) => {
      if (event.key === "Alt" && this.settings.revealSyntaxWithOption) {
        this.setOptionReveal(true);
      }
    });
    this.registerDomEvent(document, "keyup", (event) => {
      if (event.key === "Alt")
        this.setOptionReveal(false);
    });
    this.registerDomEvent(window, "blur", () => this.setOptionReveal(false));
    this.registerDomEvent(document, "visibilitychange", () => {
      if (document.hidden)
        this.setOptionReveal(false);
    });
    this.addSettingTab(new BlockPluginSettingTab(this.app, this));
  }
  onunload() {
    var _a, _b, _c, _d;
    if (this.themeLayoutSaveTimer !== null) {
      window.clearTimeout(this.themeLayoutSaveTimer);
      this.themeLayoutSaveTimer = null;
      void this.saveData(this.settings);
    }
    if (this.themeLayoutMeasureFrame !== null) {
      window.cancelAnimationFrame(this.themeLayoutMeasureFrame);
      this.themeLayoutMeasureFrame = null;
    }
    (_a = this.nativeFileExplorer) == null ? void 0 : _a.stop();
    this.nativeFileExplorer = null;
    (_b = this.fileIcons) == null ? void 0 : _b.stop();
    this.fileIcons = null;
    (_c = this.shellControls) == null ? void 0 : _c.stop();
    this.shellControls = null;
    (_d = this.workspaceSwitcher) == null ? void 0 : _d.stop();
    this.workspaceSwitcher = null;
    for (const presentation of this.hintPresentations.values())
      presentation.stop();
    this.hintPresentations.clear();
    this.clearThemeLayoutSettings();
    this.surfaceCoordinator.closeAll("unload");
    this.optionRevealActive = false;
    this.manualRevealActive = false;
  }
  goToNextSuspiciousMarker(editor) {
    const view = editor.cm;
    if (!view)
      return;
    const warnings = findAllSuspiciousMarkers(view.state);
    if (warnings === null) {
      new import_obsidian20.Notice(localize("\u7B14\u8BB0\u8FD8\u5728\u89E3\u6790\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002"));
      return;
    }
    const next = nextSuspiciousMarker(warnings, view.state.selection.main.head);
    if (!next) {
      new import_obsidian20.Notice(localize("\u672A\u53D1\u73B0\u53EF\u7591\u7684 Markdown \u6210\u5BF9\u7B26\u53F7\u3002"));
      return;
    }
    view.dispatch({
      selection: import_state8.EditorSelection.range(next.from, next.to),
      scrollIntoView: true
    });
    view.focus();
    new import_obsidian20.Notice(next.message);
  }
  setOptionReveal(active) {
    if (this.optionRevealActive === active)
      return;
    this.optionRevealActive = active;
    this.refreshSyntaxPresentation();
  }
  refreshSyntaxPresentation() {
    this.syntaxPresentationGeneration += 1;
    this.app.workspace.updateOptions();
  }
  openInsertMenuAtCursor(editor) {
    const view = editor.cm;
    if (!view)
      return;
    const head = view.state.selection.main.head;
    const coords = view.coordsAtPos(head);
    if (!coords)
      return;
    showNotionBlockInsertMenu(
      this,
      view,
      view.state.doc.lineAt(head).number,
      { x: coords.left, y: coords.bottom + 6 },
      { avoid: { top: coords.top, bottom: coords.bottom }, keepEditorFocus: true }
    );
  }
  async loadSettings() {
    const data = await this.loadData();
    this.settings = {
      ...DEFAULT_SETTINGS,
      ...data,
      themeLayout: normalizeThemeLayoutSettings(data == null ? void 0 : data.themeLayout),
      fileIcons: normalizeFileIconSettings(data == null ? void 0 : data.fileIcons),
      showHoverHints: (data == null ? void 0 : data.showHoverHints) === true
    };
  }
  async saveSettings() {
    var _a;
    if (this.themeLayoutSaveTimer !== null) {
      window.clearTimeout(this.themeLayoutSaveTimer);
      this.themeLayoutSaveTimer = null;
    }
    if (!this.settings.revealSyntaxWithOption)
      this.optionRevealActive = false;
    this.settings.themeLayout = normalizeThemeLayoutSettings(this.settings.themeLayout);
    this.applyThemeLayoutSettings();
    this.syncNativeFileExplorer();
    this.refreshFileIcons();
    (_a = this.workspaceSwitcher) == null ? void 0 : _a.refresh();
    this.refreshInterfacePresentation();
    await this.saveData(this.settings);
    this.refreshSyntaxPresentation();
  }
  /** Follow active windows/theme changes without polling or mutating notes. */
  refreshInterfacePresentation(extraDocument) {
    const documents = /* @__PURE__ */ new Set([document]);
    if (extraDocument)
      documents.add(extraDocument);
    this.app.workspace.iterateAllLeaves((leaf) => documents.add(leaf.view.containerEl.ownerDocument));
    for (const [doc, presentation] of this.hintPresentations) {
      if (!doc.defaultView || doc.defaultView.closed) {
        presentation.stop();
        this.hintPresentations.delete(doc);
      } else
        documents.add(doc);
    }
    for (const doc of documents) {
      let presentation = this.hintPresentations.get(doc);
      if (!presentation) {
        presentation = new HintPresentation(doc);
        this.hintPresentations.set(doc, presentation);
      }
      presentation.refresh(this.settings.showHoverHints);
    }
  }
  /** Live-preview a slider change, then persist the last value in the burst. */
  queueThemeLayoutSettingsSave() {
    this.settings.themeLayout = normalizeThemeLayoutSettings(this.settings.themeLayout);
    this.applyThemeLayoutSettings();
    if (this.themeLayoutSaveTimer !== null)
      window.clearTimeout(this.themeLayoutSaveTimer);
    this.themeLayoutSaveTimer = window.setTimeout(() => {
      this.themeLayoutSaveTimer = null;
      void this.saveData(this.settings);
    }, 140);
  }
  /** Reset is a discrete action, so it is committed before the button returns. */
  async saveThemeLayoutSettingsNow() {
    if (this.themeLayoutSaveTimer !== null) {
      window.clearTimeout(this.themeLayoutSaveTimer);
      this.themeLayoutSaveTimer = null;
    }
    this.settings.themeLayout = normalizeThemeLayoutSettings(this.settings.themeLayout);
    this.applyThemeLayoutSettings();
    await this.saveData(this.settings);
  }
  syncNativeFileExplorer() {
    if (!this.nativeFileExplorer)
      return;
    if (this.settings.nativeFileExplorerEnhancements)
      this.nativeFileExplorer.start();
    else
      this.nativeFileExplorer.stop();
  }
  refreshFileIcons() {
    var _a, _b;
    (_a = this.fileIcons) == null ? void 0 : _a.refresh();
    (_b = this.nativeFileExplorer) == null ? void 0 : _b.refresh();
  }
  async saveFileIconSettings() {
    this.settings.fileIcons = normalizeFileIconSettings(this.settings.fileIcons);
    await this.saveData(this.settings);
    this.refreshFileIcons();
  }
  editFileIcon(file) {
    var _a, _b;
    if (!((_a = this.fileIcons) == null ? void 0 : _a.ownsIcons()))
      return;
    const settings = normalizeFileIconSettings(this.settings.fileIcons);
    const initial = (_b = settings.files[file.path]) != null ? _b : {};
    delete settings.files[file.path];
    new FileIconModal(this.app, {
      title: file.path,
      initial,
      base: resolveFileIcon(settings, file.path, file instanceof import_obsidian20.TFolder),
      monochrome: settings.monochrome,
      save: async (value) => {
        var _a2;
        if (!((_a2 = this.fileIcons) == null ? void 0 : _a2.ownsIcons()))
          throw new Error(localize("\u56FE\u6807\u5DF2\u4EA4\u7531\u5176\u4ED6\u63D2\u4EF6\u7BA1\u7406"));
        if (this.app.vault.getAbstractFileByPath(file.path) !== file)
          throw new Error(localize("\u6587\u4EF6\u5DF2\u88AB\u5220\u9664"));
        if (Object.keys(value).length)
          this.settings.fileIcons.files[file.path] = value;
        else
          delete this.settings.fileIcons.files[file.path];
        await this.saveFileIconSettings();
      }
    }).open();
  }
  editFileIconType(kind) {
    var _a;
    const builtin = ICON_DEFAULTS[kind];
    new FileIconModal(this.app, {
      title: localize`${builtin.label} · 类型默认`,
      initial: (_a = this.settings.fileIcons.types[kind]) != null ? _a : {},
      base: { ...builtin, kind, iconSource: localize("\u5185\u7F6E\u9ED8\u8BA4"), colorSource: localize("\u5185\u7F6E\u9ED8\u8BA4") },
      monochrome: this.settings.fileIcons.monochrome,
      save: async (value) => {
        if (Object.keys(value).length)
          this.settings.fileIcons.types[kind] = value;
        else
          delete this.settings.fileIcons.types[kind];
        await this.saveFileIconSettings();
      }
    }).open();
  }
  applyThemeLayoutSettings() {
    const variables = themeLayoutCssVariables(this.settings.themeLayout);
    const documents = /* @__PURE__ */ new Set([document]);
    this.app.workspace.iterateAllLeaves((leaf) => {
      documents.add(leaf.view.containerEl.ownerDocument);
    });
    for (const doc of documents) {
      const target = doc.body;
      if (!target)
        continue;
      for (const [name, value] of Object.entries(variables)) {
        target.style.setProperty(name, value);
      }
      this.styledDocuments.add(doc);
    }
    this.scheduleThemeLayoutRemeasure();
  }
  /**
   * CSS layout changes must invalidate both the height map and the detached
   * cursor layer. CodeMirror detects vertical changes during measurement,
   * but a separator-width-only change does not set geometryChanged. A same-
   * selection transaction redraws that native cursor layer without changing
   * content, focus, undo history, or logical caret position.
   */
  scheduleThemeLayoutRemeasure() {
    if (this.themeLayoutMeasureFrame !== null)
      return;
    this.themeLayoutMeasureFrame = window.requestAnimationFrame(() => {
      this.themeLayoutMeasureFrame = null;
      this.app.workspace.iterateAllLeaves((leaf) => {
        const editor = leaf.view.editor;
        const view = editor == null ? void 0 : editor.cm;
        if (!view)
          return;
        view.dispatch({
          selection: view.state.selection,
          annotations: import_state8.Transaction.addToHistory.of(false)
        });
        view.requestMeasure();
      });
    });
  }
  clearThemeLayoutSettings() {
    const names = Object.keys(themeLayoutCssVariables(DEFAULT_SETTINGS.themeLayout));
    for (const doc of this.styledDocuments) {
      const target = doc.body;
      if (!target)
        continue;
      for (const name of names)
        target.style.removeProperty(name);
    }
    this.styledDocuments.clear();
  }
};
