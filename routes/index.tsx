export default function Home() {
  return (
    <section class="flex">
      <div class="w-[384px] h-[522px] border-[0.5px] border-black rounded-[20px] bg-black translate-x-2 translate-y-2 fixed" />
      <div class="flex flex-col gap-[24px] w-[384px] h-[522px] border-[0.5px] border-black rounded-[20px] bg-white p-300 z-10">
        <img src="/illustration-article.svg" alt="Illustration article" class="w-full h-[200px] rounded-[10px]"/>
        <div role="region" class="flex gap-[12px] flex-col">
          <p class="font-bold text-gray-950 px-150 py-50 bg-yellow rounded-[4px] w-fit h-fit text-base">Learning</p>
          <p class="text-gray-950 text-base">Published 21 Dec 2023</p>
          <h1 role="button" class="font-bold text-gray-950 text-2xl hover:text-yellow place-self-start select-none">HTML & CSS foundations</h1>
          <p class="text-gray-500 text-xl">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <footer class="flex flex-row gap-[12px] items-center">
          <img src="/image-avatar.webp" class="aspect-square w-[32px]" alt="Greg avatar"/>
          <p class="font-bold text-gray-950 text-base">Greg Hooper</p>
        </footer>
      </div>
    </section>
  );
}
