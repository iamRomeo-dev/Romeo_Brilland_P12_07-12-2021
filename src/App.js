import { QueryClient, QueryClientProvider } from "react-query";
import { Welcome } from "./Welcome";
import { LeftNavBar } from "./Header/LeftNavBar";
import { TopNavBar } from "./Header/TopNavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <main class="flex flex-col">
      <QueryClientProvider client={queryClient}>
        <TopNavBar />
        <div class="flex">
          <LeftNavBar />
          <Welcome />
        </div>
      </QueryClientProvider>
    </main>
  );
}

export default App;
