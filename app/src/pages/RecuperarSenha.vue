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
                    <h1 class="text-purple text-h5">Recuperar senha</h1>
                    <p class=text-grey-9>Insira suas credenciais abaixo para recuperar sua senha</p>
                  </div>
                </div>
                <q-separator inset></q-separator>
                <div class="row q-mt-xl">
                  <div class="col-12">
                    <q-form class="q-gutter-xs q-pa-md">
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
                        label="E-mail"
                        dense
                        outlined
                        color="purple-9"
                        v-model.trim="dados.email"
                      >
                        <template>
                          <q-icon
                            slot='prepend'
                            name="mdi-at"
                          ></q-icon>
                        </template>
                      </q-input>

                      <q-btn
                        label="Recuperar"
                        color="purple-9"
                        type="submit"
                        dense
                        icon="mdi-login-variant"
                        no-caps
                        :loading="loading"
                      ></q-btn>
                      <router-link
                        :to="{name: 'PLogin'}"
                        href
                        class="float-right q-mt-md no-decoration text-purple-9"
                      >Voltar para o login</router-link>
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
import { Cookies } from 'quasar'
export default {
  name: 'PRecuperarSenha',
  data () {
    return {
      dados: {
        empresa: null,
        usuario: null,
        email: null
      },
      loading: false
    }
  },
  created () {
    if (Cookies.has('authentication')) return this.$router.push({ 'name': 'PDashboard' })
  }
}
</script>
