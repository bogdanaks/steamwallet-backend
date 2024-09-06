import { Controller, Get } from "@nestjs/common"

import { SteamService } from "./steam.service"

@Controller("steam")
export class SteamController {
  constructor(private readonly steamService: SteamService) {}

  @Get()
  getHello(): string {
    return this.steamService.getHello()
  }

  @Get("check/:login")
  checkSteamLogin(): string {
    return this.steamService.checkSteamLogin()
  }
}
