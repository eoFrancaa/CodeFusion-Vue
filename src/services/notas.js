import axios from 'axios';

export default class ProductService {
  async getNotas() {
    const response = await axios.get('/notas/');
    return response.data.results;
  }

  async getNotasByturma(turma) {
    console.log(turma)
    const response = await axios.get(`/notas/?turma__id=${turma}`);
    return response.data.results;
  }

  async createNota(Notas) {
    const response = await axios.post('/notas/', Notas);
    return response.data;
  }

  async getAlunosById(id) {
    const response = await axios.get(`/alunos/${id}/`);
    return response.data;
  }
}
