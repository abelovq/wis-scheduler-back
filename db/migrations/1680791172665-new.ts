import { MigrationInterface, QueryRunner } from "typeorm";

export class new1680791172665 implements MigrationInterface {
    name = 'new1680791172665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "refreshToken" character varying, "roles" "public"."user_roles_enum" array NOT NULL DEFAULT '{user}', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vacation" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_b98b2da5d138aa464c5d1431135" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vacation_money" ("id" SERIAL NOT NULL, "value" integer NOT NULL, CONSTRAINT "PK_a7ea4e714a095ba72bc9697dd3a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vacation_money"`);
        await queryRunner.query(`DROP TABLE "vacation"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
