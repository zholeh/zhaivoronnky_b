import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { Logger as NestLogger, ValidationPipe } from '@nestjs/common';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const openApiPath = 'api';
  if (config.app.openApi) {
    const OpenApiConfig = new DocumentBuilder()
      .setTitle('Zhaivoronki API')
      .setDescription('The demo application API for Zhaivoronki')
      .setVersion('1.0')
      .addTag('Zhaivoronki')
      .build();
    const document = SwaggerModule.createDocument(app, OpenApiConfig);
    SwaggerModule.setup(openApiPath, app, document);
  }
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(config.app.appPort);
  const logger = new NestLogger('maim');

  const port = await app.getUrl();
  logger.log(`Application started on ${port}`);
  if (config.app.openApi) {
    logger.log(`Open Api started on ${port}/${openApiPath}`);
  }
  if (config.graphql.playground) {
    logger.log(`Graphql Playground started on ${port}/${config.graphql.path}`);
  }
}
bootstrap();
