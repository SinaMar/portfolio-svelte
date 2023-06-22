<script lang="ts">
    export let image;
    export let name;
</script>


<div class="interest">
    <div class="icon">
        <img src={image} alt="">
    </div>
    <p>{name}</p>
</div>


<style lang="scss">

  .interest {
    display: flex;
    flex-direction: column;
    justify-items: center;

  }

  .icon {
    display: flex;
    width: 80px;
    //height: 80px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--accent-color);
    justify-content: center;
    position: relative;

  }

  p {
    font-size: 1.25rem;
    color: var(--text-intense);
  }

</style>