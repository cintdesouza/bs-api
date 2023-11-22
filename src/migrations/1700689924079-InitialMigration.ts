import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1700689924079 implements MigrationInterface {
    name = 'InitialMigration1700689924079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."product_model_enum" AS ENUM('65', '55')`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "operation" character varying(30) NOT NULL, "movement" character varying(7) NOT NULL, "situation" character varying(10) NOT NULL, "model" "public"."product_model_enum" NOT NULL DEFAULT '65', "series" integer NOT NULL, "number" integer NOT NULL, "supplier" character varying(30) NOT NULL, "issueDate" date NOT NULL, "genDate" date NOT NULL, "employee" character varying(30) NOT NULL, "freight" integer NOT NULL, "totalValue" integer NOT NULL, "product" character varying(20) NOT NULL, "quantity" integer NOT NULL, "unit" integer NOT NULL, "unitaryValue" integer NOT NULL, "total" integer NOT NULL, "discount" integer NOT NULL, "productFreight" integer NOT NULL, "expenses" integer NOT NULL, "insurance" integer NOT NULL, "icms" integer NOT NULL, "icmsST" integer NOT NULL, "ipi" integer NOT NULL, "pis" integer NOT NULL, "cofins" integer NOT NULL, "reweighing" character varying(10) NOT NULL, "weight" integer NOT NULL, "reweighingValue" integer NOT NULL, "method" character varying(10) NOT NULL, "finalTotal" integer NOT NULL, "account" character varying(20) NOT NULL, "condition" character varying(10) NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TYPE "public"."product_model_enum"`);
    }

}
