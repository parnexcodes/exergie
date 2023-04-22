<script>
    export let name;
    export let info;
    export let image;
</script>

<div class="border border-[#DB202C] p-6 rounded-md">
    <img class="md:h-[300px] h-[100px] w-[250px] object-contain rounded-md hover:brightness-75" src={image} alt="">
    <div class="">
        <p class="text-center text-slate-200 pb-2 font-bold md:text-2xl font-bebas-neue md:tracking-wider tracking-widest">{name}</p>
        <p class="text-center text-slate-200 max-w-[16rem] pb-2 pl-1 pr-1 text-xs md:text-base">{info}</p>
    </div>
</div>