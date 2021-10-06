import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTales1633528607964 implements MigrationInterface {
    name = 'CreateTales1633528607964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tales" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL DEFAULT '', "body" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "favoritesCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_2d4c0f69a2420e272bb1478d9ed" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tales"`);
    }

}
