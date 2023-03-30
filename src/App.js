import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/Navbar";
import AddForm from "./pages/AddForm";
import Table from "./pages/Table";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <AddForm />
          </div>
          <div className="col-md-8">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
