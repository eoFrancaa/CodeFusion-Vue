<script setup>
import {ref, onMounted} from 'vue'
import { useAlunoStore } from '@/stores/aluno';
import { useRoute } from 'vue-router';

const router = useRoute()

const alunoStore = useAlunoStore()

const aluno = ref({})

onMounted( async () => {
  aluno.value = await alunoStore.getAlunosById(router.params.id)
})
</script>
<template>
  <div class="info-aluno-container">
    <div class="info-aluno">
      <img class="img-aluno" :src="aluno.capa_url" alt="Foto do Aluno" />
      <div>
        <p class="aluno-nome">{{ aluno.nome }}</p>
        <p class="aluno-email">{{ aluno.email }}</p>
      </div>
    </div>

    <div class="add-ocorrencia">
      <button class="btn-add-ocorrencia">Adicionar Ocorrência</button>
    </div>

    <table class="tabela-ocorrencias">
      <thead>
        <tr>
          <th>Ocorrências/Observações</th>
          <th>Trimestre</th>
          <th>Ano</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Registro de Atraso</td>
          <td>1º Trimestre</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>Uso de cigarro eletrônico</td>
          <td>2º Trimestre</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Se dedicou aos estudos</td>
          <td>3º Trimestre</td>
          <td>2024</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.info-aluno-container {
  margin: 2rem;
  font-family: 'Poppins', sans-serif;
}

.info-aluno {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1.5rem;
  margin-top: 15vh;
}

.img-aluno {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.aluno-nome {
  font-size: 1.5rem;
  font-weight: bold;
}

.aluno-email {
  font-size: 1rem;
  color: #555;
}

.add-ocorrencia {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
}

.btn-add-ocorrencia {
  background-color: #2c4156;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn-add-ocorrencia:hover {
  background-color: #1a2b3c;
}

.tabela-ocorrencias {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.tabela-ocorrencias th,
.tabela-ocorrencias td {
  border: 1px solid #ccc;
  padding: 0.75rem;
}

.tabela-ocorrencias th {
  background-color: #2c4156;
  color: #fff;
  font-weight: bold;
  text-align: center;
}

.tabela-ocorrencias td {
  text-align: center;
}

.tabela-ocorrencias tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>


