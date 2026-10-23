export function generate(params: any): string {
	return `<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:mvc="http://www.springframework.org/schema/mvc"
    xsi:schemaLocation="http://www.springframework.org/schema/beans https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd">

    <!-- Scan controllers, services and other components -->
    <context:component-scan base-package="com.company" />

    <!-- Enable annotation-driven MVC -->
    <mvc:annotation-driven>
        <mvc:message-converters>
            <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter" />
        </mvc:message-converters>
    </mvc:annotation-driven>

    <!-- Serve static resources -->
    <mvc:resources mapping="/resources/**" location="/resources/" />
    <mvc:resources mapping="/webjars/**" location="/webjars/" />

    <!-- Thymeleaf View Resolver -->
    <bean id="templateResolver" class="org.thymeleaf.templateresolver.ServletContextTemplateResolver">
        <property name="prefix" value="/WEB-INF/templates/" />
        <property name="suffix" value=".html" />
        <property name="templateMode" value="HTML" />
        <property name="characterEncoding" value="UTF-8" />
        <property name="cacheable" value="false" />
    </bean>

    <bean id="templateEngine" class="org.thymeleaf.spring6.SpringTemplateEngine">
        <property name="templateResolver" ref="templateResolver" />
    </bean>

    <bean class="org.thymeleaf.spring6.view.ThymeleafViewResolver">
        <property name="templateEngine" ref="templateEngine" />
        <property name="characterEncoding" value="UTF-8" />
        <property name="order" value="2" />
    </bean>

    <!-- JSP fallback view resolver -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/views/" />
        <property name="suffix" value=".jsp" />
        <property name="order" value="3" />
    </bean>

    <!-- Internationalization (i18n) -->
    <bean id="messageSource" class="org.springframework.context.support.ResourceBundleMessageSource">
        <property name="basename" value="messages" />
        <property name="defaultEncoding" value="UTF-8" />
    </bean>

    <bean id="localeResolver" class="org.springframework.web.servlet.i18n.SessionLocaleResolver">
        <property name="defaultLocale" value="en" />
    </bean>

    <mvc:interceptors>
        <bean class="org.springframework.web.servlet.i18n.LocaleChangeInterceptor">
            <property name="paramName" value="lang" />
        </bean>
    </mvc:interceptors>

    <!-- Multipart file upload support -->
    <bean id="multipartResolver" class="org.springframework.web.multipart.support.StandardServletMultipartResolver" />

    <!-- Flash attributes (redirect attributes across requests) -->
    <bean id="flashMapManager" class="org.springframework.web.servlet.support.SessionFlashMapManager" />

</beans>`;
}
