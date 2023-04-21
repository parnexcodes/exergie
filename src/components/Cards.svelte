<script>
    export let name;
    export let info;
    export let image;
</script>

<div class="border border-slate-600/100 p-6 rounded-md">
    <img class="h-[300px] w-[250px] object-contain rounded-md hover:brightness-75" src={image} alt="">
    <div class="">
        <p class="text-center text-slate-200 pb-2 font-bold text-2xl">{name}</p>
        <p class="text-center text-slate-200 max-w-[16rem] pb-2 pl-1 pr-1">{info}</p>
    </div>
</div>