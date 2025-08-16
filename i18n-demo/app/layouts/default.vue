<script setup lang="ts">
const head = useLocaleHead();
useHead(head);

const { locale } = useI18n();
</script>

<template>
    <div>
        <slot />
        <p>{{ locale }}</p>
    </div>
</template>
