### 1. `github`提交后没有出现在`contributions`
相关阅读：
* 官方帮助文章： [Why are my contributions not showing up on my profile](https://help.github.com/en/github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile)
* [github commits aren't recorded in the your contributions calendar](https://stackoverflow.com/a/40903148/11720536)

> The most common mistakes I found were : 
>  1. Email not configured properly on local machine. (your laptop/pc).
>  2. Forking.
>  3. Not using default or gh-pages branch for commit.

最常见的错误：
1. 在本地机器上(你的手提电脑/pc台式机)没有正确地配置邮箱
2. 代码是`fork`其它仓库的
3. 没有在默认分支(一般是`master`)或`gh-pages`分支提交代码

### 2. 项目中`yarn.lock`文件的作用，我应该`commit`它吗？
相关阅读：  
* [should I commit the yarn.lock file and what is it for](https://stackoverflow.com/questions/39990017/should-i-commit-the-yarn-lock-file-and-what-is-it-for)
* `yarn`官方文档：[Caret Ranges](https://yarnpkg.com/en/docs/dependency-versions#toc-caret-ranges)

> * Note: By default when you run yarn add [package-name] it will use a caret range
> * Allow changes that do not modify the first non-zero digit in the version, either the 3 in 3.1.4 or the 4 in 0.4.2

* 默认地当你运行`yarn add [package-name]`的时候会使用脱字符(`^`)范围版本
* 脱字符版本范围允许所做的更改中不会修改版本中的第一个非零数字，如`3.1.4`中的`3`或者`0.4.2`中的`4`

如果你使用的是`WebStorm`的话，你可以按下`command`然后将光标移到`package.json`中的版本号上可以查看到版本的范围：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/package-version-caret-range-webstorm.png)

由于们的依赖指定的是版本范围，所以我们需要使用`yarn.lock`来锁定版本，防止不同开发者之间由于依赖版本不同而引发的奇怪`bug`

[![](https://pbs.twimg.com/tweet_video_thumb/EDJhCQyXsAAYwIf.jpg)](https://video.twimg.com/tweet_video/EDJhCQyXsAAYwIf.mp4)
