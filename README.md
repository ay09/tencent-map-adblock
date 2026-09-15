# 腾讯地图去广告

腾讯地图（iOS）**Surge 模块**，移除路线页运营 Banner、新人推广及开屏活动。

要求：`CORE_VERSION >= 20`

## 模块文件

- [`腾讯地图去广告.sgmodule`](腾讯地图去广告.sgmodule)

## 功能

- 过滤路线规划页 `multi_route_banner` 运营 Banner，并调整后续 index
- 强制关闭新人推广标记（`new_user_flag = 0`）
- 拦截开屏活动 / 闪屏相关图片资源

## Surge 使用方法

1. 打开 Surge → 模块 → 安装新模块
2. 填入 Raw 地址：

   `https://raw.githubusercontent.com/ay09/tencent-map-adblock/main/%E8%85%BE%E8%AE%AF%E5%9C%B0%E5%9B%BE%E5%8E%BB%E5%B9%BF%E5%91%8A.sgmodule`

3. 确认已开启 HTTPS 解密（MITM）并信任证书
4. 确保主机名包含：`mmapgwh.map.qq.com`、`3gimg.qq.com`、`4gimg.map.qq.com`

## 注意事项

- 规则依赖当前接口结构，App 更新后可能失效
- 仅覆盖路线页 Banner、新人推广和部分开屏资源
- 使用前请测试路线规划、导航等核心功能是否正常

## License

MIT


---

## 航旅纵横去广告

Surge 单文件模块：只拦开屏广告（`sns` + `rpid=1000019`）与 OSS advert 素材；**不拦**首页探索（`1000002`）。

- 模块：[`航旅纵横去广告.sgmodule`](航旅纵横去广告.sgmodule)
- 脚本：[`umetrip_ads.js`](umetrip_ads.js)（Surge 原生 `$done({ response })`，非 QX status 字符串）

Raw 安装：

`https://raw.githubusercontent.com/ay09/tencent-map-adblock/main/%E8%88%AA%E6%97%85%E7%BA%B5%E6%A8%AA%E5%8E%BB%E5%B9%BF%E5%91%8A.sgmodule`
