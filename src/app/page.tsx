import ThemeToggler from '../components/ThemeToggler';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="flex items-center flex-col sm:flex-row">
          <h1 className="text-cyan-500" >Hello Word!</h1>
          <div>
            <ThemeToggler />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Conteúdo Footer</p>
      </footer>
    </div>
  );
}
