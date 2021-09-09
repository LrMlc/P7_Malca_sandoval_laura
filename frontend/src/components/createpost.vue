<template>
    <div id="createPost">
        <form >
            <textarea name="textarea" placeholder="Publiez votre message"></textarea>       
            <div id="btns">                
                <input type="file">             
                <input type="submit">
            </div>
        </form>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})


</script>
<style scoped>

</style>