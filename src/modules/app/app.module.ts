import configuration from "src/config/configuration"

import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

// import { TypeOrmModule } from "@nestjs/typeorm"
import { SteamModule } from "../steam/steam.module"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    // TypeOrmModule.forRootAsync({
    //   useFactory: async (configService: ConfigService<EnvironmentVariables>) => {
    //     const dbConfig: DatabaseConfig = configService.get("database")
    //     return {
    //       type: "postgres",
    //       host: dbConfig.host,
    //       port: dbConfig.port,
    //       username: dbConfig.username,
    //       password: dbConfig.password,
    //       database: dbConfig.database,
    //       entities: [],
    //       synchronize: false,
    //     }
    //   },
    //   inject: [ConfigService],
    // }),
    SteamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
