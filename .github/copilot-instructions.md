---
name: soc-typescript
version: 1.0
created: 2026-03-28
---

# Copilot Workspace Instructions

Welcome to the Soc Ops (Social Bingo) codebase! This file provides essential guidance for AI agents and contributors to be productive and consistent in this workspace.

## Key Links

- [Lab Guide](workshop/GUIDE.md) — Start here for a full walkthrough
- [Setup & Context](workshop/01-setup.md)
- [Design Principles](workshop/02-design.md)
- [Frontend Design Skill](.github/instructions/frontend-design.instructions.md)
- [Tailwind v4 Practices](.github/instructions/tailwind-4.instructions.md)
- [Contributing](CONTRIBUTING.md)

## Build & Test Commands

- **Install:** `npm install`
- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Test:** `npm run test`

## Project Conventions

- **Frontend:** React + TypeScript, Vite, Tailwind CSS v4 (see [Tailwind v4 Practices](.github/instructions/tailwind-4.instructions.md))
- **Design:** Avoid generic "AI slop". See [Frontend Design Skill](.github/instructions/frontend-design.instructions.md) for creative, distinctive UI guidance.
- **Docs:** Do not duplicate content from `workshop/` or `README.md`. Link to guides and docs instead.
- **Dev Containers:** Supported via `.devcontainer/devcontainer.json` (see README)
- **Deployment:** GitHub Pages (auto-deploy on push to `main`)

## Pitfalls & Tips

- **Node.js 22+ required**
- Always use the provided scripts for build/test/lint
- Reference the [Lab Guide](workshop/GUIDE.md) for context and step-by-step instructions
- For UI work, always review [Frontend Design Skill](.github/instructions/frontend-design.instructions.md) and [Tailwind v4 Practices](.github/instructions/tailwind-4.instructions.md) before starting

## Example Prompts

- "Design a new animated StartScreen for the bingo app, using a unique font and color scheme."
- "Add a new test for bingoLogic.ts covering diagonal wins."
- "Update the README to link to the latest workshop step."

## Extending This Workspace

- To add new agent customizations, see the [agent-customization skill](https://github.com/features/copilot).
- For new instructions, prompts, or skills, use `/create-instruction`, `/create-prompt`, or `/create-skill` and follow the [Lab Guide](workshop/GUIDE.md).

---

**Link, don't embed:** Always link to existing docs and guides. Do not copy or duplicate content from `workshop/`, `README.md`, or other documentation files.
