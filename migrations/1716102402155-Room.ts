import { MigrationInterface, QueryRunner } from 'typeorm';

export class Room1716102402155 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "room" (
          "id" SERIAL NOT NULL, 
          "name" character varying NOT NULL, 
          "description" character varying NOT NULL, 
          "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
          "updated_at" TIMESTAMP, 
          "deleted_at" TIMESTAMP, 
        CONSTRAINT "PK_room_id" PRIMARY KEY ("id"))`,
    );

    await queryRunner.query(
      `CREATE INDEX index_room_on_deleted_at_nulls
        ON room (deleted_at)
        WHERE deleted_at IS NULL;`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "room"`);
  }
}
