<template>
  <First class="relative bg-white">
    <div class="grid grid-cols-4 gap-0">
      <div
        class="h-[400px] md:h-[600px] bg-blue-500"
        style="
          background-image: url('/image/second.png');
          background-size: cover;
          background-position: center;
        "
      ></div>
      <div
        class="h-[400px] md:h-[600px] bg-red-500"
        style="
          background-image: url('/image/second.png');
          background-size: cover;
          background-position: center;
        "
      ></div>
      <div
        class="h-[400px] md:h-[600px] bg-pink-500"
        style="
          background-image: url('/image/second.png');
          background-size: cover;
          background-position: center;
        "
      ></div>
      <div
        class="h-[400px] md:h-[600px] bg-yellow-500"
        style="
          background-image: url('image/second.png');
          background-size: cover;
          background-position: center;
        "
      ></div>
    </div>

    <div
      class="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4"
    >
      <h1 class="text-5xl md:text-7xl font-bold italic tracking-wide">
        Let&apos;s <span class="text-7xl md:text-8xl">Dance!</span>
      </h1>
      <p class="mt-4 text-lg md:text-2xl">
        こどもの心と身体を伸ばす、EYS-Kidsダンスアカデミー
      </p>
    </div>
  </First>
</template>
<script>
export default {
  name: "First",
};
</script>
