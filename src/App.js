import { QueryClient, QueryClientProvider } from "react-query";
import { LeftNavBar } from "./Header/LeftNavBar";
import { TopNavBar } from "./Header/TopNavBar";
import { Dashboard } from "./Dashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <main class="flex flex-col">
      <QueryClientProvider client={queryClient}>
        <TopNavBar />
        <div class="flex">
          <LeftNavBar />
          <Dashboard />
        </div>
      </QueryClientProvider>
    </main>
  );
}

export default App;
