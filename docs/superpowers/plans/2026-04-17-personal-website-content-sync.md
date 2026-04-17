# Personal Website Content Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the existing personal website copy to match the latest resume while preserving the current page structure and styling.

**Architecture:** Keep the React/Vite component tree unchanged and update only the localized content sources plus the resume download URL. Verify the content loads correctly by running a production build after the edits.

**Tech Stack:** React 18, TypeScript, Vite, react-i18next, JSON locale files

---

### Task 1: Capture current content contract

**Files:**
- Modify: `personal-resume-website/locales/zh/translation.json`
- Modify: `personal-resume-website/locales/en/translation.json`
- Verify: `personal-resume-website/types.ts`

- [ ] **Step 1: Inspect the data shape used by the current UI**

Run: `sed -n '1,240p' personal-resume-website/types.ts`

Expected: object types for hero, experience, projects, research, and education fields that the locale files must continue to satisfy.

- [ ] **Step 2: Confirm the locale files currently parse before any edits**

Run: `node -e "JSON.parse(require('fs').readFileSync('personal-resume-website/locales/zh/translation.json','utf8')); JSON.parse(require('fs').readFileSync('personal-resume-website/locales/en/translation.json','utf8')); console.log('locale json ok')"`

Expected: `locale json ok`

### Task 2: Update Chinese resume content

**Files:**
- Modify: `personal-resume-website/locales/zh/translation.json`

- [ ] **Step 1: Write the failing content assertion script for the new Chinese resume facts**

Create a temporary verification command around these assertions:

```bash
node - <<'NODE'
const fs = require('fs');
const zh = JSON.parse(fs.readFileSync('personal-resume-website/locales/zh/translation.json', 'utf8'));
if ((zh.experience.items || []).some(item => item.company && item.company.includes('字节跳动'))) {
  throw new Error('ByteDance content already present before edit');
}
console.log('expected failure target confirmed');
NODE
```

Expected: the command succeeds only if ByteDance content is still absent before the edit.

- [ ] **Step 2: Replace Chinese copy with resume-aligned content**

Update:

```text
name/title/motto
about.p1/about.p2
experience.items[0..1]
projects.items[0..1]
research.items[0]
education.items[0]
footer
```

Constraints:
- Keep current section structure unchanged.
- Add the ByteDance internship as the first experience item.
- Keep one second project entry without adding a new section.
- Preserve `Albert Chen` branding where appropriate.

- [ ] **Step 3: Re-run a Chinese content assertion**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const zh = JSON.parse(fs.readFileSync('personal-resume-website/locales/zh/translation.json', 'utf8'));
if (!zh.experience.items[0].company.includes('字节跳动')) throw new Error('missing ByteDance experience');
if (!zh.projects.items[0].name.includes('DataAgent')) throw new Error('missing DataAgent project');
if (!zh.education.items[0].courses.includes('英语')) throw new Error('missing English ability');
console.log('zh content ok');
NODE
```

Expected: `zh content ok`

### Task 3: Sync English copy and resume download link

**Files:**
- Modify: `personal-resume-website/locales/en/translation.json`
- Modify: `personal-resume-website/components/About.tsx`

- [ ] **Step 1: Write the failing content assertion for the English resume sync**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const en = JSON.parse(fs.readFileSync('personal-resume-website/locales/en/translation.json', 'utf8'));
if ((en.experience.items || []).some(item => item.company && item.company.includes('ByteDance'))) {
  throw new Error('ByteDance content already present before edit');
}
console.log('expected failure target confirmed');
NODE
```

Expected: the command succeeds only if the English file still needs updating.

- [ ] **Step 2: Update the English locale and resume download target**

Update:

```text
personal-resume-website/locales/en/translation.json
personal-resume-website/components/About.tsx
```

Constraints:
- Keep English content semantically aligned with the updated Chinese content.
- Point the resume download button at the current local resume source or a stable exported asset URL.

- [ ] **Step 3: Re-run the English assertion**

Run:

```bash
node - <<'NODE'
const fs = require('fs');
const en = JSON.parse(fs.readFileSync('personal-resume-website/locales/en/translation.json', 'utf8'));
if (!en.experience.items[0].company.includes('ByteDance')) throw new Error('missing ByteDance experience');
if (!en.projects.items[0].name.includes('DataAgent')) throw new Error('missing DataAgent project');
console.log('en content ok');
NODE
```

Expected: `en content ok`

### Task 4: Verify production build

**Files:**
- Verify: `package.json`

- [ ] **Step 1: Run the full production build**

Run: `npm run build`

Expected: TypeScript and Vite build complete successfully with exit code `0`.

- [ ] **Step 2: Inspect git diff for only intended content changes**

Run: `git status --short && git diff -- personal-resume-website/components/About.tsx personal-resume-website/locales/zh/translation.json personal-resume-website/locales/en/translation.json`

Expected: only the locale content and resume download target changed for implementation files.
