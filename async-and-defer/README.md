## 验证步骤

用live-server跑每个页面，打开Chrome控制台 - Performance，录屏对比查看Timeline。

### 放在head
![](https://raw.githubusercontent.com/ldc4/experiment/master/async-and-defer/static/head.png)

### 放在body末尾
![](https://raw.githubusercontent.com/ldc4/experiment/master/async-and-defer/static/body.png)

### 放在head，添加defer
![](https://raw.githubusercontent.com/ldc4/experiment/master/async-and-defer/static/defer.png)

### 放在head, 添加async
![](https://raw.githubusercontent.com/ldc4/experiment/master/async-and-defer/static/async.png)


defer在opera浏览器中不支持  
https://caniuse.com/#search=defer  
虽然等同于放在body末尾，但是根据浏览器的具体实现不同而有差异。

async是H5新加的特性，主要用于类似ga这种独立的脚本加载

一般的做法还是放在body末尾，可以确保不阻塞页面解析，而且各浏览器行为一致，虽然是同步逻辑了，但在不阻塞解析也没有什么影响。

