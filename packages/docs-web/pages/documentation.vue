<template>
  <div>
    <AppToastVue ref="toast" />
    <div
      class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
    >
      <!-- NOTE: This overflows when width is less than 310px -->
      <div
        class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-red-600 opacity-20 blur-[100px]"
      ></div>
    </div>

    <div class="p-10 flex flex-col items-center">
      <div class="h-full text-center">
        <h1 class="text-4xl font-bold">plugin-tailwindcss</h1>
        <p class="text-lg mt-4">Documentation of animations 2024</p>
      </div>

      <div class="mt-10">
        <p class="text-gray-600 mb-2">Install the dependency</p>
        <AppCodeBlockVue code="npm install " language="plugin-tailwindcss" />
      </div>

      <div class="mt-6 flex flex-col gap-5">
        <p class="text-gray-600">Add to your configuration</p>
        <div class="px-3">
          <pre class="language-javascript"><code class="text-sm">
import animations from 'plugin-tailwindcss' 
  export default {
   // ...rest of the options
  plugins: [animations],
}</code>
      </pre>
        </div>
      </div>

      <div class="flex gap-10 mt-10 flex-wrap justify-center max-w-4xl">
        <div
          v-for="animation in animaciones"
          :key="animation.name"
          :class="` bg-gray-50   flex  w-36 h-36 shadow-[-2px_7px_4px_5px_#8D13670C] rounded-xl`"
        >
          <div class="w-full">
            <div class="flex justify-end m-2">
              <button @click="copy(`animate-${animation.name}`)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 -960 960 960"
                  width="20"
                >
                  <path
                    d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-col w-full items-center gap-2 p-4 h-full">
              <div
                class="animation cursor-crosshair h-10 w-10 bg-gray-300 rounded-sm"
                :data-class="`animate-${animation.name}`"
              ></div>
              <p class="text-gray-500 text-xs text-balance text-center">
                {{ animation.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppCodeBlockVue from "~/components/AppCodeBlock.vue";
import AppToastVue from "~/components/AppToast.vue";
import theme from "plugin-tailwindcss/theme/theme";

const toast = ref(null);

const { animation } = theme;

const animaciones = Object.entries(animation).map(([name, value]) => ({
  name,
  value,
}));

const copy = (text) => {
  navigator.clipboard.writeText(text);
  toast.value.openToast("Copied to clipboard");
};

onMounted(() => {
  const listItems = document.querySelectorAll(".animation");

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      const animation = item.getAttribute("data-class");
      item.classList.remove(animation);
      void item.offsetWidth; // Trigger a reflow
      item.classList.add(animation);
    });
  });
});
</script>

<style></style>
