import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login, register } from "../services/api";

const Register = () => {
  const navigate = useNavigate();
  const { login: loginAction } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    try {
      await register({ name, email, password });
      // Backend /register returns only a message, so we login immediately for better UX.
      const data = await login({ email, password });
      loginAction(data);
      navigate("/");
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Registration failed. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(210,105,63,0.15),_transparent_55%)]" />

      <div className="max-w-md w-full bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-amber-500/20 relative z-10 my-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-divine font-bold text-amber-50 drop-shadow-md">
            Create Account
          </h2>
          <p className="text-amber-200/60 font-body mt-2">
            Begin your spiritual journey
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
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-amber-500/30 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all text-amber-50 placeholder-amber-500/30 font-body"
              placeholder="Your name"
            />
          </div>

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
            <p className="mt-2 text-xs text-amber-500/40 font-body">
              Minimum 6 characters.
            </p>
          </div>

          <div>
            <label className="block text-sm font-bold text-amber-500/80 mb-2 font-divine uppercase tracking-wider">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {submitting ? "Creating account…" : "Create Account"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-amber-200/60 font-body">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-amber-500 font-bold hover:text-amber-400 hover:underline transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
