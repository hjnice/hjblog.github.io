---
title: MySql5.7安装图解
date: 2017-03-22 14:37:35
tags:
    - mysql
    - database
categories: mysql
---

MySQL 5.7 版本的安装及简单使用（图文教程）
<!-- more -->

### 第一步，下载MySql
到[MySql的官网](https://www.mysql.com/)点击`Downloads–>Community–>MySQL on Windows–>MySQL Installer`下载MySql安装包，然后双击安装

### 第二步，安装及简单配置
![](https://upload.cc/i/HRfh4i.png)


直接点击next下一步
![](https://upload.cc/i/1NO5Y7.png)


next
![](https://upload.cc/i/4Ob8wm.png)


下面就要输入默认用户root的密码了
![](https://upload.cc/i/p0atUb.png)


这里我直接输入root，显示weak,是密码弱，不用管，next
![](https://upload.cc/i/4OuqEY.png)


默认next
![](https://upload.cc/i/9qtUWa.png)


这是端口，不用改，默认，next
![](https://upload.cc/i/hVLRGi.png)

直接点Execute
![](https://upload.cc/i/imMINs.png)

![](https://upload.cc/i/j0dt8a.png)

![](https://upload.cc/i/Nvd3IG.png)


输入刚刚设置的root用户的密码
![](https://upload.cc/i/pgTmXa.png)

点击Check,继续next
![](https://upload.cc/i/81f0ai.png)


Execute
![](https://upload.cc/i/iY1vU3.png)




Finish,安装完成
![](https://upload.cc/i/Q0fGeN.png)


###验证登录
打开MySql Workbench
![](https://upload.cc/i/8khTpY.png)


点击Local instance MySql57灰色的方框,  输入密码,OK
![](https://upload.cc/i/7Rd3fP.png)



![](https://upload.cc/i/OQAJFk.png)


> 也可以使用命令行来登录


先配置MySql的环境变量

`我的电脑〉属性〉高级系统设置〉环境变量〉找到PATH`

在PATH的后面加上`;`然后打开MySql安装目录，我的是`D:\Program Files\MySQL\MySQL Utilities 1.6\;D:\Program Files\MySQL\MySQL Server 5.7\bin`加在`;`后面

打开cmd,输入`mysql -uroot -proot`,-u后面是用户名，-p后面是密码

![](https://upload.cc/i/tu7UBK.png)



回车

![](https://upload.cc/i/BzXRYi.png)


点击`计算机〉管理〉服务`可以看到MySql服务已经启动了，可以直接点停止或启动
![](https://upload.cc/i/V0DKl1.png)

也可以通过命令行来停止、启动

输入`net stop MySql57`回车停止服务
![](https://upload.cc/i/cIyKCV.png)


输入`net start MySql57`回车启动服务
![](https://upload.cc/i/ohYfOM.png)
