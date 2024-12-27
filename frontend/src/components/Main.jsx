

function Main() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://frankenmuthbrewery.com/wp-content/uploads/2020/03/BrewHouse-DT-2-27-20.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
      <img
      src="https://tarbarrel.com.au/wp-content/uploads/2022/10/closeup-barista-holding-glass-craft-beer-bar.jpg"
      class="max-w-sm rounded-lg shadow-2xl" />
        <div className="max-w-md ">
          <div className="divider divider-primary text-5xl font-bold text-primary">Sörfőzde</div>
          <p className="m-5 text-primary bg-neutral bg-opacity-70">
          A sörfőzdék világszerte széles választékot kínálnak sörstílusokból, a hagyományosoktól a modernekig, 
          egyre nagyobb hangsúlyt fektetve a kézműves sörfőzésre, fenntarthatóságra és innovációra.
            Az oldalon szereplő országok sörfőzdéi összességében egy változatos és fejlődő globális sörpiacot képviselnek.
          </p>
          <div className="divider divider-primary text-5xl font-bold text-secondary"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
