<template>
    <div class="col-5 d-flex flex-nowrap">
        <input type="text" class="form-control me-2" placeholder="Введите номер" v-model="telephone">
        <select class="form-select me-2" v-model="status">
            <option disabled selected>Выберите статус</option>
            <option value="waiting">В ожидании</option>
            <option value="processed">Обработано</option>
        </select>
        <button class="btn btn-secondary" @click="reset">Сбросить</button>
    </div>
</template>

<script>
    export default {
        emits: ['update:modelValue'],
        props: ['modelValue'],

        data() {
            return {
                telephone: '',
                status: 'Выберите статус'
            }
        },

        computed: {
            changeData() {
                return {
                    telephone: this.telephone,
                    status: this.status
                }
            }
        },

        watch: {
            changeData: {
                handler: function (value) {
                    return this.$emit('update:modelValue', {
                        telephone: value.telephone,
                        status: value.status
                    })
                }

                // deep: true
            }
        },

        methods: {
            reset() {
                this.telephone = ''
                this.status = 'Выберите статус'
            }
        }
    }
</script>
