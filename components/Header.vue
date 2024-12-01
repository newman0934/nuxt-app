<template>
  <div class="flex justify-between">
    <ul class="flex">
      <li class="mx-4">
        <NuxtLink :to="localePath('/')">
          {{ $t('index') }}
        </NuxtLink>
      </li>
      <li class="mx-4">
        <NuxtLink :to="localePath('/about')">
          {{ $t('about') }}
        </NuxtLink>
      </li>
      <li class="mx-4">
        <NuxtLink :to="localePath('/products')">
          {{ $t('products') }}
        </NuxtLink>
      </li>
    </ul>
    <ul class="flex">
      <li class="cursor-pointer mx-4" @click="changeLang('tw')">
        繁體中文
      </li>
      <li class="cursor-pointer mx-4" @click="changeLang('en')">
        英文
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const localePath = useLocalePath()
const { setLocale } = useI18n()

function changeLang (lang: 'tw' | 'en') {
  setLocale(lang)
}

</script>
