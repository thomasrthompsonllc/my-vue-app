<template>
  <div class="header" >
    <slot name="logo"></slot>
    <slot name="navbar"></slot>
  </div>
</template>

<script>

</script>

<style scoped>

.header{
    
    background-color: rgba(16, 46, 238, 0.537);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10%;
}

@media screen and (max-width: 768px){
   
 
}


</style>