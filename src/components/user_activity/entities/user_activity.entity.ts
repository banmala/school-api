import { Users } from 'src/components/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

export enum ActivityType {
    REGISTER = 'register',
    LOGIN = 'login',
    LOGOUT = 'logout',
    UPDATE = 'update',
  }

@Entity()
export class UserActivity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @CreateDateColumn()
  timestamp?:  Date;

  @Column({
    type: 'enum',
    enum: ActivityType,
  })
  type: ActivityType

  @ManyToOne(() => Users, user => user.id, {cascade: true})
  @JoinColumn({name: "user_id"})
  user: Users;

  @Column({ type: "json", name: "metadata" })
  metadata: any;
}