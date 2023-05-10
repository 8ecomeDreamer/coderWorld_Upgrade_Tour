# WebGL

**canvas与WebGL有什么区别？**

​	canvas主要负责**二维平面**，webgl负责**三维平面**。

​	webgl也是基于canvas进行开发的。

## 常用API

	### clearColor（r,g,b,a）

​	参数分别代表了红 绿 蓝 透明度，**设置颜色**。

### clear（BUFFER）

​	**清空颜色。**

​	参数可为 **COLOR_BUFFER_BIT** 、**DEPTH_BUFFER_BIT**、**STENCIL_BUFFER_BIT**

​	分别对应 **clearColor** **clearDepth** **clearStencil** 三个api

### vec4

#### createShader

#### shaderSource

#### compileShader

#### createProgram

#### attachShader

## 着色器

**着色器有哪些种类？**

​	顶点着色器、片元着色器

**着色器工作流程是怎么样的?**

