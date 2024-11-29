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
  <div class="info-aluno">
      <img class="img-aluno" :src="aluno.capa_url"  />
        <p> Nome do Aluno: {{ aluno.nome }}</p>
        <p>Email do Aluno: {{ aluno.email }}</p>
    </div>
<div class="Add">
  <button class="Add-Ocorencia">Adicionar Ocorrencias</button>
</div>

  <tr class="coluna-info">
    <td>Ocorrencias/Observações</td>
    <td><select>
    <option>1 Trimestre</option>
    <option>2 Trimestre</option>
    <option>3 Trimestre</option>
  </select>
    </td>
    <td><select>
    <option>2022</option>
    <option>2023</option>
    <option>2024</option>
  </select></td>
  </tr>
  <tr class="coluna-desc">
    <td>Registro de Atraso</td>
    <td>1 Trimestre</td>
    <td >2022</td>
  </tr>
  <hr />
  <tr class="coluna-desc">
    <td>Se Dedicou aos Estudos</td>
    <td>1 Trimestre</td>
   <td  >2022</td>
  </tr>
  <hr />

</template>
<style scoped>
.info-aluno {
  margin-top: 15vh;
  display: flex;
  align-items: center;
  gap: 2.1rem;
  font-family: 'Poppins', sans-serif;
  margin-left: 10vh;
  flex-direction: column;
  align-items: flex-start;
}
.img-aluno {
  max-width: 200px;
  border-radius: 50%;
}

.coluna-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5vh;
  background-color: #2c4156;
  color: White;
  font-family: 'Poppins', sans-serif;
  height: 5vh;
  gap: 40vh;
}
.coluna-desc {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: #2c4156;
  font-family: 'Poppins', sans-serif;
  height: 5vh;
  border: black;
  gap: 40vh;
}

 select{
    background-color:transparent;
    border:0;
    color: aliceblue;
    font-family: 'Poppins', sans-serif;
    font-size: medium;

}

option{
    color: #2c4156;
    font-family: 'Poppins', sans-serif;

}

.Add-Ocorencia{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    background-color: #2c4156;
    border: 0;
    color: aliceblue;
    width: 200px;
    height: 50px;
    font-size: large;



}
.Add{
    display: flex;
    justify-content: end  ;
}
</style>
