## Section 01
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

### 3. `ant Design`使用问题
#### 1. `Form`中的`Select`的`onChange`事件中`getFieldsValue`获取不到`Select`最新的`value`值

需求：更改下拉框(`Select`)后重新请求列表数据

问题：当我们通过`onChange`来调用`getFieldsValue`方法时获取到的`value`值是改动之前旧的`value`值，并不是最新的。

目前可以通过`setTimeout`来进行解决：
```jsx harmony
handleChange(){
 const { getFieldsValue } = this.props.form;
    // const fields = getFieldsValue();
    // console.log(fields); // if we get it in this way , it just return the previous one value, do not returan current value;
  setTimeout(function(){
   const fields = getFieldsValue();
   console.log(fields); // we can get value through this way, wait for the action completing, we can get the right value;
  },0)
}
```

#### 2. 

### 4. 小知识点
* 清理`node_modules`中的一些缓存：`rm -rf node_modules/.cache`
* [`webpack`输出配置可以配置存放的目录名](https://github.com/wangkaiwd/webpack-in-depth/commit/b66278b77bb17f65a89fe899c048ed7b1cda4416?diff=unified#diff-eb3896f56b264947d9a7421de4d18e75R63-R64)：
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/upload-error-again.png)
* [类型谓词](https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates)的一个例子： 
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/jottings-ts-type-predicates.png)
* [`JSON`](https://www.json.org/json-en.html)支持的类型：`Object, Array, string, number, "true", "false", "null"`
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/jottings-json-support-value.png)
