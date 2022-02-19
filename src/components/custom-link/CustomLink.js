const CustomLink = () => {
    return <section id="custom-link">
    <div className="custom-link-title">
      <div className="btn avalanche">
        <img src="" alt="" />
        <p>Avalanche</p>
        <i className="fa-solid fa-angle-down"></i>
      </div>
      <div className="btn user-acc">
        <i className="fa-solid fa-computer-mouse fa-rotate-90"></i>
        <p>0xf6...1353</p>
        <i className="fa-solid fa-angle-down"></i>
      </div>
    </div>

    <p className="link-text">
      <i className="fa-solid fa-arrow-left"></i> Custom link
    </p>
    <p className="link-url">https://testnet.xyz.xyz/trade?ref=</p>
    <div className="enter">
      <p>ENTER</p>
    </div>
    <div className="actions">
      <button className="custom"><i></i> Custom link</button>

      <button className="cancel"><i></i> Cancel</button>
    </div>
  </section>
}

export default CustomLink;