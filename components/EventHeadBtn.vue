<template>
  <div class="EventHeadBtn" @click="$router.push('/events')">
    <div class="new-text">New</div>
    <p>UPCOMING EVENTS &nbsp;&nbsp;&nbsp;</p>
  </div>
</template>

<script setup>
// Props, refs, and logic go here
</script>

<style scoped>
.EventHeadBtn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 7px;
    gap: 10px;
    background: #ffffff2c;
    backdrop-filter: blur(6px);
    border-radius: 100px;
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    width: fit-content;
    cursor: pointer;
    margin-bottom: 15px;
    transition: all 0.3s ease-in;
}

.new-text{
  background : #5F00C0;
  padding: 3px 20px;
  border-radius: 20px;
  font-weight: 600;
}

.EventHeadBtn:hover {
  background-color: #5F00C0;
  color: #fff;
}

.new-text:hover, .EventHeadBtn:hover .new-text{
  background-color: #fff;
  color: #5F00C0;
}

</style>