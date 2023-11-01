import { Roles } from 'src/components/roles/entities/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({select: false})
  password?: string;

  @ManyToOne(() => Roles, role => role.id, {cascade: true, eager: true})
  @JoinColumn({name: "role_id"})
  role: Roles;

  @Column()
  first_name: string;

  @Column({nullable: true})
  middle_name: string;

  @Column()
  last_name: string;  
  
  @CreateDateColumn()
  created_at?:  Date;

  @UpdateDateColumn()
  updated_at?:  Date;
}