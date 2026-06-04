import { Prompt } from './prompt.entity';

export interface IPromptRepository {
  findMany(): Promise<Prompt[]>;
  searchMany(term: string): Promise<Prompt[]>;
}
