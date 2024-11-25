
import "./productTable.scss";


function ProductTable({product}) {
  


  return (
    <div style={{width:"100%"}}>
      <table className="information-table">
        <tbody>

          {product?.variant_group.map((variant) => {
            return (
              <tr>
                <td className="th-column th-column_1">{variant.name}</td>
                <td className="th-column th-column_2">
                  {variant.value}
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
