import { RepoCard } from "../../components";
import { useFetch } from "../../hooks/useFetch";

export type repoProps =
    {
        id?: number,
        name: string,
        visibility: string
    }

export function Home() {

    const [repositories, isFetching] = useFetch<repoProps>("https://api.github.com/users/NRayan/repos");

    return (
        <div>
            {
                isFetching ?
                    <h1 style={{ color: "#333" }}>Carregando...</h1>
                    :
                    repositories?.map(rep =>
                        <RepoCard key={rep.id} name={rep.name} visibility={rep.visibility} />
                    )
            }
        </div>
    )
}