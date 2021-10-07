import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ITaleProperties } from './interfaces/tale.interface';

@Entity({ name: 'tales' })
export class TaleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column({ default: '' })
  description: string;

  @Column({ type: 'jsonb' })
  properties: ITaleProperties;

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
