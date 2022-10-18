import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

const users = [
  {
    data: '02/2022',

    name_company_ubi: 'Coca-Cola',
    address_company_ubi: 'Avenida Jose',
    cnpj_company_ubi: "08.212.339/0001-63",
    social_reason_professional: "Coca-Cola Femsa",
    address_company_professional:"Avenida Porto Alegre",
    cnpj_company_professional: "33.118.342/0001-60",
    name_professional: "Luis Gustavo",
    cpf_professional: "044.189.900-54",
    number_os: 19203457,
    hours_months: "60",
    total_reported_os:"1.200",
  },
  {
    data: '03/2022',
    name_company_ubi: 'Ubistart',
    address_company_ubi: 'Avenida Centro',
    cnpj_company_ubi: "28.211.339/1001-63",
    social_reason_professional: "Ubistart",
    address_company_professional:"Avenida Predial",
    cnpj_company_professional: "20.218.342/0001-60",
    name_professional: "Joao",
    cpf_professional: "034.149.950-64",
    number_os: 1920343357,
    hours_months: "50",
    total_reported_os: "5.000",
  },
]

export default class UserSeeder extends BaseSeeder {
  public static developmentOnly = true
  public async run() {
    //@ts-ignore
    await User.updateOrCreateMany('data', users)
  }
}
