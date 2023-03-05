<template>
    <span :class="['badge', className]">
		{{ text }}
	</span>
</template>

<script>
    export default {
        props: ['type'],

        data() {
            return {
                classMap: {
                    processed: 'text-bg-success',
                    waiting: 'text-bg-danger'
                },

                textMap: {
                    processed: 'Обработано',
                    waiting: 'В ожидании'
                }
            }
        },

        computed: {
            className() {
                return this.classMap[this.type]
            },

            text() {
                return this.textMap[this.type]
            }
        }
    }
</script>

<style scoped lang="scss">
 span{
     font-size: .8rem;
     user-select: none;
 }
</style>
