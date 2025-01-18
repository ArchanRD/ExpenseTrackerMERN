import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

export default function ViewExpense() {
  const [token, setToken] = useState();
  const [redirect, setRedirect] = useState(false);
  const [expenses, setExpenses] = useState();
  const [totalExpenses, settotalExpenses] = useState(0);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (token && userId) {
        setToken(token);

        const fetchData = async () => {
          const res = await fetch(`http://localhost:3000/fetch/${userId}`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (res.ok) {
            const data = await res.json();
            setExpenses(data.expenses);

            let totalSum = data.expenses.reduce(
              (total, currentValue) => (total += currentValue.cost),
              0
            );
            settotalExpenses(totalSum);
          } else {
            alert("Error fetching expenses");
          }
        };
        fetchData();
      } else {
        setRedirect(true);
      }
  }, [refresh]);

  const handleDelete = async (expenseId) => {
    const res = await fetch(`http://localhost:3000/delete/${expenseId}`, {
      method: "delete",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      setRefresh(refresh + 1);
    }
  };

  const handleUpdate = async (expenseId) => {
    const res = await fetch(`http://localhost:3000/delete/${expenseId}`, {
      method: "delete",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      setRefresh(refresh + 1);
    }
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-4xl mx-auto mt-16">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
              Expenses
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Track and manage your expenses
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              to="/add-expense"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Expense
            </Link>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Expenses
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      ${totalExpenses}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expenses List */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {expenses &&
              expenses.map((expense) => (
                <li key={expense._id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <p className="text-md font-medium text-gray-600 truncate">
                          {expense.expenseName}
                        </p>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="text-sm text-gray-500">${expense.cost}</p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="mt-2 flex gap-2 items-center text-sm text-gray-500 sm:mt-0">
                        <button
                          className="text-white bg-red-500 py-1 px-3 rounded hover:bg-red-700"
                          onClick={() => {
                            // Add your delete logic here
                            handleDelete(expense._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {expenses && expenses.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-500">No expenses recorded yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
