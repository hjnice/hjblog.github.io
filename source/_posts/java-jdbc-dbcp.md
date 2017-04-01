---
title: JDBC DBCP连接池的使用
date: 2017-03-29 14:27:05
tags: 
	- java
	- jdbc
	- database
	- dbcp
categories: jdbc
---
## DBCP（DataBase Connection Pool）数据库连接池的使用
<br>
### 首先下载[commons.dbcp.jar](http://commons.apache.org/proper/commons-dbcp/download_dbcp.cgi)和[commons.pool.jar](http://commons.apache.org/proper/commons-pool/download_pool.cgi)文件

<!-- more -->
```java
import java.awt.image.DataBuffer;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSourceFactory;

public class DBCPUtils {

    private static DataSource ds ;
	
	static {
		//将配置文件加载进来
		InputStream in = DBCPUtils.class.getClassLoader().getResourceAsStream("dbcpconfig.properties") ;
		Properties props = new Properties() ;
		try {
			props.load(in) ;
			ds = BasicDataSourceFactory.createDataSource(props) ;
		} catch (Exception e) {
			throw new RuntimeException("服务器忙") ;
		}
	}
	
	//提供获取练级的方法
	public static Connection getConnection(){
		try {
			return ds.getConnection() ;
		} catch (SQLException e) {
			throw new RuntimeException("服务器忙") ;
		}
	}
}
```

<br>
> dbcpconfig.properties配置文件

```java
#连接设置
driverClassName=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/test
username=root
password=root

#<!-- 初始化连接 -->
initialSize=10

#最大连接数量
maxActive=50

#<!-- 最大空闲连接 -->
maxIdle=20

#<!-- 最小空闲连接 -->
minIdle=5

#<!-- 超时等待时间以毫秒为单位 6000毫秒/1000等于60秒 -->
maxWait=60000


#JDBC驱动建立连接时附带的连接属性属性的格式必须为这样：[属性名=property;] 
#注意："user" 与 "password" 两个属性会被明确地传递，因此这里不需要包含他们。
connectionProperties=useUnicode=true;characterEncoding=gbk

#指定由连接池所创建的连接的自动提交（auto-commit）状态。
defaultAutoCommit=true

#driver default 指定由连接池所创建的连接的只读（read-only）状态。
#如果没有设置该值，则“setReadOnly”方法将不被调用。（某些驱动并不支持只读模式，如：Informix）
defaultReadOnly=false

#driver default 指定由连接池所创建的连接的事务级别（TransactionIsolation）。
#可用值为下列之一：（详情可见javadoc。）NONE,READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE
defaultTransactionIsolation=READ_UNCOMMITTED
```