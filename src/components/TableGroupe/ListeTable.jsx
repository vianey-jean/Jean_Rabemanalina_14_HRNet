import { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
  useSortBy,
} from "react-table";
import { useSelector } from "react-redux";
import { COLUMNS } from "./columns";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import versBas from "../../assets/image/versBas.png";
import versHaut from "../../assets/image/vershaut.png";

//import MOCK from "../../Moks/MOCK.json";

const listeTable = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Employees = useSelector((state) => state.newEmployee.arrayEmployee);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const columns = useMemo(() => COLUMNS, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const data = useMemo(() => MOCK, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useMemo(() => Employees, [Employees]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defaultColumn = useMemo(() => {
    return {
      Filter: GlobalFilter,
    };
  }, []);

  const {
    headerGroups,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // console.log(columns)

  return (
    <div className="searches">
      <div className="search-and-pagination">
        <div className="search">
          <GlobalFilter />
          <select>
            <option>Pages:</option>
          </select>
        </div>
        <div className="pagination">
          <div className="pagination-page">
            <span>
              Page <strong></strong>{" "}
            </span>

            <span>
              <label htmlFor="goto">Go to page: </label>
              <input />
            </span>
          </div>
          <div className="buttons">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>

      <div className="table-group">
        <table>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr>
                {headerGroup.headers.map((column, index) => (
                  <th>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <img src={versBas} alt="down list" />
                        ) : (
                          <img src={versHaut} alt="down list" />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        {!Employees.length && (
          <div className="table-message">No data available in table</div>
        )}
      </div>
    </div>
  );
};
export default listeTable;
