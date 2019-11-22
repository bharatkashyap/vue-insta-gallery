<template>
    <div>
        <div tabindex="-1" id="post-image-gallery" ref="imageGallery" @scroll.passive="handleGalleryScroll">
            <span id="gallery-count">{{selectedImageIndex+1}} of {{pics.length}}</span>
            <div id="post-image" class="flex-equal mt-1" v-for="(pic, index) in pics" :key="index" :ref="pic">
                <div class="image text-center"><img :src=pic /> </div> 
            </div>    
        </div>
         <div id="post-image-slider-wrap" class="d-flex flex-row justify-content-center">
            <div v-for="(pic, index) in pics" class="slider-dot cursor-pointer" @click="postImageScrollIntoView(pic)" :class="{selectedDot: isImageSelected(index)}" :key="index"></div>
        </div>
        <div class="d-none d-lg-flex justify-content-center"><span><kbd>&larr;</kbd>&nbsp;<kbd>&rarr;</kbd> <span class="text-monospace align-bottom text-muted">to navigate</span></span></div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    name: "vueInstaGallery",
    props: {
        pics: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    data: function () {
        return {
            selectedImageIndex: 0,
            viewport: {
                width: 0,
                height: 0
            }
        }
    },
    methods: {
        captureViewport() {
            this.viewport.width = screen.availWidth;
            this.viewport.height = screen.availHeight;
        },
        captureDevicePixelRatio() {
            this.devicePixelRatio = window.devicePixelRatio;
        },
        handleResize() {
            this.captureViewport();
            this.captureDevicePixelRatio();
        },
        isImageSelected(index) {
            if(index == this.selectedImageIndex) return true;
        },
        handleGalleryScroll($event) {
            this.selectedImageIndex = parseInt( ($event.target.scrollLeft / (this.devicePixelRatio * this.viewport.width)));
        },
        visibilityChanged(isVisible) {
            if(isVisible && this.viewport.width > 992) { this.$refs.imageGallery.focus({preventScroll: true}) }
        },
        postImageScrollIntoView(url) {
            let imageDiv = this.$refs[url][0]; // Setting refs inside v-for causes each Node to be placed inside an array
            imageDiv.scrollIntoView();
        }
    },
    mounted() {
        this.captureViewport();
        this.captureDevicePixelRatio();
        window.addEventListener("resize", this.handleResize);
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    }
}

</script>

<style>

/** ====================================== 
 * POST IMAGE Styles 
 */

#post-image img {
    max-width: 90vw;
    max-height: 80vh;
    filter: drop-shadow(1px 1px 5px rgb(0,0,0,0.5));
}

 /** ====================================== 
 * IMAGE GALLERY Styles 
 */

 #post-image-gallery {
     display: flex;
     flex-direction: row;
     max-width: 100vw;
     overflow-x: scroll;
     overflow-y: hidden;
     margin-top: 1rem;
     margin-bottom: 0;
     scroll-behavior: smooth;
     scroll-snap-type: x mandatory;
 }

 #post-stub-image-gallery {
     display: flex;
     max-width: 100vw;
 }

 #post-stub-image-container {
    display: flex;
    flex-direction: row;
    max-width: 75%;
    overflow-x: scroll;
    overflow-y: hidden;
 }

 #post-image-gallery::-webkit-scrollbar, #post-stub-image-container::-webkit-scrollbar {
     width: 0em;
 }

 #gallery-count {
     position: absolute;
     right: 5rem;
     margin-top: 2rem;
     color: rgba(255,255,255,.6);
     z-index: 10;
 }

 #post-image {
     min-width: 100vw;
     scroll-snap-align: center;
     scroll-snap-stop: always;
     flex-flow: row nowrap;
     background: #000000;  /* fallback for old browsers */
     background: -webkit-linear-gradient(to top, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to top, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
 }

 #post-image .image {
     position: relative;
     top: 50%;
     transform: translateY(-50%);
     padding-bottom: 2rem;
 }

 #post-image-slider-wrap {
     margin: 0.8rem 0;
 }

 .slider-dot {
     display: inline-block;
     min-height: 5px;
     min-width: 5px;
     border-radius: 5px;
     margin: 0 0.2em;
     background-color: #d5d5d5;
     transition: all 0.05s ease;
 }

 .slider-dot:hover {
     background-color: #c5c5c5;
     transform: scale(1.2);
 }

 .slider-dot.selectedDot {
     background-color: #86afe4;
     transform: scale(1.4);
     transition: all 0.1s ease-in;
 }
 </style>