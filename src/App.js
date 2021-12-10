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
        {/* UseContext provider fournis le state qui est dedans à tous les component qu'il entoure*/}
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
