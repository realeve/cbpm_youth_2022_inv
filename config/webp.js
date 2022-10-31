const fs = require('fs');

const webpStr = `!function(){window.__WEBP=!1;var A=new Image;A.onload=function(){A.width>0&&A.height,window.__WEBP=!0},A.onerror=function(){window.__WEBP=!1},A.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"}();`;

const getDir = () => {
  let str = process.cwd();
  return str.replace(/\\/g, '/');
};
const init = () => {
  let file = fs.readFileSync(getDir() + '/dist/index.html', 'utf8');
  if (!file) {
    return;
  }
  // 注入webp定义文件
  file = file.replace('<head>', `<head><script>${webpStr}</script>`);
  fs.writeFileSync(`${getDir()}/dist/index.html`, file, 'utf8');
};

init();
