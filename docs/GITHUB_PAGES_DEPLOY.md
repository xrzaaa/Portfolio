# GitHub Pages 部署指南

本文档对应当前仓库的静态站方案（`index.html + styles.css + script.js`）。

## 1. 上线前检查

1. 确认首页文件在仓库根目录：
   - `index.html`
   - `styles.css`
   - `script.js`
2. 确认素材目录存在：
   - `assets/images/`
3. 确认简历文件路径可访问：
   - `protfolio/简历.pdf`

## 2. 推送代码到 GitHub

在本地仓库根目录执行：

```bash
git add .
git commit -m "feat: build portfolio website and pages docs"
git push origin main
```

## 3. 开启 GitHub Pages

1. 打开仓库页面（`xrzaaa/Portfolio`）。
2. 进入 `Settings`。
3. 左侧选择 `Pages`。
4. 在 `Build and deployment` 中设置：
   - `Source`: Deploy from a branch
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. 点击 `Save`。

保存后 GitHub 会自动构建和发布。

## 4. 访问地址

默认地址通常为：

- `https://xrzaaa.github.io/Portfolio/`

首次发布一般需要几十秒到几分钟。

## 5. 更新网站内容

每次更新后只需重复以下命令：

```bash
git add .
git commit -m "chore: update portfolio content"
git push origin main
```

GitHub Pages 会自动重新部署。

## 6. 常见问题排查

### 6.1 页面是 404
- 检查 `Settings > Pages` 是否已选择 `main` 和 `/ (root)`。
- 检查仓库根目录是否存在 `index.html`。

### 6.2 图片不显示
- 检查路径是否区分大小写。
- 当前项目应使用 `assets/images/...` 的相对路径。

### 6.3 样式或脚本没生效
- 确认 `styles.css` 和 `script.js` 在仓库根目录。
- 浏览器强制刷新（`Ctrl + F5`）。

## 7. 可选增强（后续）

1. 绑定自定义域名（在 `Pages` 页面配置 `Custom domain`）。
2. 添加 `CNAME` 文件。
3. 增加 `sitemap.xml` 与 `robots.txt`。
4. 接入统计（如 GA4 或 Umami）。
