<template>
    <div class="allPosts">
        <h2>Actuellement</h2>

        <section class="post">
                <div class="nicknamePost"> </div>
                <div class="contentPost"></div>
                <div class="filePost"></div>
        </section>
        
    </div>
</template>

<script>
//import axios from 'axios';

</script>


<style scoped>
h3{
    margin: 4rem 0;
}
.allPosts{
    text-align: center;
    width: 80%;
    margin: auto;
}
.post{
    width: 100%;
    margin: auto;
    height: auto;  
}
.nicknamePost{
    border-radius: 25px 25px 0 0;
    padding: 5px;
    border-bottom: 1px solid red;
    font-style: italic;
}
.contentPost{
    background-color: #FFF;
    padding: 3rem 1rem;
    margin-bottom: 10px;
}
.filePost{
    margin-bottom: 10px;
}
</style>