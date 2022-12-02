<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Nombre de familia">
        <el-input v-model="form.name" style="width: 75%"/>
      </el-form-item>
      <el-form-item label="Rut">
        <el-input v-model="form.rut" style="width: 75%"/>
      </el-form-item>
      <el-form-item label="Zona de estadia">
        <el-select v-model="form.region" placeholder="Seleccione su zona de acampado">
          <el-option label="Castaños" value="Castaños" />
          <el-option label="Manzanos" value="Manzanos" />
          <el-option label="Pampa" value="Pampa" />
          <el-option label="Rosales" value="Rosales" />
        </el-select>
      </el-form-item>
      <el-form-item label="Fecha de estadia">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="desde" style="width: 100%;" />
          <el-date-picker v-model="form.date2" type="date" placeholder="hasta" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
        </el-col>
      </el-form-item>
      <el-form-item label="Telefono de contacto">
        <el-col :span="11">
        <el-input v-model="form.telefono" style="width: 100%"/>
      </el-col>
      </el-form-item>
      <el-form-item label="Correo de contacto">
        <el-col :span="11">
        <el-input v-model="form.correo"/>
      </el-col>
      </el-form-item>
      <el-form-item label="Forma de pago">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Efectivo" name="type" />
          <el-checkbox label="Credito" name="type" />
          <el-checkbox label="Debito" name="type" />
          <el-checkbox label="F-pay" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Crear Reserva</el-button>
        <el-button @click="onCancel">Cancelar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form: {
        name: '',
        rut: '',
        region: '',
        date1: '',
        date2: '',
        telefono: '',
        correo: '',
        type: []
      }
    }
  },
  methods: {
    onSubmit: function() {
      axios.post('https://siloscastanos-default-rtdb.firebaseio.com/reservas.json', this.form)
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

