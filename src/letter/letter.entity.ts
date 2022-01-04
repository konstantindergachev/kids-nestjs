import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'letters' })
export class LetterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  magic_title: string;

  @Column()
  magic_email: string;

  @Column()
  magic_number: number;

  @Column({ default: '' })
  magic_text: string;
}
