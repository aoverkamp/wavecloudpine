---
title: Jellyfish Collection
---

<style>
    .gradient {
        background-image: url('//live.staticflickr.com/65535/55449600035_f530078122_k.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        backdrop-filter: opacity(10%);
        position: relative;

        &::before {
            content: "";
            height: 100%;
            width: 100%;
            border-image: linear-gradient(hsla(303, 100%, 92.2%, 0.6), hsla(263.6, 84.6%, 7.6%, 0.87)) fill 1;
            position: absolute;
            z-index: 3;
        }
    }
    main.site-body {
        max-width: 1200px !important;
        position: relative;
        z-index: 4;
        p {
            max-width: 79ch;
            margin-left: auto;
            margin-right: auto;
        }
    }
    .gallery {
        justify-content: center;
    }
    .site-header, footer {
        position: relative;
        z-index: 4
    }
</style>

<div id="Gallery" class="gallery">
   <a href="//live.staticflickr.com/65535/55448234637_fadf74d152_k.jpg" data-fancybox="gallery" title="Moon jelly" data-caption="Moon jelly">
        <img src="//live.staticflickr.com/65535/55448234637_fadf74d152_k.jpg" alt="Blue Moon jelly, in Sumida Aquarium Tokyo, Japan">
    </a>
    <a href="//live.staticflickr.com/65535/55449322713_2d98995519_k.jpg" data-fancybox="gallery" title="Moon jelly" data-caption="Moon jelly">
        <img src="//live.staticflickr.com/65535/55449322713_2d98995519_k.jpg" alt="Bright blue Moon jelly, in Sumida Aquarium Tokyo, Japan">
    </a>
    <a href="//live.staticflickr.com/65535/55449600035_f530078122_k.jpg" data-fancybox="gallery" title="Moon jelly bw" data-caption="Moon jelly bw">
        <img src="//live.staticflickr.com/65535/55449600035_f530078122_k.jpg" alt="Black and white abstract of Moon jelly, in Sumida Aquarium Tokyo, Japan">
    </a>
    <a href="//live.staticflickr.com/65535/55449322703_4fb6e48b81_k.jpg" data-fancybox="gallery" title="Pacific sea nettle bw" data-caption="Pacific sea nettle bw">
        <img src="//live.staticflickr.com/65535/55449322703_4fb6e48b81_k.jpg" alt="Pacific sea nettle, in Sumida Aquarium Tokyo, Japan">
    </a>
    <a href="//live.staticflickr.com/65535/55449369254_3eed4bff03_k.jpg" data-fancybox="gallery" title="Pacific sea nettle" data-caption="Pacific sea nettle">
        <img src="//live.staticflickr.com/65535/55449369254_3eed4bff03_k.jpg" alt="Pacific sea nettle, iin Sumida Aquarium Tokyo, Japan">
    </a>
    <a href="//live.staticflickr.com/65535/55449369264_2415ca70fe_k.jpg" data-fancybox="gallery" title="Moon jelly" data-caption="Moon jelly">
        <img src="//live.staticflickr.com/65535/55449369264_2415ca70fe_k.jpg" alt="Moon jelly, in Sumida Aquarium Tokyo, Japan">
    </a>
</div>

We often visit and explore aquariums on our various trips, especially if they feature Jellyfish of any type. I am fascinated by these magical blobs and love the creative photos their habitats often help create. Jellyfish tend to have short life spans, so it is only fair I attempt to collect as many photos as I can to honor all their gelatinous beauty.

<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@6.0/dist/fancybox/fancybox.umd.js"></script>
<script>
	
	Fancybox.bind("#Gallery a", {
		groupAll: true,
		
		// Disable image zoom animation on opening and closing
		Images : {
		zoom : false
		}
	});
	
</script>
