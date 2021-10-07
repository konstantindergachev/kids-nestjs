import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1633604505442 implements MigrationInterface {
  name = 'SeedDb1633604505442';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "tales"
       (slug, title, description, properties) VALUES
       ('first-tale', 'test tale', 'test description', '{"image": "https://anime.goodfon.com/download/tsvety-polevye-romashki-risunok-romashki-polevye/1920x1080/", "text": ["first string", "second string"]}')
      `,
    );
  }

  public async down(): Promise<void> {}
}
