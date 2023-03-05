<template>
    <div class="col-3">
        <input type="text" class="form-control" placeholder="Введите номер телефона" v-model="telephone">
    </div>
</template>

<script>
    export default {
        emits: ['update:modelValue'],
        props: ['modelValue'],

        data() {
            return {
                telephone: ''
            }
        },

        computed: {
            changeData() {
                return { telephone: this.telephone }
            }
        },

        watch: {
            changeData: {
                handler: function (value) {
                    return this.$emit('update:modelValue', {
                        telephone: value.telephone
                    })
                }

                // deep: true
            }
        }
    }
</script>
