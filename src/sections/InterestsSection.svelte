<script lang="ts">
    import drawingIcon from '../assets/icons/drawing.svg';
    import gamesIcon from '../assets/icons/games.svg';
    import designIcon from '../assets/icons/design.svg';
    import literatureIcon from '../assets/icons/literature.svg';
    import Interest from "../lib/Interest.svelte";


</script>

<div class="interests">
    <Interest name="Drawing" image={drawingIcon} />
    <Interest name="Games" image={gamesIcon} />
    <Interest name="Design" image={designIcon} />
    <Interest name="Literature" image={literatureIcon} />
</div>


<style lang="scss">
    .interests {
      padding: 2rem;
      display: flex;
      gap: 3rem;
      width: 60%;
      justify-content: space-between;
      margin: auto;
      flex-wrap: wrap;
    }
</style>