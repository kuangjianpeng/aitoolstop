# VitePress files

Place these files in the repository root:

```text
package.json
index.md
.gitignore
.vitepress/config.mjs
```

Install dependencies and start locally:

```bash
pnpm install
pnpm run docs:dev
```

Build for production:

```bash
pnpm install
pnpm run docs:build
cp -r .vitepress/dist dist
```

The build output is generated in `.vitepress/dist/`. The copy command places it in `dist/`; configure the website root to point to that directory.

The existing `index.html` is not used by VitePress. Move its content into `index.md` or recreate the page using VitePress theme components.
