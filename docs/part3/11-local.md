# 11 本地安装：在自己的电脑上养虾

如果你想在自己的电脑（Mac 或 Linux，Windows 推荐使用 WSL2）上运行 OpenClaw，请按照以下步骤操作。

### 1. 准备环境
你需要安装 **Node.js**（版本建议在 22 以上）。
*   在终端输入 `node -v` 检查版本。
*   如果没有安装，请去 [nodejs.org](https://nodejs.org) 下载安装。

### 2. 一条命令安装
打开你的终端（Terminal），输入：
```bash
npm install -g openclaw@latest
```
这会把 OpenClaw 引擎安装到你的全局环境下。

### 3. 初始化并运行
安装完成后，输入：
```bash
openclaw onboard --install-daemon
```
这会启动一个“保姆级”的初始化引导，它会问你：
*   你想用哪个 AI 模型？
*   你的 API Key 是什么？
*   你想接入哪个聊天平台？

### 4. 保持运行
加了 `--install-daemon` 参数后，OpenClaw 会在后台悄悄运行，即使你关掉终端窗口，它也依然在线。

---
*本章内容根据花生的《OpenClaw 橙皮书》改编，专为小白优化。*
