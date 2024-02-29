<template>
  <div class="example">
    <h1 v-if="users.length == 10">Oxirgi qo'shilgan 10 ta ma'lumot</h1>
    <div class="table__input">
      <el-form class="form__list" ref="documentForm" :model="documentData" :rules="rules">
        <div>
          <el-button @click="changeLang('en')" size="small" type="text"> ENG </el-button>
          <el-button @click="changeLang('uz')" size="small" type="text"> UZB </el-button>
        </div>
        <div class="for__flex">
          <el-form-item prop="name">
            <el-input v-model="documentData.name" :placeholder="$t('form.name')" class="input" />
          </el-form-item>

          <el-form-item prop="date" class="data__picker">
            <el-date-picker
              type="date"
              :placeholder="$t('form.date')"
              format="YYYY-MM-DD"
              value-format="YYYY-MM-DD"
              v-model="documentData.date"
            />
          </el-form-item>

          <el-form-item prop="sex" class="style__sex">
            <el-switch
              v-model="documentData.sex"
              class="ml-2"
              inline-prompt
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: rgb(255, 110, 224)"
              :active-text="$t('form.man')"
              :inactive-text="$t('form.woman')"
            />
          </el-form-item>
        </div>

        <el-form-item prop="about">
          <el-input
            v-model="documentData.about"
            :rows="2"
            type="textarea"
            :placeholder="$t('form.about')"
          />
        </el-form-item>

        <div class="for__flex">
          <el-form-item prop="viloyat">
            <el-select
              v-model="documentData.viloyat"
              clearable
              filterable
              :placeholder="$t('form.region')"
              @change="changeRegion(documentData.viloyat)"
            >
              <el-option
                v-for="item of regions"
                :key="item.id"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
          </el-form-item>

          <el-form-item prop="tuman">
            <el-select
              v-model="documentData.tuman"
              clearable
              filterable
              :placeholder="$t('form.district')"
            >
              <el-option
                v-for="item of districts"
                :key="item.id"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </div>

        <el-form-item :label="$t('form.age')" prop="age">
          <el-radio-group v-model="documentData.age">
            <el-radio label="yes" size="large" border>{{ $t('form.yes') }}</el-radio>
            <el-radio label="no" size="large" border>{{ $t('form.no') }}</el-radio>
          </el-radio-group> </el-form-item
        ><br />

        <div>
          <el-button :disabled="users.length == 10" class="buttons" type="primary" @click="save">
            saqlash
          </el-button>
        </div>
      </el-form>

      <div class="table__list" v-if="!users.length == 0">
        <el-table :data="users" class="table__style" border>
          <el-table-column label="#" type="index" width="50" />
          <el-table-column :label="$t('form.name')" prop="name" width="130" />
          <el-table-column :label="$t('form.about')" prop="about" width="160" />
          <el-table-column :label="$t('form.region')" width="110">
            <template #default="custom">
              <div>
                {{ choisesReg(custom.row.viloyat) }}
              </div>
            </template>
          </el-table-column>
          <el-table-column :label="$t('form.district')" width="130">
            <template #default="custom">
              <div>
                {{ choisesDistrict(custom.row.tuman) }}
              </div>
            </template>
          </el-table-column>
          <el-table-column :label="$t('form.birth_date')" prop="date" width="100" />
          <el-table-column :label="$t('form.age_filter')" width="110">
            <template #default="prop">
              <div>{{ age_filter(prop.row.age) }}a</div>
            </template>
          </el-table-column>

          <el-table-column :label="$t('form.sex')" width="60">
            <template #default="prop">
              <div>
                {{ sex_filter(prop.row.sex) }}
              </div>
            </template>
          </el-table-column>

          <el-table-column width="60">
            <template #default="prop">
              <div>
                <el-button type="warning" @click="edited(prop.row.index)" size="small">
                  <el-icon><EditPen /></el-icon>
                </el-button>
              </div>
            </template>
          </el-table-column>

          <el-table-column width="60">
            <template #default="prop">
              <div>
                <el-button type="danger" @click="deleted(prop.row.index)" size="small">
                  <el-icon><DeleteFilled /></el-icon>
                </el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { regions, center, age_filter, sex_filter } from '@/stores/counter'
import { dialogStore } from '@/stores/dialog'
import { choisesReg, choisesDistrict } from '@/stores/choisesRegion'
const dialog_store = dialogStore()
const { dialogVisible } = storeToRefs(dialog_store)
import { ElMessage } from 'element-plus'
import cookies from 'vue-cookies'

import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const l = ref('')

const changeLang = (val) => {
  cookies.set('lang', val)
  locale.value = val
  l.value = val
}
watch(locale, () => {
  console.log(locale.value)
})

onMounted(() => {
  if (cookies.isKey('lang')) {
    changeLang(cookies.get('lang'))
  } else {
    l.value = locale.value
  }
})

const id = ref()

const documentForm = ref()

const users = ref([])

const documentData = ref({
  name: '',
  about: '',
  viloyat: '',
  tuman: '',
  date: '',
  sex: false,
  age: 1,
  index: id.value
})

const districts = ref([])

const changeRegion = (id) => {
  console.log(id)
  districts.value = []
  center.filter((item) => {
    if (item.parent == id) {
      districts.value.push(item)
    }
  })

  console.log(districts.value)
}

const save = () => {
  if (!documentForm.value) return
  documentForm.value.validate((valid, fields) => {
    if (valid) {
      if (dialogVisible.value) {
        users.value[id.value] = documentData.value
        // console.log("edit");
        console.log(users.value[id.value])
        documentData.value = {}
        documentData.value.sex = false
        id.value = ''
        dialogVisible.value = false
        console.log(users.value)
        districts.value = []
        ElMessage({
          type: 'warning',
          message: "Foydalanuvchi ma'lumot tahrirlandi"
        })
      } else {
        ElMessage({
          type: 'success',
          message: "Foydalanuvchi ma'lumot qo'shildi"
        })
        if (users.value.length == 10) {
          users.value.splice(0, 1)
          id.value = users.value.length
          users.value = [...users.value, { ...documentData.value }]
          documentData.value = {}
          documentData.value.sex = false
          ElMessage({
            type: 'info',
            message: "Birinchi kiritgan ma'lumotingiz o'chib ketdi!"
          })
        } else {
          id.value = users.value.length
          documentData.value.index = users.value.length
          users.value = [...users.value, { ...documentData.value }]
          documentData.value = {}
          documentData.value.sex = false
          console.log(id.value)
          console.log(users.value)
        }
      }
    } else {
      console.log(fields)
    }
  })
}

const deleted = (val) => {
  users.value = [...users.value.filter((sec) => sec.index != val)]
  console.log(val)
  ElMessage({
    type: 'warning',
    message: "Foydalanuvchi ma'lumoti o'chirildi!"
  })
}

const edited = (val) => {
  console.log(users.value)
  dialogVisible.value = true
  users.value = users.value.map((item) => {
    if (item.index == val) {
      documentData.value = { ...item }
      // documentData.value.viloyat = regions.filter((reg)=>{
      //   if(reg.id == item.viloyat)return
      // })
    }
    return item
  })

  console.log(users.value)
}

const rules = ref({
  name: [
    {
      required: true,
      message: 'Ism kiritilmadi',
      trigger: 'blur'
    }
  ],
  about: [
    {
      required: true,
      message: "Ma'lumot kiritilmadi",
      trigger: 'blur'
    }
  ],
  date: [
    {
      required: true,
      message: 'Sana kiritilmadi',
      trigger: 'blur'
    }
  ],
  viloyat: [
    {
      required: true,
      message: 'viloyat kiritilmadi',
      trigger: 'blur'
    }
  ],
  tuman: [
    {
      required: true,
      message: 'Tuman kiritilmadi',
      trigger: 'blur'
    }
  ],
  sex: [
    {
      required: true,
      message: 'Jinsi kiritilmadi',
      trigger: 'blur'
    }
  ],
  age: [
    {
      required: true,
      message: 'Yosh tanlanmadi',
      trigger: 'blur'
    }
  ]
})
</script>
<style lang="scss">
@import '@/assets/styles/all_style.scss';
</style>
