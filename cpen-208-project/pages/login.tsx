// pages/login.tsx
import Layout from '../components/Layout';

const Login = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
