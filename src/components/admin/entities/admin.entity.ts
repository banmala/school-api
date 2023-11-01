import { Users } from 'src/components/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne, Column } from 'typeorm';

@Entity()
export class Admins {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToOne(() => Users,{eager: true, cascade: true})
  @JoinColumn()
  user: Users

  @CreateDateColumn()
  created_at?:  Date;

  @UpdateDateColumn()
  updated_at?:  Date;
}