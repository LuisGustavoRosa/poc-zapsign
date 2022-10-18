import User from "App/Models/User";
import axios from "axios";

export default class UsersController {
  public async show({ params }) {
    const data = await User.findBy("id", params.id);
    data?.toJSON();
    try {
      const datas = await axios({
        method: "post",
        url: process.env.APP_URL_API,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        /* data: {
          document: {
            path: "/Modelos/OsSigner.docx",
            template: {
              data: {
                "MÊS E ANO DE REFERÊNCIA": data?.number_os,
                "NOME DA EMPRESA UBISTART": data?.name_company_ubi,
                "Endereço da Empresa Ubistart": data?.address_company_ubi,
                "CNPJ da empresa Ubistart":data?.cnpj_company_ubi,
                "Razão Social do Profissional":data?.social_reason_professional,
                "Endereço da Empresa do Profissional":data?.address_company_professional,
                "CNPJ da Empresa do Profissional":data?.cnpj_company_professional,
                "Nome do Profissional":data?.name_professional,
                "CPF do Profissional":data?.cpf_professional,
                "NÚMERO DA OS":data?.number_os,
                "horas/mês":data?.hours_months,
                "Total informado na OS":data?.total_reported_os
            },
          },
          }
      } */
        data: {
          sandbox: true,
          template_id: "75f2a9df-2fda-42c1-b7fa-a2239b803d7e",
          signer_name: "Luis Gustavo",
          send_automatic_email: true,
          name: "OS Ubistart",
          send_automatic_whatsapp: false,
          lang: "pt-br",
          external_id: null,
          data: [
            {
              de: "{{EMAIL DO PROFISSIONAL}}",
              para: "luis.cardoso@rede.ulbra.br",
            },
            {
              de: "{{MÊS E ANO DE REFERÊNCIA}}",
              para: data?.number_os,
            },
            {
              de: "{{NOME DA EMPRESA UBISTART}}",
              para: data?.name_company_ubi,
            },
            {
              de: "{{ENDEREÇO DA EMPRESA UBISTART}}",
              para: data?.address_company_ubi,
            },
            {
              de: "{{CNPJ DA EMPRESA UBISTART}}",
              para: data?.cnpj_company_ubi,
            },

            {
              de: "{{RAZÃO SOCIAL DO PROFISSIONAL}}",
              para: data?.social_reason_professional,
            },
            {
              de: "{{ENDEREÇO DA EMPRESA DO PROFISSIONAL}}",
              para: data?.address_company_professional,
            },
            {
              de: "{{CNPJ DA EMPRESA DO PROFISSIONAL}}",
              para: data?.cnpj_company_professional,
            },
            {
              de: "{{NOME DO PROFISSIONAL}}",
              para: data?.name_professional,
            },
            {
              de: "{{CPF DO PROFISSIONAL}}",
              para: data?.cpf_professional,
            },
            {
              de: "{{NÚMERO DA OS}}",
              para: data?.number_os,
            },
            {
              de: "{{HORAS/MÊS}}",
              para: data?.hours_months,
            },
            {
              de: "{{TOTAL INFORMADO NA OS}}",
              para: data?.total_reported_os,
            },
          ],
        },
      });

      return datas;
    } catch (error) {
      console.log(error)
    }
  }
}
