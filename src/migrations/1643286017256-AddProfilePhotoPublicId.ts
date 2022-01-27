import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProfilePhotoPublicId1643286017256
  implements MigrationInterface
{
  name = 'AddProfilePhotoPublicId1643286017256';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."profiles" DROP COLUMN "photo"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."profiles" ADD "photo_url" character varying NOT NULL DEFAULT ''`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."profiles" ADD "photo_public_id" character varying NOT NULL DEFAULT ''`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."profiles" DROP COLUMN "photo_public_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."profiles" DROP COLUMN "photo_url"`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."profiles" ADD "photo" character varying NOT NULL DEFAULT ''`,
    );
  }
}
