export default function Home() {
  return (
    <div class="flex" role="region">
      <div class="w-[384px] h-[522px] border-2 border-black rounded-[20px] bg-black translate-x-2 translate-y-2 fixed" />
      <div class="flex flex-col gap-[24px] w-[384px] h-[522px] border-2 border-black rounded-[20px] bg-white p-300 z-10">
        <img src="/illustration-article.svg" alt="Illustration article" class="w-full h-[200px] rounded-[10px]"/>
        <div role="region" class="flex gap-[12px] flex-col">
          <p class="font-bold text-gray-950 p-100 bg-yellow rounded-[4px] w-fit h-fit text-base">Learning</p>
          <p class="text-gray-950 text-base">Published 21 Dec 2023</p>
          <button class="font-bold text-gray-950 text-lg hover:text-yellow place-self-start">HTML & CSS foundations</button>
          <p class="text-gray-500 text-xl">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <footer class="flex flex-row gap-[12px] items-center">
          <img src="/image-avatar.webp" class="aspect-square w-[32px]" />
          <p class="font-bold text-gray-950 text-base">Greg Hooper</p>
        </footer>
      </div>
    </div>
  );
}
