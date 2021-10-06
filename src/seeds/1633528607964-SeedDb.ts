import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1633528607964 implements MigrationInterface {
  name = 'SeedDb1633528607964';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "tales"
       (slug, title, description, body) VALUES
       ('first-tale', 'test tale', 'test description', 'test body'),
       ('second-tale', 'second tale', 'second description', 'second body')
      `,
    );
  }

  public async down(): Promise<void> {}
}
