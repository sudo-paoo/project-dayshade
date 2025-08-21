import { login } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex justify-center">
      <form
        action={login}
        className="mt-96"
      >
        <input
          type="hidden"
          name="email"
          value="pd_superadmin@test.com"
        />
        <input
          type="hidden"
          name="password"
          value="Password123!"
        />
        <button type="submit">click to login</button>
      </form>
    </div>
  );
}
