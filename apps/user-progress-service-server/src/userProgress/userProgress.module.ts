import { Module } from "@nestjs/common";
import { UserProgressModuleBase } from "./base/userProgress.module.base";
import { UserProgressService } from "./userProgress.service";
import { UserProgressController } from "./userProgress.controller";
import { UserProgressResolver } from "./userProgress.resolver";

@Module({
  imports: [UserProgressModuleBase],
  controllers: [UserProgressController],
  providers: [UserProgressService, UserProgressResolver],
  exports: [UserProgressService],
})
export class UserProgressModule {}
