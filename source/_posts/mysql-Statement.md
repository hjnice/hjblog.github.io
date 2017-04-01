---
title: mysql基本常用语句
date: 2017-03-25 13:52:43
tags: 
	- mysql
	- database
categories: mysql
---

# SQL介绍
   `Structured Query Language` 结构化查询语言
    
### 常用的数据库
<!-- more -->
* Oracle 
* DB2
* MySQL
* SQL Server
    

![](https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1421471404,1366921536&fm=23&gp=0.jpg)
    

# 数据库的操作
<br/>
### 创建数据库

```
create database mydb ; 
```

<br/>
### 查看创建数据库的语句

```
show create database mydb ;
```
    
<br/>
### 切换到当前的数据库

``` 
  use mydb ;
```
    
<br/>
### 删除数据库
```
drop database mydb ;
```
    
<br/>
### 查看所有的数据库
```sql
show databases ;
```
    
<br/>
### 修改数据库mydb1的字符集为utf8
```sql
alter database mydb1 character set utf8 ;
```
    
<br/>
<br/>
## 针对表的操作
<br/>
### 创建表t
```sql
create table t(
    id int ,
    name varchar(30)
) ;
```
    
<br/>
### 查看创建表的源码
    show create table t ;
    
<br/>
### 创建表t1,使用字符集gbk
```sql
    create table t1(
        id int ,
	    name varchar(30)
    )character set gbk ;
```

<br/>
### 设置客户端的字符集为gbk
```sql
set character_set_client=gbk;
```
### 设置结果集的字符集为gbk
```sql
set character_set_results=gbk ;
```

<br/>
## 插入数据
<br/>
```sql
insert into t4(id,name) values(1,'name1') ;
```
```sql
insert t4(id,name) values(2,'name2') ;
```
### 省略字段，意味着所有的字段都必须给值(自增例外)
```sql
insert t4 values(3,'name3','2014-4-3') ;
```

<br/>

## 更新
### 将表t4的第三条记录姓名字段改为name4
```sql
update t4 set name='name4' where id = 3 ;
```

### 将所有记录的名字都改为东方不败
```sql
update t4 set name = 'name5' ;
```

### 修改多个字段
```sql
update t4 set id=6,name='name6' where id = 2 ;
```
<br/>
## 删除
```sql
delete from t4 where id = 4 ;
```
### 删除所有的记录
```sql
delete from t4 ;
```
### 删除所有的记录
```sql
truncate table t4 ;
```
