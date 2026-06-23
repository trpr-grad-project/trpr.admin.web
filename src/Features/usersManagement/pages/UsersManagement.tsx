import UsersSearch from "../components/UsersSearch";
import UsersTable from "../components/UsersTable";
import Pagination from "../../../Components/UI/Pagination";
import { useGetUsersQuery } from "../../../store/api/usersApi";
import { useSearchParams } from "react-router-dom";

export default function UsersManagement() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;
  const search = searchParams.get("search") || "";

  const { data, isLoading, isError } = useGetUsersQuery({
    page: currentPage,
    pageSize,
    search: search || undefined,
  });

  function handleSearchChange(val: string) {
    setSearchParams({ page: "1", pageSize: String(pageSize), search: val });
  }

  function handlePageChange(page: number) {
    setSearchParams({ page: String(page), pageSize: String(pageSize), search });
  }

  function handlePageSizeChange(size: number) {
    setSearchParams({ page: "1", pageSize: String(size), search });
  }

  return (
    <section className="flex-1 flex flex-col">
      <header className="mb-10">
        <h2 className="text-on-surface mb-2 text-[40px] font-bold font-[Noto_Serif]">
          Users Management
        </h2>
        <p className="text-secondary font-['Noto_Serif'] italic text-sm">
          Manage user accounts, roles, and access permissions across the TouRA platform.
        </p>
      </header>

      <UsersSearch
        search={search}
        onSearchChange={handleSearchChange}
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
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </div>
          </>
        )}
      </section>
    </section>
  );
}