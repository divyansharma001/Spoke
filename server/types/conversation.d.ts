
import { Message } from "./message";

export interface Conversation {
    conversation_id : number,
    participants : number[],
    message: Message[]
}