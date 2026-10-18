# VitePress files

中文开发、预览和发布流程请先阅读 [DEVELOPMENT.md](./DEVELOPMENT.md)。

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
```

The build output is generated in `.vitepress/dist/`. The Baota website root should point to `/www/wwwroot/aitoolstop.cn/.vitepress/dist`.

The existing `index.html` is not used by VitePress. Move its content into `index.md` or recreate the page using VitePress theme components.
