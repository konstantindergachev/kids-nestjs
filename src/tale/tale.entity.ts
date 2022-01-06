import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tales' })
export class TaleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column({ default: '' })
  description: string;

  @Column('jsonb', { nullable: true })
  // eslint-disable-next-line @typescript-eslint/ban-types
  couplets: object[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ default: 0 })
  favoritesCount: number;

  @BeforeInsert()
  updateTimestamp() {
    this.updatedAt = new Date();
  }
}
