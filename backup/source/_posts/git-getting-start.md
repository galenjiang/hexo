---
title: git入门
date: 2016-05-11 15:04:04
tags: git
---
## git bash
```
touch readme.txt // 创建文件
cat readme.txt // 查看文件
echo text >> readme.txt // 写
```
> 工作区>暂存区>历史区

```
git add readme.txt // 提交到暂存区
git commit -m'update' // 提交到历史区
git status -s // 暂存区、历史区
git diff //工作区、暂存区不同
git log --online // 历史区的记录
git log --graph
git reset --hard HEAD^ // 上退一个版本 -soft -mixed
git reset --hard HEAD 1234567
git reflog //每次修改的id号
git log --oneline --grep=index.html //过滤
git checkout -- readme.txt // 回退暂存区readme.txt文件
git reset --hard HEAD readme.txt // 回退历史区readme.txt到工作区
git reset (-mixed) HEAD readme.txt // 回退暂存区readme.txt到暂存区区
git branch dev // 新建分支 -d 删除分支
git branch //查看分支
git checkout dev // 切换分支
git checkout -b dev // 创建并切换分支
git add //
git checkout master
git merge dev // 合并分支到dev
git log --oneline --graph --decorate --all

git merge --no-f -m'merge with no-off'//产生新的分支
git stash // 保存暂存区和工作区到工作台
git stash list //查看工作台
git stash pop // 应用某个stash并删除
git stash apply // 应用某个stash不删除
git stash clear //清除工作台

git tag v1.0 //打标签
git tag
git show v1.0 // 对象
git tag -a v0.8 -m '0.8version'
git cherry-pick id...
git rebase

rm 1.txt 删除工作区
git rm 1.txt 删除工作区和暂存区
git rm --cached 删除暂存区
```
