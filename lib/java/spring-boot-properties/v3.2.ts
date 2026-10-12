export function generate(params: any): string {
	return `# Server Configuration
server.port=8080
server.servlet.context-path=/api
server.compression.enabled=true

# Application
spring.application.name=my-application

# Database
# MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# PostgreSQL
# spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
# spring.datasource.username=postgres
# spring.datasource.password=postgres
# spring.datasource.driver-class-name=org.postgresql.Driver
# spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

# Oracle
# spring.datasource.url=jdbc:oracle:thin:@localhost:1521/XEPDB1
# spring.datasource.username=system
# spring.datasource.password=oracle
# spring.datasource.driver-class-name=oracle.jdbc.OracleDriver
# spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.OracleDialect

# H2
# spring.datasource.url=jdbc:h2:mem:mydb;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
# spring.datasource.username=sa
# spring.datasource.password=
# spring.datasource.driver-class-name=org.h2.Driver
# spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect

#MSSQL
# spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=mydb;encrypt=true;trustServerCertificate=true
# spring.datasource.username=sa
# spring.datasource.password=YourStrong@Password
# spring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver
# spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.SQLServerDialect

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=true

# Logging
logging.level.root=INFO
logging.level.com.example=DEBUG
logging.file.name=logs/application.log

# Actuator
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=always

# Cache
spring.cache.type=caffeine
spring.cache.caffeine.spec=maximumSize=1000,expireAfterWrite=60m

# Security
spring.security.user.name=admin
spring.security.user.password=admin

# Thymeleaf
spring.thymeleaf.cache=false
spring.thymeleaf.prefix=classpath:/templates/

# DevTools
spring.devtools.restart.enabled=true
spring.devtools.livereload.enabled=true

`;
}
