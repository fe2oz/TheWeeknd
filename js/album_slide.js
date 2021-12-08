
$(function(){
        document.getElementById('ss_1').onmouseover=function(){
                const cimg = document.getElementById('ss_1mage');
                cimg.src = "img/main/TMB3.jpg"
        }

        document.getElementById('ss_1').onmouseleave=function(){
                const cimg = document.getElementById('ss_1mage');
                cimg.src = "img/main/TMB1.jpg"
        }

        document.getElementById('ss_2').onmouseover=function(){
                const cimg = document.getElementById('ss_2mage');
                cimg.src = "img/main/PM-TW-ORN-COVER-(LAYERS)_03.jpg"
        }

        document.getElementById('ss_2').onmouseleave=function(){
                const cimg = document.getElementById('ss_2mage');
                cimg.src = "img/main/PM-TW-ORN-COVER-(LAYERS)_02.jpg"
        }
})