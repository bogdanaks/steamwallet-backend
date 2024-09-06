import { Injectable } from "@nestjs/common"

@Injectable()
export class SteamService {
  getHello(): string {
    return "Hello Steam!"
  }

  checkSteamLogin() {
    return "Valid!"
  }
}
