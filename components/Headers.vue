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
              <li><a href="#" class="hover:text-gray-900">システム・料金</a></li>
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
            <button
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
            </button>
          </nav>
  
          <!-- Mobile Navigation Menu -->
          <ul
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
            <li><a href="#" class="block hover:text-gray-900">もっと見る</a></li>
          </ul>
        </header>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  