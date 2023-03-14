const Home = () => {
  return (
    <>
      <section className="hero__section">
        {/* switch theme */}
        <div className="w-11/12 mx-auto switch__theme">
          <div className="switch__input text-right my-4">Dark Mode</div>
        </div>
        {/* hero_section_details */}
        <div className="hero__section-details">
          <div className="hero__section_description">
            <h3 className="text-primary-color">NFT MARKETPLACE</h3>
            <h2 className="text-primary-white">Give Your NFT Tokens Utility</h2>
            <p>
              Sell, Raffle, and Auction physical and digital items to your
              community in your native token.
            </p>
            <div className="btn__group">
              {/* <button className="bg-primary-linearColor hover:bg-primary-hoverLinearColor transition hover:-translate-y-1  text-secondary-color rounded-md px-2 2xl:px-3  py-2  font-[600] hidden xl:block text-sm 2xl:text-md"></button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
