import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public data : string
  @column()

  public reference_month_and_year : string
  @column()
  public name_company_ubi : string

  @column()
  public address_company_ubi : string

  @column()
  public cnpj_company_ubi : string

  @column()
  public social_reason_professional: string

  @column()
  public address_company_professional : string

  @column()
  public cnpj_company_professional : string

  @column()
  public name_professional : string

  @column()
  public cpf_professional :string

  @column()
  public number_os : number

  @column()
  public hours_months : string

  @column()
  public total_reported_os : string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
