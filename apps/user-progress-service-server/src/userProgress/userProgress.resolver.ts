import * as graphql from "@nestjs/graphql";
import { UserProgressResolverBase } from "./base/userProgress.resolver.base";
import { UserProgress } from "./base/UserProgress";
import { UserProgressService } from "./userProgress.service";

@graphql.Resolver(() => UserProgress)
export class UserProgressResolver extends UserProgressResolverBase {
  constructor(protected readonly service: UserProgressService) {
    super(service);
  }
}
