import { IsEmail } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne, Column } from 'typeorm';

@Entity()
export class Students {
  @PrimaryGeneratedColumn('increment')
  id: number;

//   @OneToOne(() => Users,{eager: true, cascade: true})
//   @JoinColumn()
//   user: Users

  @Column()
  first_name: string;

  @Column({nullable: true})
  middle_name?: string;

  @Column()
  last_name: string;

  @Column({nullable: true})
  @IsEmail()
  email: string;

  @Column({nullable: true})
  address?: string;

  @Column()
  phone?: string;
  
  @CreateDateColumn()
  created_at?:  Date;

  @UpdateDateColumn()
  updated_at?:  Date;
}