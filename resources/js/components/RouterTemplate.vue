<template>
    <div class=" py-4">
        <div class=" container-fluid">
            <div class="">      
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
