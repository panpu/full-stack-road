# 问题记录
## 为什么gitHub提交记录显示作者名称是unknow?
原因就是本地 commit时的作者名称是unknow，所以提交到gitHub上也是unknow
### 解决
git config --global user.name "你的名字"
## git如何保存本地仓库的账号?
执行保存账号命令
### 解决
保存本地仓库的账号
git config --local credential.helper store
保存git全局账号
git config --global credential.helper store