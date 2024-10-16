import { useContext } from "react";
import "./productTable.scss";
import { ProductContext } from "../..";

function ProductTable() {
  const {product} = useContext(ProductContext);
  console.log(product);

  return (
    <div style={{width:"100%"}}>
      <table className="information-table">
        <tbody>
          {product?.variant_groups?.map((variant) => {
            return (
              <tr>
                <td className="th-column th-column_1">{variant.name}</td>
                <td className="th-column th-column_2">
                  {variant.options[0].name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <table className="information-table">
        <tr>
          <td className="th-column th-column_1">Jill</td>
          <td className="th-column th-column_2">Smith</td>
        </tr>
        <tr>
          <td className="th-column th-column_1">Eve</td>
          <td className="th-column th-column_2">Jackson</td>
        </tr>
        <tr>
          <td className="th-column th-column_1">Eve</td>
          <td className="th-column th-column_2">Jackson</td>
        </tr>
        <tr>
          <td className="th-column th-column_1">Eve</td>
          <td className="th-column th-column_2">Jackson</td>
        </tr>
        <tr>
          <td className="th-column th-column_1">Eve</td>
          <td className="th-column th-column_2">Jackson</td>
        </tr>
        <tr>
          <td className="th-column th-column_1">Eve</td>
          <td className="th-column th-column_2">Jackson</td>
        </tr>
      </table> */}
    </div>
  );
}

export default ProductTable;
