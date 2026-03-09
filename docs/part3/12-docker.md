# 12 Docker 部署：容器化养虾

如果你已经听说过 Docker，或者你的服务器上已经装了 Docker，这种方式会让你觉得非常“清爽”。

### 1. 为什么用 Docker？
*   **环境隔离**：不会把你系统的环境搞乱。
*   **一键升级**：更新镜像就能获得最新功能。
*   **快速迁移**：换服务器只需要复制一个 `yml` 文件。

### 2. 快速启动脚本
```bash
# 克隆仓库
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# 启动
docker-compose up -d
```

### 3. 注意事项（必看）
一定要挂载这两个目录，否则你容器一重启，配置和聊天记录就全丢了：
*   `/root/.openclaw`：存放运行状态。
*   `/workspace`：存放你的配置文件。

### 4. 端口说明
*   **18789**：Gateway 的通信端口（核心）。
*   **3000**：Web 管理页面的端口。

---
*本章内容根据花生的《OpenClaw 橙皮书》改编，专为小白优化。*
