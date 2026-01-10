"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "@/components/ui/Input";
import { Google } from "@/components/ui/GoogleAuthButton";
import { signIn } from "next-auth/react";
import { GitHub } from "@/components/ui/GithubAuthButton";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Something went wrong");
      setLoading(false);
      return;
    }

    router.push("/login");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center space-y-1">
        <h1 className="text-xl font-semibold">Create an account</h1>
        <p className="text-sm opacity-70">
          Start building your second brain with Memoir.
        </p>
      </div>

      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      <div className="flex w-full gap-2">
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="
            flex items-center justify-center gap-2 w-full
            border border-[color:var(--color-border)]
            rounded-lg
            font-medium
            cursor-pointer
            hover:bg-[var(--color-surface)]
            p-2
          "
        >
          <Google />
          <span>Google</span>
        </button>

        <button
          type="button"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          className="
            flex items-center justify-center gap-2 w-full
            border border-[color:var(--color-border)]
            rounded-lg
            font-medium
            cursor-pointer
            hover:bg-[var(--color-surface)]
            p-2
          "
        >
          <GitHub />
          <span>GitHub</span>
        </button>
      </div>

      {/* OR Divider */}
      <div className="flex items-center gap-3">
        <span className="flex-1 h-px bg-[var(--color-border)]" />
        <span className="text-xs uppercase opacity-60">or</span>
        <span className="flex-1 h-px bg-[var(--color-border)]" />
      </div>

      <Input
        label="Name"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        label="Email"
        placeholder="eg. john@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          bg-[color:var(--color-contrast)]
          text-[color:var(--color-text-muted)]
          py-3
          rounded-lg
          font-medium
          hover:opacity-90
          disabled:opacity-60
          cursor-pointer
          disabled:cursor-not-allowed
        "
      >
        {loading ? "Creating account..." : "Sign Up"}
      </button>

      <p className="text-sm text-center opacity-70">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </p>
    </form>
  );
}
