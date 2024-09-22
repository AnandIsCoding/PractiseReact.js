import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      

      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-100 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#dashboard" className="block p-2 rounded-lg hover:bg-gray-200">Dashboard</a>
            </li>
            <li>
              <a href="#courses" className="block p-2 rounded-lg hover:bg-gray-200">My Courses</a>
            </li>
            <li>
              <a href="#assignments" className="block p-2 rounded-lg hover:bg-gray-200">Assignments</a>
            </li>
            <li>
              <a href="#grades" className="block p-2 rounded-lg hover:bg-gray-200">Grades</a>
            </li>
            <li>
              <a href="#settings" className="block p-2 rounded-lg hover:bg-gray-200">Settings</a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-50">
          <h2 className="text-3xl font-bold mb-4">Welcome, Student!</h2>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Total Courses</h3>
              <p className="text-4xl font-bold text-blue-600">5</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Pending Assignments</h3>
              <p className="text-4xl font-bold text-blue-600">2</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Overall Grade</h3>
              <p className="text-4xl font-bold text-blue-600">A</p>
            </div>
          </div>

          {/* Courses Section */}
          <section className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">My Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold">Course 1</h4>
                <p className="text-gray-600">Description of course 1.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold">Course 2</h4>
                <p className="text-gray-600">Description of course 2.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-bold">Course 3</h4>
                <p className="text-gray-600">Description of course 3.</p>
              </div>
            </div>
          </section>

          {/* Assignments Section */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Pending Assignments</h3>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-xl font-bold">Assignment 1</h4>
              <p className="text-gray-600">Due Date: 25th August 2024</p>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg">Submit</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
