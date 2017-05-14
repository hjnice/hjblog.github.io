---
title: Ubuntu下安装tomcat和在eclipse启动
date: 2017-05-14 14:56:11
tags:
    - Ubuntu
    - Linux
    - tomcat
categories: Linux
---
最近安装了win10和Ubuntu双系统，并安装了Eclipse，准备在Linux下开发Java,还而要安装tomcat服务器，在linux下安装tomcat和在windows下安装还不太一样，在win下只要下载zip包解压就差不多能使用了，而在Linux下还需配置一下

首先在tomcat官网[http://tomcat.apache.org/download-80.cgi](http://tomcat.apache.org/download-80.cgi)下载对应的tomcat版本和对应的包![](https://upload.cc/i3/FkNbTa.png)
我下载的是8.5的tar.gz


下载完成之后打开终端    也可以按快捷键`ctrl+alt+t`键，进入下载目录`cd 下载/
`![](https://upload.cc/i/h8DTfy.png) 


解压tomcat`tar -zxvf apache-tomcat-8.5.14.tar.gz`![](https://upload.cc/i/DJcWQd.png)


需要配置下tomcat

复制解压后的文件到 /opt 目录`sudo cp -r apache-tomcat-8.5.14 /opt`
进入 /opt/apache-tomcat-8.5.14 目录
`cd /opt/apache-tomcat-8.5.14`
打开启动的脚本文件`sudo vim ./bin/startup.sh`
添加环境变量
```java
JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
JRE_HOME=$JAVA_HOME/jre
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME
CLASSPATH=.:$JRE_HOME/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
TOMCAT_HOME=/opt/apt/apache-tomcat-8.5.14
```
![](https://upload.cc/i/rjyBYQ.png)


启动tomcat：`sudo ./bin/startup.sh`
显示
```java
Using CATALINA_BASE:   /opt/apache-tomcat-8.5.14
Using CATALINA_HOME:   /opt/apache-tomcat-8.5.14
Using CATALINA_TMPDIR: /opt/apache-tomcat-8.5.14/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /opt/apache-tomcat-8.5.14/bin/bootstrap.jar:/opt/apache-tomcat-8.5.14/bin/tomcat-juli.jar
Tomcat started.
```

启动成功，在浏览器中输入`http://localhost:8080/`
![](https://upload.cc/i3/GxqmO6.png)
启动成功


接下来把tomcat加入eclipse中

打开eclipse->选择上面菜单栏中的window->选择preferences->Server->Runtime Environments->add  添加

选择对应的tomcat版本next

在选择tomcat的目录`/opt/apache-tomcat-8.5.14`

> 这里如果next是灰色的，出现Unknown version of Tomcat was specified错误，进入tomcat目录cd /opt/apache-tomcat-8.5.14执行sudo chmod -R 777 apache-tomcat-8.5.14/在添加就OK了

