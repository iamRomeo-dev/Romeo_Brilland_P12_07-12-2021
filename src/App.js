import { QueryClient, QueryClientProvider } from "react-query";
import { LeftNavBar } from "./Header/LeftNavBar";
import { TopNavBar } from "./Header/TopNavBar";
import { Dashboard } from "./Dashboard/Dashboard";
import { UserProviderByMe } from "./MyContext";

const queryClient = new QueryClient();

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <UserProviderByMe>
          <TopNavBar />
          <div className="flex">
            <LeftNavBar />
            <Dashboard />
          </div>
        </UserProviderByMe>
      </QueryClientProvider>
    </main>
  );
}

export default App;
