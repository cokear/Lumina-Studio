# Nav Dashboard

🎯 一个集成了导航页面、代理服务和监控的Docker应用。

## ✨ 功能特性

- **导航页面**：精美的Dashboard，包含搜索功能和常用网站快捷方式
- **代理服务**：VLESS/VMess/Trojan协议支持，Cloudflare隧道集成
- **Komari监控**：替代哪吒的轻量级监控方案
- **节点订阅**：自动生成订阅链接，节点命名使用IP国家代码

## 🚀 快速开始

### 1. 配置环境变量

复制 `.env.example` 为 `.env` 并修改配置：

```bash
cp .env.example .env
```

**必填项：**
- `UUID`: 代理服务UUID（使用在线UUID生成器）
- `KOMARI_ENDPOINT`: Komari监控端点
- `KOMARI_TOKEN`: Komari访问令牌

**可选项：**
- `ARGO_DOMAIN` / `ARGO_AUTH`: Cloudflare固定隧道配置
- `NAME`: 节点名称前缀

### 2. 构建并运行

```bash
# 构建镜像
docker build -t nav-dashboard:latest .

# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f
```

### 3. 访问服务

- **导航页面**：http://localhost:3000
- **订阅地址**：http://localhost:3000/[SUB_PATH]

## 📦 Docker镜像

### 使用预构建镜像 (GHCR)

无需构建，直接使用 GitHub Container Registry 上的镜像：

```bash
docker run -d \
  --name nav-dashboard \
  -p 3000:3000 \
  -e UUID="您的UUID" \
  -e KOMARI_ENDPOINT="您的Komari地址" \
  -e KOMARI_TOKEN="您的Komari令牌" \
  ghcr.io/debbide/nav-dashboard:latest
```

或者使用 Docker Compose：

```yaml
services:
  nav-dashboard:
    image: ghcr.io/debbide/nav-dashboard:latest
    container_name: nav-dashboard
    restart: always
    ports:
      - "3000:3000"
    environment:
      - UUID=your-uuid
      - KOMARI_ENDPOINT=https://km.example.com
      - KOMARI_TOKEN=your-token
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

- [Komari Monitor](https://github.com/komari-monitor)
- [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/)
