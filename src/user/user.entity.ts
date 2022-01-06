import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hash } from 'bcrypt';
import { ProfileEntity } from '@app/profile/profile.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => ProfileEntity, (profile) => profile.user)
  @JoinColumn()
  profile: ProfileEntity;

  @BeforeInsert()
  async hashPassword() {
    const salt = 10;
    this.password = await hash(this.password, salt);
  }
}
