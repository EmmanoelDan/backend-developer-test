# Arquitetura: Clean Architecture
Ao decidir a arquitetura para o projeto, optei por implementar a Clean Architecture, utilizando as camadas de Application, Domain, infra, presentation e shared. Essa escolha foi guiada pela necessidade de estruturar o código de forma escalável e de fácil manutenção.

# Dependencias
- **aws-sdk** -> Gerenciador do aws, o driver
- **@aws-sdk/client-s3** -> Gerenciador de client S3
- **@aws-sdk/client-sqs** -> Gerenciador de Client SQS
- **@types/aws-lambda** -> Gerenciador do Lambda do aws.
- **@types/express** -> Framword para aplicacao web.
- **serverless-offline** -> Servico para teste de serverless offline.
- **prisma** -> Orm postgres para migração e modelagem dos bancos.

# Observações
Devido alguns problemas nao consegui desenvolver com excelencia o proposto, e fiquei devendo principalmente a parte do serverless. Mas mesmo com resultado negativo e nao ter atingido o objetivo aprendi mais a importancia de me dedicar em Cloud, além de aprender mais sobre como deixar minha aplicacao mais escalavel possivel. Alem disso poderia melhorar mais o tratamento de erros e testes melhores.
