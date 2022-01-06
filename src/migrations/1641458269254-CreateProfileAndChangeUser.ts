import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProfileAndChangeUser1641458269254
  implements MigrationInterface
{
  name = 'CreateProfileAndChangeUser1641458269254';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "letters" ("id" SERIAL NOT NULL, "magic_title" character varying NOT NULL, "magic_email" character varying NOT NULL, "magic_number" integer NOT NULL, "magic_text" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_bf70c41d26aa84cf2651d571889" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "profileId" integer, CONSTRAINT "REL_b1bda35cdb9a2c1b777f5541d8" UNIQUE ("profileId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "profiles" ("id" SERIAL NOT NULL, "gender" character varying NOT NULL, "photo" character varying NOT NULL DEFAULT '', "phone" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_8e520eb4da7dc01d0e190447c8e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tales" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "title" character varying NOT NULL, "artist" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "couplets" jsonb, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "favoritesCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_2d4c0f69a2420e272bb1478d9ed" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87" FOREIGN KEY ("profileId") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_b1bda35cdb9a2c1b777f5541d87"`,
    );
    await queryRunner.query(`DROP TABLE "tales"`);
    await queryRunner.query(`DROP TABLE "profiles"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "letters"`);
  }
}
