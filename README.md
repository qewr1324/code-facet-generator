# code-facet-generator

🍃 Code Facet Generator - Dynamic facet-based code generator for multiple languages.

```text
code-facet-generator/
├── package.json
├── tsconfig.json
├── info.json
├── media/
│   ├── facet-icon.svg
│   └── facet-icon.png
├── lib/
│   └── java/
│       ├── jpa/
│       │   ├── v1.2.ts
│       │   └── v1.3.ts
│       └── maven/
│           ├── v1.8.ts
│           └── v1.9.ts
├── src/
│   ├── extension.ts
│   ├── statusBarManager.ts
│   ├── facetTreeProvider.ts
│   ├── facetCommands.ts
│   └── utils/
│       ├── configLoader.ts
│       ├── fileGenerator.ts
│       └── pathResolver.ts
└── .vscodeignore
```

Java:

- Quarkus - application.properties

- Micronaut - application.yml

- Jakarta EE - glassfish-web.xml

- Struts - struts.xml

- JSF - faces-config.xml

- MyBatis - mybatis-config.xml

- Liquibase - changelog.xml

- Flyway - migration scripts

- MapStruct - mapper config

- Lombok - lombok.config

- Checkstyle - checkstyle.xml

- PMD - pmd.xml

- SpotBugs - spotbugs.xml

- Tomcat - server.xml, context.xml

- WildFly - standalone.xml

- OpenAPI/Swagger - openapi.yaml

- GraphQL - graphql schema

- gRPC - proto files

JavaScript/TypeScript:

- Next.js - next.config.js

- Nuxt.js - nuxt.config.js

- Gatsby - gatsby-config.js

- Svelte - svelte.config.js

- Astro - astro.config.mjs

- Remix - remix.config.js

- NestJS - nest-cli.json

- Express - app.js boilerplate

- Fastify - server config

- Koa - app config

- Babel - babel.config.js

- Rollup - rollup.config.js

- Parcel - .parcelrc

- Jest - jest.config.js

- Vitest - vitest.config.ts

- Cypress - cypress.config.js

- Playwright - playwright.config.ts

- Storybook - main.js

- Tailwind - tailwind.config.js

- PostCSS - postcss.config.js

- Sass/SCSS - stylelint config

- GraphQL Codegen - codegen.yml

- Apollo - apollo.config.js

- Prisma - schema.prisma

- TypeORM - ormconfig.json

- Sequelize - .sequelizerc

- Drizzle - drizzle.config.ts

- Socket.io - server config

- PM2 - ecosystem.config.js

- NX - nx.json

Python:

- Django - settings.py

- Flask - app.py, config.py

- FastAPI - main.py

- Pyramid - development.ini

- Celery - celery.py

- Django REST - settings

- SQLAlchemy - alembic.ini

- Poetry - pyproject.toml

- Pipenv - Pipfile

- Tox - tox.ini

- Sphinx - conf.py

- MkDocs - mkdocs.yml

- Black - pyproject.toml

- isort - .isort.cfg

- mypy - mypy.ini

- Flake8 - .flake8

- Pylint - .pylintrc

- Pre-commit - .pre-commit-config.yaml

C#/.NET:

- Blazor - \_Imports.razor

- Entity Framework - DbContext

- xUnit - xunit.runner.json

- NUnit - nunit config

- Serilog - serilog.json

- AutoMapper - profile config

- MediatR - pipeline config

- FluentValidation - validator

- Swashbuckle - swagger config

- Identity Server - config

PHP:

- Laravel - .env, config files

- Symfony - .env, services.yaml

- CodeIgniter - config

- Yii2 - config

- Slim - settings

- CakePHP - app.php

- Lumen - .env

- Composer - composer.json

- PHPUnit - phpunit.xml

- PHPStan - phpstan.neon

- Psalm - psalm.xml

- PHP-CS-Fixer - .php-cs-fixer.php

Ruby:

- Rails - database.yml

- Sinatra - config.ru

- RSpec - .rspec

- RuboCop - .rubocop.yml

- Bundler - Gemfile

- Capistrano - deploy.rb

Mobile:

- React Native - metro.config.js

- Flutter - pubspec.yaml

- Ionic - ionic.config.json

- Cordova - config.xml

- Xamarin - AndroidManifest.xml

- Kotlin - build.gradle.kts

- Swift - Package.swift

DevOps/Cloud:

- Terraform - main.tf

- Ansible - playbook.yml, ansible.cfg

- Puppet - manifest.pp

- Chef - recipe.rb

- Helm - Chart.yaml, values.yaml

- Docker Swarm - stack.yml

- Vagrant - Vagrantfile

- Packer - template.json

- CloudFormation - template.yaml

- Serverless - serverless.yml

- OpenTofu - main.tf

Message Queue:

- RabbitMQ - rabbitmq.conf

- Kafka - server.properties

- Redis - redis.conf

- ActiveMQ - activemq.xml

Monitoring:

- Prometheus - prometheus.yml

- Grafana - dashboard.json

- ELK Stack - logstash.conf, filebeat.yml

- Datadog - datadog.yaml

- New Relic - newrelic.yml

- Sentry - sentry.properties

Testing (General):

- Selenium - config

- JMeter - .jmx

- K6 - script.js

- Gatling - simulation.scala

- SoapUI - project.xml

- Postman - collection.json

- Cucumber - cucumber.js

- SpecFlow - .feature files

Documentation:

- Swagger/OpenAPI - openapi.yaml

- API Blueprint - .apib

- AsyncAPI - asyncapi.yaml

- JSDoc - jsdoc.json

- Storybook - config

- Docusaurus - docusaurus.config.js

- VuePress - .vuepress/config.js

- GitBook - book.json

Game Development:

- Unity - ProjectSettings

- Unreal Engine - .uproject

- Godot - project.godot

Embedded/IoT:

- Arduino - .ino files

- Raspberry Pi - config.txt

- PlatformIO - platformio.ini

- ESP32 - sdkconfig

Security:

- OWASP ZAP - config

- SonarQube - sonar-project.properties

- Trivy - trivy.yaml

- Snyk - .snyk
