import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function AddExpense() {
  const [token, setToken] = useState();
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else {
      setRedirect(true);
    }
  }, []);

  const [formData, setFormData] = useState({
    amount: "",
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/create-expense`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const data = await res.json();
        alert(data.message);
      }else{
        const data = await res.json();
        if(data.tokenStatus && data.tokenStatus == "expired"){
          localStorage.removeItem("token");
          navigate("/login")
        }
      }
    } catch (error) {}
    console.log("New expense:", formData);
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-md mx-auto mt-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Add New Expense
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            <Link
              href="/view-expense"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              ← view expenses
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Name of the expense
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  id="amount"
                  required
                  min="0"
                  step="0.01"
                  className="block w-full pl-7 pr-12 border border-gray-300 rounded-md py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
