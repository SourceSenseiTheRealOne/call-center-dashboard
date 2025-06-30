import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left side with image for larger screens */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="flex h-full items-center justify-center bg-primary-700 p-12">
          <div className="max-w-xl text-white">
            <div className="mb-8 flex items-center">
              <div className="mr-2 h-10 w-10 rounded-md bg-white text-primary-700 flex items-center justify-center">
                <Phone size={24} />
              </div>
              <h1 className="text-2xl font-bold">AI Call Center</h1>
            </div>
            <h2 className="mb-6 text-4xl font-bold leading-tight">
              Revolutionize your customer interactions with AI-powered calling
            </h2>
            <p className="text-lg opacity-90">
              Manage your AI agents, predefined messages, and workflows all in one place.
              Automate routine calls while maintaining personalized customer experiences.
            </p>
          </div>
        </div>
      </div>
      
      {/* Right side with login form */}
      <div className="w-full px-4 lg:w-1/2">
        <div className="flex h-full flex-col items-center justify-center py-12">
          <div className="w-full max-w-md space-y-8">
            {/* Logo for mobile */}
            <div className="flex items-center justify-center lg:hidden">
              <div className="h-12 w-12 rounded-md bg-primary-600 text-white flex items-center justify-center">
                <Phone size={28} />
              </div>
              <h1 className="ml-3 text-2xl font-bold text-gray-900">AI Call Center</h1>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Use admin@example.com / admin123 for admin access<br />
                Use user@example.com / user123 for user access
              </p>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="rounded-md bg-error-50 p-3 text-sm text-error-700">
                  {error}
                </div>
              )}
              
              <div className="space-y-4 rounded-md">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input mt-1 block w-full"
                    placeholder="name@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input mt-1 block w-full"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <div className="text-sm">
                  <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;