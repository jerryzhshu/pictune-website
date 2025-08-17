# 应用文档系统

这个项目包含了一个完整的应用文档展示系统，支持多个应用的隐私政策和用户条款等文档，使用 Markdown 文件管理内容。

## 功能特性

- 🎯 **多应用支持**：支持任意数量的应用文档
- 📝 **多文档类型**：支持隐私政策、用户条款等多种文档类型
- 📝 **Markdown 管理**：使用 Markdown 文件管理内容，易于编辑和维护
- 📱 **响应式设计**：适配桌面和移动设备
- 🌙 **深色模式**：自动适配系统深色/浅色模式
- ⚡ **静态生成**：使用 Next.js 静态生成，加载速度快
- 🔗 **SEO 友好**：每个页面都有独立的 URL
- 🔄 **动态发现**：自动发现 `content/apps/` 目录下的所有应用和文档
- 🎯 **简洁设计**：纯净的文档展示，无额外元素
- 🎨 **现代样式**：参考 Framer 设计风格，优化排版和间距

## 页面结构

```
/content/apps/             # 应用文档目录
  ├── pictune/            # PicTune 应用
  │   ├── privacy.md      # 隐私政策
  │   └── terms.md        # 用户条款
  └── tohdr/              # ToHDR 应用
      ├── privacy.md      # 隐私政策
      └── terms.md        # 用户条款
/src/app/docs/[app]/[docType]/ # 动态路由页面
  └── page.tsx            # 主页面组件
/src/components/           # 组件目录
  ├── PrivacyLayout.tsx   # 通用布局组件
  └── MarkdownRenderer.tsx # Markdown 渲染组件
/src/lib/                  # 工具函数
  └── markdown.ts         # Markdown 文件处理工具
```

## 访问地址

- PicTune 隐私政策：`/docs/pictune/privacy`
- PicTune 用户条款：`/docs/pictune/terms`
- ToHDR 隐私政策：`/docs/tohdr/privacy`
- ToHDR 用户条款：`/docs/tohdr/terms`

## 添加新应用

要添加新的应用文档，只需要：

1. 在 `content/apps/` 目录下创建新的应用文件夹（例如：`newapp/`）
2. 在应用文件夹中创建文档文件（`privacy.md`、`terms.md` 等）
3. 按照现有格式编写文档内容
4. 系统会自动发现并生成对应的页面

### 文件结构示例

```
content/apps/
├── pictune/              # PicTune 应用
│   ├── privacy.md        # 隐私政策
│   └── terms.md          # 用户条款
├── tohdr/                # ToHDR 应用
│   ├── privacy.md        # 隐私政策
│   └── terms.md          # 用户条款
└── newapp/               # 新应用
    ├── privacy.md        # 隐私政策
    └── terms.md          # 用户条款
```

### Markdown 文件格式

```markdown
# 应用名称 文档标题

文档内容...

## 章节标题

章节内容...

## 联系我们

邮箱：contact@yourapp.com
```

### 文件命名规则

- 应用文件夹名必须是小写字母，可以使用连字符（-）或下划线（_）
- 文档文件名必须是支持的文档类型（如：`privacy.md`、`terms.md`）
- 应用文件夹名将作为 URL 路径的一部分（例如：`newapp/` → `/docs/newapp/`）
- 文档内容完全由 Markdown 文件决定，系统不会提取或修改内容
- 页面设计简洁，无返回按钮和版权声明等额外元素

## 支持的文档类型

目前支持的文档类型：
- `privacy.md` - 隐私政策
- `terms.md` - 用户条款

## 自定义样式

系统使用 CSS 变量来管理颜色主题：

- `--background-primary`: 主背景色
- `--background-secondary`: 次要背景色
- `--label-primary`: 主要文字颜色
- `--label-secondary`: 次要文字颜色
- `--label-tertiary`: 第三级文字颜色
- `--label-quaternary`: 第四级文字颜色

这些变量会自动根据系统的深色/浅色模式切换。

## 开发

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 添加新应用

1. 在 `content/apps/` 目录下创建新的应用文件夹
2. 在应用文件夹中创建 `privacy.md` 和 `terms.md` 文件
3. 按照现有格式编写文档内容
4. 保存文件后，系统会自动发现并生成页面
5. 访问 `/docs/[应用名称]/[文档类型]` 查看效果

### 文件结构示例

```
content/apps/
├── pictune/          # PicTune 应用
├── tohdr/            # ToHDR 应用
└── your-app/         # 您的新应用
    ├── privacy.md    # 隐私政策
    └── terms.md      # 用户条款
```

### 支持的 Markdown 语法

- 标题：`# ## ###`
- 粗体：`**粗体文字**`
- 斜体：`*斜体文字*`
- 列表：`- 项目1` 或 `1. 项目1`
- 链接：`[链接文字](URL)`
- 代码：`` `代码` ``
- 引用：`> 引用文字`
- 分割线：`---`

## 部署

项目使用 Next.js 构建，可以部署到：

- Vercel（推荐）
- Netlify
- 任何支持静态站点的平台

构建命令：
```bash
npm run build
```

## 维护

- 定期更新文档内容
- 检查联系邮箱是否有效
- 确保所有链接正常工作
- 测试深色/浅色模式切换
- 验证 Markdown 文件格式正确
