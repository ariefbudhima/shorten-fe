// src/app/login/page.tsx
import GoogleSignInButton from "../components/GoogleSignInButton";
import ParticlesBackground from "../components/ParticlesBackground";

export default function LoginFile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Abstract gradient shapes in background for added visual interest */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-l from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/10">
          <h2 className="text-4xl font-bold mb-2 text-center  text-white animate-fade-in">Sign In</h2>
          <p className="text-center text-gray-300 mb-8 ">Love your work!</p>
          
          <form className="space-y-5">
            <div className="group">
              <input
                type="text"
                placeholder="Username / Email"
                className="w-full p-4 bg-white/5 border border-gray-500/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400  transition-all"
              />
            </div>
            
            <div className="group">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 bg-white/5 border border-gray-500/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400  transition-all"
              />
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 rounded bg-white/5 border-gray-300 text-violet-600 focus:ring-violet-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-300 ">Remember me</label>
              </div>
              <a
                href="#"
                className="text-sm text-violet-400 hover:text-violet-300  transition"
              >
                Forgot Password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full py-4 text-white font-medium rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition duration-300 shadow-lg shadow-violet-500/20  relative overflow-hidden"
            >
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 hover:opacity-20 transition-opacity"></div>
            </button>
          </form>
          
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600/30"></div>
            <span className="mx-4 text-gray-400 text-sm ">or continue with</span>
            <div className="flex-grow border-t border-gray-600/30"></div>
          </div>
          
          <GoogleSignInButton />
          
          <p className="mt-8 text-center text-sm text-gray-400">
            Don't have an account? <a href="#" className="text-violet-400 hover:text-violet-300 transition">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}