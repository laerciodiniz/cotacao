import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AddOrderIdAndProductIdToOrdersProductsProvider1604799287826
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'orders_products_provider',
      new TableColumn({
        name: 'order_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'orders_products_provider',
      new TableColumn({
        name: 'product_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'orders_products_provider',
      new TableForeignKey({
        name: 'OrdersProductsProviderOrder',
        columnNames: ['order_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orders',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'orders_products_provider',
      new TableForeignKey({
        name: 'OrdersProductsProviderProduct',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'orders_products',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'orders_products_provider',
      'OrdersProductsProviderProduct',
    );

    await queryRunner.dropForeignKey(
      'orders_products_provider',
      'OrdersProductsProviderOrder',
    );

    await queryRunner.dropColumn('orders_products_provider', 'product_id');

    await queryRunner.dropColumn('orders_products_provider', 'order_id');
  }
}
