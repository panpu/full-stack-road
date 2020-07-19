# GIT问题记录
## 为什么gitHub提交记录显示作者名称是unknow?
原因就是本地 commit时的作者名称是unknow，所以提交到gitHub上也是unknow
### 解决
```bash
git config --global user.name "你的名字"
```
## git如何保存本地仓库的账号?
执行保存账号命令
### 解决
保存本地仓库的账号
```bash
git config --local credential.helper store
```
保存git全局账号
```bash
git config --global credential.helper store
```
## git 无法添加文件夹下文件
google后发现可能是该子文件夹下有.git文件夹导致无法上传。
### 解决
删除子文件夹下.git后，依然无法提交子文件夹下的文件。
尝试以下方法：
```bash
 git rm --cached directory
 git add directory
```
注：directory为子文件夹的路径。
但是执行git rm --cached directory时，提示
```bash
fatal: Unable to create 'xx/.git/index.lock': File exists.
```
执行```bashrm -f xx/.git/index.lock```后解决