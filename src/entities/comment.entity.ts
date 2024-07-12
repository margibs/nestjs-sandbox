import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User, Topic } from 'src/entities';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Topic, (topic) => topic.comments)
  topic: Topic;
}
