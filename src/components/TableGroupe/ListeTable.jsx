import "./table.css"
import versBas from "../../assets/image/versBas.png"
import versHaut from "../../assets/image/vershaut.png"



const listeTable=() =>{
    return (
    <div className="searches">
        <div className="search-and-pagination">
            <div className="search">
               <select >
                <option>
                    Montrer
                </option>
                </select> 

            </div>
            <div className="pagination">
                <div className="pagination-page">
                    <span >
                        Pages {" "}
                        <strong>
                        </strong> {" "}
                    </span>
                    <span>
                        <label htmlFor="goto">
                            Vers la Page
                        </label>
                        <input id="goto" type="nomber" min="1" />
                    </span>
                </div>
                <div className="buttons">
                    <button >
                        {"<<"}
                    </button>
                    <button >
                        Previous
                    </button>
                    <button >
                        Next
                    </button>
                    <button >
                        {">>"}
                    </button>
                </div>
            </div>
        </div>
        <div className="table-group">
            <table>
                <thead>
                    <tr>
                        <th>
                            <span>
                            <img src={versBas} alt="Liste vers Bas"/>
                            <img src={versHaut} alt="Liste vers haut"/> 
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="table-message">No data available in table</div>
        </div>

    </div>
    );  
};
export default listeTable;