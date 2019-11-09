
A base library to refactoring poster system by Nodejs


````
Coding with Koa (a light Nodejs library) and TypeScript 
````

[![MV2OUI.md.jpg](https://s2.ax1x.com/2019/11/08/MV2OUI.md.jpg)](https://imgchr.com/i/MV2OUI)


Dev Mode
```
npm run dev
```

Production Mode
```
npm run server
```
### Directory structure

<pre>
dist // 打包后文件
example  //前端测试文件
node_modules
src/
    &emsp;&emsp;--connect // 处理各种数据库连接
    &emsp;&emsp;--controllers // 处理方法层
    &emsp;&emsp;--middleware // 中间件
    &emsp;&emsp;--router // 路由
    &emsp;&emsp;--types // 类型文件集中管理处
    &emsp;&emsp;--utils // 工具类
    &emsp;&emsp;index.ts // 主入口
tsconfig.json
</pre>

#### 11.09 add
解决一个狗日的alias在node & ts才会存在的奇葩路径问题，项目目录初步设计完成







