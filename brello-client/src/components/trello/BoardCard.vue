<template>
  <div class="list-wrapper h-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500 mx-2">
    <div class="list-content flex flex-col h-full relative whitespace-normal">
      <div class="list-header relative pr-12">
        <h2 class="list-header-name md-body-2">{{ list.name }}</h2>
      </div>
      <div class="list-cards">
        <a v-for="(card, index) in list.cards" :key="index" href="#" class="list-card block no-underline">
          <div class="list-card-details">
            <span class="list-card__title">{{ card.name }}</span>
          </div>
        </a>
      </div>
      <a href="#" class="list-action no-underline hover:no-underline flex items-center relative select-none">
        <span class="list-action__icon"><i class="material-icons">add</i></span>
        <span class="list-action__text">Add another card</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrelloBoardCard',
  props: [
    'list'
  ]
}
</script>

<style lang="scss" scoped>
</style>
