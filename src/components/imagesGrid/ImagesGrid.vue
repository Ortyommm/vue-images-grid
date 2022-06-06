<template>
  <div class="images-grid-container" ref="container">
    <div v-for="(col, i) in cols" :style="{ marginRight: i !== cols - 1 ? colSpaces : '0' }" ref="columnsRef">
      <template v-for="image in colsData[i]">
        <slot name="image" v-if="$slots.image" :image="image" />
        <ImageItem
          v-else
          :style="imageStyle"
          :image="image"
          :object-fit="objectFit"
          @mouseover="$emit('onImageMouseover', image)"
          @mouseout="$emit('onImageMouseout', image)"
          @dragstart="$emit('onImageDragstart', image)"
          @dragend="$emit('onImageDragend', image)"
          @click="$emit('onImageClick', image)"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, PropType, ref } from 'vue'
import { ColData, imagesGridProps } from './types'
import ImageItem from './ImageItem.vue'

const { cols, images, imageStyle, objectFit, colSpaces, isResponsive } = defineProps(imagesGridProps)

const maxCols = Array.isArray(cols) ? cols.length : cols
let colsLength = ref<number>(maxCols)

// If passed "cols" is Array, we will use them to render images. Else if "cols" is number of columns, we will create cols.
const colsData = Array.isArray(cols)
  ? cols
  : computed<ColData>(() => {
      //For typescript. If "cols" is array, "images" is required prop
      if (!images) return []
      const colsArray = new Array(colsLength.value).fill([])
      for (let i = 0; i < images.length; i++) {
        const columnIndex = i % colsArray.length
        colsArray[columnIndex] = [...colsArray[columnIndex], images[i]]
      }
      return colsArray
    })

const container = ref<HTMLDivElement | null>(null)
const columnsRef = ref<HTMLDivElement[] | null>(null)

function onResize() {
  const imgContainer = container.value!

  const contentWidth = Array.from(imgContainer.children).reduce((acc, cur) => {
    //for getting margins
    const elementStyle = window.getComputedStyle(cur)
    return (
      acc +
      (cur as HTMLElement).offsetWidth +
      parseFloat(elementStyle.marginRight) +
      parseFloat(elementStyle.marginLeft)
    )
  }, 0)
  //All elements have parent element (if HTML structure is correct)
  if (imgContainer.parentElement!.offsetWidth < contentWidth) {
    // If there are more than one column and container hasn't enough space
    if (colsLength.value > 1) {
      colsLength.value--
    }
  } else if (
    colsLength.value !== maxCols &&
    imgContainer.parentElement!.offsetWidth >=
      contentWidth + (columnsRef.value?.[colsLength.value - 1] as HTMLElement).offsetWidth
  ) {
    // We add column, if container has enough empty space and if
    colsLength.value++
  }
}

onMounted(() => {
  if (isResponsive) window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  if (isResponsive) window.removeEventListener('resize', onResize)
})

</script>

<style scoped>
.images-grid-container {
  display: flex;
  /*flex-wrap: wrap;*/
}
</style>
