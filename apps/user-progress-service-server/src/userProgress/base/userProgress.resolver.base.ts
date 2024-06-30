/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserProgress } from "./UserProgress";
import { UserProgressCountArgs } from "./UserProgressCountArgs";
import { UserProgressFindManyArgs } from "./UserProgressFindManyArgs";
import { UserProgressFindUniqueArgs } from "./UserProgressFindUniqueArgs";
import { DeleteUserProgressArgs } from "./DeleteUserProgressArgs";
import { UserProgressService } from "../userProgress.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserProgress)
export class UserProgressResolverBase {
  constructor(
    protected readonly service: UserProgressService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserProgress",
    action: "read",
    possession: "any",
  })
  async _userProgressesMeta(
    @graphql.Args() args: UserProgressCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserProgress])
  @nestAccessControl.UseRoles({
    resource: "UserProgress",
    action: "read",
    possession: "any",
  })
  async userProgresses(
    @graphql.Args() args: UserProgressFindManyArgs
  ): Promise<UserProgress[]> {
    return this.service.userProgresses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserProgress, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserProgress",
    action: "read",
    possession: "own",
  })
  async userProgress(
    @graphql.Args() args: UserProgressFindUniqueArgs
  ): Promise<UserProgress | null> {
    const result = await this.service.userProgress(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserProgress)
  @nestAccessControl.UseRoles({
    resource: "UserProgress",
    action: "delete",
    possession: "any",
  })
  async deleteUserProgress(
    @graphql.Args() args: DeleteUserProgressArgs
  ): Promise<UserProgress | null> {
    try {
      return await this.service.deleteUserProgress(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
