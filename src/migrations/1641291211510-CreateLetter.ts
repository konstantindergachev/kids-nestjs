import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLetter1641291211510 implements MigrationInterface {
    name = 'CreateLetter1641291211510'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "letters" ("id" SERIAL NOT NULL, "magic_title" character varying NOT NULL, "magic_email" character varying NOT NULL, "magic_number" integer NOT NULL, "magic_text" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_bf70c41d26aa84cf2651d571889" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "letters"`);
    }

}
