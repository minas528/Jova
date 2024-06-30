/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FriendshipService } from "../friendship.service";
import { FriendshipCreateInput } from "./FriendshipCreateInput";
import { Friendship } from "./Friendship";
import { FriendshipFindManyArgs } from "./FriendshipFindManyArgs";
import { FriendshipWhereUniqueInput } from "./FriendshipWhereUniqueInput";
import { FriendshipUpdateInput } from "./FriendshipUpdateInput";

export class FriendshipControllerBase {
  constructor(protected readonly service: FriendshipService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Friendship })
  async createFriendship(
    @common.Body() data: FriendshipCreateInput
  ): Promise<Friendship> {
    return await this.service.createFriendship({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Friendship] })
  @ApiNestedQuery(FriendshipFindManyArgs)
  async friendships(@common.Req() request: Request): Promise<Friendship[]> {
    const args = plainToClass(FriendshipFindManyArgs, request.query);
    return this.service.friendships({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Friendship })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async friendship(
    @common.Param() params: FriendshipWhereUniqueInput
  ): Promise<Friendship | null> {
    const result = await this.service.friendship({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Friendship })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFriendship(
    @common.Param() params: FriendshipWhereUniqueInput,
    @common.Body() data: FriendshipUpdateInput
  ): Promise<Friendship | null> {
    try {
      return await this.service.updateFriendship({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Friendship })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFriendship(
    @common.Param() params: FriendshipWhereUniqueInput
  ): Promise<Friendship | null> {
    try {
      return await this.service.deleteFriendship({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}