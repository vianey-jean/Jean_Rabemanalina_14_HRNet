import ListeTable from "../../components/TableGroupe/ListeTable.jsx";

/**
 * @name EmployeeList
 * @description create employee list page with component table
 * @returns {JSX.Element}
 */


const list = () => {
  return (
    <main className="container center">
      <h2 className="form-title">Liste Employee</h2>
      <ListeTable />
    </main>
  );
};
export default list;
