import { UserEntity } from '@app/user/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profiles' })
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;

  @Column({ default: '' })
  photo: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @OneToOne(() => UserEntity, (user) => user.profile)
  user: UserEntity;
}
