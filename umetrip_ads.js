/**
 * 航旅纵横开屏去广告（Surge）
 * 只拦 rpid=1000019（sns 开屏 advert）；不拦 1000002 首页探索
 */
const h = $request.headers || {};
const rpid = String(h.rpid || h.Rpid || "");
if (rpid.includes("1000019")) {
  $done({
    response: {
      status: 404,
      headers: { "Content-Type": "text/plain" },
      body: "",
    },
  });
} else {
  $done({});
}
