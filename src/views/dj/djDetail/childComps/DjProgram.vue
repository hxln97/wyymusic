<template>
  <div class="program">
    <p>节目列表</p>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DjProgram",
  props: {
    program: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .program {
    margin: 30px 0;
  }
  p {
    padding-bottom: 5px;
    font-size: 22px;
    border-bottom: 2px solid #9B0909;
  }

  ul li {
    height: 55px;
    line-height: 55px;
    border: 1px solid #000;
  }
</style>