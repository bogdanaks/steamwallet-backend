import { Module } from "@nestjs/common"

import { SteamController } from "./steam.contoller"
import { SteamService } from "./steam.service"

@Module({
  imports: [],
  controllers: [SteamController],
  providers: [SteamService],
})
export class SteamModule {}
