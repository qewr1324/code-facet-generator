export function generate(params: any): string {
	return `<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="http://www.springframework.org/schema/beans https://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <!-- Enable annotation-based configuration -->
    <context:annotation-config />

    <!-- Scan for @Component, @Service, @Repository, @Controller -->
    <context:component-scan base-package="com.company" />

    <!-- Load external properties -->
    <context:property-placeholder location="classpath:application.properties" />

    <bean id="enrollmentService" class="com.company.service.EnrollmentService" />

</beans>`;
}
