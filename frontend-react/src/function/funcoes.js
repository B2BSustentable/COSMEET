import api from "./axios";


//empresas
export async function buscarEmpresa(emailEmpresa) {
    try {
      const response = await api.apiEmpresa.get('/getEmpresaEmail/' + emailEmpresa);
      window.sessionStorage.setItem("cnpj", response.data.cnpj);
      console.log(response.data.cnpj);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

export async function editarEmpresa(nomeEmpresa, photo, descricao, cep){
    const cnpjEmpresa = window.sessionStorage.getItem("cnpj");
    const emailEmpresa = window.sessionStorage.getItem("emailEmpresa");
  
    let empresa = {
      nomeEmpresa: nomeEmpresa,
      email: emailEmpresa,
      descricao: descricao,
      photo: photo,
      enderecos: [
        {
          cep:cep
        }
      ]
    }
    
    const resposta = api.apiEmpresa.put('/' + cnpjEmpresa, empresa)
  
    return resposta;
  }