import { ref } from 'vue';
import { defineStore } from 'pinia';

import OcorrenciaView from '@/views/OcorrenciaView.vue';
const ocorrenciaService = new OcorrenciaView();

export const useOcorrenciaStore = defineStore('ocorrencia', () => {
  const ocorrencia = ref([]);

  async function getOcorrencias() {
    ocorrencia.value = await ocorrenciaService.getOcorrencias();
  }
  async function createOcorrencias(ocorrencia) {
    await ocorrenciaService.createOcorrencias(ocorrencia);
    getOcorrencias();
    
  }
  async function getOcorrenciasById(id) {
    const ocorrencia = await ocorrenciaService.getOcorrenciasById(id);
    return ocorrencia
  }

  async function getOcorrenciasByAluno(aluno) {
    const ocorrencia = await ocorrenciaService.getOcorrenciasByAluno(aluno);
    return ocorrencia
  }


  return { ocorrencia, getOcorrencias, createOcorrencias, getOcorrenciasByAluno, getOcorrenciasById };
}
);
