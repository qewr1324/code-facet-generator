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

    <!-- Enable annotation-driven MVC -->
    <mvc:annotation-driven />

    <!-- Serve static resources -->
    <mvc:resources mapping="/resources/**" location="/resources/" />

    <!-- JSP View Resolver -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/views/" />
        <property name="suffix" value=".jsp" />
        <property name="order" value="1" />
    </bean>

    <!-- Internationalization (i18n) -->
    <bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource">
        <property name="basename" value="messages" />
        <property name="defaultEncoding" value="UTF-8" />
    </bean>

    <!-- Locale resolver (session-based, default: English) -->
    <bean id="localeResolver" class="org.springframework.web.servlet.i18n.SessionLocaleResolver">
        <property name="defaultLocale" value="en" />
    </bean>

    <!-- Locale change interceptor (?lang=fa) -->
    <mvc:interceptors>
        <bean class="org.springframework.web.servlet.i18n.LocaleChangeInterceptor">
            <property name="paramName" value="lang" />
        </bean>
    </mvc:interceptors>

    <!-- Multipart file upload support -->
    <bean id="multipartResolver" class="org.springframework.web.multipart.support.StandardServletMultipartResolver" />

</beans>`;
}
