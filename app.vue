<template>
  <header class="bg-purple-100 border-b border-gray-200">
    <!-- Top Bar -->
    <div
      class="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between text-sm"
    >
      <div class="flex items-center space-x-6">
        <img src="/image\logo.png" alt="EYS-Kids" class="h-6" />
        <p>
          0歳から幼児、小学生まで<br />こどもの早期知育成教育を育む EYS-Kids
        </p>
      </div>
      <div class="flex items-center space-x-4">
        <a href="#" class="text-pink-500">こどもSTE-LABはこちら</a>
        <a href="#" class="text-gray-500">EYS-Kids マイコンパス</a>
        <a href="#" class="text-gray-500"
          >こどもオリンピア <span class="text-pink-500">Coming Soon</span></a
        >
        <a href="#" class="text-gray-500"
          >Businessがれっじ <span class="text-pink-500">Coming Soon</span></a
        >
      </div>
    </div>

    <!-- Main Navigation -->
    <div class="bg-white shadow">
      <div
        class="container mx-auto px-4 flex flex-wrap items-center justify-between py-3"
      >
        <div class="flex items-center space-x-4">
          <h1 class="font-bold text-lg">
            <span class="text-red-500">DANCE</span> ACADEMY
            <span class="text-gray-500">EYS-Kids</span>
          </h1>
          <p class="text-sm text-gray-500">
            こどもの心とからだを伸ばす<br />EYS-Kids ダンスアカデミー
          </p>
        </div>
        <div class="flex items-center space-x-6">
          <div class="hidden md:block">
            <span class="font-bold text-lg text-blue-600">0120-978-900</span>
            <span class="text-sm text-gray-500">電話受付：8:00~25:00</span>
          </div>
          <a
            href="#"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow text-sm hover:bg-blue-600"
          >
            無料体験レッスン
          </a>
        </div>
      </div>

      <!-- Navigation Links -->
      <header class="bg-white shadow">
        <nav
          class="container mx-auto px-4 py-2 flex justify-center items-center"
        >
          <!-- Navigation Links -->
          <ul class="hidden md:flex space-x-6 text-sm text-gray-700">
            <li><a href="#" class="hover:text-gray-900">トップ</a></li>
            <li><a href="#" class="hover:text-gray-900">初めての方へ</a></li>
            <li>
              <a href="#" class="hover:text-gray-900">システム・料金</a>
            </li>
            <li>
              <a href="#" class="hover:text-gray-900">ジャンル・カリキュラム</a>
            </li>
            <li><a href="#" class="hover:text-gray-900">アクセス</a></li>
            <li>
              <a href="#" class="hover:text-gray-900">インストラクター</a>
            </li>
            <li class="relative group">
              <a href="#" class="hover:text-gray-900 flex items-center">
                もっと見る
                <span class="ml-1">▼</span>
              </a>
              <!-- Dropdown Menu -->
              <ul
                class="absolute hidden group-hover:block bg-white shadow-lg py-2 w-40 text-gray-700"
              >
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Option 1</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Option 2</a
                  >
                </li>
              </ul>
            </li>
          </ul>

          <!-- Mobile Menu Button -->
          <!-- <button
              @click="toggleMobileMenu"
              class="md:hidden flex items-center text-gray-700"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button> -->
        </nav>

        <!-- Mobile Navigation Menu -->
        <!-- <ul
            v-if="mobileMenuOpen"
            class="md:hidden bg-white shadow space-y-2 text-sm text-gray-700 px-4 py-2"
          >
            <li><a href="#" class="block hover:text-gray-900">トップ</a></li>
            <li>
              <a href="#" class="block hover:text-gray-900">初めての方へ</a>
            </li>
            <li>
              <a href="#" class="block hover:text-gray-900">システム・料金</a>
            </li>
            <li>
              <a href="#" class="block hover:text-gray-900"
                >ジャンル・カリキュラム</a
              >
            </li>
            <li><a href="#" class="block hover:text-gray-900">アクセス</a></li>
            <li>
              <a href="#" class="block hover:text-gray-900">インストラクター</a>
            </li>
            <li>
              <a href="#" class="block hover:text-gray-900">もっと見る</a>
            </li>
          </ul> -->
      </header>
    </div>
  </header>

  <Seconds class="relative bg-white">
    <!-- Image Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-0">
      <!-- Individual Panels -->
      <div
        class="h-[400px] md:h-[600px] bg-blue-500 flex items-center justify-center"
        style="
          background-image: url('/image/first.png');
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
          background-image: url('/image/third.png');
          background-size: cover;
          background-position: center;
        "
      ></div>
      <div
        class="h-[400px] md:h-[600px] bg-yellow-500 flex items-center justify-center"
        style="
          background-image: url('/image/forth.png');
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

  <div
    class="bg-gradient-to-r from-blue-400 to-blue-500 p-10 flex justify-center items-center"
  >
    <img src="/image/cards.png" alt="EYS-Kids" class="h-66 rounded-lg" />

    <div
      class="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl text-center md:text-left relative"
    >
      <p class="text-gray-500 font-medium mb-4">
        もうすぐゴールデンウイーク！新しいことはじめようキャンペーン
      </p>
      <h2 class="text-red-500 text-4xl md:text-5xl font-bold mb-4">
        月会費 <span class="text-6xl">2か月無料！</span>
      </h2>
      <div class="flex flex-col md:flex-row items-center justify-between mb-4">
        <div class="text-blue-700 font-semibold text-lg md:text-xl">
          締め切り
          <span class="bg-gray-200 rounded-full px-2 py-1 text-black">
            12/24(日) 23:59
          </span>
          <br />
          <span class="text-purple-500">残り14日 12時間 59分</span>
        </div>
        <div
          class="bg-red-100 text-red-600 rounded-full px-4 py-2 mt-4 md:mt-0"
        >
          まずは無料で体験！
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="text-lg md:text-xl text-gray-700">
          お電話で（受付時間 8:00~25:00）
          <br />
          <span class="font-bold text-2xl">0120-978-900</span>
        </div>
        <a
          href="#"
          class="bg-red-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-red-600 mt-4 md:mt-0"
        >
          無料体験レッスン →
        </a>
      </div>
      <div
        class="absolute top-0 right-4 -translate-y-6 bg-purple-500 text-white text-sm px-3 py-1 rounded-full shadow-md"
      >
        Wキャンペーン実施中！
      </div>
      <img
        src="/image/logo.png"
        alt="EYS-Kidsオリジナル トートバッグ"
        class="w-32 absolute top-4 right-16"
      />
    </div>
  </div>
</template>
