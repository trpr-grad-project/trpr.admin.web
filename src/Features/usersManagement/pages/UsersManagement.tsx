import { UserRoundPlus } from "lucide-react";
import UsersSearch from "../components/UsersSearch";
import UsersTable from "../components/UsersTable";
import Pagination from "../../../Components/UI/Pagination";
import { useState } from "react";
import { useGetUsersQuery } from "../../../store/api/usersApi";

export default function UsersManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useGetUsersQuery({
    page: currentPage,
    pageSize,
    search: search || undefined,
  });

  return (
    <section className="flex-1 flex flex-col">
      <header className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-on-surface mb-2 text-[40px] font-bold font-[Noto_Serif]">
            Users Management
          </h2>
          <p className="text-secondary font-['Noto_Serif'] italic text-sm">
            Manage portal users, assign administrative roles, and monitor
            account status across the TouRA ecosystem.
          </p>
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-lg flex items-center gap-2 font-bold shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.02] transition-all cursor-pointer">
          <UserRoundPlus />
          <span>Add New User</span>
        </button>
      </header>

      <UsersSearch
        search={search}
        onSearchChange={(val) => {
          setSearch(val);
          setCurrentPage(1);
        }}
      />

      <section className="bg-surface-container-lowest rounded-xl shadow-2xl shadow-secondary/5 border border-outline-variant/20 overflow-hidden">
        {isLoading && (
          <div className="flex items-center justify-center py-20 text-secondary">
            Loading...
          </div>
        )}

        {isError && (
          <div className="flex items-center justify-center py-20 text-error">
            Something went wrong. Please try again.
          </div>
        )}

        {data && (
          <>
            <UsersTable users={data.items} />
            <div className="px-8 py-6 bg-surface-container-low rounded-b-xl">
              <Pagination
                page={data.page}
                pageSize={pageSize}
                totalCount={data.totalItems}
                onPageChange={setCurrentPage}
                onPageSizeChange={(size) => {
                  setPageSize(size);
                  setCurrentPage(1);
                }}
              />
            </div>
          </>
        )}
      </section>
    </section>
  );
}