import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { TagsRepositories } from "../repositories/TagsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { send } from "./SendEmailService";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (user_receiver == user_sender) {
      throw new Error("Incorrect user receiver!");
    }

    const userReceiver = await usersRepositories.findOne(user_receiver);

    if (!userReceiver) {
      throw new Error("User receive not exists!");
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    });

    await complimentsRepositories.save(compliment);

    const userSender = await usersRepositories.findOne(user_sender);
    const tag = await tagsRepositories.findOne({
      where: {
        id: tag_id
      }
    })

    send({ tag: tag.name, message, name_sender: userSender.name, receiver_email: userReceiver.email });

    return compliment;
  }
}

export { CreateComplimentService }