<template>
  <div>
    <!-- 动画效果待开发 -->
    <t-drawer :visible.sync="visible" header='抽屉标题' destroyOnClose>
      <p>抽屉的内容</p>
    </t-drawer>

    <t-button variant="outline" @click="visible = true">打开抽屉</t-button>

  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
    };
  },
});
</script>
