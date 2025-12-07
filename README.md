# Lumina Studio

🎨 一个伪装成高端数字设计工作室的个人仪表盘/代理服务。

## ✨ 功能特性

- **Lumina Studio 主题**：创意散乱布局，3D 倾斜交互，Unsplash 艺术图片
- **详情页系统**：点击卡片进入沉浸式项目详情页
- **代理服务**：VLESS/VMess/Trojan 协议支持，Cloudflare 隧道集成
- **Komari 监控**：集成轻量级监控探针
- **完美伪装**：无任何敏感字眼，看起来就是个设计师作品集

## 🚀 快速开始

### 1. 配置环境变量

复制 `.env.example` 为 `.env` 并修改配置：

```bash
cp .env.example .env
```

**必填项：**
- `UUID`: 代理服务UUID
- `KOMARI_ENDPOINT`: Komari监控端点
- `KOMARI_TOKEN`: Komari访问令牌

### 2. 使用预构建镜像 (GHCR)

```bash
docker run -d \
  --name lumina-studio \
  --restart always \
  -p 3000:3000 \
  -e UUID="您的UUID" \
  -e KOMARI_ENDPOINT="您的Komari地址" \
  -e KOMARI_TOKEN="您的Komari令牌" \
  ghcr.io/debbide/lumina-studio:latest
```

或者使用 Docker Compose：

```yaml
services:
  lumina-studio:
    image: ghcr.io/debbide/lumina-studio:latest
    container_name: lumina-studio
    restart: always
    ports:
      - "3000:3000"
    environment:
      - UUID=your-uuid
      - KOMARI_ENDPOINT=https://km.example.com
      - KOMARI_TOKEN=your-token
```

### 3. 手动构建

```bash
docker build -t lumina-studio:latest .
```

## 🛠️ 配置说明

### 环境变量

| 变量名 | 说明 | 默认值 |
|-------|------|--------|
| `PORT` | HTTP服务端口 | 3000 |
| `UUID` | 代理服务UUID | 必填 |
| `KOMARI_ENDPOINT` | Komari监控端点 | 可选 |
| `KOMARI_TOKEN` | Komari令牌 | 可选 |
| `ARGO_DOMAIN` | Cloudflare隧道域名 | 空（临时隧道） |
| `ARGO_AUTH` | Cloudflare隧道Token | 空（临时隧道） |
| `NAME` | 节点名称前缀 | 空 |

详细配置请参考 `.env.example`

## 📝 更新日志

### v1.0.0
- ✅ Komari监控集成
- ✅ 节点命名使用IP国家代码
- ✅ 添加导航页面(Nav Dashboard)
- ✅ 移除硬编码UUID
- ✅ 支持Cloudflare固定/临时隧道

## 📄 许可证

GPL-3.0 License

## 🙏 致谢

本项目基于 [eooce/nodejs-argo](https://github.com/eooce/nodejs-argo) 进行适当修改和功能扩展。

**特别感谢原作者 [@eooce](https://github.com/eooce)** 提供的优秀基础框架！

**主要修改内容：**
- 🎨 替换为 Lumina Studio 伪装主题
- 🔕 静默运行模式（无日志输出）
- 📊 集成 Komari 监控支持
- 🔧 零配置部署（UUID 默认值）
- 🌐 多架构支持（amd64/arm64）

**其他致谢：**
- [Komari Monitor](https://github.com/komari-monitor) - 轻量级监控系统
- [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) - 安全隧道服务
