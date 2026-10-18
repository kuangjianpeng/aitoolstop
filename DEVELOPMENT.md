# 网站开发与发布注意事项

本文档适用于 `aitoolstop` 网站。以后修改首页、模型页面、样式或静态资源时，按本文档执行。

## 一、部署结构

- 本地源码目录：仓库根目录 `D:/github-upload`
- VitePress 构建命令：`pnpm docs:build`
- 构建产物目录：`.vitepress/dist`
- 宝塔网站根目录：`/www/wwwroot/aitoolstop.cn/.vitepress/dist`
- 宝塔 Git 部署：只负责从 GitHub 拉取文件，不重复执行构建

因此，源码修改后必须重新构建，才能更新线上使用的 `.vitepress/dist` 文件。

## 二、默认工作规则

本地修改默认只用于本地预览：

- 不自动执行 `git add`
- 不自动提交
- 不自动推送 GitHub
- 不触发宝塔发布

只有明确收到“提交并推送到 GitHub”或“发布上线”后，才执行发布流程。

## 三、本地修改与预览

1. 修改 `index.md`、`public/`、`models/` 或其他项目文件。
2. 启动本地预览：

   ```bash
   pnpm docs:dev
   ```

3. 在浏览器打开终端显示的本地地址，通常是 `http://localhost:5173/`。
4. 修改完成后先在本地检查页面、链接、图片和移动端布局。

本地预览不会同步 GitHub，也不会影响线上网站。

## 四、提交并发布到线上

只有在确认要发布时执行以下流程：

1. 重新生成 VitePress 构建产物：

   ```bash
   pnpm docs:build
   ```

2. 检查构建是否成功。构建失败时不要提交或推送。
3. 将源码和构建产物一起提交：

   ```bash
   git add -A
   git add -f .vitepress/dist
   git commit -m "更新网站内容"
   git push origin main
   ```

也可以双击仓库中的 `publish-site.cmd`，它会依次执行构建、提交和推送。该脚本只在明确决定发布时使用。

4. GitHub 推送成功后，等待宝塔 Git 部署拉取最新提交。
5. 打开线上网站检查首页、模型页面、静态资源和外部链接。

## 五、线上没有更新时的检查顺序

按下面顺序检查：

1. GitHub 是否已经出现最新提交。
2. 最新提交是否包含 `.vitepress/dist` 中的更新文件。
3. 宝塔 Git 部署是否已经拉取该提交。
4. 浏览器是否缓存了旧的页面或 `site.js`。

浏览器仍显示旧内容时，先按 `Ctrl + F5` 强制刷新，或在网址后添加版本参数，例如：

```text
https://www.aitoolstop.cn/?v=最新提交短哈希
```

如果强制刷新后仍未更新，再检查宝塔 Git 部署日志和网站根目录是否仍为：

```text
/www/wwwroot/aitoolstop.cn/.vitepress/dist
```

## 六、提交前检查清单

- [ ] 本地页面预览正常
- [ ] 桌面端和移动端布局正常
- [ ] 模型、工具分类数量与实际卡片数量一致
- [ ] 页面内链接和静态资源没有 404
- [ ] 已执行 `pnpm docs:build`
- [ ] `.vitepress/dist` 已包含本次修改
- [ ] 确认要发布后，才执行 Git 提交和推送
- [ ] 推送后已检查线上页面

## 七、重要提醒

- 只修改源码但不重新构建，线上不会得到最新页面。
- 只执行构建但不提交推送，GitHub 和线上也不会更新。
- 本地预览正常不代表线上已经发布。
- 未收到明确发布指令时，保留本地修改，不执行任何 Git 同步操作。
