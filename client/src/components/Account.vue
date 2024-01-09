<template>
  <div
    class="my-4 max-w-screen-md h-screen border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto"
  >
    <div class="flex flex-col border-b py-4 sm:flex-row sm:items-start">
      <div class="shrink-0 mr-auto sm:py-3">
        <p class="font-medium">Account Details</p>
        <p class="text-sm text-gray-600">Edit your account details</p>
      </div>
      <button
        class="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200"
      >
        Cancel
      </button>
      <button
        class="hidden rounded-lg border-2 border-transparent bg-gray-950 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-gray-800"
      >
        Save
      </button>
    </div>
    <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
      <p class="shrink-0 w-32 font-medium">Full Name</p>
      <input
        placeholder="Your Full Name"
        class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-gray-600 focus:ring-1"
      />
      <p class="shrink-1 w-32 font-medium">Adress</p>
      <input
        placeholder="Your Adress"
        class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-gray-600 focus:ring-1"
      />
    </div>
    <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
      <p class="shrink-0 w-32 font-medium">Email</p>
      <input
        placeholder="your.email@domain.com"
        class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-gray-600 focus:ring-1"
      />
    </div>
    <div class="flex flex-col gap-4 border-b py-4 sm:flex-row">
      <p class="shrink-0 w-32 font-medium">Phone Number</p>
      <input
        placeholder="+216 "
        class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-gray-600 focus:ring-1"
      />
    </div>
    <div class="flex flex-col gap-4 py-4 lg:flex-row">
      <div class="shrink-0 w-32 sm:py-4">
        <p class="mb-auto font-medium">Avatar</p>
        <p class="text-sm text-gray-600">Change your avatar</p>
      </div>
      <div
        class="flex h-70 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center"
      >
        <img src="" class="h-16 w-16 rounded-full" />
        <p class="text-sm text-gray-600">
          Drop your desired image file here to start the upload
        </p>
        <input
          type="file"
          class="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
        />
      </div>
    </div>
    <div class="flex justify-end py-4 sm:hidden">
      <button
        class="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200"
      >
        Cancel
      </button>
      <button
        class="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
