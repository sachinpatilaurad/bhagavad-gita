import React, { useContext, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../context/AuthContext";
import { googleLogin, login } from "../services/api";

const Login = () => {
  const navigate = useNavigate();
  const { login: loginAction } = useContext(AuthContext);

  const googleClientIdPresent = useMemo(
    () => Boolean(import.meta.env.VITE_GOOGLE_CLIENT_ID),
    [],
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const data = await login({ email, password });
      loginAction(data);
      navigate("/");
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Login failed. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(210,105,63,0.15),_transparent_55%)]" />

      <div className="max-w-md w-full bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-amber-500/20 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-divine font-bold text-amber-50 drop-shadow-md">
            Welcome Back
          </h2>
          <p className="text-amber-200/60 font-body mt-2">
            Continue your spiritual journey
          </p>
        </div>

        {error ? (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-900/20 px-4 py-3 text-red-200 font-body text-sm">
            {error}
          </div>
        ) : null}

        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-bold text-amber-500/80 mb-2 font-divine uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-amber-500/30 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-amber-50 placeholder-amber-500/30 font-body"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-amber-500/80 mb-2 font-divine uppercase tracking-wider">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-amber-500/30 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-amber-50 placeholder-amber-500/30 font-body"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold font-divine uppercase tracking-widest py-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:from-amber-500 hover:to-amber-600 transition-all transform hover:-translate-y-1"
          >
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-amber-500/20" />
          <span className="text-amber-500/40 font-divine text-xs tracking-[0.35em] uppercase">
            or
          </span>
          <div className="h-px flex-1 bg-amber-500/20" />
        </div>

        <div className="flex justify-center">
          {googleClientIdPresent ? (
            <GoogleLogin
              theme="filled_black"
              shape="circle"
              onSuccess={async (credentialResponse) => {
                setError("");
                setSubmitting(true);
                try {
                  const data = await googleLogin({
                    credential: credentialResponse.credential,
                  });
                  loginAction(data);
                  navigate("/");
                } catch (err) {
                  const message =
                    err?.response?.data?.message ||
                    err?.message ||
                    "Google login failed. Please try again.";
                  setError(message);
                } finally {
                  setSubmitting(false);
                }
              }}
              onError={() => setError("Google login failed. Please try again.")}
            />
          ) : (
            <div className="text-center text-sm text-amber-500/40 font-body">
              Google Sign-In is not configured yet. Set{" "}
              <code className="font-mono text-amber-400">VITE_GOOGLE_CLIENT_ID</code>.
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-amber-200/60 font-body">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-amber-500 font-bold hover:text-amber-400 hover:underline transition-colors"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
