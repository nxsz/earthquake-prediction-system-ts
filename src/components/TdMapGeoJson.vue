<script setup>
const TdMap = window.T;
import { inject} from 'vue';


// 注入 挂载完成后的事件，用来传递一些只能父组件挂载完成后 才能获取到的对象 比如 dom 节点
const onParentMounted = inject("onParentMounted");
onParentMounted().then(res=>{
        console.log(res);
        init(res);
    })

const openInfoWindow = inject("openInfoWindow");

const{pointlngLatList}=defineProps({
    pointlngLatList:Array,
})

const emit = defineEmits(["click"])

/**
 * 初始化 marker 标记
 * @param {*} map 
 */
const init = (map)=>{
    
    var countries = [];
    var countriesOverlay = new T.D3Overlay(init,redraw);
    // var countriesOverlay1 = new T.D3Overlay(init1,redraw1);
    function init(sel, transform) {
        sel.on("click", ()=>{
            alert();
        })
        var upd = sel.selectAll('path.geojson').data(countries);
        upd.enter()
                .append('path')
                .attr("class", "geojson")
                .attr('stroke', 'black')
                .attr('fill', function (d, i) {
                    return d3.hsl(Math.random() * 360, 0.9, 0.5)
                })
                .attr('fill-opacity', '0.5')


    }

    function redraw(sel, transform) {
        sel.selectAll('path.geojson').each(
                function (d, i) {
                    d3.select(this).attr('d', transform.pathFromGeojson)
                }
                
        )

    }
    function init1(sel, transform) {
        var upd = sel.selectAll('path.geojson1').data(countries);
        upd.enter()
            .append('path')
            .attr("class", "geojson1")
            .attr('stroke', 'black')
            .attr('fill', function (d, i) {
                return d3.hsl(Math.random() * 360, 0.9, 0.5)
            })
            .attr('fill-opacity', '0.5')


    }

    function redraw1(sel, transform) {
        sel.selectAll('path.geojson1').each(
            function (d, i) {
                d3.select(this).attr('d', transform.pathFromGeojson)
            }
        )

    }
    d3.json("/临城目标区范围.json", function (data) {
        countries = data.features;
        map.addOverLay(countriesOverlay);
        countriesOverlay.addEventListener("click", onClick);
        countriesOverlay.bringToBack();
        // map.addOverLay(countriesOverlay1)
        // countriesOverlay.bringToBack();
    });
}

const onClick = (e)=>{
    emit("click",{event: e, openInfoWindow})
}

</script>
<template>
</template>