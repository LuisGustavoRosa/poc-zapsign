import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('data').notNullable()
      table.string('name_company_ubi').notNullable()
      table.string('address_company_ubi').notNullable()
      table.string('cnpj_company_ubi').notNullable()
      table.string('social_reason_professional').notNullable()
      table.string('address_company_professional').notNullable()
      table.string('cnpj_company_professional').notNullable()
      table.string('name_professional').notNullable()
      table.string('cpf_professional').notNullable()
      table.bigInteger('number_os').notNullable()
      table.string('hours_months').notNullable()
      table.string('total_reported_os').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
