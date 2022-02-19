const TableRow = ({assetImg,
    amount,
    asset,
    chainImg,
    chainName,
    earning,
    state,
    type,
    user}) => {
    return <div className="row table-row">
    <div className="col-sm-3 asset">
      <img
        src={assetImg}
        alt={asset}
        className="asset-img"
      />
      <div className="asset-text">
        <h6>{asset}</h6>
        <p>{type}</p>
        <button>
          <img
            src={chainImg}
            alt={chainName}
          />
          {chainName}
        </button>
      </div>
    </div>
    <div className="col-sm-3 amount">
      <h6>{amount}</h6>
      <p>{state}</p>
    </div>
    <div className="col-sm-3 account">
      <h6>{user.length < 14? user : user.slice(0,5)+'..'+user.slice(user.length-7,user.length)}</h6>
    </div>
    <div className="col-sm-3 earning">
      <h6>{earning}</h6>
      <p>View on BSC Scan</p>
    </div>
  </div>
}

export default TableRow;