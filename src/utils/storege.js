// 1、window.localStorage 浏览器永久缓存
export const Local = {
  // 设置永久缓存
  set (key, val) {
    window.localStorage.setItem(`neighbor_local_${key}`, JSON.stringify(val));
  },
  // 获取永久缓存
  get (key) {
    let json = window.localStorage.getItem(`neighbor_local_${key}`);
    return JSON.parse(json);
  },
  // 移除永久缓存
  remove (key) {
    window.localStorage.removeItem(`neighbor_local_${key}`);
  },
  // 移除全部永久缓存
  clear () {
    window.localStorage.clear();
  },
};

// 2、window.sessionStorage 浏览器临时缓存
export const Session = {
  // 设置临时缓存
  set (key, val) {
    window.sessionStorage.setItem(`neighbor_session_${key}`, JSON.stringify(val));
  },
  // 获取临时缓存
  get (key) {
    let json = window.sessionStorage.getItem(`neighbor_session_${key}`);
    return JSON.parse(json);
  },
  // 移除临时缓存
  remove (key) {
    window.sessionStorage.removeItem(`neighbor_session_${key}`);
  },
  // 移除全部临时缓存
  clear () {
    window.sessionStorage.clear();
  },
};