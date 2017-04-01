---
title: BeanUtils的使用
date: 2017-03-31 22:16:11
tags:
    - database
    - BeanUtils
categories: jdbc
---

# BeanUtils的使用
<br/>
## 一、 简介

程序中对javabean的操作很频繁， 所以apache提供了一套开源的api，方便对javabean的操作！即BeanUtils组件。
<!-- more -->
BeanUtils组件，  作用是简化javabean的操作！

可以从[www.apache.org](www.apache.org)下载BeanUtils组件，然后
再在项目中引入jar文件！

**使用BenUtils组件：**
> 1. 引入commons-beanutils-1.8.3.jar核心包
> 2. 引入日志支持包: commons-logging-1.1.3.jar


**如果缺少日志jar文件，报错：**
```
java.lang.NoClassDefFoundError: org/apache/commons/logging/LogFactory
	at org.apache.commons.beanutils.ConvertUtilsBean.<init>(ConvertUtilsBean.java:157)
	at org.apache.commons.beanutils.BeanUtilsBean.<init>(BeanUtilsBean.java:117)
	at org.apache.commons.beanutils.BeanUtilsBean$1.initialValue(BeanUtilsBean.java:68)
	at 
```

## 二、实例, 基本用法

方法1： 对象属性的拷贝
```java
BeanUtils.copyProperty(admin, "userName", "jack");
BeanUtils.setProperty(admin, "age", 18);
```
方法2： 对象的拷贝
```java
BeanUtils.copyProperties(newAdmin, admin);
```
方法3： map数据拷贝到javabean中  
**【注意：map中的key要与javabean的属性名称一致】**
```java
BeanUtils.populate(adminMap, map);
```
<br/>
```java
//1. 对javabean的基本操作
	@Test
	public void test1() throws Exception {
		
		// a. 基本操作
		Admin admin = new Admin();
        //admin.setUserName("Jack");
        //admin.setPwd("999");
		
		// b. BeanUtils组件实现对象属性的拷贝
		BeanUtils.copyProperty(admin, "userName", "jack");
		BeanUtils.setProperty(admin, "age", 18);
		
		// 总结1： 对于基本数据类型，会自动进行类型转换!
		
		
		// c. 对象的拷贝
		Admin newAdmin = new Admin();
		BeanUtils.copyProperties(newAdmin, admin);
		
		// d. map数据，拷贝到对象中
		Admin adminMap = new Admin();
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("userName", "Jerry");
		map.put("age", 29);
		// 注意：map中的key要与javabean的属性名称一致
		BeanUtils.populate(adminMap, map);
		
		// 测试
		System.out.println(adminMap.getUserName());
		System.out.println(adminMap.getAge());

```

## 三、实例, 日期类型的拷贝
需要注册日期类型转换器，2种方式参见下面代码：
```java
public class App {

	//1. 对javabean的基本操作
	@Test
	public void test1() throws Exception {
		
		// a. 基本操作
		Admin admin = new Admin();
//		admin.setUserName("Jack");
//		admin.setPwd("999");
		
		// b. BeanUtils组件实现对象属性的拷贝
		BeanUtils.copyProperty(admin, "userName", "jack");
		BeanUtils.setProperty(admin, "age", 18);
		
		// 总结1： 对于基本数据类型，会自动进行类型转换!
		
		
		// c. 对象的拷贝
		Admin newAdmin = new Admin();
		BeanUtils.copyProperties(newAdmin, admin);
		
		// d. map数据，拷贝到对象中
		Admin adminMap = new Admin();
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("userName", "Jerry");
		map.put("age", 29);
		// 注意：map中的key要与javabean的属性名称一致
		BeanUtils.populate(adminMap, map);
		
		// 测试
		System.out.println(adminMap.getUserName());
		System.out.println(adminMap.getAge());
	}
	
	
	//2. 自定义日期类型转换器
	@Test
	public void test2() throws Exception {
		// 模拟表单数据
		String name = "jack";
		String age = "20";
		String birth = "   ";
		
		// 对象
		Admin admin = new Admin();
		
		// 注册日期类型转换器：1， 自定义的方式
		ConvertUtils.register(new Converter() {
			// 转换的内部实现方法，需要重写
			@Override
			public Object convert(Class type, Object value) {
				
				// 判断
				if (type != Date.class) {
					return null;
				}
				if (value == null || "".equals(value.toString().trim())) {
					return null;
				}
				
				
				try {
					// 字符串转换为日期
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
					return sdf.parse(value.toString());
				} catch (ParseException e) {
					throw new RuntimeException(e);
				}
			}
		},Date.class);
		
		
		
		// 把表单提交的数据，封装到对象中
		BeanUtils.copyProperty(admin, "userName", name);
		BeanUtils.copyProperty(admin, "age", age);
		BeanUtils.copyProperty(admin, "birth", birth);
		
		//------ 测试------
		System.out.println(admin);
	}
	
	//2. 使用提供的日期类型转换器工具类
	@Test
	public void test3() throws Exception {
		// 模拟表单数据
		String name = "jack";
		String age = "20";
		String birth = null;
		
		// 对象
		Admin admin = new Admin();
		
		// 注册日期类型转换器：2， 使用组件提供的转换器工具类
		ConvertUtils.register(new DateLocaleConverter(), Date.class);
				
		// 把表单提交的数据，封装到对象中
		BeanUtils.copyProperty(admin, "userName", name);
		BeanUtils.copyProperty(admin, "age", age);
		BeanUtils.copyProperty(admin, "birth", birth);
		
		//------ 测试------
		System.out.println(admin);

```

<br/>
## 四、应用
```java
public class WebUtils {

	
	@Deprecated
	public static <T> T copyToBean_old(HttpServletRequest request, Class<T> clazz) {
		try {
			// 创建对象
			T t = clazz.newInstance();
			
			// 获取所有的表单元素的名称
			Enumeration<String> enums = request.getParameterNames();
			// 遍历
			while (enums.hasMoreElements()) {
				// 获取表单元素的名称:<input type="password" name="pwd"/>
				String name = enums.nextElement();  // pwd
				// 获取名称对应的值
				String value = request.getParameter(name);
				// 把指定属性名称对应的值进行拷贝
				BeanUtils.copyProperty(t, name, value);
			}
			
			return t;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/**
	 * 处理请求数据的封装
	 */
	public static <T> T copyToBean(HttpServletRequest request, Class<T> clazz) {
		try {
			// （注册日期类型转换器）
			// 创建对象
			T t = clazz.newInstance();
			BeanUtils.populate(t, request.getParameterMap());
			return t;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}

```

