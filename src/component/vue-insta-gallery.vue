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
                return [
                "https://lh3.googleusercontent.com/dFWFuAQo1D8So9TJSEQ05kParGKHdt5xpIqEm_-Ljwh8arTltZbdvcKPyInXmeFEbDZA167VC28EYmI9UaK1GyD7exsr-ROm7Mj6wqxYvSwjV5JCOFyFBTjM6j0vSx6IEVJLuBe6ITa7aY2D9MihQCfRbUfieNTvETP43GF2OUh9SqK_jA7_xFJXE9YWM8AEk6AqkosdUbOYCFXwerPEh1ExK-O462f9Myi_0IWJ9ipwgIewcu1oVefvCy4iA3leEvdmQ6eu33WAdX48PUdGfBZuTA6f1CxgBh7cbS1SOeW8nA0dA44Y9cfuoPqaTq51TblB2SRACiFvtK2x4mF2inH37xqeJuKRsXdPHqYDyYb6EMt0BorSYLKLlBXnXTG_ky2o-YMVx0OoY9VQBOWrqBgxaxcfgpIbwPyUZUBiU6iXOLjESjkGw9Pt8MXqIA2S9xZsoe4kKqQB_qMEigh8T5Rt0glt7Z1FBvwCES6Ov6gMIcVVGvi9YyoRSjAQgq7ejyBmBazu-Jqn4oiIqPFyqdK3QBHaF-eW8FOK55KmUrY8nCOcATk9tWX8SsSnqQfityNUVDXaJktKxMC8EX5-yuZOBCWRHKdMsSkV8FejoZfUyrH5vuF14QJK7xRrz9lZOPikTN8UrVCY2iu5pJcugXKh7CYtFi0QhHDJe4rOnuG7H7iH_-Tyqcbl=w139-h185-no",
                "https://lh3.googleusercontent.com/_T3Dp12-2T4zGpTsoqXWHUIJztfo8D7JTN4S8xnBbby46tcYkLhAiAz9YD8fujdU7y9PVj_zzLBNr7PfUkIoAHPR-_x3safdkjzMx58sGx9M3OYNVVV1iGn2DyLmOjZ8YYvcUaDF3iIaDnA6_shO5qXuUdIFjlPjKKHIAbArus-QeyZDuP23Zt20CBijQe_Gb-RECauesePwAiWfkSywfqldPN7051R5lMEImy-yHK56rd2-a-oL2KKEtcTWSACODHX-OXHMWN5XnVPDLLTSN9etuJayiBoxJr5YNbJBdmurnhlIlpgEso9Og3zHqWL4ytVUVMXV-yoVpytIfkYMwmE0Z7BftXXoDMnVVrZLBVu_qjxVNXwACMXMPRNp3X6YY6uNJxx9iUyY2dLm-hQq1RMBxH4czlhUh8JuOVXn5JAz2CWGPCeGBqitxHgoj_YNnzGUuya9I2mctPoyssoXC9Vjjj1SR4eSSo0wOyzbtGNjcp2K_Dcdm3NWxJeAzpwcDYaGYGTPPNwzpbP5TIz2fohejtnOd89whImL0fxbkgv-z0U-RuomF-U8gDnkGL2iIemznPCHLDdzbLDa1O_DUyQSYtVYaX0QJ3CS8ICaLp-XMneYZm-WzBG_71Pf72baNSt32Ri5x-sQu_brtkjANza5ZG9kNS5kJLyX9TuItXxmUqV93yfVDQb8=w289-h211-no", 
                "https://lh3.googleusercontent.com/q0CicKi8iQzEQ8VBeKrQPKEAFZ_8CpUg6OOpNeyi7KD0HhprOD21ew9qWotf1f3ecYVkUGYqDq1nJbcDGsaZr4O3D3PHPcAP25lBEq3Dl1VoZXG2Up9MMXOTD7N-LTPbJgbwKV7trrzHc55J--_kWy2Q_UJKClNsGKnaVDamNTdiCLn7xmK90ZX1g1RPjHvhHyAAiNFE3qQqodQ7DYaSu92mGeFG2xew9NM8czbI9r5_39fL03CY76ePoTe2igLcLUKlumsoM38OodnafIcEJcL9p_ofyq1tzRhMibJD61KK5-3DAbZCbbdDohpA_A2ICjWJqyDx7uf5ZumOTrRX9o9znpPmG7GeA1tCedJrBrVL2r18omqeKRkB8881jVj30CKPRLk4xguz5HRky4tF22aTOZp5sr0V-2wJBqSKGnUxSlPhb1d9pWxGakSkdc-TtPh91AI2xIQZV47o0aiun5iGWdfbEx60Q_XwLAqx_1eBzbW3c-vEVPhyL4J6swrdQGoJVVfniEl6PMvCs2f2wS7sYmQs0GbLy_DNMtn51jM22Ll7r6zYI0BkJwrOnd_MQhVmaI8nUPGyBVuA0hHbrK2npJAYVspdsYVt98cREvSdwpX5VVHX0OAeEfA_PKbm_Q3SXEqm4eOfM4wiZeB5hyADboF0UBBjIRfDy9lWcu8Mde6dwXqd2nuE=w436-h206-no"];
            }
        }
    },
    data: function () {
        return {
            selectedImageIndex: 0
        }
    },
    methods: {
        isImageSelected(index) {
            if(index == this.selectedImageIndex) return true;
        },
        handleGalleryScroll($event) {
            // this.selectedImageIndex = parseInt($event.target.scrollLeft / (this.devicePixelRatio * this.viewport.width) ) + 1;
            this.selectedImageIndex = parseInt(($event.target.scrollLeft / $event.target.scrollWidth) * this.pics.length)
        },
        // visibilityChanged(isVisible) {
        //     if(isVisible && this.viewport.width > 992) { this.$refs.imageGallery.focus({preventScroll: true}) }
        // },
        postImageScrollIntoView(url) {
            let imageDiv = this.$refs[url][0]; // Setting refs inside v-for causes each Node to be placed inside an array
            imageDiv.scrollIntoView();
        }
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