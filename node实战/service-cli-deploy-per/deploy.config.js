module.exports = {
  projectName: "自动化部署",
  privateKey: "/Users/wb798061/.ssh/id_rsa",
  passphrase: "rroot",
  cluster: [],
  dev: {
    name: "开发环境",
    script: "npm run build:dev",
    host: "127.0.0.1",
    port: 3030,
    username: "root",
    password: "root",
    distPath: "dist",
    webDir: "/usr/local/nginx/html",
    bakDir: "",
    isRemoveRemoteFile: true,
    isRemoveLocalFile: true,
  },
};
