import { dbContext } from "../db/DbContext.js";
import { BadRequest, Forbidden } from "../utils/Errors.js";
class GroupsService {
  async removeGroup(groupId, accountId) {
    const group = await this.getGroupById(groupId);
    // @ts-ignore
    if (group.creatorId.toString() !== accountId) {
      throw new Forbidden("only the creator delete this group");
    }

    if (group.groupMemberIds.length > 1) {
      throw new Forbidden("this group still has members!");
    }
    await group.remove();
    return group;
  }
  async editGroup(groupData, accountId, groupId) {
    const group = await this.getGroupById(groupId);
    // @ts-ignore
    if (group.creatorId.toString() !== accountId) {
      throw new Forbidden("only the creator can edit this group");
    }
    group.name = groupData.name || group.name;
    group.coverImg = groupData.coverImg || group.coverImg;
    await group.save();
    return group;
  }
  async createGroup(groupData) {
    const group = await dbContext.Groups.create(groupData);
    return group;
  }
  async getGroupById(id) {
    const group = await dbContext.Groups.findById({ id });
    if (!group) {
      throw new BadRequest("invalid Group ID");
    }
    return group;
  }
  //
}
export const groupsService = new GroupsService();