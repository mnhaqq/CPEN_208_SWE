// pages/dashboard.tsx
import Layout from '../components/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto mt-8 p-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
          <p className="text-lg">Welcome back, Student!</p>
          <p className="text-gray-200">Here is a quick overview of your courses and activities.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Current Courses</h2>
            <ul className="text-gray-700">
              <li>Computer Networks</li>
              <li>Operating Systems</li>
              <li>Data Structures</li>
              <li>Database Systems</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Recent Assignments</h2>
            <ul className="text-gray-700">
              <li>Assignment 1 - Data Structures (Due: June 20)</li>
              <li>Assignment 2 - Operating Systems (Due: June 25)</li>
              <li>Assignment 3 - Database Systems (Due: July 1)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Upcoming Exams</h2>
            <ul className="text-gray-700">
              <li>Computer Networks - June 30</li>
              <li>Operating Systems - July 5</li>
              <li>Data Structures - July 10</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Recent Announcements</h2>
          <ul className="text-gray-700">
            <li>New project guidelines for Database Systems released.</li>
            <li>Guest lecture on Cloud Computing on June 18.</li>
            <li>Mid-term results for Data Structures are out.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Course Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-500 mb-2">Lecture Notes</h3>
              <p className="text-gray-700">Download the latest lecture notes for your courses.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-500 mb-2">Assignments</h3>
              <p className="text-gray-700">Submit your assignments here.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-blue-500 mb-2">Exam Resources</h3>
              <p className="text-gray-700">Find past papers and exam guidelines.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
