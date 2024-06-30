import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserProgressService } from "./userProgress.service";
import { UserProgressControllerBase } from "./base/userProgress.controller.base";

@swagger.ApiTags("userProgresses")
@common.Controller("userProgresses")
export class UserProgressController extends UserProgressControllerBase {
  constructor(protected readonly service: UserProgressService) {
    super(service);
  }
}
