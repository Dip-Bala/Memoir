"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { Google } from "@/components/ui/GoogleAuthButton";
import { GitHub } from "@/components/ui/GithubAuthButton";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center">Loading...</p>;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (!res) {
      setError("Something went wrong. Please try again.");
      return;
    }

    if (res.error) {
      setError("Invalid email or password.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-xl font-semibold">Welcome back</h1>
        <p className="text-sm opacity-70">
          Log in to access and organize your saved knowledge.
        </p>
      </div>

      {/* OAuth Buttons */}
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

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      {/* Credentials */}
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

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          bg-[color:var(--color-text)]
          text-[color:var(--color-bg)]
          py-3
          rounded-lg
          font-medium
          hover:opacity-90
          cursor-pointer
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      {/* Footer */}
      <p className="text-sm text-center opacity-70">
        Don’t have an account?{" "}
        <Link href="/register" className="underline">
          Register
        </Link>
      </p>
    </form>
  );
}
