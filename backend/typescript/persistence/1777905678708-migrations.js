/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
module.exports = class Migrations1777905678708 {
    name = 'Migrations1777905678708'

    /**
     * @param {QueryRunner} queryRunner
     */
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS "user" ("id" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdmin" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "deletedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS "savefile" ("id" character varying NOT NULL, "userId" character varying NOT NULL, "charaName" character varying NOT NULL, "playTime" character varying NOT NULL, "route" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "deletedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_a48f939e85aec817e619241da01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN IF EXISTS "username"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN IF EXISTS "isAdmin"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN IF EXISTS "createdAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN IF EXISTS "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN IF EXISTS "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN IF NOT EXISTS "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN IF NOT EXISTS "isAdmin" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN IF NOT EXISTS "createdAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN IF NOT EXISTS "updatedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN IF NOT EXISTS "deletedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN IF NOT EXISTS "nom" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN IF NOT EXISTS "cognom" character varying NOT NULL`);
    }

    /**
     * @param {QueryRunner} queryRunner
     */
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cognom"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nom"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdmin"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "isAdmin" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "savefile"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
