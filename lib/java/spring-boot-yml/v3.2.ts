export function generate(params: any): string {
	return `server:
  port: 8080
  servlet:
    context-path: /api
  http2:
    enabled: true
  compression:
    enabled: true
    mime-types: application/json,application/xml,text/html,text/plain

spring:
  application:
    name: my-application
  threads:
    virtual:
      enabled: true

  # ==========================================================
  # Database
  # ==========================================================

  # ---------- MySQL (Active) ----------
  datasource:
    url: jdbc:mysql://localhost:3306/mydb?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    username: root
    password: root
    driver-class-name: com.mysql.cj.jdbc.Driver
    hikari:
      maximum-pool-size: 20
      minimum-idle: 10
      idle-timeout: 300000
      connection-timeout: 20000
      max-lifetime: 1200000

  # ---------- PostgreSQL ----------
  # datasource:
  #   url: jdbc:postgresql://localhost:5432/mydb
  #   username: postgres
  #   password: postgres
  #   driver-class-name: org.postgresql.Driver
  #   hikari:
  #     maximum-pool-size: 20
  #     minimum-idle: 10
  #     idle-timeout: 300000
  #     connection-timeout: 20000
  #     max-lifetime: 1200000

  # ---------- Oracle ----------
  # datasource:
  #   url: jdbc:oracle:thin:@localhost:1521/XEPDB1
  #   username: system
  #   password: oracle
  #   driver-class-name: oracle.jdbc.OracleDriver
  #   hikari:
  #     maximum-pool-size: 20
  #     minimum-idle: 10
  #     idle-timeout: 300000
  #     connection-timeout: 20000
  #     max-lifetime: 1200000

  # ---------- H2 ----------
  # datasource:
  #   url: jdbc:h2:mem:mydb;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
  #   username: sa
  #   password:
  #   driver-class-name: org.h2.Driver
  #   hikari:
  #     maximum-pool-size: 20
  #     minimum-idle: 10
  #     idle-timeout: 300000
  #     connection-timeout: 20000
  #     max-lifetime: 1200000

  # ---------- MSSQL (SQL Server) ----------
  # datasource:
  #   url: jdbc:sqlserver://localhost:1433;databaseName=mydb;encrypt=true;trustServerCertificate=true
  #   username: sa
  #   password: YourStrong@Password
  #   driver-class-name: com.microsoft.sqlserver.jdbc.SQLServerDriver
  #   hikari:
  #     maximum-pool-size: 20
  #     minimum-idle: 10
  #     idle-timeout: 300000
  #     connection-timeout: 20000
  #     max-lifetime: 1200000

  # ==========================================================
  # JPA / Hibernate
  # ==========================================================
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    open-in-view: false
    properties:
      hibernate:
        # ---------- MySQL (Active) ----------
        dialect: org.hibernate.dialect.MySQL8Dialect

        # ---------- PostgreSQL ----------
        # dialect: org.hibernate.dialect.PostgreSQLDialect

        # ---------- Oracle ----------
        # dialect: org.hibernate.dialect.OracleDialect

        # ---------- H2 ----------
        # dialect: org.hibernate.dialect.H2Dialect

        # ---------- MSSQL ----------
        # dialect: org.hibernate.dialect.SQLServerDialect

        format_sql: true
        jdbc:
          batch_size: 50
          fetch_size: 50
        order_inserts: true
        order_updates: true
        batch_versioned_data: true

  jackson:
    serialization:
      write-dates-as-timestamps: false
    date-format: yyyy-MM-dd HH:mm:ss
    default-property-inclusion: non_null

  graphql:
    graphiql:
      enabled: true

  cache:
    type: redis
    redis:
      time-to-live: 60000

  data:
    redis:
      host: localhost
      port: 6379
      lettuce:
        pool:
          max-active: 8
          max-idle: 8
          min-idle: 0

  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: http://localhost:8080/realms/my-realm

logging:
  level:
    root: INFO
    com.example: DEBUG
    org.springframework.security: DEBUG
  file:
    name: logs/application.log
  logback:
    rollingpolicy:
      max-file-size: 10MB
      max-history: 30
      total-size-cap: 1GB

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus,env,beans,conditions,configprops
  endpoint:
    health:
      show-details: always
      probes:
        enabled: true
  metrics:
    export:
      prometheus:
        enabled: true
  tracing:
    sampling:
      probability: 1.0
  observations:
    key-values:
      application: my-application

springdoc:
  api-docs:
    path: /api-docs
  swagger-ui:
    path: /swagger-ui.html
    operationsSorter: method
    tagsSorter: alpha`;
}
