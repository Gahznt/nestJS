import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product.model';
import { ProdutosController } from './produtos.controller';
import { ProductsService } from './produtos.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Product])
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
