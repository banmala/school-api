import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';

export enum Actions {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete'
}

export enum Claims {
  USER = 'user',
  ROLE = 'role',
  STUDENT = 'student',
  TEACHER = 'teacher',
}

@Entity()
export class Permissions {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'enum',
    enum: Claims,
  })
  claim: Claims;

  @Column({
    type: 'enum',
    enum: Actions,
  })
  action: Actions;

  @Column({nullable: true})
  description?: string;
  
  @CreateDateColumn()
  created_at?:  Date;

  @UpdateDateColumn()
  updated_at?:  Date;
}