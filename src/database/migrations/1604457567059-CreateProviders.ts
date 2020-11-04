import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateProviders1604457567059 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
      
      await queryRunner.createTable(
            new Table({
                name: 'providers',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                      },
                      {
                        name: 'password',
                        type: 'varchar',
                      },
                      {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                      },
                      {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                      },
                ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('providers');
    }

}
