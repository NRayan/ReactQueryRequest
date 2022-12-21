import { repoProps } from "../../screens/home";
import "./styles.css";

export function RepoCard({ name, visibility }: repoProps) {

    return (
        <div className="repoContainer">
            <strong>{name}</strong>
            <p>{visibility}</p>
        </div>
    )
}