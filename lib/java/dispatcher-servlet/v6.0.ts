export function generate(params: any): string {
	return `<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:mvc="http://www.springframework.org/schema/mvc"
    xsi:schemaLocation="http://www.springframework.org/schema/beans https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd">

    <!-- Scan controllers and other components -->
    <context:component-scan base-package="com.company.controller" />

    <!-- Enable annotation-driven MVC (@RequestMapping, @Controller, etc.) -->
    <mvc:annotation-driven />

    <!-- Serve static resources (CSS, JS, images) -->
    <mvc:resources mapping="/resources/**" location="/resources/" />

    <!-- Resolve view names to JSP files under /WEB-INF/views/ -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/views/" />
        <property name="suffix" value=".jsp" />
    </bean>

</beans>`;
}
