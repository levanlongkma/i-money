<template>
    <brand/>
    <slot></slot>
</template>
<script>
    import Brand from "./../components/Brand.vue"

    export default {
        components: {Brand},
    }
</script>