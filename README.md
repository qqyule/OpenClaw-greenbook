<div align="center">

<img src="./docs/public/lobster.png" alt="OpenClaw Logo" width="200"/>

# 🦀 OpenClaw 绿皮书

**从入门到精通，更适合小白阅读的开源数字员工指南**

[![VitePress](https://img.shields.io/badge/Powered_by-VitePress-42b883?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vitepress.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![Status](https://img.shields.io/badge/Status-Active-success.svg?style=for-the-badge)]()

[**📖 阅读文档**](https://openclaw-cookbook.justidea.cn) | [**🛠️ 快速开始**](#快速开始) | [**⭐ 支持项目**](#社区支持--)

</div>

---

## 💡 简介 (Introduction)

**OpenClaw 绿皮书** 是一份为广大非开发专业背景的用户及开发者群体诚意编写的“保姆级”实战说明书。不同于官方晦涩难懂的代码文档，这份绿皮书直击痛点，通过图文并茂、深入浅出的形式，手把手带你：

- **零基础部署** 一个开源、自托管的超级数字员工。
- 通过 **飞书、钉钉、Telegram 等 20+ 渠道** 接入这位不知疲倦的数字劳动力。
- 配置市面上最流行的**顶级 AI 模型**（Claude、GPT-4系列、国产的大模型如 DeepSeek 和 免费GLM 等）。
- 驾驭强大的 **Skills（智能体技能）系统** 并深入理解其独特生态：养虾文化。

> ℹ️ _“这不只是用一套聊天机器人，这是在给自己配备一个二十四小时待命的执行团队。”_

---

## 🎯 核心特色 (Features)

✨ **完全中文化，告别生硬术语** —— 使用符合国人理解逻辑的讲述口吻。  
🚀 **理论实操兼备** —— 避开空泛的 PPT 语言，直指环境搭建与调仓实战。  
🛡️ **安全与成本先行** —— 全视角解析开源 AI 智能体的安全挑战与预算管控最佳实践。  
🦞 **深度解构生态** —— 全面剖析从 0 到 1 的技能构建以及独特的 **ClawHub** 社区模式。

---

## 目录索引 (Table of Contents)

本书由浅入深，划分为以下八大部分：

- 🦀 **Part 1：认识 OpenClaw**（核心概念、发展痛点、创始人故事）
- 🏗️ **Part 2：技术架构透视**（解密记忆引擎、Agent 工作区机制）
- 📦 **Part 3：云端与本地部署方案**（手到擒来的环境安装指北）
- 🔌 **Part 4：全渠道接入与打通**（国内/国际主流通讯工具对接）
- ⚙️ **Part 5：Skills 技能开发指南**（玩转 ClawHub 技能市场）
- 🧠 **Part 6：智脑引擎与模型配置**（各大厂模型的低成本最优配置链路）
- 🔐 **Part 7：安全护栏与算力算账**（数据本地管理与防“破产”策略）
- 🌐 **Part 8：云养虾宇宙与国内生态**（探索这套现象级 Agent 的狂欢时刻）

---

## 🛠️ 快速开始 (Quickstart)

要启动并在本地预览这本“绿皮书”文档？非常容易！由于该文档是由优秀的 [VitePress](https://vitepress.dev/) 框架驱动开发的，你可以通过以下指令轻松在本地启动属于你自己的服务：

### 1. 环境准备

你需要安装 [Node.js](https://nodejs.org/zh-cn/) (18.x+) 以及包管理工具 [pnpm](https://pnpm.io/zh/)：

```bash
# 你可以选择任意自己喜欢的包管理，推荐 pnpm 以获得更好的速度
npm install -g pnpm
```

### 2. 获取文档源码并安装依赖

克隆该绿皮书项目代码：

```bash
git clone https://github.com/qqyule/OpenClaw-greenbook.git
cd openclaw-vitpress
pnpm install
```

### 3. 本地启动服务进行预览

输入下面指令启动服务器构建：

```bash
pnpm docs:dev
```

然后打开浏览器访问 `http://localhost:5173` 来尽情沉浸在你的文档中吧！

---

### 🌐 生产部署 (Build for Production)

如果你希望编译构建并托管在外网服务器或者 Github Pages 等：

```bash
pnpm docs:build
```

此时你将收获 `docs/.vitepress/dist` 目录内所有预渲染完毕的零魔法纯静态文件，将这些上传即可发布体验！

---

## 🧱 社区支持 (Contributing)

我们极度欢迎来自**全世界的养虾人**（指 OpenClaw 用户）参与进来完善！
无论是：

- 提出优化措辞的 PR（Pull Request）
- 报告新的拼写错误在 Issue 中
- 分享你在使用过程中的独特实战干货，从而融入这本指南

**绿皮书** 的内容源于由衷的热爱和分享精神，它的更迭离不开每一位开发者的建言献策。

---

## 📜 许可证协议 (License)

本项目文档内容完全开源，并在 [MIT License](./LICENSE) 协议下发布。这意味着该指南与教程均免费为你及所有的开发者开放使用、学习及拓展分发。

---

<p align="center">
  <small>由社区 💙 倾力构建，献给所有的“云养虾大军”及前行在 Agent 探索之路上的你。</small>
</p>
