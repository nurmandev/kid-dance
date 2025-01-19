<template>
  <Seconds class="relative bg-white">
    <!-- Image Grid -->
    <div class="grid grid-cols-4 gap-0 md:gap-2">
      <!-- Individual Panels -->
      <div
        class="h-[400px] md:h-[600px] bg-blue-500 flex items-center justify-center"
        style="
          background-image: url('/image/second.png');
          background-size: cover;
          background-position: center;
        "
      ></div>
      <div
        class="h-[400px] md:h-[600px] bg-teal-500 flex items-center justify-center"
        style="
          background-image: url('/image/second.png');
          background-size: cover;
          background-position: center;
        "
      ></div>
      <div
        class="h-[400px] md:h-[600px] bg-pink-500 flex items-center justify-center"
        style="
          background-image: url('/image/second.png');
          background-size: cover;
          background-position: center;
        "
      ></div>
      <div
        class="h-[400px] md:h-[600px] bg-yellow-500 flex items-center justify-center"
        style="
          background-image: url('/image/second.png');
          background-size: cover;
          background-position: center;
        "
      ></div>
    </div>

    <!-- Overlay Text -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center text-white text-center"
    >
      <h1 class="text-5xl md:text-7xl font-bold italic tracking-wide">
        Let's <span class="text-7xl md:text-8xl">Dance!</span>
      </h1>
      <p class="mt-4 text-lg md:text-2xl">
        こどもの心と身体を伸ばす、EYS-Kidsダンスアカデミー
      </p>
    </div>
  </Seconds>
</template>

<script>
export default {
  name: "Seconds",
};
</script>
