import { MigrationInterface, QueryRunner } from 'typeorm';

export class Reserve1716103362842 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "reserve" (
          "id" SERIAL NOT NULL, 
          "room_id" integer NOT NULL, 
          "state" boolean NOT NULL, 
          "start_date" TIMESTAMP NOT NULL, 
          "end_date" TIMESTAMP NOT NULL, 
          "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
          "updated_at" TIMESTAMP, 
          "deleted_at" TIMESTAMP, 
        CONSTRAINT "PK_reserve_id" PRIMARY KEY ("id"),
        CONSTRAINT "FK_room_id" FOREIGN KEY ("room_id") REFERENCES "room"("id") ON DELETE CASCADE
      )`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "reserve"`);
  }
}
