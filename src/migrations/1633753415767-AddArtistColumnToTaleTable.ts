import {MigrationInterface, QueryRunner} from "typeorm";

export class AddArtistColumnToTaleTable1633753415767 implements MigrationInterface {
    name = 'AddArtistColumnToTaleTable1633753415767'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tales" ADD "artist" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tales" DROP COLUMN "artist"`);
    }

}
