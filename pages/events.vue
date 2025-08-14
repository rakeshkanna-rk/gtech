<template>
  <div></div>
</template>

<script setup>
import { supabase } from "#imports";

const test = async () => {
  const { data, error } = await supabase.from("eventdata").select("*");

  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Data are:" + data[0].thumbnail);
  }
};

test();
</script>
