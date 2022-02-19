import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const Table = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then((res) => res.json())
      .then((data) => setTableData(data.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(tableData);
  return (
    <>
      <div className="tabs">
        <p className="tab active">First Tab</p>
        <p className="tab">Second Tab</p>
      </div>
      <div className="row table-head">
        <div className="col-sm-3">ASSET</div>
        <div className="col-sm-3">AMOUNT</div>
        <div className="col-sm-3">USER ACCOUNT</div>
        <div className="col-sm-3">REFERAL EARNING</div>
      </div>
      {tableData.map((row, index) => (
        <TableRow
          key={index}
          assetImg={row.img}
          amount={row.amount}
          asset={row.asset}
          chainImg={row.chain.img}
          chainName={row.chain.name}
          earning={row.referral_earnings}
          state={row.state}
          type={row.type}
          user={row.user}
        />
      ))}
    </>
  );
};

export default Table;
