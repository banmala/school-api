import { Permissions } from 'src/components/permissions/entities/permission.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  name: string;
  
  @ManyToMany(() => Permissions, { eager: true })
  @JoinTable({
      name: "role_permissions",
      joinColumn: {
          name: "role_id",
          referencedColumnName: "id"
      },
      inverseJoinColumn: {
          name: "permission_id",
          referencedColumnName: "id"
      }
  })
  permissions: Permissions[]

  @CreateDateColumn()
  created_at?:  Date;

  @UpdateDateColumn()
  updated_at?:  Date;
}