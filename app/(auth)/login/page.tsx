import { Button } from "@/components/ui/button";
import { login } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex justify-center">
      <form action={login} className="mt-96">
        <input type="hidden" name="email" value="pd_superadmin@test.com" />
        <input type="hidden" name="password" value="Password123!" />
        <Button type="submit">click to login</Button>
      </form>
    </div>
  );
}
