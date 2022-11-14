#!/usr/bin/env sh
###
 # @Author: Lybeen
 # @Email: helibin@139.com
 # @Date: 2020-12-17 15:15:55
 # @LastEditTime: 2022-11-12 16:25:35
 # @LastEditors: Lybeen
 # @FilePath: /mine/helibin.github.io/deploy.sh
###

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'blog.helibin.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:helibin/helibin.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
