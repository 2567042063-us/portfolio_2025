import LoginForm from "./login-form";

export default function Login() {
  return (
    <main className="flex flex-col items-center dark:bg-slate-800 sm:min-h-screen">
      <div className="flex min-h-full w-full flex-1 flex-col justify-center px-6 pt-10 sm:pt-0 lg:px-8">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
          <a className="mx-auto h-10 w-auto text-2xl font-semibold" href="/">
            <span className="mb-20 animate-linear bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_auto] bg-clip-text text-5xl font-bold text-transparent">
              l00000go
            </span>
          </a>
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight">
            Login Form
          </h2>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
