import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Despesas1623961307186 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "despesas",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "id_responsavel",
                        type: "varchar"
                    },
                    {
                        name: "data_da_compra",
                        type: "Date"
                    },
                    {
                        name: "local_da_compra",
                        type: "varchar"
                    },
                    {
                        name: "valor",
                        type: "number"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {   
                        //nome da chave estrangeira
                        name: 'FKResponsavel',
                        //qual a tabela que estamos nos referindo
                        referencedTableName: 'responsavel',
                        //qual o registro que queremos pegar
                        referencedColumnNames: ['id'],
                        //qual o registro dessa tabela terá informação do registro que pegamos
                        columnNames: ['id_responsavel'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("despesas")
    }

}
