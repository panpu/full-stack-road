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

## git 如何回退版本
代码提交有误，需要回退版本，如何进行回退？

### 解决
```
$ git log  //查看日志，寻找需要回退的版本
$ git reset --hard HEAD^ 回退到上个版本
$ git reset --hard HEAD~3 回退到前3次提交之前，以此类推，回退到n次提交之前
$ git reset --hard commit_id 回退/进到某个commit
$ git push -f 回退后一般需要强推提交代码，风险较大，不推荐使用
$ git revert -n 版本号 //反做，并使用“git commit -m 版本名”提交：
```
**原理**： git revert是用于“反做”某一个版本，以达到撤销该版本的修改的目的。比如，我们commit了三个版本（版本一、版本二、 版本三），突然发现版本二不行（如：有bug），想要撤销版本二，但又不想影响撤销版本三的提交，就可以用 git revert 命令来反做版本二，生成新的版本四，这个版本四里会保留版本三的东西，但撤销了版本二的东西。
### 注意： 这里可能会出现冲突，那么需要手动修改冲突的文件。而且要git add 文件名。 ###
