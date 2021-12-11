import { QueryClient, QueryClientProvider } from "react-query";
import { LeftNavBar } from "./Header/LeftNavBar";
import { TopNavBar } from "./Header/TopNavBar";
import { Dashboard } from "./Dashboard";
import { UserProviderByMe } from "./MyContext";

const queryClient = new QueryClient();

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <TopNavBar />
        <div className="flex">
          <LeftNavBar />
          {/* UseContext provider fournis le state qui est dedans à tous les component qu'il entoure*/}
          <UserProviderByMe>
            <Dashboard />
          </UserProviderByMe>
        </div>
      </QueryClientProvider>
    </main>
  );
}

export default App;
