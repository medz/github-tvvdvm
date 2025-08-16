<script lang="ts" setup>
const { locale: localeCode, t } = useI18n();
</script>

<template>
    <div>
        {{ localeCode }} {{ t("hi") }}
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
