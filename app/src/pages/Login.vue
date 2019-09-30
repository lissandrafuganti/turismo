<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center form-login q-pa-lg">
        <div class="row full-width">
          <div class="col-12 col-md-6 offset-md-3">
            <div class="row">
              <div class="col-md-7 col-12 form">
                <div class="row q-mt-lg">
                  <div class="col-12 text-center">
                    <h1 class="text-purple text-h5">Painel administrativo</h1>
                    <p class=text-grey-9>Insira suas credenciais abaixo para acessar o sistema</p>
                  </div>
                </div>
                <q-separator inset></q-separator>
                <div class="row q-mt-xl">
                  <div class="col-12">
                    <q-form
                      class="q-gutter-xs q-pa-md"
                      @submit="login"
                    >
                      <q-input
                        label="Empresa"
                        dense
                        outlined
                        color="purple-9"
                        v-model.trim="dados.empresa"
                      >
                        <template>
                          <q-icon
                            slot='prepend'
                            name="mdi-office-building"
                          ></q-icon>
                        </template>
                      </q-input>
                      <q-input
                        label="Usuário"
                        dense
                        outlined
                        color="purple-9"
                        v-model.trim="dados.usuario"
                      >
                        <template>
                          <q-icon
                            slot='prepend'
                            name="mdi-account-circle"
                          ></q-icon>
                        </template>
                      </q-input>
                      <q-input
                        label="Senha"
                        dense
                        outlined
                        color="purple-9"
                        v-model.trim="dados.senha"
                        :type="isPwd ? 'password' : 'text'"
                      >
                        <template>
                          <q-icon
                            name="mdi-lock"
                            slot="prepend"
                          ></q-icon>
                          <q-icon
                            @click.native="isPwd = !isPwd"
                            slot='append'
                            :name="isPwd ? 'mdi-eye' : 'mdi-eye-off'"
                            class="cursor-pointer"
                          ></q-icon>
                        </template>
                      </q-input>
                      <q-btn
                        label="Acessar"
                        color="purple-9"
                        type="submit"
                        dense
                        icon="mdi-login-variant"
                        no-caps
                        :loading="loading"
                      ></q-btn>
                    </q-form>
                  </div>
                </div>
              </div>
              <div class="col-md-5 desktop-only background flex flex-center">
                <h1 class="text-white text-h5">Sistema BTMS</h1>
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import notification from '../utils/notify'
import { Cookies } from 'quasar'
export default {
  name: 'PLogin',
  data () {
    return {
      dados: {
        empresa: null,
        usuario: null,
        senha: null
      },
      isPwd: true,
      loading: false
    }
  },
  created () {
    if (Cookies.has('authentication')) return this.$router.push({ 'name': 'PDashboard' })
  },
  methods: {
    login () {
      this.loading = true
      const dados = {
        dados: {
          head: {
            servico: 'autenticacao',
            chave: ''
          },
          data: {
            empresa: this.dados.empresa,
            login: this.dados.usuario,
            senha: this.dados.senha
          }
        }
      }

      this.$axios.post('', dados)
        .then(res => {
          if (res.data.info && res.data.info.length > 0) {
            for (let e of res.data.info) {
              if (e.cdg_erro) {
                this.loading = false
                return notification('mdi-alert-octagon', e.msg, 'top-right', 'red-9')
              }
            }
          }
          notification('mdi-check-all', 'Login efetuado com sucesso', 'top-right', 'cyan-9')
          Cookies.set('authentication', res.data.dados,
            {
              expires: 10,
              path: '/'
            })
          window.location.reload(true)
        }).catch(err => {
          if (err) {
            this.loading = false
          }
        })
    }
  }
}
</script>
